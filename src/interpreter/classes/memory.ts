// Available API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#instance_methods

import { Literal, PrimitiveTypeSpecifier, StringLiteral } from '../../parser/ast-types'
import { isArrayType, isPrimitiveType } from '../../types'
import Decimal from '../../utils/decimal'
import { IllegalArgumentError, NotImplementedError, SetVoidValueError } from '../../utils/errors'
import { HeapOverflow, StackOverflow } from '../errors'
import { MemoryAddress } from '../interpreter-types'

export const WORD_SIZE = 4 // bytes
export const DEFAULT_STACK_POINTER_START = 8

/**
 * Round the input up to the next multiple of WORD_SIZE.
 *
 * This is to ensure alignment of ints in the memory.
 * @param bytes
 */
function align(bytes: number) {
  return Math.ceil(bytes / WORD_SIZE) * WORD_SIZE
}

/**
 * This class encapsulates the abstraction of a stack and heap.
 *
 * The stack grows towards the heap, and the heap grows towards the stack. The text
 * portion of the memory (for string interning) is situated right after the heap.
 */
export class Memory {
  capacity: number

  stackIndex: number // The first available position on the stack index
  heapIndex: number // Index of the last __allocated__ position on the heap
  textIndex: number // Index of the first available position in the text segment

  data: DataView

  stringLocation: Map<string, number>

  constructor(sizeBytes?: number, stringPoolSize?: number) {
    const sizeOfStackHeap = sizeBytes ?? 1e7
    this.capacity = sizeOfStackHeap + (stringPoolSize ?? 1e4)

    const buffer = new ArrayBuffer(this.capacity)
    this.data = new DataView(buffer)

    this.stackIndex = DEFAULT_STACK_POINTER_START
    this.heapIndex = sizeOfStackHeap // Heap grows backwards, towards the stack

    // The text segment begins immediately after the heap, so it starts at index sizeOfStackHeap
    this.textIndex = sizeOfStackHeap

    this.stringLocation = new Map()
  }

  /**
   * Allocates a number of bytes on the stack.
   *
   * @param bytes The number of bytes to allocate
   * @returns The address to the bytes allocated
   */
  allocateStack(bytes: number): number {
    if (bytes <= 0) {
      throw new IllegalArgumentError('Provided argument should be positive.')
    }
    const allocatedMemoryAddress = this.stackIndex

    // We want our variables to be word aligned
    this.stackIndex += align(bytes)

    if (this.stackIndex >= this.heapIndex) {
      throw new StackOverflow()
    }

    return allocatedMemoryAddress
  }

  reinstateStackPointer(index: number): void {
    if (index < 8) {
      throw new IllegalArgumentError()
    }
    this.stackIndex = index
  }

  /**
   * Allocates a specified number of bytes on the heap.
   *
   * One additional word before the returned pointer will be used to keep
   * track of the size of the allocated region of memory.
   *
   * @param bytes The number of bytes to allocate.
   * @returns The address to the bytes allocated, -1 if there is not enough space
   */
  allocateHeap(bytes: number): number {
    if (bytes <= 0) {
      throw new IllegalArgumentError('Provided argument should be positive.')
    }

    const totalSize = align(bytes) + WORD_SIZE

    if (this.stackIndex >= this.heapIndex - totalSize) {
      // There isn't enough space.
      return -1
    }

    this.heapIndex -= totalSize
    this.data.setUint32(this.heapIndex, bytes)

    return this.heapIndex + WORD_SIZE
  }

