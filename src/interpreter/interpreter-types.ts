import {
  AstNode,
  BinaryOperator,
  Block,
  Expression,
  Literal,
  Statement,
  TypeSpecifier
} from '../parser/ast-types'
import { Environment } from './classes/environment'

/***************
 * Memory
 ***************/

export type Address = MemoryAddress | FunctionStackAddress

export interface MemoryAddress {
  type: 'MemoryAddress'
  typeSpecifier: TypeSpecifier
  location: number
}

export interface FunctionStackAddress {
  type: 'FunctionStackAddress'
  location: number
}

/***************
 * Agenda Items
 ***************/

export type AgendaItems = AstNode | Instructions

interface BaseInstruction {
  type: string
}

export type Instructions =
  | iValueAssignment
  | iFunctionAssignment
  | iBinaryOperation
  | iIf
  | iWhileStatement
  | iRestoreEnvironment
  | iFunctionEnvironment
  | iPop
  | iSwitchEnv
  | iSwitch
  | iSwitchBranch
  | iSwitchDefault
  | iBreak
  | iCase
  | iFunctionApplication
  | iDereference

export interface iValueAssignment extends BaseInstruction {
  type: 'value_assmt_i'
  identifier: string
}

export interface iFunctionAssignment extends BaseInstruction {
  type: 'function_assmt_i'
  identifier: string
}

export interface iBinaryOperation extends BaseInstruction {
  type: 'binop_i'
  operator: BinaryOperator
}
export interface iIf extends BaseInstruction {
  type: 'branch_i'
  consequent: AstNode
  alternative?: AstNode
}

export interface iRestoreEnvironment extends BaseInstruction {
  type: 'env_i'
  environment: Environment
}

export interface iFunctionEnvironment extends BaseInstruction {
  type: 'fn_env_i'
  environment: Environment
}

export interface iPop extends BaseInstruction {
  type: 'pop_i'
}

export interface iWhileStatement extends BaseInstruction {
  type: 'while_i'
  pred: Expression
  body: Statement
}

export interface iSwitchEnv extends BaseInstruction {
  type: 'switch_env_i'
  environment: Environment
}

export interface iSwitch extends BaseInstruction {
  type: 'switch_i'
  block: Block
}

export interface iSwitchBranch extends BaseInstruction {
  type: 'switch_branch_i'
  switch_value: Literal
  case: AstNode
}

export interface iSwitchDefault extends BaseInstruction {
  type: 'switch_default_i'
}

export interface iBreak extends BaseInstruction {
  type: 'break_i'
}

export interface iCase extends BaseInstruction {
  type: 'case_i'
}

export interface iFunctionApplication extends BaseInstruction {
  type: 'app_i'
  identifier: string
  arity: number
}

export interface iDereference extends BaseInstruction {
  type: 'dereference_i'
}
