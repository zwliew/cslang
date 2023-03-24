import { AssignmentExpression, AstNode, BinaryOperator, Block, Literal } from '../parser/ast-types'
import { DEBUG_PRINT_MEMORY, DEBUG_PRINT_STEPS } from '../utils/debug-flags'
import Decimal from '../utils/decimal'
import { NotImplementedError } from '../utils/errors'
import { Environment } from './classes/environment'
import { FunctionStack } from './classes/function-stack'
import { Memory, sizeOfTypes } from './classes/memory'
import {
  BREAK_INSTRUCTION,
  CASE_INSTRUCTION,
  POP_INSTRUCTION,
  SWITCH_DEFAULT_INSTRUCTION,
  UNDEFINED_LITERAL
} from './constants'
import { InterpreterError, UndeclaredIdentifierError } from './errors'
import { AgendaItems, MemoryAddress } from './interpreter-types'
import {
  add,
  bitwiseAnd,
  bitwiseOr,
  bitwiseXor,
  divide,
  equals,
  greaterThan,
  greaterThanOrEqual,
  leftShift,
  lessThan,
  lessThanOrEqual,
  logicalAnd,
  mod,
  multiply,
  notEquals,
  rightShift,
  subtract
} from './operations'

function error(val: any, message: string) {
  throw message + JSON.stringify(val)
}

function is_false(val: Literal): boolean {
  return new Decimal(0).equals(val.value)
}

function is_true(val: Literal): boolean {
  return !is_false(val)
}

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// OS: operand stack: stack of values
// E: environment: list of frames

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A: Array<AgendaItems> = []

// operand stack S is array of values that stores intermediate
// results. The operand stack follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes operand stack S as an empty array.

let OS: Array<Literal>

// Execution initialize environment E as the global environment.

let E: Environment

let M: Memory

let FS: FunctionStack

const binop_microcode = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': mod,
  '==': equals,
  '!=': notEquals,
  '<': lessThan,
  '>': greaterThan,
  '<=': lessThanOrEqual,
  '>=': greaterThanOrEqual,
  '&&': logicalAnd,
  '|': bitwiseOr,
  '&': bitwiseAnd,
  '^': bitwiseXor,
  '<<': leftShift,
  '>>': rightShift
}

const apply_binop = (op: BinaryOperator, v2: Literal, v1: Literal) => binop_microcode[op](v1, v2)

function handle_block(blk: Block): AgendaItems[] {
  const stmts = blk.statements
  if (stmts.length === 0) {
    return [UNDEFINED_LITERAL]
  }

  const result = []
  for (let i = stmts.length - 1; i > -1; i--) {
    result.push(stmts[i])
  }
  return result
}

function handle_switch_block(blk: Block): AgendaItems[] {
  // console.log(`handling switch block: ${blk.statements.map(stmt => JSON.stringify(stmt))}`)
  const stmts = blk.statements
  if (stmts.length === 0) {
    return [UNDEFINED_LITERAL]
  }

  const result: AgendaItems[] = []
  const switch_value = OS.pop()!
  for (let i = stmts.length - 1; i > -1; i--) {
    const stmt = stmts[i]
    if (stmt.type === 'SwitchCaseBranch') {
      result.push({
        type: 'switch_branch_i',
        switch_value: switch_value,
        case: stmt.case
      })
    } else if (stmt.type === 'SwitchCaseDefault') {
      result.push(SWITCH_DEFAULT_INSTRUCTION)
    } else if (stmt.type === 'Break') {
      result.push(BREAK_INSTRUCTION)
    } else {
      result.push(stmt)
    }
  }
  return result
}

const fusedAssignmentBinOps: Set<BinaryOperator> = new Set([
  '+',
  '-',
  '*',
  '/',
  '%',
  '^',
  '&',
  '|',
  '<<',
  '>>'
])
function handleAssignmentOperator(assignExp: AssignmentExpression): AgendaItems[] {
  const result: AgendaItems[] = [{ type: 'value_assmt_i', identifier: assignExp.identifier }]

  if (assignExp.operator === '=') {
    // This is a simple assignment.
    result.push(assignExp.value)
    return result
  }

  // Otherwise, this is a fused assignment (i.e. +=, >>=, etc.)
  const binop = assignExp.operator.slice(0, -1) as BinaryOperator
  if (fusedAssignmentBinOps.has(binop)) {
    result.push({ type: 'binop_i', operator: binop }, assignExp.value, {
      type: 'Identifier',
      identifier: assignExp.identifier
    })
    return result
  }

  throw new NotImplementedError(`'${assignExp}' assignment operator is not implemented`)
}