  getValue(memAdd: MemoryAddress): Decimal {
    const byteOffset = memAdd.location

    const typeToGetDataFunction: {
      [typeSpecifier in PrimitiveTypeSpecifier]: Function
    } = {
      void: () => {
        throw new SetVoidValueError()
      },
      _Bool: this.data.getInt8,
      short: this.data.getInt16,
      'unsigned short': this.data.getUint16,
      signed: this.data.getInt32,
      int: this.data.getInt32,
      'unsigned int': this.data.getUint32,
      unsigned: this.data.getUint32,
      char: this.data.getInt8,
      'unsigned char': this.data.getUint8,
      long: this.data.getInt32,
      'unsigned long': this.data.getUint32,
      'long long': (byteOffset: number) => this.data.getBigInt64(byteOffset),
      'unsigned long long': (byteOffset: number) => this.data.getBigUint64(byteOffset),
      float: this.data.getFloat32,
      double: this.data.getFloat64,
      'long double': () => {
        throw new NotImplementedError('long double is not implemented yet')
      }
    }

    let getDataFunction = undefined
    if (isPrimitiveType(memAdd.typeSpecifier)) {
      getDataFunction = typeToGetDataFunction[memAdd.typeSpecifier as PrimitiveTypeSpecifier]
    } else if (isArrayType(memAdd.typeSpecifier)) {
      // It should act like a pointer - The value is the
      // location of the first element of the array.
      return new Decimal(memAdd.location)
    } else {
      // This is a pointer.
      getDataFunction = this.data.getUint32
    }
    return new Decimal(getDataFunction.call(this.data, byteOffset).toString())
  }

  setValue(memAdd: MemoryAddress, value: Literal): void {
    const byteOffset = memAdd.location

    // This object/map is meant for primitive types (i.e. non-pointers).
    const typeToSetDataFunction: {
      [typeSpecifier in PrimitiveTypeSpecifier]: Function
    } = {
      void: () => {
        throw new SetVoidValueError()
      },
      _Bool: this.data.setInt8,
      short: this.data.setInt16,
      'unsigned short': this.data.setUint16,
      signed: this.data.setInt32,
      int: this.data.setInt32,
      'unsigned int': this.data.setUint32,
      unsigned: this.data.setUint32,
      char: this.data.setInt8,
      'unsigned char': this.data.setUint8,
      long: this.data.setInt32,
      'unsigned long': this.data.setUint32,
      'long long': (byteOffset: number, numberValue: number) =>
        this.data.setBigInt64(byteOffset, BigInt(numberValue)),
      'unsigned long long': (byteOffset: number, numberValue: number) =>
        this.data.setBigUint64(byteOffset, BigInt(numberValue)),
      float: this.data.setFloat32,
      double: this.data.setFloat64,
      'long double': () => {
        throw new NotImplementedError('long double is not implemented yet')
      }
    }

    let setDataFunction = undefined
    if (isPrimitiveType(memAdd.typeSpecifier)) {
      setDataFunction = typeToSetDataFunction[memAdd.typeSpecifier as PrimitiveTypeSpecifier]
    } else {
      // This is a pointer.
      setDataFunction = this.data.setUint32
    }
    return setDataFunction.call(this.data, byteOffset, value.value)
  }

  /**
   * Implementation for string interning.
   *
   * If the StringLiteral is not interned yet, then intern
   * @param str
   */
  stringLiteralToLiteral(str: StringLiteral): Literal {
    const actualString = str.string
    let location = this.stringLocation.get(actualString)
    if (location === undefined) {
      location = this.textIndex

      // String has not been interned before. Insert into first available
      // spot in the Text segment of the memory
      for (let i = 0; i < actualString.length; i++) {
        this.data.setUint8(this.textIndex++, actualString.charCodeAt(i))
      }

      // Set NULL terminator
      this.data.setUint8(this.textIndex++, 0)

      // Save location of string in Map
      this.stringLocation.set(actualString, location)
    }

    // String has been interned before! Return a pointer to the appropriate location.

    return {
      type: 'Literal',
      typeSpecifier: { ptrTo: 'char' },
      value: new Decimal(location)
    }
  }

  // Used for direct assignment of String Literals to char arrays
  assignStringLiteralToArray(string: string, location: number): void {
    for (let i = 0; i < string.length; i++) {
      this.data.setUint8(location + i, string.charCodeAt(i))
    }
  }

  viewMemory(): void {
    console.log(this.data)
  }
}
