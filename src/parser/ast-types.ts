import { Memory } from '../interpreter/classes/memory'
import { MemoryAddress } from '../interpreter/interpreter-types'
import type { DecimalType } from '../utils/decimal'

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

export type Expression =
  | AssignmentExpression
  | BinaryExpression
  | ConditionalExpression
  | Identifier
  | FunctionApplication
  | Literal
  | StringLiteral
  | UnaryExpression
  | CastExpression
//  | LogicalExpression

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseExpression extends BaseNode {}

export interface AssignmentExpression extends BaseExpression {
  type: 'AssignmentExpression'
  operator: AssignmentOperator
  assignee: Expression
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
  value: DecimalType
  address?: MemoryAddress
}

export interface StringLiteral extends BaseExpression {
  type: 'StringLiteral'
  string: string
}

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: UnaryOperator
  operand: Expression
}

export type UnaryOperator =
  | '&'
  | '*'
  | '+'
  | '-'
  | '~'
  | '!'
  | 'sizeof'
  | 'pr++'
  | 'pr--'
  | 'po++'
  | 'po--'

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

export interface CastExpression extends BaseExpression {
  type: 'CastExpression'
  typeSpecifier: TypeSpecifier
  operand: Expression
}
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
  | Continue
  | DoWhileStatement
  | ForStatement
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

// Ternary operator
export interface ConditionalExpression extends BaseStatement {
  type: 'ConditionalExpression'
  predicate: Expression
  consequent: Expression
  alternative: Expression
}

export interface Switch extends BaseStatement {
  type: 'Switch'
  expression: Expression
  block: Block // non SwitchCase nodes are ignored in the interpreter
}

export type SwitchCase =
  | SwitchCaseBranch
  | SwitchCaseDefault
  | SwitchCaseBranchRaw
  | SwitchCaseDefaultRaw

export interface SwitchCaseBranch extends BaseStatement {
  type: 'SwitchCaseBranch'
  case: AstNode
}

export interface SwitchCaseBranchRaw extends BaseStatement {
  type: 'SwitchCaseBranchRaw'
  case: AstNode
  consequent: Statement
}

export interface SwitchCaseDefault extends BaseStatement {
  type: 'SwitchCaseDefault'
}

export interface SwitchCaseDefaultRaw extends BaseStatement {
  type: 'SwitchCaseDefaultRaw'
  consequent: Statement
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

export interface ForStatement extends BaseStatement {
  type: 'ForStatement'
  init?: ValueDeclaration
  pred: Expression
  body: Statement
  post?: Expression
}

export interface Break extends BaseStatement {
  type: 'Break'
}

export interface Continue extends BaseStatement {
  type: 'Continue'
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
  | DeclarationSpecifiers

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
  primitive: boolean
  primitiveFunction?: (m: Memory, ...varargs: Literal[]) => Literal
}

export interface ParameterList extends BaseNode {
  type: 'ParameterList'
  parameters: Array<ParameterDeclaration>
  // varargs: boolean
}

export interface ParameterDeclaration extends BaseNode {
  type: 'ParameterDeclaration'
  typeSpecifier: TypeSpecifier
  identifier: string
}

// A Declaration can consist of multiple Declarators. In `int x = 0`, `int x` is the Declarator
export interface Declarator extends BaseNode {
  type: 'Declarator'
  identifier: string
  pointerDepth: number // Indicates how many pointers we need (i.e. char *c = 1, int **i = 2)
  arraySize?: number // Indicates the size of the array (i.e. int arr[5] = 5)
}

export interface DeclarationSpecifiers extends BaseNode {
  type: 'DeclarationSpecifiers'
  typeSpecifier: TypeSpecifier
}

export type PrimitiveTypeSpecifier = Exclude<
  TypeSpecifier,
  PointerTypeSpecifier | ArrayTypeSpecifier
>
export type ArithmeticTypeSpecifier = Exclude<PrimitiveTypeSpecifier, 'void'>
export type IntegerTypeSpecifier = Exclude<
  ArithmeticTypeSpecifier,
  'float' | 'double' | 'long double'
>
export type PointerTypeSpecifier = { ptrTo: TypeSpecifier }
export type ArrayTypeSpecifier = { arrOf: TypeSpecifier; size: number }
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
  | PointerTypeSpecifier // a pointer to a type
  | ArrayTypeSpecifier

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