/* *********************
 * interpreter microcode
 * *********************/

// The interpreter dispaches for each command tag to the
// microcode that belong to the tag.

// microcode.cmd_tag is the microcode for the command,
// a function that takes a command as argument and
// changes the configuration according to the meaning of
// the command. The return value is not used.

const microcode = (code: AgendaItems) => {
  switch (code.type) {
    case 'StraySemicolon':
      break

    case 'CompilationUnit':
      // TODO: After all declarations, call main with argc and argv
      A.push(...code.declarations.slice().reverse())
      break

    case 'Literal':
      OS.push(code)
      break

    case 'AssignmentExpression':
      A.push(...handleAssignmentOperator(code))
      break

    case 'BinaryExpression':
      A.push({ type: 'binop_i', operator: code.operator }, code.right, code.left)
      break

    case 'Block':
      A.push({ type: 'env_i', environment: E })
      A.push(...handle_block(code))
      E = E.extend()
      break

    case 'ValueDeclaration':
      E.declare(code.identifier, {
        type: 'MemoryAddress',
        typeSpecifier: code.typeSpecifier,
        location: M.allocateStack(sizeOfTypes[code.typeSpecifier])
      })

      if (code.value) {
        // There is a value for this declaration
        A.push(POP_INSTRUCTION, { type: 'value_assmt_i', identifier: code.identifier }, code.value)
      }
      break

    case 'ExpressionStatement':
      A.push(POP_INSTRUCTION, code.expression)
      break

    case 'If':
    case 'ConditionalExpression':
      A.push(
        {
          type: 'branch_i',
          consequent: code.consequent,
          alternative: code.alternative
        },
        code.predicate
      )
      break

    case 'Identifier': {
      // Get the address where the value is stored on the stack
      const addr = E.get(code.identifier)

      if (addr.type === 'MemoryAddress') {
        // Push the literal value onto the stash
        OS.push({ type: 'Literal', typeSpecifier: addr.typeSpecifier, value: M.getValue(addr) })
      } else {
        // Function calling is handled in postfixExpression
        throw new UndeclaredIdentifierError(code.identifier)
      }

      break
    }

    case 'WhileStatement':
      A.push({ type: 'while_i', pred: code.pred, body: code.body }, code.pred)
      break

    case 'DoWhileStatement':
      A.push({ type: 'while_i', pred: code.pred, body: code.body }, code.pred, code.body)
      break

    case 'Switch':
      A.push({ type: 'switch_env_i', environment: E })
      A.push({ type: 'switch_i', block: code.block }, code.expression)
      E = E.extend()
      break

    case 'SwitchCaseDefault':
      break

    case 'Break':
      A.push({ type: 'break_i' })
      break

    case 'UnaryExpression':
      if (code.operator === '-') {
        OS.push({ type: 'Literal', typeSpecifier: 'int', value: new Decimal(-1) })
        A.push({ type: 'binop_i', operator: '*' }, code.operand)
      } else {
        error(code, 'Unknown command: ')
      }
      break

    case 'FunctionDeclaration':
      // Call main if a main is declared
      if (code.identifier === 'main') {
        A.push({ type: 'app_i', identifier: 'main', arity: 0 })
      }
      // allocate space for the function and declare it on the environment
      E.declare(code.identifier, {
        type: 'FunctionStackAddress',
        location: FS.declareFunction()
      })

      // make a copy of the new environment and set the function definition
      FS.allocateFunction(code.functionDefinition, code.identifier, E.copy())
      break

    case 'FunctionApplication': {
      const functionDefinition = FS.getFunctionAndEnv(code.identifier)[0]
      if (functionDefinition.returnType === 'void') {
        A.push(UNDEFINED_LITERAL)
      }
      A.push({ type: 'app_i', identifier: code.identifier, arity: code.arguments.length })
      const parameterList = functionDefinition.parameterList
      if (parameterList) {
        const parameters = parameterList.parameters.map(parameterDeclaration => ({
          typeSpecifier: parameterDeclaration.typeSpecifier,
          name: parameterDeclaration.name.name
        }))
        // Push arguments in reverse order. OS will have arguments in the correct order
        for (let i = 0; i < code.arguments.length; i++) {
          E.declare(parameters[i].name, {
            type: 'MemoryAddress',
            typeSpecifier: parameters[i].typeSpecifier,
            location: M.allocateStack(sizeOfTypes[parameters[i].typeSpecifier])
          })

          A.push(
            { type: 'value_assmt_i', identifier: parameters[i].name },
            code.arguments[code.arguments.length - i - 1]
          )
        }
      }
      break
    }

    case 'Return':
      // TODO: typechecking
      while (A.length > 0 && A.at(-1)!.type !== 'fn_env_i') {
        A.pop()
      }
      if (code.expression) {
        A.push(code.expression)
      }
      break

    /******************
     * Instructions
     *****************/

    case 'app_i':
      const functionAndEnv = FS.getFunctionAndEnv(code.identifier)
      const functionArguments = []
      for (let i = 0; i < code.arity; i++) {
        // Makes a copy of each value
        functionArguments.push(OS.pop())
      }
      // Save the current environment
      A.push({ type: 'fn_env_i', environment: E })
      // Extend the environment with a frame mapping from parameter to argument value
      E.extend()
      A.push(...functionAndEnv[0].body.slice().reverse())
      break

    case 'value_assmt_i': {
      // Get the address the name is refering to
      const addr = E.get(code.identifier) as MemoryAddress
      // Set the topmost literal value into memory
      const value = OS.at(-1)!
      M.setValue(addr, value)
      break
    }

    case 'binop_i':
      OS.push(apply_binop(code.operator, OS.pop()!, OS.pop()!))
      break

    case 'branch_i':
      if (is_true(OS.pop()!)) {
        A.push(code.consequent)
      } else if (code.alternative) {
        A.push(code.alternative)
      }
      break

    case 'env_i':
    case 'switch_env_i':
    case 'fn_env_i':
      // TODO: Reinstate stack pointer for the memory
      E = code.environment
      break

    case 'pop_i':
      // Should throw an error if there is nothing to pop, since this means something is incorrect
      if (OS.length === 0) {
        throw new InterpreterError(`Attempting to pop a value from OS of length 0`)
      }
      OS.pop()
      break

    case 'while_i':
      const pred_val = OS.pop()
      if (is_true(pred_val!)) {
        A.push(code, code.pred, code.body)
      }
      break

    case 'switch_i':
      A.push(...handle_switch_block(code.block))
      break

    case 'switch_branch_i':
      OS.push(code.switch_value)
      A.push(CASE_INSTRUCTION, { type: 'binop_i', operator: '==' }, code.case)
      break

    case 'switch_default_i':
      // Do nothing
      break

    case 'break_i':
      while (A.length > 0 && A.at(-1)!.type !== 'switch_env_i' && A.at(-1)!.type !== 'while_i') {
        A.pop()
      }
      break

    case 'case_i':
      if (is_false(OS.pop()!)) {
        // Pop agenda until next case/default statement
        while (
          A.length > 0 &&
          !(
            A[A.length - 1].type === 'switch_branch_i' ||
            A[A.length - 1].type === 'switch_default_i'
          )
        ) {
          A.pop()
        }
      } else {
        // Remove all SwitchCaseBranch
        for (let i = A.length - 1; i > -1; i--) {
          if (A[i].type === 'switch_env_i') {
            break
          } else if (A[i].type === 'switch_branch_i' || A[i].type === 'switch_default_i') {
            A.splice(i, 1)
          }
        }
      }
      break

    default:
      error(code, 'Unknown command: ')
  }
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

export const execute = (program: AstNode) => {
  A = [program]
  OS = []
  E = new Environment()
  FS = new FunctionStack()
  M = new Memory(100)
  let i = 0
  while (i < step_limit) {
    if (DEBUG_PRINT_STEPS) {
      console.log('Step', i)
      console.log(A)
      console.log(OS)
      console.log(E)
      console.log(FS)
      console.log('') // newline separator
    }
    if (A.length === 0) break

    // Agenda will always have items on it
    const cmd = A.pop()!
    microcode(cmd)
    i++
  }
  if (OS.length < 1) {
    return undefined
  }
  // if (OS.length > 1) {
  //   error(OS, 'internal error: stash must be singleton but is: ')
  // }
  if (DEBUG_PRINT_MEMORY) {
    M.viewMemory()
  }
  return OS[0].value
}
