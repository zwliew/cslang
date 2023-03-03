// This error can be thrown when a method is defined by not implemented (yet).
export class NotImplementedError extends Error {
  constructor(message?: string) {
    super(`"` + message + `"`)
    this.name = 'NotImplementedError'
  }
}

export class IllegalArgumentError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'IllegalArgumentError'
  }
}
