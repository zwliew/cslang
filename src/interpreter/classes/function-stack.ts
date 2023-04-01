import { FunctionDefinition, NumericLiteral } from '../../parser/ast-types'
import Decimal from '../../utils/decimal'
import { UNDEFINED_LITERAL } from '../constants'
import { Environment } from './environment'
import { Memory } from './memory'

export class FunctionStack {
  functionStack: Array<[FunctionDefinition, Environment]>
  functionIndexes: Map<string, number>

  constructor() {
    this.functionStack = []
    this.functionIndexes = new Map()

    this.allocatePrimitiveFunction(putchar, 'putchar')
    this.allocatePrimitiveFunction(malloc, 'malloc')
    this.allocatePrimitiveFunction(free, 'free')
  }

  // Private function only for primitives
  allocatePrimitiveFunction(fn: FunctionDefinition, fnName: string) {
    const functionIndex = this.functionStack.length
    this.functionIndexes[fnName] = functionIndex
    // We can just allocate a new Environment - the environment is irrelevant here
    this.functionStack.push([fn, new Environment()])
  }

  // Does not actually allocate space on the stack yet
  declareFunction(): number {
    return this.functionStack.length
  }

  allocateFunction(
    fn: FunctionDefinition,
    fnName: string,
    currentEnvironment: Environment
  ): number {
    const functionIndex = this.functionStack.length
    this.functionIndexes[fnName] = functionIndex
    this.functionStack.push([fn, currentEnvironment.copy()])
    return functionIndex
  }

  getFunctionAndEnv(index: number): [FunctionDefinition, Environment]
  getFunctionAndEnv(name: string): [FunctionDefinition, Environment]

  getFunctionAndEnv(identifier: number | string): [FunctionDefinition, Environment] {
    if (typeof identifier === 'number') {
      return this.functionStack[identifier]
    } else {
      return this.functionStack[this.functionIndexes[identifier]]
    }
  }
}

export const primitiveFunctions = []

const primitivePutchar = (M: Memory, ch: NumericLiteral): NumericLiteral => {
  const value = ch.value.toNumber()

  // Convert to ascii and print
  process.stdout.write(String.fromCharCode(value))

  // Return the input type casted to an int
  return {
    type: 'NumericLiteral',
    typeSpecifier: 'int',
    value: ch.value
  }
}

const putchar: FunctionDefinition = {
  type: 'FunctionDefinition',
  returnType: 'int',
  parameterList: {
    type: 'ParameterList',
    parameters: [
      {
        type: 'ParameterDeclaration',
        typeSpecifier: 'char',
        identifier: 'char'
      }
    ]
  },
  primitive: true,
  primitiveFunction: primitivePutchar,
  body: []
}

const primitiveMalloc = (M: Memory, size: NumericLiteral): NumericLiteral => {
  const length = size.value.toNumber()

  const addr = M.allocateHeap(length)

  return {
    type: 'NumericLiteral',
    typeSpecifier: { ptrTo: 'void' },
    value: addr === -1 ? new Decimal(0) : new Decimal(addr)
  }
}

const malloc: FunctionDefinition = {
  type: 'FunctionDefinition',
  returnType: { ptrTo: 'void' },
  parameterList: {
    type: 'ParameterList',
    parameters: [
      {
        type: 'ParameterDeclaration',
        typeSpecifier: 'int',
        identifier: 'size'
      }
    ]
  },
  primitive: true,
  primitiveFunction: primitiveMalloc,
  body: []
}

const primitiveFree = (M: Memory, ptr: NumericLiteral): NumericLiteral => {
  // Do nothing for now
  return UNDEFINED_LITERAL
}

const free: FunctionDefinition = {
  type: 'FunctionDefinition',
  returnType: 'void',
  parameterList: {
    type: 'ParameterList',
    parameters: [
      {
        type: 'ParameterDeclaration',
        typeSpecifier: { ptrTo: 'void' },
        identifier: 'ptr'
      }
    ]
  },
  primitive: true,
  primitiveFunction: primitiveFree,
  body: []
}
