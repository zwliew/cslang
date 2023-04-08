// Available API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView#instance_methods

import { Literal, PrimitiveTypeSpecifier, StringLiteral } from '../../parser/ast-types'
import { isArrayType, isPrimitiveType } from '../../types'
import Decimal from '../../utils/decimal'
import {
  IllegalArgumentError,
  NotImplementedError,
  RuntimeError,
  SetVoidValueError
} from '../../utils/errors'
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
 * Check if a number is a power of two.
 *
 * @param n The number to check.
 * @returns A boolean representing whether n is a power of two.
 */
function isPowerOfTwo(n: number): boolean {
  // Source: https://stackoverflow.com/questions/30924280
  return n != 0 && !(n & (n - 1))
}

function roundUpToPowerOfTwo(n: number): number {
  return 2 ** Math.ceil(Math.log2(n))
}

/**
 * This class encapsulates the abstraction of a stack and heap.
 *
 * The stack, heap and text segments are placed as so:
 *
 * +----------+
 * |  Stack   |
 * +----------+
 * |          |
 * |          |
 * |   Heap   |
 * |          |
 * |          |
 * +----------+
 * |   Text   |
 * +----------+
 *
 * In this memory abstraction, the size of each segment has a limit, which
 * is passed into the constructor.
 *
 * The stack pointer grows towards the heap, while the heap uses a buddy
 * allocator to manage the heap memory.
 */
export class Memory {
  stackSize: number
  heapSize: number
  textSize: number
  startOfText: number

  data: DataView

  stackIndex: number // The first available position on the stack index
  textIndex: number // Index of the first available position in the text segment

  stringLocation: Map<string, number>

  // Heap allocation fields - See `allocateHeap` method for more information
  buddyAllocationBlocks: Array<Set<number>>
  blockIndexMap: Map<number, number>

  /**
   * Initialize the memory abstraction for the interpreter.
   *
   * The sizes provided have to be a power of two.
   *
   * @param stackSize The size of the stack.
   * @param heapSize The size of the heap.
   * @param textSize The size of the text segment.
   */
  constructor(stackSize: number, heapSize: number, textSize: number) {
    if (stackSize <= 0 || heapSize <= 0 || textSize <= 0) {
      throw new IllegalArgumentError('The size of the memory segments must be positive!')
    }

    if (!isPowerOfTwo(stackSize) || !isPowerOfTwo(heapSize) || !isPowerOfTwo(textSize)) {
      throw new IllegalArgumentError('The sizes of the memory segments have to be a power of two!')
    }

    this.stackSize = stackSize
    this.heapSize = heapSize
    this.textSize = textSize
    this.startOfText = stackSize + heapSize

    const totalCapacity = stackSize + heapSize + textSize

    const buffer = new ArrayBuffer(totalCapacity)
    this.data = new DataView(buffer)

    this.stackIndex = DEFAULT_STACK_POINTER_START

    // The text segment begins immediately after the heap
    this.textIndex = this.startOfText
    this.stringLocation = new Map()

    // Initialize the buddy allocator
    const sizeOfAllocationArray = 32 - Math.clz32(heapSize) // Equivalent to log2(heapSize) + 1, as the size is a power of 2
    this.buddyAllocationBlocks = []
    for (let i = 0; i < sizeOfAllocationArray; i++) {
      this.buddyAllocationBlocks[i] = new Set()
    }

    // Since the heap is right after the stack, the index
    // of the start of the heap is the size of the stack
    this.buddyAllocationBlocks.at(-1)!.add(stackSize)
    this.blockIndexMap = new Map()
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

  /***************
   *    STACK
   ***************/

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

    if (this.stackIndex >= this.stackSize) {
      throw new StackOverflow()
    }

    return allocatedMemoryAddress
  }

  /**
   * Used upon exit from an environment.
   *
   * The stack pointer will be reinstantiated to before
   * the environment was created, so that the allocated space
   * can be reused.
   *
   * @param index The original position of the stack pointer.
   */
  reinstateStackPointer(index: number): void {
    if (index < DEFAULT_STACK_POINTER_START) {
      throw new IllegalArgumentError()
    }
    this.stackIndex = index
  }

