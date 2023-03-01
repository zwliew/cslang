import { AssignmentExpression, AstNode, BinaryOperator, Block, Literal } from '../parser/ast-types'
import { NotImplementedError } from '../utils/errors'
import {
  BREAK_INSTRUCTION,
  CASE_INSTRUCTION,
  POP_INSTRUCTION,
  SWITCH_DEFAULT_INSTRUCTION,
  UNDEFINED_LITERAL
} from './constants'
import { Environment } from './classes/environment'
import { AgendaItems } from './interpreter-types'
import { Memory, sizeOfTypes } from './classes/memory'
import { add, divide, equals, mod, multiply, subtract } from './operations'

function error(val: any, message: string) {
  throw message + JSON.stringify(val)
}

function is_false(val: Literal): boolean {
  return val.value == 0
}

function is_true(val: Literal): boolean {
  return !is_false(val)
}

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A: Array<AgendaItems> = []

// stash S is array of values that stores intermediate
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.

let S: Array<Literal>

// Execution initialize environment E as the global environment.

let E: Environment

let M: Memory

const binop_microcode = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': mod,
  '==': equals
}

const apply_binop = (op: BinaryOperator, v2: Literal, v1: Literal) => binop_microcode[op](v1, v2)

function handle_block(blk: Block): AgendaItems[] {
  const stmts = blk.statements
  if (stmts.length === 0) {
    return [UNDEFINED_LITERAL]
  }

  const result = []
  for (let i = stmts.length - 1; i > 0; i--) {
    result.push(stmts[i], POP_INSTRUCTION)
  }
  result.push(stmts[0])
  return result
}

function handle_switch_block(blk: Block): AgendaItems[] {
  const stmts = blk.statements
  if (stmts.length === 0) {
    return [UNDEFINED_LITERAL]
  }

  const result: AgendaItems[] = []
  const switch_value = S.pop()!
  for (let i = stmts.length - 1; i > -1; i--) {
    const stmt = stmts[i]
    if (stmt.type === 'SwitchCaseBranch') {
      result.push(stmt.consequent, {
        type: 'switch_branch_i',
        switch_value: switch_value,
        case: stmt.case
      })
    } else if (stmt.type === 'SwitchCaseDefault') {
      result.push(stmt.consequent, SWITCH_DEFAULT_INSTRUCTION)
    } else if (stmt.type === 'Break') {
      result.push(BREAK_INSTRUCTION)
    } else {
      result.push(stmt)
      if (i == 0) {
        result.push(POP_INSTRUCTION)
      }
    }
  }
  return result
}

function handle_assignment_operator(assignExp: AssignmentExpression): AgendaItems[] {
  const result: AgendaItems[] = [{ type: 'assmt_i', identifier: assignExp.identifier }]

  switch (assignExp.operator) {
    case '=':
      result.push(assignExp.value)
      break

    default:
      throw new NotImplementedError('Only direct assignments are implemented')
  }

  return result
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
    case 'Literal':
      S.push(code)
      break

    case 'AssignmentExpression':
      A.push(...handle_assignment_operator(code))
      break

    case 'BinaryExpression':
      A.push({ type: 'binop_i', operator: code.operator }, code.right, code.left)
      break

    case 'Block':
      A.push({ type: 'env_i', environment: E })
      A.push(...handle_block(code))
      E = E.extend()
      break

    case 'Declaration':
      E.declare(code.identifier, {
        type: 'MemoryAddress',
        typeSpecifier: code.typeSpecifier,
        location: M.allocateStack(sizeOfTypes[code.typeSpecifier])
      })

      if (code.value) {
        // There is a value for this declaration
        A.push({ type: 'assmt_i', identifier: code.identifier })
        A.push(code.value)
      }
      break

    case 'ExpressionStatement':
      A.push(code.expression)
      break

    case 'If':
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

      // Push the literal value onto the stash
      S.push({ type: 'Literal', typeSpecifier: addr.typeSpecifier, value: M.getValue(addr) })
      break
    }

    case 'WhileStatement':
      // Note: statements don't leave anything in the operand stash
      A.push({ type: 'while_i', pred: code.pred, body: code.body }, code.pred)
      break

    case 'Switch':
      A.push({ type: 'switch_env_i', environment: E })
      A.push({ type: 'switch_i', block: code.block }, code.expression)
      E = E.extend()
      break

    case 'SwitchCaseDefault':
      A.push(code.consequent)
      break

    case 'Break':
      A.push({ type: 'break_i' })
      break

    case 'UnaryExpression':
      if (code.operator === '-') {
        S.push({ type: 'Literal', typeSpecifier: 'char', value: -1 })
        A.push({ type: 'binop_i', operator: '*' }, code.operand)
      } else {
        error(code, 'Unknown command: ')
      }
      break

    /******************
     * Instructions
     *****************/

    case 'assmt_i': {
      // Get the address the name is refering to
      const addr = E.get(code.identifier)

      // Set the topmost literal value into memory
      M.setValue(addr, S.at(-1)!)
      break
    }

    case 'binop_i':
      S.push(apply_binop(code.operator, S.pop()!, S.pop()!))
      break

    case 'branch_i':
      console.log(`S: ${S}`)
      if (is_true(S.pop()!)) {
        A.push(code.consequent)
      } else if (code.alternative) {
        A.push(code.alternative)
      }
      break

    case 'env_i':
      // TODO: Reinstate stack pointer for the memory
      E = code.environment
      break

    case 'pop_i':
      S.pop()
      break

    case 'while_i':
      const pred_val = S.pop()
      if (is_true(pred_val!)) {
        A.push(code, code.pred, { type: 'pop_i' }, code.body)
      }
      break

    case 'switch_env_i':
      E = code.environment
      break

    case 'switch_i':
      A.push(...handle_switch_block(code.block))
      break

    case 'switch_branch_i':
      S.push(code.switch_value)
      A.push(CASE_INSTRUCTION, { type: 'binop_i', operator: '==' }, code.case)
      break

    case 'switch_default_i':
      // Do nothing
      break

    case 'break_i':
      while (
        A.length > 0 &&
        (A[A.length - 1].type !== 'switch_env_i' || A[A.length - 1].type !== 'while_i')
      ) {
        A.pop()
      }
      break

    case 'case_i':
      if (is_false(S.pop()!)) {
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
  S = []
  E = new Environment()
  M = new Memory(100)
  let i = 0
  while (i < step_limit) {
    // console.log('Step', i)
    // console.log(A)
    // console.log(S)
    // console.log(E)
    if (A.length === 0) break

    // Agenda will always have items on it
    const cmd = A.pop()!
    microcode(cmd)
    i++
  }
  if (S.length > 1 || S.length < 1) {
    error(S, 'internal error: stash must be singleton but is: ')
  }
  M.viewMemory()
  return console.log(S[0])
}
