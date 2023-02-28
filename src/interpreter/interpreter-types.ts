import { Environment } from './environment'
import { AstNode, BinaryOperator, Literal, Expression, Statement } from '../parser/ast-types'

export type ExpressibleValues = number | boolean
export type ProgramValues = ExpressibleValues | undefined

export type AgendaItems = AstNode | Instructions

interface BaseInstruction {
  type: string
}

export type Instructions =
  | iAssignment
  | iBinaryOperation
  | iIfStatement
  | iWhileStatement
  | iRestoreEnvironment
  | iPop

export interface iAssignment extends BaseInstruction {
  type: 'assmt_i'
  identifier: string
}

export interface iBinaryOperation extends BaseInstruction {
  type: 'binop_i'
  operator: BinaryOperator
}
export interface iIfStatement extends BaseInstruction {
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
