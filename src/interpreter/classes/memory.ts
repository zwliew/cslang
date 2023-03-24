// Available API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#instance_methods

import Decimal from '../../utils/decimal'

import { Literal, TypeSpecifier } from '../../parser/ast-types'
import { IllegalArgumentError, NotImplementedError, SetVoidValueError } from '../../utils/errors'
import { HeapOverflow, StackOverflow } from '../errors'
import { MemoryAddress } from '../interpreter-types'

const WORD_SIZE = 4 // bytes

// Size of types in bytes

export const sizeOfTypes = {
  char: 1,
  short: 2,
  int: 4,
  long: 4,
  float: 4,
  double: 8,
  longdouble: 16
}

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

    this.stackIndex = 8
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
   * @param bytes The number of bytes to allocate.
   * @returns The address to the bytes allocated
   */
  allocateHeap(bytes: number): number {
    if (bytes <= 0) {
      throw new IllegalArgumentError('Provided argument should be positive.')
    }

    this.heapIndex -= align(bytes)
    if (this.stackIndex >= this.heapIndex) {
      throw new HeapOverflow()
    }

    return this.heapIndex
  }

  getValue(memAdd: MemoryAddress): Decimal {
    const byteOffset = memAdd.location

    const typeToGetDataFunction: { [typeSpecifier in TypeSpecifier]: Function } = {
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

    return new Decimal(
      typeToGetDataFunction[memAdd.typeSpecifier].call(this.data, byteOffset).toString()
    )
  }

  setValue(memAdd: MemoryAddress, value: Literal): void {
    const byteOffset = memAdd.location

    const typeToSetDataFunction: { [typeSpecifier in TypeSpecifier]: Function } = {
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

    return typeToSetDataFunction[memAdd.typeSpecifier].call(this.data, byteOffset, value.value)
  }

  viewMemory(): void {
    console.log(this.data)
  }
}