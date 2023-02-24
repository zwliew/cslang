import { ProgramValues } from '../interpreter/interpreter-types'

interface BaseNode {
  type: string
}

export type AstNode = Expression | Statement

//
//
// EXPRESSIONS
//
//

interface ExpressionMap {
  //   AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
  //   ConditionalExpression: ConditionalExpression
  Identifier: Identifier
  Literal: Literal
  //   LogicalExpression: LogicalExpression
  UnaryExpression: UnaryExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseExpression extends BaseNode {}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export interface Identifier extends BaseExpression {
  type: 'Identifier'
  value: string
}

export interface Literal extends BaseExpression {
  type: 'Literal'
  value: ProgramValues
}

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: UnaryOperator
  operand: Expression
}

export type UnaryOperator = '&' | '*' | '+' | '-' | '~' | '!'

export type BinaryOperator =
  | '*'
  | '/'
  | '%'
  | '+'
  | '-'
  | '<<'
  | '>>'
  | '<'
  | '>'
  | '<='
  | '>='
  | '=='
  | '!='
  | '&'
  | '^'
  | '|'
  | '||'
  | '&&'

//
//
// STATEMENTS
//
//

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseStatement extends BaseNode {}

export type Statement = ExpressionStatement | Block | IfStatement

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

// Conditional
export interface IfStatement extends BaseStatement {
  type: 'IfStatement'
  predicate: AstNode
  consequent: AstNode
  alternative?: AstNode
}

export interface Block extends BaseStatement {
  type: 'Block'
  statements: Array<Statement>
}
