export class InterpreterError extends Error {}

export class UndeclaredIdentifierError extends InterpreterError {
  constructor(name: string) {
    super(`Undeclared name: ${name}`)
  }
}

export class RedeclarationError extends InterpreterError {
  constructor(name: string) {
    super(`Redeclaration of ${name}`)
  }
}

export class StackOverflow extends InterpreterError {
  constructor() {
    super('Stack Overflow')
  }
}

export class HeapOverflow extends InterpreterError {
  constructor() {
    super('Heap Overflow')
  }
}

export class InvalidOperation extends InterpreterError {
  constructor(message?: string) {
    super(message)
  }
}
