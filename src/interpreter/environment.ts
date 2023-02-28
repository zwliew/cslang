import { RedeclarationError, UndeclaredIdentifierError } from './errors'
import { ExpressibleValues } from './interpreter-types'

type Frame = Map<string, ExpressibleValues>

export class Environment {
  // The environment is a linked list of frames
  frame: Frame
  parent: Environment | undefined

  // Constructor for creating a new global frame
  constructor(values?: Frame) {
    this.parent = undefined
    this.frame = values ?? new Map()
  }

  // Get the value of the name in the current environment
  get(identifier: string): ExpressibleValues {
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
  set(identifier: string, value: ExpressibleValues) {
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

  extend(values?: Frame): Environment {
    const temp = new Environment(values)
    temp.parent = this
    return temp
  }

  pop(): Environment {
    if (this.parent === undefined) {
      // TODO: Make a more descriptive error
      throw Error()
    }
    return this.parent
  }

  // Declare a new variable
  declare(identifier: string) {
    // Check if declaration already exists in most the current frame
    if (this.frame.has(identifier)) {
      throw new RedeclarationError(identifier)
    }

    // TODO: Fix the default "NULL" value for each type
    this.frame.set(identifier, 0)
  }
}