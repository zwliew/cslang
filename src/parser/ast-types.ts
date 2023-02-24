import { ProgramValues } from '../interpreter/interpreter-types'

interface BaseNode {
  type: string
}

export type AstNode = Expression | Statement | Declaration

//
//
// EXPRESSIONS
//
//

interface ExpressionMap {
  AssignmentExpression: AssignmentExpression
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

export interface AssignmentExpression extends BaseExpression {
  type: 'AssignmentExpression'
  operator: AssignmentOperator
  identifier: string
  value: Expression
}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export interface Identifier extends BaseExpression {
  type: 'Identifier'
  identifier: string
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

export type AssignmentOperator =
  | '='
  | '*='
  | '/='
  | '%='
  | '+='
  | '-='
  | '<<='
  | '>>='
  | '&='
  | '^='
  | '|='

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

//
//
// DECLARATIONS
//
//

export interface Declaration {
  type: 'Declaration'
  typeSpecifier: TypeSpecifier // TODO: Have a proper list of types
  identifier: string
  value?: Expression
}

export type TypeSpecifier =
  | 'void'
  | 'char'
  | 'short'
  | 'int'
  | 'long'
  | 'float'
  | 'double'
  | 'signed'
  | 'unsigned'
  | '_Bool'
  | '_Complex'
  | '__m128'
  | '__m128d'
  | '__m128i'
