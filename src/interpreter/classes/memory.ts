// Available API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#instance_methods

import { Literal, PrimitiveTypeSpecifier } from '../../parser/ast-types'
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

// Inheritence doesn't feel like the best way to go about this
// But it reduces the need to create lots of redundant methods just to access the DataView
export class Memory {
  stackIndex: number // The first available position on the stack index
  heapIndex: number // Index of the last allocated position on the heap

  data: DataView

  constructor(size_bytes?: number) {
    const buffer = new ArrayBuffer(size_bytes ?? 1e7) // Default 10 MB of storage
    this.data = new DataView(buffer)

    this.stackIndex = DEFAULT_STACK_POINTER_START
    this.heapIndex = this.data.byteLength // Heap grows backwards
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

    const totalSize = align(bytes) + 4

    if (this.stackIndex >= this.heapIndex - totalSize) {
      // There isn't enough space.
      return -1
    }

    this.heapIndex -= totalSize
    this.data.setUint32(this.heapIndex, bytes)

    return this.heapIndex + 1
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
    if (typeof memAdd.typeSpecifier === 'string') {
      // This is a primitive type.
      getDataFunction = typeToGetDataFunction[memAdd.typeSpecifier]
    } else if (memAdd.typeSpecifier.hasOwnProperty('arrOf')) {
      // This is an array type. It should act like a pointer - The value is the
      // location of the first element of the array.
      return new Decimal(memAdd.location)
    } else {
      // This is a pointer.
      getDataFunction = this.data.getUint32
    }
    return new Decimal(getDataFunction.call(this.data, byteOffset))
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
    if (typeof memAdd.typeSpecifier === 'string') {
      // This is a primitive type.
      setDataFunction = typeToSetDataFunction[memAdd.typeSpecifier]
    } else {
      // This is a pointer.
      setDataFunction = this.data.setUint32
    }
    return setDataFunction.call(this.data, byteOffset, value.value)
  }

  viewMemory(): void {
    console.log(this.data)
  }
}
