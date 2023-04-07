import {
  ArrayTypeSpecifier,
  AssignmentExpression,
  AstNode,
  BinaryOperator,
  Block,
  Expression,
  Literal,
  PointerTypeSpecifier,
  StringLiteral,
  ValueDeclaration
} from '../parser/ast-types'
import { isPointerType, sizeOfType } from '../types'
import { DEBUG_PRINT_FINAL_OS, DEBUG_PRINT_MEMORY, DEBUG_PRINT_STEPS } from '../utils/debug'
import Decimal from '../utils/decimal'
import { IllegalArgumentError, NotImplementedError, RuntimeError } from '../utils/errors'
import { Environment } from './classes/environment'
import { FunctionStore } from './classes/function-store'
import { Memory } from './classes/memory'
import {
  BREAK_INSTRUCTION,
  CASE_INSTRUCTION,
  CONTINUE_MARK_INSTRUCTION,
  POP_INSTRUCTION,
  SWITCH_DEFAULT_INSTRUCTION,
  UNDEFINED_LITERAL
} from './constants'
import { InterpreterError, UndeclaredIdentifierError } from './errors'
import { AgendaItems, iFunctionEnvironment, MemoryAddress } from './interpreter-types'
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
// callStack: stack of environments of functions that are currently executing 

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

// Stack of environments of functions that are currently executing,
// excluding the current environment `E`. That is, the true call stack
// comprises `callStack` with `E` appended to it.
let callStack: Environment[]

// Pop while enforcing that the array is non-empty.
function pop<T>(arr: Array<T>): T {
  if (!arr.length) {
    throw new IllegalArgumentError('Cannot pop from empty array.')
  }
  return arr.pop()!
}

// Execution initialize environment E as the global environment.

let E: Environment

let M: Memory

