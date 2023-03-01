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
  typeSpecifier: TypeSpecifier
  value: number
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

export type Statement =
  | ExpressionStatement
  | Block
  | If
  | SwitchCase
  | Switch
  | WhileStatement
  | Jump

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

// Conditional
export interface If extends BaseStatement {
  type: 'If'
  predicate: AstNode
  consequent: AstNode
  alternative?: AstNode
}

export interface Switch extends BaseStatement {
  type: 'Switch'
  expression: Expression
  block: Block // non SwitchCase nodes are ignored in the interpreter
}

export type SwitchCase = SwitchCaseBranch | SwitchCaseDefault

export interface SwitchCaseBranch extends BaseStatement {
  type: 'SwitchCaseBranch'
  case: AstNode
  consequent: AstNode
}

export interface SwitchCaseDefault extends BaseStatement {
  type: 'SwitchCaseDefault'
  consequent: AstNode
}

export interface Block extends BaseStatement {
  type: 'Block'
  statements: Array<Statement>
}

// Loops
export interface WhileStatement extends BaseStatement {
  type: 'WhileStatement'
  pred: Expression
  body: Statement
}

export interface Jump extends BaseStatement {
  type: 'Break'
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
