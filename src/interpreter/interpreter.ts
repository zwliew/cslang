import { AstNode } from '../parser/cslang-ast-types'

export function interprete(ast: AstNode) {
  console.log('TODO: Implement interprete')
}

function map<T, K>(arr: Array<T>, fn: (v: T) => K): Array<K> {
  return arr.map(fn)
}

function is_null(val: any) {
  return val === null
}

function is_number(val: any) {
  return typeof val === 'number'
}

function is_boolean(val: any) {
  return typeof val === 'boolean'
}

function is_string(val: any) {
  return typeof val === 'string'
}

function error(val: any, message: string) {
  throw message + val
}

// If you use Node.js and not https://sourceacademy.org,
// uncomment the following two lines:

// Object.entries(require('sicp'))
//       .forEach(([name, exported]) => global[name] = exported);

/* ****************************************
 * Explicit-control evaluator for Source §4
 * ****************************************/

// for syntax and semantics of Source §4,
// see https://docs.sourceacademy.org/source_4.pdf

// simplifications:
//
// (1) every statement produces a value
//
// In this evaluator, all statements produce
// a value, and declarations produce undefined,
// whereas JavaScript distinguishes value-producing
// statements. This makes a difference at the top
// level, outside of function bodies. For example,
// in JavaScript, the execution of
// 1; const x = 2;
// results in 1, whereas the evaluator gives undefined.
// For details on this see:
// https://sourceacademy.org/sicpjs/4.1.2#ex-4.8
//
// (2) while and for loops produce undefined
//
// In this evaluator, all while and for loops produce
// the value undefined, whereas in JavaScript loops
// produce:
// * undefined if the loop body is not executed
// * otherwise: the result of the last body execution

// /* *************
//  * parse to JSON
//  * *************/

// const list_to_array = xs =>
//     is_null(xs)
//     ? []
//     : [head(xs)].concat(list_to_array(tail(xs)))

// // simplify parameter format
// const parameters = xs =>
//     map(x => head(tail(x)),
//         xs)

// // turn tagged list syntax from parse into JSON object
// const ast_to_json = t => {
//     switch (head(t)) {
//         case "literal":
//             return { tag: "lit", val: head(tail(t)) }
//         case "name":
//             return { tag: "nam", sym: head(tail(t)) }
//         case "application":
//             return {
//                 tag: "app",
//                 fun: ast_to_json(head(tail(t))),
//                 args: list_to_array(map(ast_to_json, head(tail(tail(t)))))
//                       .reverse()  // microcode for app expects arg
//                                   // expressions in reverse order
//             }
//         case "logical_composition":
//             return {
//                 tag: "log",
//                 sym: head(tail(t)),
//                 frst: ast_to_json(head(tail(tail(t)))),
//                 scnd: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "binary_operator_combination":
//             return {
//                 tag: "binop",
//                 sym: head(tail(t)),
//                 frst: ast_to_json(head(tail(tail(t)))),
//                 scnd: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "object_access": {
//                 if (is_pair(tail(tail(t))) &&
//                     head(head(tail(tail(t)))) === "property" &&
//                     head(tail(head(tail(tail(t))))) === "length") {
//                         return {
//                             tag: "arr_len",
//                             expr: ast_to_json(head(tail(t)))
//                         }
//                 } else {
//                     return {
//                         tag: "arr_acc",
//                         arr: ast_to_json(head(tail(t))),
//                         ind: ast_to_json(head(tail(tail(t))))
//                     }
//                 }
//             }
//         case "object_access":
//             return {
//                 tag: "arr_acc",
//                 arr: ast_to_json(head(tail(t))),
//                 ind: ast_to_json(head(tail(tail(t)))),
//             }
//         case "object_assignment":
//             return {
//                 tag: "arr_assmt",
//                 arr: ast_to_json(head(tail(head(tail(t))))),
//                 ind: ast_to_json(head(tail(tail(head(tail(t)))))),
//                 expr: ast_to_json(head(tail(tail(t))))
//             }
//         case "array_expression":
//             return {
//                 tag: "arr_lit",
//                 elems: list_to_array(map(ast_to_json, head(tail(t))))
//                        .reverse()  // microcode for arr_lit expects
//                                    // expressions in reverse order
//             }
//         case "unary_operator_combination":
//             return {
//                 tag: "unop",
//                 sym: head(tail(t)),
//                 frst: ast_to_json(head(tail(tail(t))))
//             }
//         case "lambda_expression":
//             return {
//                 tag: "lam",
//                 prms: list_to_array(parameters(head(tail(t)))),
//                 body: ast_to_json(head(tail(tail(t))))
//             }
//         case "sequence":
//             return {
//                 tag: "seq",
//                 stmts: list_to_array(map(ast_to_json, head(tail(t))))
//             }
//         case "block":
//             return {
//                 tag: "blk",
//                 body: ast_to_json(head(tail(t)))
//             }
//         case "variable_declaration":
//             return {
//                 tag: "let",
//                 sym: head(tail(head(tail(t)))),
//                 expr: ast_to_json(head(tail(tail(t))))
//             }
//         case "constant_declaration":
//             return {
//                 tag: "const",
//                 sym: head(tail(head(tail(t)))),
//                 expr: ast_to_json(head(tail(tail(t))))
//             }
//         case "assignment":
//             return {
//                 tag: "assmt",
//                 sym: head(tail(head(tail(t)))),
//                 expr: ast_to_json(head(tail(tail(t))))
//             }
//         case "conditional_statement":
//             return {
//                 tag: "cond_stmt",
//                 pred: ast_to_json(head(tail(t))),
//                 cons: ast_to_json(head(tail(tail(t)))),
//                 alt: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "while_loop":
//             return {
//                 tag: "while",
//                 pred: ast_to_json(head(tail(t))),
//                 body: ast_to_json(head(tail(tail(t))))
//             }
//         case "break_statement":
//             return { tag: "break" }
//         case "continue_statement":
//             return { tag: "cont" }
//         case "conditional_expression":
//             return {
//                 tag: "cond_expr",
//                 pred: ast_to_json(head(tail(t))),
//                 cons: ast_to_json(head(tail(tail(t)))),
//                 alt: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "function_declaration":
//             return {
//                 tag: "fun",
//                 sym: head(tail(head(tail(t)))),
//                 prms: list_to_array(parameters(head(tail(tail(t))))),
//                 body: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "return_statement":
//             return {
//                 tag: "ret",
//                 expr: ast_to_json(head(tail(t)))
//             }
//         case "try_statement":
//             return {
//                 tag: "try",
//                 body: ast_to_json(head(tail(t))),
//                 sym: head(tail(head(tail(tail(t))))),
//                 catch: ast_to_json(head(tail(tail(tail(t)))))
//             }
//         case "throw_statement":
//             return {
//                 tag: "throw",
//                 expr: ast_to_json(head(tail(t)))
//             }
//         default:
//             error(t, "unknown syntax:")
//     }
// }

