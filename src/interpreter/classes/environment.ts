import { RedeclarationError, UndeclaredIdentifierError } from '../errors'
import { Address, FunctionStackAddress, MemoryAddress } from '../interpreter-types'
import { DEFAULT_STACK_POINTER_START, Memory } from './memory'

type Frame = Map<string, Address>

export class Environment {
  // The environment is a linked list of frames
  frame: Frame
  parent: Environment | undefined

  // Initial position of the stack pointer of the memory
  // So that we can reinstate the stack pointer and reuse
  // portions of the memory
  stackPointer: number

  // Constructor for creating a new global frame
  constructor(stackPointer?: number, values?: Frame) {
    this.parent = undefined
    this.frame = values ?? new Map()
    this.stackPointer = stackPointer ?? DEFAULT_STACK_POINTER_START
  }

  // Get the value of the name in the current environment
  get(identifier: string): Address {
    const value = this.frame.get(identifier)
    if (value !== undefined) {
      return value
    }

    if (this.parent !== undefined) {
      return this.parent.get(identifier)
    }

    throw new UndeclaredIdentifierError(identifier)
  }

  // Set the value of the name in the current environment
  set(identifier: string, value: Address) {
    if (this.frame.has(identifier)) {
      this.frame.set(identifier, value)
      return
    }

    if (this.parent !== undefined) {
      this.parent.set(identifier, value)
      return
    }

    throw new UndeclaredIdentifierError(identifier)
  }

  extend(memory: Memory, values?: Frame): Environment {
    const temp = new Environment(memory.stackIndex, values)
    temp.parent = this
    return temp
  }

  // Declare a new variable
  declare(identifier: string, address: Address) {
    // Check if declaration already exists in most the current frame
    if (this.frame.has(identifier)) {
      throw new RedeclarationError(identifier)
    }

    // TODO: Fix the default "NULL" value for each type
    this.frame.set(identifier, address)
  }

  copy(): Environment {
    return new Environment(this.stackPointer, new Map(this.frame))
  }

  isGlobal(): boolean {
    return this.parent === undefined
  }
}
