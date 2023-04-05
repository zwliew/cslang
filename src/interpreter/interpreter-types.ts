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
  | iForStatement
  | iLoopEnv
  | iContinueMark
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
  | iFunctionParamDeclaration
  | iDereference
  | iNot
  | iSizeof
  | iCast
  | iCrement

export interface iValueAssignment extends BaseInstruction {
  type: 'value_assmt_i'
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
  functionReturnType: TypeSpecifier
}

export interface iPop extends BaseInstruction {
  type: 'pop_i'
}

export interface iWhileStatement extends BaseInstruction {
  type: 'while_i'
  pred: Expression
  body: Statement
}

export interface iForStatement extends BaseInstruction {
  type: 'for_i'
  pred: Expression
  body: Statement
  post?: Expression
}

export interface iLoopEnv extends BaseInstruction {
  type: 'loop_env_i'
  environment: Environment
}

export interface iContinueMark extends BaseInstruction {
  type: 'continue_mark_i'
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

export interface iFunctionParamDeclaration extends BaseInstruction {
  type: 'param_decl_i'
  declarations: { name: string; typeSpecifier: TypeSpecifier }[]
  fnName: string
}

export interface iDereference extends BaseInstruction {
  type: 'dereference_i'
}

export interface iNot extends BaseInstruction {
  type: 'not_i'
}

export interface iSizeof extends BaseInstruction {
  type: 'sizeof_i'
}

export interface iCast extends BaseInstruction {
  type: 'cast_i'
  typeSpecifier: TypeSpecifier
}

export interface iCrement extends BaseInstruction {
  type: 'crement_i'
  identifier: string
  operator: 'pr++' | 'pr--' | 'po++' | 'po--'
}
