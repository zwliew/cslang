import { RedeclarationError, UndeclaredIdentifierError } from './errors'
import { ExpressibleValues } from './interpreter-types'

type Frame = Map<string, ExpressibleValues>

export class Environment {
  // The environment is a linked list of frames
  env: Frame
  parent: Environment | undefined

  // Constructor for creating a new global frame
  constructor(values?: Frame) {
    this.parent = undefined
    this.env = values ?? new Map()
  }

  // Get the value of the name in the current environment
  get(identifier: string): ExpressibleValues {
    const value = this.env.get(identifier)
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
    if (this.env.has(identifier)) {
      this.env.set(identifier, value)
      return
    }

    if (this.parent !== undefined) {
      this.parent.set(identifier, value)
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
  declare(identifier: string, value?: ExpressibleValues) {
    // Check if declaration already exists in most the current frame
    if (this.env.has(identifier)) {
      throw new RedeclarationError(identifier)
    }

    // If value was not provided, then the value of the variable would be arbitrary.
    // For now, set to 0.
    this.env.set(identifier, value ?? 0)
  }
}