let FS: FunctionStore

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
  const switch_value = pop(OS)
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
  const result: AgendaItems[] = [{ type: 'value_assmt_i' }, assignExp.assignee]

  if (assignExp.operator === '=') {
    // This is a simple assignment.
    result.push(assignExp.value)
    return result
  }

  // Otherwise, this is a fused assignment (i.e. +=, >>=, etc.)
  const binop = assignExp.operator.slice(0, -1) as BinaryOperator
  if (fusedAssignmentBinOps.has(binop)) {
    result.push({ type: 'binop_i', operator: binop }, assignExp.value, assignExp.assignee)
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

    case 'StringLiteral':
      OS.push(M.stringLiteralToLiteral(code))
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
      E = E.extend({ memory: M })
      break

    case 'ValueDeclaration':
      const location = M.allocateStack(sizeOfType(code.typeSpecifier))
      E.declare(code.identifier, {
        type: 'MemoryAddress',
        typeSpecifier: code.typeSpecifier,
        location: location
      })

      if (code.value) {
        // There is a value for this declaration. Handle the assignment

        // We need to check if the type of the assignee is a char[].
        // We are doing some TypeScript hackery to check that its an array
        const assigneeType = code.typeSpecifier as ArrayTypeSpecifier

        if (assigneeType.arrOf === 'char' && code.value.type === 'StringLiteral') {
          // We are assigning a string literal to a char array.

          // Assert that the size of the array is big enough
          if (assigneeType.size <= code.value.string.length) {
            throw new RuntimeError(
              `Trying to assign a string ${code.value.string} to an array of size ${assigneeType.size}`
            )
          }
          M.assignStringLiteralToArray(code.value.string, location)
        } else {
          A.push(
            POP_INSTRUCTION,
            { type: 'value_assmt_i' },
            { type: 'Identifier', identifier: code.identifier },
            code.value
          )
        }
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
        OS.push({
          type: 'Literal',
          typeSpecifier: addr.typeSpecifier,
          value: M.getValue(addr),
          address: addr
        })
      } else {
        // Function calling is handled in postfixExpression
        throw new UndeclaredIdentifierError(code.identifier)
      }

      break
    }

    case 'WhileStatement':
      A.push(
        { type: 'loop_env_i', environment: E },
        { type: 'while_i', pred: code.pred, body: code.body },
        code.pred
      )
      E = E.extend({ memory: M })
      break

    case 'DoWhileStatement':
      A.push(
        { type: 'loop_env_i', environment: E },
        { type: 'while_i', pred: code.pred, body: code.body },
        code.pred,
        code.body
      )
      E = E.extend({ memory: M })
      break

    case 'ForStatement':
      A.push(
        { type: 'loop_env_i', environment: E },
        { type: 'for_i', pred: code.pred, body: code.body, post: code.post },
        code.pred
      )
      if (code.init) {
        A.push(code.init)
      }
      E = E.extend({ memory: M })
      break

    case 'Switch':
      A.push({ type: 'switch_env_i', environment: E })
      A.push({ type: 'switch_i', block: code.block }, code.expression)
      E = E.extend({ memory: M })
      break

    case 'SwitchCaseDefault':
      break

    case 'Break':
      A.push({ type: 'break_i' })
      break

    case 'Continue':
      while (A.length > 0 && pop(A).type !== 'continue_mark_i') {}
      if (!A.length) {
        throw new RuntimeError('Could not find a loop marker to continue to.')
      }
      break

    case 'UnaryExpression':
      if (code.operator === '-') {
        OS.push({ type: 'Literal', typeSpecifier: 'int', value: new Decimal(-1) })
        A.push({ type: 'binop_i', operator: '*' }, code.operand)
      } else if (code.operator === '&') {
        // Address-of operator
        if (code.operand.type !== 'Identifier') {
          // TODO: support more expressions
          throw new IllegalArgumentError('Address-of operator can only be applied to identifiers')
        }
        const addr = E.get(code.operand.identifier) as MemoryAddress
        OS.push({
          type: 'Literal',
          typeSpecifier: { ptrTo: addr.typeSpecifier },
          value: new Decimal(addr.location)
        })
      } else if (code.operator === '*') {
        // Dereference operator
        A.push({ type: 'dereference_i' }, code.operand)
      } else if (code.operator === 'sizeof') {
        A.push({ type: 'sizeof_i' }, code.operand)
      } else if (code.operator === '!') {
        OS.push({ type: 'Literal', typeSpecifier: 'int', value: new Decimal(0) })
        A.push({ type: 'binop_i', operator: '==' }, code.operand)
      } else if (
        code.operator === 'pr++' ||
        code.operator === 'pr--' ||
        code.operator === 'po++' ||
        code.operator === 'po--'
      ) {
        // Evaluate the operand to get a Literal onto the OS
        // Does not support non identifier
        if (code.operand.type !== 'Identifier') {
          throw new NotImplementedError('Attempting to increment/decrement non identifier')
        }
        A.push(
          { type: 'crement_i', operator: code.operator, identifier: code.operand.identifier },
          code.operand
        )
      } else {
        // TODO: implement '~' and '+' unary operator
        throw new NotImplementedError("Unary operator '" + code.operator + "' is not implemented")
      }
      break

    case 'crement_i': {
      // Decide whether to return the new value or old value
      const value = OS.pop()
      if (!value) {
        throw new NotImplementedError('Attempting to increment/decrement nothing')
      }
      switch (code.operator) {
        case 'pr++':
          value.value = value.value.add(1)
          A.push({
            type: 'AssignmentExpression',
            operator: '=',
            assignee: { type: 'Identifier', identifier: code.identifier },
            value: value
          })
          break

        case 'pr--':
          value.value = value.value.sub(1)
          A.push({
            type: 'AssignmentExpression',
            operator: '=',
            assignee: { type: 'Identifier', identifier: code.identifier },
            value: value
          })
          break

        case 'po++': {
          const valueCopy: Literal = { ...value }
          value.value = value.value.add(1)
          A.push(valueCopy, POP_INSTRUCTION, {
            type: 'AssignmentExpression',
            operator: '=',
            assignee: { type: 'Identifier', identifier: code.identifier },
            value: value
          })
          break
        }

        case 'po--': {
          const valueCopy: Literal = { ...value }
          value.value = value.value.sub(1)
          A.push(valueCopy, POP_INSTRUCTION, {
            type: 'AssignmentExpression',
            operator: '=',
            assignee: { type: 'Identifier', identifier: code.identifier },
            value: value
          })
          break
        }
      }

      break
    }

    case 'FunctionDeclaration':
      // Call main if a main is declared
      if (code.identifier === 'main') {
        A.push({ type: 'FunctionApplication', identifier: 'main', arguments: [] })
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
      const functionAndEnv = FS.getFunctionAndEnv(code.identifier)

      const functionDefinition = functionAndEnv[0]
      if (functionDefinition.returnType === 'void') {
        // There might not be a 'return' statement for void functions, so we need to push a dummy value here preemptively.
        A.push(UNDEFINED_LITERAL)
      }

      // Save the current environment
      A.push({ type: 'fn_env_i', environment: E, functionReturnType: functionAndEnv[0].returnType })

      const parameterList = functionDefinition.parameterList
      const parameters =
        parameterList?.parameters.map(parameterDeclaration => ({
          typeSpecifier: parameterDeclaration.typeSpecifier,
          name: parameterDeclaration.identifier
        })) ?? []

      if (code.arguments.length !== parameters.length) {
        throw new RuntimeError('Number of arguments does not match number of parameters')
      }

      A.push({
        type: 'app_i',
        identifier: code.identifier,
        arity: code.arguments.length
      })

      // We can only declare parameters *after* evaluating all arguments to the function.
      const declarations = []
      for (let i = 0; i < code.arguments.length; i++) {
        // Push the literal back onto the OS to be copied by 'app_i'
        A.push({ type: 'Identifier', identifier: parameters[i].name })

        declarations.push({ name: parameters[i].name, typeSpecifier: parameters[i].typeSpecifier })
      }
      A.push({
        type: 'param_decl_i',
        declarations,
        fnName: code.identifier,
        env: functionAndEnv[1]
      })

      for (let i = code.arguments.length - 1; i >= 0; --i) {
        A.push(code.arguments[i])
      }
      break
    }

    case 'Return': {
      // TODO: typechecking
      let topInstrn = A.at(-1)
      while (A.length > 0 && topInstrn?.type !== 'fn_env_i') {
        A.pop()
        topInstrn = A.at(-1)
      }
      if (topInstrn === undefined || topInstrn.type !== 'fn_env_i') {
        throw new RuntimeError('Return statement outside of function')
      }
      if (code.expression) {
        // Only push the return value if the function is not void.
        // If it is void, we would have already pushed a dummy value in 'FunctionApplication'
        A.push({ type: 'cast_i', typeSpecifier: topInstrn.functionReturnType }, code.expression)
      }
      break
    }

    case 'CastExpression':
      A.push({ type: 'cast_i', typeSpecifier: code.typeSpecifier }, code.operand)
      break

    /******************
     * Instructions
     *****************/

    case 'app_i': {
      const functionAndEnv = FS.getFunctionAndEnv(code.identifier)
      const functionArguments: Literal[] = []
      for (let i = 0; i < code.arity; i++) {
        // Makes a copy of each value
        functionArguments.push(pop(OS))
      }

      // Primitive functions can be called directly in the interpreter
      if (functionAndEnv[0].primitive) {
        const ret = functionAndEnv[0].primitiveFunction!({
          callStack,
          E,
          M,
          args: functionArguments
        })
        if (ret.typeSpecifier !== 'void') {
          // Only push the return value for non-void functions, as we have already
          // pushed a dummy value for void functions in FunctionApplication
          A.push(ret)
        }
        break
      }

      A.push(...functionAndEnv[0].body.slice().reverse())
      break
    }

    case 'param_decl_i':
      // Push the previus function environment onto the call stack first.
      callStack.push(E)

      // Extend the environment with a frame mapping from parameter to argument value
      E = code.env.extend({ memory: M, name: code.fnName })
      for (const { name, typeSpecifier } of code.declarations) {
        const address: MemoryAddress = {
          type: 'MemoryAddress',
          typeSpecifier,
          location: M.allocateStack(sizeOfType(typeSpecifier))
        }
        E.declare(name, address)

        // Push arguments in reverse order. OS will have arguments in the correct order
        A.push(POP_INSTRUCTION, { type: 'value_assmt_i' }, { type: 'Identifier', identifier: name })
      }
      break

    case 'value_assmt_i': {
      // Get the address the name is refering to
      const lit = pop(OS)
      if (lit.address === undefined) {
        throw new IllegalArgumentError("Can't assign to a literal without a memory address.")
      }
      // Set the topmost literal value into memory
      const value = OS.at(-1)!
      M.setValue(lit.address, value)
      break
    }

    case 'binop_i':
      {
        const v2 = pop(OS)
        const v1 = pop(OS)
        OS.push(apply_binop(code.operator, v2, v1))
      }
      break

    case 'branch_i':
      if (is_true(pop(OS))) {
        A.push(code.consequent)
      } else if (code.alternative) {
        A.push(code.alternative)
      }
      break

    case 'fn_env_i':
      // Pop the previous function environment off the call stack and *fall through*
      pop(callStack)
    case 'env_i':
    case 'switch_env_i':
    case 'loop_env_i':
      M.reinstateStackPointer(E.stackPointer)
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
      {
        const pred_val = pop(OS)
        if (is_true(pred_val)) {
          A.push(code, code.pred, CONTINUE_MARK_INSTRUCTION, code.body)
        }
      }
      break

    case 'for_i':
      {
        const pred_val = pop(OS)
        if (is_true(pred_val)) {
          A.push(code, code.pred)
          if (code.post) {
            A.push(POP_INSTRUCTION, code.post)
          }
          A.push(CONTINUE_MARK_INSTRUCTION, code.body)
        }
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
      while (A.length > 0 && A.at(-1)!.type !== 'switch_env_i' && A.at(-1)!.type !== 'loop_env_i') {
        pop(A)
      }
      if (!A.length) {
        throw new RuntimeError('Could not find a switch or loop to break out of.')
      }
      break

    case 'continue_mark_i':
      // Do nothing. This is just a marker for continue statements to know where to continue to.
      break

    case 'case_i':
      if (is_false(pop(OS))) {
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

    case 'dereference_i':
      {
        const ptr = pop(OS)
        if (isPointerType(ptr.typeSpecifier)) {
          // This is a pointer type.
          const memAddress: MemoryAddress = {
            type: 'MemoryAddress',
            typeSpecifier: (ptr.typeSpecifier as PointerTypeSpecifier).ptrTo,
            location: ptr.value.toNumber()
          }

          OS.push({
            type: 'Literal',
            typeSpecifier: (ptr.typeSpecifier as PointerTypeSpecifier).ptrTo,
            value: M.getValue(memAddress),
            address: memAddress
          })
        } else {
          throw new IllegalArgumentError('Operand of unary * operator must have pointer type.')
        }
      }
      break

    case 'sizeof_i': {
      const typeSpecifier = OS.pop()!.typeSpecifier

      OS.push({
        type: 'Literal',
        typeSpecifier: 'int',
        value: new Decimal(sizeOfType(typeSpecifier))
      })
      break
    }

    case 'cast_i':
      OS.push({
        type: 'Literal',
        typeSpecifier: code.typeSpecifier,
        // TODO: Need to ensure values are bounded
        value: OS.pop()!.value
      })
      break

    default:
      error(code, 'Unknown command: ')
  }
}

/* ****************
 * interpreter loop
 * ****************/

const STEP_LIMIT = 10000000 // 1e7

export const execute = (program: AstNode) => {
  A = [program]
  OS = []
  E = new Environment({ name: '*Global*' })
  FS = new FunctionStore()
  M = new Memory(1e4) // Use 10KB of memory
  callStack = []

  let i = 0
  while (i < STEP_LIMIT) {
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

  if (A.length) {
    throw new RuntimeError('Terminated program due to step limit.')
  }

  if (DEBUG_PRINT_FINAL_OS) {
    console.log('Final OS:', OS)
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

  // TODO: Modulo 2^8 = 256 for return values from main
  return OS[0].value
}