// // parse, turn into json (using ast_to_json),
// // and wrap in a block
// const parse_to_json = program_text =>
//     ({tag: "blk",
//       body: ast_to_json(parse(program_text))});

/* *************************
 * values of the interpreter
 * *************************/

// for numbers, strings, booleans, undefined, null
// we use the value directly

// closures aka function values
const is_closure = (x: any) => x !== null && typeof x === 'object' && x.tag === 'closure'

const is_builtin = (x: any) => x !== null && typeof x === 'object' && x.tag == 'builtin'

// catching closure and builtins to get short displays
const value_to_string = (x: any) =>
  is_closure(x) ? '<closure>' : is_builtin(x) ? '<builtin: ' + x.sym + '>' : JSON.stringify(x)

/* **********************
 * operators and builtins
 * **********************/

const binop_microcode = {
  '+': (x: any, y: any) =>
    (is_number(x) && is_number(y)) || (is_string(x) && is_string(y))
      ? x + y
      : error([x, y], '+ expects two numbers' + ' or two strings, got:'),
  // todo: add error handling to JS for the following, too
  '*': (x: any, y: any) => x * y,
  '-': (x: any, y: any) => x - y,
  '/': (x: any, y: any) => x / y,
  '%': (x: any, y: any) => x % y,
  '<': (x: any, y: any) => x < y,
  '<=': (x: any, y: any) => x <= y,
  '>=': (x: any, y: any) => x >= y,
  '>': (x: any, y: any) => x > y,
  '===': (x: any, y: any) => x === y,
  '!==': (x: any, y: any) => x !== y
}

// v2 is popped before v1
const apply_binop = (op, v2, v1) => binop_microcode[op](v1, v2)

const unop_microcode = {
  '-unary': (x: any) => -x,
  '!': (x: any) => (is_boolean(x) ? !x : error(x, '! expects boolean, found:'))
}

const apply_unop = (op, v) => unop_microcode[op](v)

