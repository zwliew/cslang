// This error can be thrown when a method is defined by not implemented (yet).
export class NotImplementedError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'NotImplementedError'
  }
}

export class IllegalArgumentError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'IllegalArgumentError'
  }
}

export class SetVoidValueError extends Error {
  constructor() {
    super('Attempting to set a value of type void in memory')
    this.name = 'SetVoidValueError'
  }
}

export class AnalysisError extends Error {
  constructor(message?: string) {
    super('Error in AST found during analysis. ' + message)
    this.name = 'AnalysisError'
  }
}

export class RuntimeError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'RuntimeError'
  }
}
