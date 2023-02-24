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