const builtin_mapping = {
  display: display,
  get_time: get_time,
  stringify: stringify,
  error: error,
  prompt: prompt,
  is_number: is_number,
  is_string: is_string,
  is_function: (x: any) => typeof x === 'object' && (x.tag == 'builtin' || x.tag == 'closure'),
  is_boolean: is_boolean,
  is_undefined: is_undefined,
  parse_int: parse_int,
  char_at: char_at,
  arity: (x: any) =>
    typeof x === 'object' ? x.arity : error(x, 'arity expects function, received:'),
  math_abs: math_abs,
  math_acos: math_acos,
  math_acosh: math_acosh,
  math_asin: math_asin,
  math_asinh: math_asinh,
  math_atan: math_atan,
  math_atanh: math_atanh,
  math_atan2: math_atan2,
  math_ceil: math_ceil,
  math_cbrt: math_cbrt,
  math_expm1: math_expm1,
  math_clz32: math_clz32,
  math_cos: math_cos,
  math_cosh: math_cosh,
  math_exp: math_exp,
  math_floor: math_floor,
  math_fround: math_fround,
  math_hypot: math_hypot,
  math_imul: math_imul,
  math_log: math_log,
  math_log1p: math_log1p,
  math_log2: math_log2,
  math_log10: math_log10,
  math_max: math_max,
  math_min: math_min,
  math_pow: math_pow,
  math_random: math_random,
  math_round: math_round,
  math_sign: math_sign,
  math_sin: math_sin,
  math_sinh: math_sinh,
  math_sqrt: math_sqrt,
  math_tanh: math_tanh,
  math_trunc: math_trunc,
  pair: pair,
  is_pair: is_pair,
  head: head,
  tail: tail,
  is_null: is_null,
  set_head: set_head,
  set_tail: set_tail,
  array_length: array_length,
  is_array: is_array,
  list: list,
  is_list: is_list,
  display_list: display_list,
  // from list libarary
  equal: equal,
  length: length,
  list_to_string: list_to_string,
  reverse: reverse,
  append: append,
  member: member,
  remove: remove,
  remove_all: remove_all,
  enum_list: enum_list,
  list_ref: list_ref,
  // misc
  draw_data: draw_data,
  parse: parse,
  tokenize: tokenize,
  apply_in_underlying_javascript: apply_in_underlying_javascript
}

const apply_builtin = (builtin_symbol, args) => builtin_mapping[builtin_symbol](...args)

/* ************
 * environments
 * ************/

// Frames are objects that map symbols (strings) to values.

const global_frame = {}

// fill global frame with built-in objects
for (const key in builtin_mapping)
  global_frame[key] = { tag: 'builtin', sym: key, arity: arity(builtin_mapping[key]) }
// fill global frame with built-in constants
global_frame.undefined = undefined
global_frame.math_E = math_E
global_frame.math_LN10 = math_LN10
global_frame.math_LN2 = math_LN2
global_frame.math_LOG10E = math_LOG10E
global_frame.math_LOG2E = math_LOG2E
global_frame.math_PI = math_PI
global_frame.math_SQRT1_2 = math_SQRT1_2
global_frame.math_SQRT2 = math_SQRT2

// An environment is null or a pair whose head is a frame
// and whose tail is an environment.
const empty_environment = null
const global_environment = pair(global_frame, empty_environment)

const lookup = (x, e) => {
  if (is_null(e)) error(x, 'unbound name:')
  if (head(e).hasOwnProperty(x)) {
    const v = head(e)[x]
    if (is_unassigned(v)) error(cmd.sym, 'unassigned name:')
    return v
  }
  return lookup(x, tail(e))
}

const assign = (x, v, e) => {
  if (is_null(e)) error(x, 'unbound name:')
  if (head(e).hasOwnProperty(x)) {
    head(e)[x] = v
  } else {
    assign(x, v, tail(e))
  }
}

const extend = (xs, vs, e) => {
  if (vs.length > xs.length) error('too many arguments')
  if (vs.length < xs.length) error('too few arguments')
  const new_frame = {}
  for (let i = 0; i < xs.length; i++) new_frame[xs[i]] = vs[i]
  return pair(new_frame, e)
}

// At the start of executing a block, local
// variables refer to unassigned values.
const unassigned = { tag: 'unassigned' }

const is_unassigned = v => {
  return v !== null && typeof v === 'object' && v.hasOwnProperty('tag') && v.tag === 'unassigned'
}

/* ******************
 * handling sequences
 * ******************/

// Every sequence pushes a single value on stash.
// Empty sequences push undefined.
// Commands from non-empty sequences are separated
// by pop_i instructions so that only the result
// result of the last statement remains on stash.
const handle_sequence = seq => {
  if (seq.length === 0) return [{ tag: 'lit', undefined }]
  let result = []
  let first = true
  for (let cmd of seq) {
    first ? (first = false) : result.push({ tag: 'pop_i' })
    result.push(cmd)
  }
  return result.reverse()
}

