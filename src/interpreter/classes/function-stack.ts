import { FunctionDefinition, Literal } from '../../parser/ast-types'
import { Environment } from './environment'

export class FunctionStack {
  functionStack: Array<[FunctionDefinition, Environment]>
  functionIndexes: Map<string, number>

  constructor() {
    this.functionStack = []
    this.functionIndexes = new Map()

    this.allocatePrimitiveFunction(putchar, 'putchar')
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

  debugPrint() {
    console.log(`FunctionStack {
  functionStack: [ ${this.functionStack.map(
    functionAndEnv => `${JSON.stringify(functionAndEnv[0])}, ${functionAndEnv[1]}`
  )} ],
  functionIndexes: ${this.functionIndexes}
}`)
  }
}

export const primitiveFunctions = []

const primitivePutchar = (ch: Literal): Literal => {
  const value = ch.value.toNumber()

  // Convert to ascii and print
  process.stdout.write(String.fromCharCode(value))

  // Return the input type casted to an int
  return {
    type: 'Literal',
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
