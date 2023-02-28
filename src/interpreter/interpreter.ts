import { AssignmentExpression, AstNode, BinaryOperator, Block } from '../parser/ast-types'
import { NotImplementedError } from '../utils/errors'
import { UNDEFINED_LITERAL, POP_INSTRUCTION } from './constants'
import { Environment } from './environment'
import { AgendaItems, ProgramValues } from './interpreter-types'

// C's NULL
export const NULL_PTR = null

function error(val: any, message: string) {
  throw message + JSON.stringify(val)
}

function is_null(val: any): boolean {
  return val === NULL_PTR
}

function is_false(val: any): boolean {
  return val === 0
}

function is_true(val: any): boolean {
  return !is_null(val) && !is_false(val)
}

/* ************
 * environments
 * ************/

// Frames are objects that map symbols (strings) to values.

const global_frame = {}

// An environment is null or a pair whose head is a frame
// and whose tail is an environment.
const empty_environment: Array<any> = []
const global_environment = empty_environment.concat(global_frame)

// const lookup = (x, e) => {
//   if (is_null(e)) error(x, 'unbound name:')
//   if (head(e).hasOwnProperty(x)) {
//     const v = head(e)[x]
//     if (is_unassigned(v)) error(cmd.sym, 'unassigned name:')
//     return v
//   }
//   return lookup(x, tail(e))
// }

// const assign = (x, v, e) => {
//   if (is_null(e)) error(x, 'unbound name:')
//   if (head(e).hasOwnProperty(x)) {
//     head(e)[x] = v
//   } else {
//     assign(x, v, tail(e))
//   }
// }

// const extend = (xs, vs, e) => {
//   if (vs.length > xs.length) error('too many arguments')
//   if (vs.length < xs.length) error('too few arguments')
//   const new_frame = {}
//   for (let i = 0; i < xs.length; i++) new_frame[xs[i]] = vs[i]
//   return pair(new_frame, e)
// }

// At the start of executing a block, local
// variables refer to unassigned values.
// const unassigned = { tag: 'unassigned' }

// const is_unassigned = v => {
//   return v !== null && typeof v === 'object' && v.hasOwnProperty('tag') && v.tag === 'unassigned'
// }

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

let S: Array<ProgramValues>

// See *environments* above. Execution initializes
// environment E as the global environment.

let E: Environment

const binop_microcode = {
  '+': (x: ProgramValues, y: ProgramValues) => Number(x) + Number(y),
  '-': (x: ProgramValues, y: ProgramValues) => Number(x) - Number(y),
  '*': (x: ProgramValues, y: ProgramValues) => Number(x) * Number(y),
  '/': (x: ProgramValues, y: ProgramValues) => Number(x) / Number(y),
  '%': (x: ProgramValues, y: ProgramValues) => Number(x) % Number(y)
}

const apply_binop = (op: BinaryOperator, v2: ProgramValues, v1: ProgramValues) =>
  binop_microcode[op](v1, v2)

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
      S.push(code.value)
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
      // TODO: Keep track of declaration's type as well
      E.declare(code.identifier)
      if (code.value) {
        // There is a value for this declaration
        A.push({ type: 'assmt_i', identifier: code.identifier })
        A.push(code.value)
      }
      break

    case 'ExpressionStatement':
      A.push(code.expression)
      break

    case 'IfStatement':
      A.push(
        {
          type: 'branch_i',
          consequent: code.consequent,
          alternative: code.alternative
        },
        code.predicate
      )
      break

    case 'Identifier':
      S.push(E.get(code.identifier))
      break

    case 'WhileStatement':
      // Note: statements don't leave anything in the operand stash
      A.push({ type: 'while_i', pred: code.pred, body: code.body }, code.pred)
      break

    //
    // Instructions
    //

    case 'assmt_i':
      E.set(code.identifier, S[S.length - 1]!)
      break

    case 'binop_i':
      S.push(apply_binop(code.operator, S.pop(), S.pop()))
      break

    case 'branch_i':
      console.log(`S: ${S}`)
      if (is_true(S.pop())) {
        A.push(code.consequent)
      } else if (code.alternative) {
        A.push(code.alternative)
      }
      break

    case 'env_i':
      E = code.environment
      break

    case 'pop_i':
      S.pop()
      break

    case 'while_i':
      const pred_val = S.pop()
      if (is_true(pred_val)) {
        A.push(code, code.pred, { type: 'pop_i' }, code.body)
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
  return console.log(S[0])
}