/* ***************
 * handling blocks
 * ***************/

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
const scan = comp =>
  comp.tag === 'seq'
    ? comp.stmts.reduce((acc, x) => acc.concat(scan(x)), [])
    : ['let', 'const', 'fun'].includes(comp.tag)
    ? [comp.sym]
    : []

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
  array.splice(array.length, 0, ...items)
  return array
}

// return the last element of given array
// without changing the array
const peek = array => array.slice(-1)[0]

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// agenda A

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A

// stash S

// stash S is array of values that stores intermediate
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.

let S

// environment E

// See *environments* above. Execution initializes
// environment E as the global environment.

let E

/* *********************
 * interpreter microcode
 * *********************/

// The interpreter dispaches for each command tag to the
// microcode that belong to the tag.

// microcode.cmd_tag is the microcode for the command,
// a function that takes a command as argument and
// changes the configuration according to the meaning of
// the command. The return value is not used.

const microcode = {
  //
  // expressions
  //
  lit: cmd => push(S, cmd.val),
  nam: cmd => push(S, lookup(cmd.sym, E)),
  unop: cmd => push(A, { tag: 'unop_i', sym: cmd.sym }, cmd.frst),
  binop: cmd => push(A, { tag: 'binop_i', sym: cmd.sym }, cmd.scnd, cmd.frst),
  log: cmd =>
    push(
      A,
      cmd.sym == '&&'
        ? { tag: 'cond_expr', pred: cmd.frst, cons: { tag: 'lit', val: true }, alt: cmd.scnd }
        : { tag: 'cond_expr', pred: cmd.frst, cons: cmd.scnd, alt: { tag: 'lit', val: false } }
    ),
  cond_expr: cmd => push(A, { tag: 'branch_i', cons: cmd.cons, alt: cmd.alt }, cmd.pred),
  app: cmd =>
    push(
      A,
      { tag: 'app_i', arity: cmd.args.length },
      ...cmd.args, // already in reverse order, see ast_to_json
      cmd.fun
    ),
  assmt: cmd => push(A, { tag: 'assmt_i', sym: cmd.sym }, cmd.expr),
  lam: cmd => push(S, { tag: 'closure', prms: cmd.prms, body: cmd.body, env: E }),
  arr_acc: cmd => push(A, { tag: 'arr_acc_i' }, cmd.ind, cmd.arr),
  arr_assmt: cmd => push(A, { tag: 'arr_assmt_i' }, cmd.expr, cmd.ind, cmd.arr),

  //
  // statements
  //
  seq: cmd => push(A, ...handle_sequence(cmd.stmts)),
  cond_stmt: cmd => push(A, { tag: 'branch_i', cons: cmd.cons, alt: cmd.alt }, cmd.pred),
  blk: cmd => {
    const locals = scan(cmd.body)
    const unassigneds = locals.map(_ => unassigned)
    if (!(A.length === 0)) push(A, { tag: 'env_i', env: E })
    push(A, cmd.body)
    E = extend(locals, unassigneds, E)
  },
  let: cmd =>
    push(
      A,
      { tag: 'lit', val: undefined },
      { tag: 'pop_i' },
      { tag: 'assmt', sym: cmd.sym, expr: cmd.expr }
    ),
  const: cmd =>
    push(
      A,
      { tag: 'lit', val: undefined },
      { tag: 'pop_i' },
      { tag: 'assmt', sym: cmd.sym, expr: cmd.expr }
    ),
  ret: cmd => push(A, { tag: 'reset_i' }, cmd.expr),
  fun: cmd =>
    push(A, { tag: 'const', sym: cmd.sym, expr: { tag: 'lam', prms: cmd.prms, body: cmd.body } }),
  while: cmd =>
    push(
      A,
      { tag: 'lit', val: undefined },
      { tag: 'while_i', pred: cmd.pred, body: cmd.body },
      cmd.pred
    ),

  //
  // instructions
  //
  reset_i: cmd =>
    A.pop().tag === 'mark_i' // mark found?
      ? null // stop loop
      : push(A, cmd), // continue loop by pushing same
  // reset_i instruction back on agenda
  assmt_i:
    // peek top of stash without popping:
    // the value remains on the stash
    // as the value of the assignment
    cmd => assign(cmd.sym, peek(S), E),
  unop_i: cmd => push(S, apply_unop(cmd.sym, S.pop())),
  binop_i: cmd => push(S, apply_binop(cmd.sym, S.pop(), S.pop())),
  pop_i: _ => S.pop(),
  app_i: cmd => {
    const arity = cmd.arity
    let args = []
    for (let i = arity - 1; i >= 0; i--) args[i] = S.pop()
    const sf = S.pop()
    if (sf.tag === 'builtin') return push(S, apply_builtin(sf.sym, args))
    // remaining case: sf.tag === 'closure'
    if (A.length === 0 || peek(A).tag === 'env_i') {
      // current E not needed:
      // just push mark, and not env_i
      push(A, { tag: 'mark_i' })
    } else if (peek(A).tag === 'reset_i') {
      // tail call:
      // The callee's ret_i will push another reset_i
      // which will go to the correct mark.
      A.pop()
      // The current E is not needed, because
      // the following reset_i is the last body
      // instruction to be executed.
    } else {
      // general case:
      // push current environment
      push(A, { tag: 'env_i', env: E }, { tag: 'mark_i' })
    }
    push(A, sf.body)
    E = extend(sf.prms, args, sf.env)
  },
  branch_i: cmd => push(A, S.pop() ? cmd.cons : cmd.alt),
  while_i: cmd =>
    S.pop()
      ? push(
          A,
          cmd, // push while_i itself back on agenda
          cmd.pred,
          { tag: 'pop_i' }, // pop body value
          cmd.body
        )
      : null,
  env_i: cmd => (E = cmd.env),
  arr_acc_i: cmd => {
    const ind = S.pop()
    const arr = S.pop()
    push(S, arr[ind])
  },
  arr_assmt_i: cmd => {
    const val = S.pop()
    const ind = S.pop()
    const arr = S.pop()
    arr[ind] = val
    push(S, val)
  },
  throw_i: cmd => {
    const next = A.pop()
    if (next.tag === 'catch_i') {
      // catch found?
      const catch_cmd = next // stop loop
      push(A, { tag: 'env_i', env: catch_cmd.env }, catch_cmd.catch)
      E = extend([catch_cmd.sym], [S.pop()], catch_cmd.env)
    } else {
      // continue loop by pushing same
      push(A, cmd) // throw_i instruction back on agenda
    }
  },
  arr_lit: cmd => push(A, { tag: 'arr_lit_i', arity: cmd.elems.length }, ...cmd.elems), // already in reverse order, see ast_to_json
  arr_lit_i: cmd => {
    const arity = cmd.arity
    const array = S.slice(-arity - 1, S.length)
    S = S.slice(0, -arity)
    push(S, array)
  },
  arr_len: cmd => {
    push(A, { tag: 'arr_len_i' }, cmd.expr)
  },
  arr_len_i: cmd => {
    const arr = S.pop()
    push(S, arr.length)
  }
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

const execute = program => {
  A = [parse_to_json(program)]
  S = []
  E = global_environment
  let i = 0
  while (i < step_limit) {
    if (A.length === 0) break
    const cmd = A.pop()
    if (microcode.hasOwnProperty(cmd.tag)) {
      microcode[cmd.tag](cmd)
      //debug(cmd)
    } else {
      error('', 'unknown command: ' + command_to_string(cmd))
    }
    i++
  }
  if (i === step_limit) {
    error('step limit ' + JSON.stringify(step_limit) + ' exceeded')
  }
  if (S.length > 1 || S.length < 1) {
    error(S, 'internal error: stash must be singleton but is: ')
  }
  return console.log(S[0])
}

/* *********
 * debugging
 * *********/

// used for display of environments
const all_except_last = xs => (is_null(tail(xs)) ? null : pair(head(xs), all_except_last(tail(xs))))

const command_to_string = cmd =>
  cmd.tag === 'env_i' ? '{ tag: "env_i", env: ...}' : JSON.stringify(cmd)

const debug = cmd => {
  console.log(cmd.tag, 'executed command:')
  console.log('', 'A:')
  for (let cmd of A) console.log('', command_to_string(cmd))
  console.log('', 'S:')
  for (let val of S) console.log('', value_to_string(val))
  console.log('', 'E:')
  for_each(frame => {
    for (const key in frame) {
      console.log('', key + ': ' + value_to_string(frame[key]))
    }
    console.log('', '               ')
  }, all_except_last(E))
}

/* *******
 * testing
 * *******/

const test = (program, expected) => {
  console.log(
    '',
    `
      
  ****************
  Test case: ` +
      program +
      '\n'
  )
  const result = execute(program)
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log(result, 'success:')
  } else {
    console.log(expected, 'FAILURE! expected:')
    error(result, 'result:')
  }
}
