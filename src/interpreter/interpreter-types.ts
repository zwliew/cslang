import { AstNode, BinaryOperator, Literal } from '../parser/ast-types'
import { Environment } from './environment'

export type ExpressibleValues = number | boolean
export type ProgramValues = ExpressibleValues | undefined

export type AgendaItems = AstNode | Instructions

interface BaseInstruction {
  type: string
}

export type Instructions = iAssignment |iBinaryOperation | iIfStatement | iRestoreEnvironment | iPop

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
