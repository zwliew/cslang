import { AstNode, BinaryOperator } from '../parser/ast-types'
import { AgendaItems, ProgramValues } from './interpreter-types'

// export function interprete(ast: AstNode) {
//   console.log('TODO: Implement interprete')
// }

function error(val: any, message: string) {
  throw message + JSON.stringify(val)
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

let E: any

const binop_microcode = {
  '+': (x: ProgramValues, y: ProgramValues) => Number(x) + Number(y),
  '-': (x: ProgramValues, y: ProgramValues) => Number(x) - Number(y),
  '*': (x: ProgramValues, y: ProgramValues) => Number(x) * Number(y),
  '/': (x: ProgramValues, y: ProgramValues) => Number(x) / Number(y)
}

const apply_binop = (op: BinaryOperator, v2: ProgramValues, v1: ProgramValues) =>
  binop_microcode[op](v1, v2)

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

    case 'BinaryExpression':
      A.push({ type: 'binop_i', operator: code.operator }, code.right, code.left)
      break

    case 'ExpressionStatement':
      A.push(code.expression)
      break

    case 'Block':
      A.push(
        // TODO: Reverse Order
        ...code.statements
      )
      break

    // Instructions
    case 'binop_i':
      S.push(apply_binop(code.operator, S.pop(), S.pop()))
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
  E = global_environment
  let i = 0
  while (i < step_limit) {
    if (A.length === 0) break

    // Agenda will always have items on it
    const cmd = A.pop() as AgendaItems
    microcode(cmd)
    i++
  }
  if (S.length > 1 || S.length < 1) {
    error(S, 'internal error: stash must be singleton but is: ')
  }
  return console.log(S[0])
}
