// Available API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#instance_methods

import { Literal } from '../../parser/ast-types'
import { IllegalArgumentError, NotImplementedError } from '../../utils/errors'
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
  double: 8
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
    const temp = this.stackIndex

    // We want our variables to be word aligned
    this.stackIndex += align(bytes)

    if (this.stackIndex >= this.heapIndex) {
      throw new StackOverflow()
    }

    return temp
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

  getValue(memAdd: MemoryAddress): number {
    const byteOffset = memAdd.location

    switch (memAdd.typeSpecifier) {
      case 'int':
        return this.data.getInt32(byteOffset)

      case '_Bool':
        return this.data.getInt8(byteOffset)

      default:
        throw new NotImplementedError('Other types are not yet implemented')
    }
  }

  setValue(memAdd: MemoryAddress, value: Literal): void {
    const byteOffset = memAdd.location

    switch (memAdd.typeSpecifier) {
      case 'int':
        return this.data.setInt32(byteOffset, value.value)

      case '_Bool':
        return this.data.setInt8(byteOffset, value.value)

      default:
        throw new NotImplementedError('Other types are not yet implemented')
    }
  }

  viewMemory(): void {
    console.log(this.data)
  }
}
