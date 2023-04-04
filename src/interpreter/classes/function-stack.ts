import {
  ArrayTypeSpecifier,
  FunctionDefinition,
  Literal,
  PointerTypeSpecifier
} from '../../parser/ast-types'
import Decimal from '../../utils/decimal'
import { Environment } from './environment'
import { Memory } from './memory'
import { UNDEFINED_LITERAL } from '../constants'
import { MemoryAddress } from '../interpreter-types'
import { isArrayType, isPointerType, isPrimitiveType } from '../../types'

const prompt = require('prompt-sync')()

export type PrimitiveFunctionParams = {
  E: Environment
  M: Memory
  args: Literal[]
}

export class FunctionStack {
  functionStack: Array<[FunctionDefinition, Environment]>
  functionIndexes: Map<string, number>

  constructor() {
    this.functionStack = []
    this.functionIndexes = new Map()

    this.allocatePrimitiveFunction(putchar, 'putchar')
    this.allocatePrimitiveFunction(malloc, 'malloc')
    this.allocatePrimitiveFunction(free, 'free')
    this.allocatePrimitiveFunction(getchar, 'getchar')
    this.allocatePrimitiveFunction(printstack, 'printstack')
  }

  // Private function only for primitives
  allocatePrimitiveFunction(fn: FunctionDefinition, fnName: string) {
    const functionIndex = this.functionStack.length
    this.functionIndexes[fnName] = functionIndex
    // We can just allocate a new Environment - the environment is irrelevant here
    this.functionStack.push([fn, new Environment({ name: fnName })])
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

const primitivePutchar = ({ args: [ch] }: PrimitiveFunctionParams): Literal => {
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

const primitiveMalloc = ({ M, args: [size] }: PrimitiveFunctionParams): Literal => {
  const length = size.value.toNumber()

  const addr = M.allocateHeap(length)

  return {
    type: 'Literal',
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

const primitiveFree = (_: PrimitiveFunctionParams): Literal => {
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

let stdinBuffer = ''
let currentChar = 0
const primitiveGetChar = (params: PrimitiveFunctionParams): Literal => {
  const { M, E } = params
  if (stdinBuffer === null) {
    return {
      type: 'Literal',
      typeSpecifier: 'char',
      value: new Decimal(-1)
    }
  }

  if (currentChar >= stdinBuffer.length) {
    // Get new input
    stdinBuffer = prompt('', null)

    // Need put back the end of line
    if (stdinBuffer !== null) stdinBuffer += '\n'
    currentChar = 0
    return primitiveGetChar(params)
  } else {
    return {
      type: 'Literal',
      typeSpecifier: 'char',
      value: new Decimal(stdinBuffer[currentChar++].charCodeAt(0))
    }
  }
}

const getchar: FunctionDefinition = {
  type: 'FunctionDefinition',
  returnType: 'char',
  parameterList: {
    type: 'ParameterList',
    parameters: []
  },
  primitive: true,
  primitiveFunction: primitiveGetChar,
  body: []
}

const primitivePrintStack = ({ E, M }: PrimitiveFunctionParams): Literal => {
  // TODO: look into how arrays are being stored in the environment.
  // They seem to be treated as primitives (i.e. int[] becomes int)
  console.log('=== Stack ===')
  const frames = []
  let curEnv = E
  while (curEnv.parent !== undefined) {
    if (curEnv.frame.size > 0) {
      frames.push({ frame: curEnv.frame, name: curEnv.name })
    }
    curEnv = curEnv.parent
  }

  let curIndent = ''
  for (let i = frames.length - 1; i >= 0; --i) {
    const frame = frames[i]
    if (frame.name === '_unnamed_') {
      curIndent += '  '
    } else {
      curIndent = ''
    }

    console.log(`${curIndent}${frame.name}:`)
    // TODO: don't hardcode the column values. Rather, base it on the longest string in that column.
    const header = 'Name'.padEnd(10) + 'Value'.padEnd(10) + 'Addr'.padEnd(10) + 'Type'
    console.log(`${curIndent}  ` + header)
    console.log(`${curIndent}  ` + '-'.repeat(header.length + 5))

    for (const [identifier, addr] of frame.frame) {
      const memAddr = addr as MemoryAddress
      const val = M.getValue(memAddr)

      let typeSpecifier = memAddr.typeSpecifier
      const typeStrBuilder = []
      while (!isPrimitiveType(typeSpecifier)) {
        if (isPointerType(typeSpecifier)) {
          typeStrBuilder.push('*')
          typeSpecifier = (typeSpecifier as PointerTypeSpecifier).ptrTo
        } else if (isArrayType(typeSpecifier)) {
          typeStrBuilder.push('[]')
          typeSpecifier = (typeSpecifier as ArrayTypeSpecifier).arrOf
        }
      }
      typeStrBuilder.push(typeSpecifier)
      const type = typeStrBuilder.reverse().join('')

      console.log(
        `${curIndent}  ` +
          `${identifier}`.padEnd(10) +
          `${val}`.padEnd(10) +
          `[${memAddr.location}]`.padEnd(10) +
          `(${type})`
      )
    }
    console.log()
  }
  return UNDEFINED_LITERAL
}

const printstack: FunctionDefinition = {
  type: 'FunctionDefinition',
  returnType: 'void',
  parameterList: {
    type: 'ParameterList',
    parameters: []
  },
  primitive: true,
  primitiveFunction: primitivePrintStack,
  body: []
}
