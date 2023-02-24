import { AstNode, BinaryOperator } from '../parser/ast-types'

// TODO: Consider whether to remove "undefined"
export type ProgramValues = number | boolean | undefined

export type AgendaItems = AstNode | Instructions

export interface BaseInstruction {
  type: string
}

export type Instructions = iBinaryOperation | iIfStatement

export interface iBinaryOperation extends BaseInstruction {
  type: 'binop_i'
  operator: BinaryOperator
}
export interface iIfStatement extends BaseInstruction {
  type: 'branch_i'
  consequent: AstNode
  alternative?: AstNode
}
