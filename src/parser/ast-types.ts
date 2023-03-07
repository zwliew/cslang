import Decimal from 'decimal.js'

interface BaseNode {
  type: string
}

export interface CompilationUnit extends BaseNode {
  type: 'CompilationUnit'
  declarations: Array<Declarations>
}

export type AstNode = CompilationUnit | Expression | Statement | Declarations

//
//
// EXPRESSIONS
//
//

interface ExpressionMap {
  AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
  // ConditionalExpression: ConditionalExpression
  Identifier: Identifier
  FunctionApplciation: FunctionApplication
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

export interface FunctionApplication extends BaseExpression {
  type: 'FunctionApplication'
  identifier: string
  arguments: Array<Expression>
}

export interface Literal extends BaseExpression {
  type: 'Literal'
  typeSpecifier: TypeSpecifier
  value: Decimal
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
  | Break
  | DoWhileStatement
  | Return

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

export interface DoWhileStatement extends BaseStatement {
  type: 'DoWhileStatement'
  pred: Expression
  body: Statement
}

export interface Break extends BaseStatement {
  type: 'Break'
}

export interface Return extends BaseStatement {
  type: 'Return'
  expression?: Expression
}

//
//
// DECLARATIONS
//
//

// TODO: separate into sections
export type Declarations =
  | Declaration
  | ParameterList
  | ParameterDeclaration
  | Declarator
  | StraySemicolon
export type StraySemicolon = { type: 'StraySemicolon' }

export type Declaration = ValueDeclaration | FunctionDeclaration
export interface ValueDeclaration extends BaseNode {
  type: 'ValueDeclaration'
  typeSpecifier: TypeSpecifier // TODO: Have a proper list of types
  identifier: string
  value?: Expression
}

export interface FunctionDeclaration extends BaseNode {
  type: 'FunctionDeclaration'
  identifier: string
  functionDefinition: FunctionDefinition
}

export interface FunctionDefinition extends BaseNode {
  type: 'FunctionDefinition'
  returnType: TypeSpecifier
  parameterList?: ParameterList
  body: Array<Statement>
}

export interface ParameterList extends BaseNode {
  type: 'ParameterList'
  parameters: Array<ParameterDeclaration>
  // varargs: boolean
}

export interface ParameterDeclaration extends BaseNode {
  type: 'ParameterDeclaration'
  typeSpecifier: TypeSpecifier
  name: Declarator
}

// A Declaration can consist of multiple Declarators. In `int x = 0`, `int x` is the Declarator
export interface Declarator extends BaseNode {
  type: 'Declarator'
  name: string
  pointerDepth: number // * = 1, ** = 2 etc.
}

export type TypeSpecifier =
  | 'void'
  | 'char'
  | 'short'
  | 'int'
  | 'signed'
  | 'unsigned'
  | 'long'
  | 'float'
  | 'double'
  | '_Bool'
  | 'long long'
  | 'long double'
  | 'unsigned char'
  | 'unsigned short'
  | 'unsigned int'
  | 'unsigned long'
  | 'unsigned long long'

export type RawTypeSpecifier =
  | 'void'
  | 'char'
  | 'short'
  | 'int'
  | 'signed'
  | 'unsigned'
  | 'long'
  | 'float'
  | 'double'
  | '_Bool'
  | 'signed char'
  | 'unsigned char'
  | 'short int'
  | 'signed short int'
  | 'unsigned short'
  | 'unsigned short int'
  | 'signed int'
  | 'unsigned int'
  | 'long int'
  | 'signed long'
  | 'signed long int'
  | 'unsigned long'
  | 'unsigned long int'
  | 'long long'
  | 'long long int'
  | 'signed long long'
  | 'signed long long int'
  | 'unsigned long long'
  | 'unsigned long long int'
  | 'long double'