  /*************
   *    HEAP
   *************/

  /**
   * Allocates a specified number of bytes on the heap.
   *
   * Buddy allocation is used here. Essentially,
   * https://en.wikipedia.org/wiki/Buddy_memory_allocation
   *
   * this.buddyAllocationBlocks is an array of "linked list" of blocks,
   * where buddyAllocationBlocks[i] contain blocks of size 2 ** i.
   *
   * The minimal allocable block size is 4 bytes (due to our `align` function),
   * while the maximal allocable block size is the size of the heap.
   *
   * The index of the allocated block is stored in the `blockIndexMap` map, where
   * 2 ** index is the size of the block. In other words, the block would
   * be stored in buddyAllocationBlocks[index].
   *
   * @param bytes The number of bytes to allocate.
   * @returns The address to the bytes allocated, -1 if there is not enough space
   */
  allocateHeap(bytes: number): number {
    if (bytes <= 0) {
      throw new IllegalArgumentError('Provided argument should be positive.')
    }

    const totalSize = align(roundUpToPowerOfTwo(bytes))

    let i = Math.log2(totalSize)

    // Check if there is a block of the approrpriate size available
    if (this.buddyAllocationBlocks[i].size == 0) {
      // No available free blocks of the current size. Request for more
      const ableToGetMoreBlocks = this.requestSplitBlocks(i + 1)
      if (!ableToGetMoreBlocks) {
        // Not enough heap space
        return -1
      }
    }

    // At this point, we will have some free blocks available
    const addr = this.buddyAllocationBlocks[i].values().next().value
    this.blockIndexMap.set(addr, i)
    this.buddyAllocationBlocks[i].delete(addr)

    return addr
  }

  /**
   * Private helper method to get more free blocks for
   * this.buddyAllocationBlock[idx - 1].
   *
   * For example, if A[i] doesn't have any blocks, it should call
   * requestSplitBlocks(i + 1) to split blocks from A[i + 1].
   *
   * @param idx Index of the allaocation array
   * @returns A boolean indicating whether the split was successful
   */
  requestSplitBlocks(idx: number): boolean {
    if (idx >= this.buddyAllocationBlocks.length) {
      // No more blocks to split.
      return false
    }

    if (this.buddyAllocationBlocks[idx].size == 0) {
      // Not enough free blocks of the current size. Request upwards.
      if (!this.requestSplitBlocks(idx + 1)) {
        // Above request couldn't provide more blocks either. Stop
        return false
      }
    }

    // There are free blocks! Split it and place them in the lower index.
    const addr = this.buddyAllocationBlocks[idx].values().next().value
    this.buddyAllocationBlocks[idx].delete(addr)

    this.buddyAllocationBlocks[idx - 1].add(addr)
    this.buddyAllocationBlocks[idx - 1].add(this.buddyOfMemory(addr, idx - 1))
    return true
  }

  /**
   * Deallocate the memory.
   *
   * @param addr The memory address to be allocated.
   */
  heapFree(addr: number): void {
    let blockIndex = this.blockIndexMap.get(addr)
    if (blockIndex === undefined) {
      throw new RuntimeError('Free is utilized on a non-allocated memory address.')
    }

    let buddyAddr = this.buddyOfMemory(addr, blockIndex)

    // While the buddy exists in the current level, merge the blocks and insert into next level
    while (this.buddyAllocationBlocks[blockIndex].has(buddyAddr)) {
      this.buddyAllocationBlocks[blockIndex].delete(buddyAddr)
      blockIndex++
      buddyAddr = this.buddyOfMemory(addr, blockIndex)
    }

    this.buddyAllocationBlocks[blockIndex].add(addr)
    this.blockIndexMap.delete(addr)
  }

  buddyOfMemory(addr: number, idx: number): number {
    const normalizedAddress = addr - this.stackSize
    return (normalizedAddress ^ (1 << idx)) + this.stackSize
  }

  /***************
   *     TEXT
   ***************/

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
