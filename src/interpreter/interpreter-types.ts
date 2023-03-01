import { AstNode, BinaryOperator, Block, Expression, Statement } from '../parser/ast-types'
import { Environment } from './environment'

export type ExpressibleValues = number | boolean
export type ProgramValues = ExpressibleValues | undefined

export type AgendaItems = AstNode | Instructions

interface BaseInstruction {
  type: string
}

export type Instructions =
  | iAssignment
  | iBinaryOperation
  | iIf
  | iWhileStatement
  | iRestoreEnvironment
  | iPop
  | iSwitchEnv
  | iSwitch
  | iSwitchBranch
  | iSwitchDefault
  | iBreak
  | iCase

export interface iAssignment extends BaseInstruction {
  type: 'assmt_i'
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
  switch_value: ProgramValues
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
