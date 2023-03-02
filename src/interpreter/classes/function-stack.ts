import { FunctionDefinition } from '../../parser/ast-types'
import { Environment } from './environment'

export class FunctionStack {
  functionStack: Array<[FunctionDefinition, Environment]>
  functionIndexes: Map<string, number>

  constructor() {
    this.functionStack = []
    this.functionIndexes = new Map()
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
