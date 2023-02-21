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
  value: boolean | number
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

interface BaseStatement extends BaseNode {}

export type Statement = ExpressionStatement | Block

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface Block extends BaseStatement {
  type: 'Block'
  statements: Array<Statement>
}
