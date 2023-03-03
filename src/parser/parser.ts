import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { STRAY_SEMICOLON, UNDEFINED_LITERAL } from '../interpreter/constants'
import { CLexer } from '../lang/CLexer'
import {
  AdditiveExpressionContext,
  AndExpressionContext,
  AssignmentExpressionContext,
  BlockItemContext,
  CastExpressionContext,
  CompilationUnitContext,
  CompoundStatementContext,
  ConditionalExpressionContext,
  ConstantExpressionContext,
  CParser,
  DeclarationContext,
  DeclaratorContext,
  EqualityExpressionContext,
  ExclusiveOrExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalDeclarationContext,
  FunctionDefinitionContext,
  InclusiveOrExpressionContext,
  IterationStatementContext,
  JumpStatementContext,
  LabeledStatementContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  ParameterDeclarationContext,
  ParameterTypeListContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  SelectionStatementContext,
  ShiftExpressionContext,
  StatementContext,
  TypeSpecifierContext,
  UnaryExpressionContext,
  UnaryOperatorContext
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'
import { NotImplementedError } from '../utils/errors'
import {
  AssignmentOperator,
  AstNode,
  BinaryOperator,
  Block,
  Declarations,
  Declarator,
  Expression,
  FunctionDeclaration,
  If,
  ParameterDeclaration,
  ParameterList,
  Statement,
  SwitchCase,
  TypeSpecifier,
  UnaryOperator,
  ValueDeclaration
} from './ast-types'

export class CGenerator implements CVisitor<AstNode> {
  visit(tree: ParseTree): AstNode {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): AstNode {
    // From what I can tell, if we don't override one of the visitors for a rule,
    // It would use this visit method instead.
    console.warn('[Warn] Using undefined visitor method! ' + node.constructor.name)
    // console.warn(`Number of children: ${node.childCount}`)
    // console.warn(`Text: ${node.text}`)
    // for (let i = 0; i < node.childCount; i++) {
    //   console.warn(`Child ${i}: ${node.getChild(i).text}`)
    // }

    // Just return the first child for now
    return node.getChild(0).accept(this)
  }

  visitTerminal(node: TerminalNode): AstNode {
    // We should not reach here - We should be handling the terminal nodes directly
    // in each visit method.
    throw 'Visited TerminalNode: ' + JSON.stringify(node)
  }

  visitErrorNode(node: ErrorNode): AstNode {
    throw 'Visited ErrorNode: ' + JSON.stringify(node)
  }

  visitCompilationUnit(ctx: CompilationUnitContext): AstNode {
    const compoundStatement = ctx.compoundStatement()
    const externalDeclarations = ctx.externalDeclaration()
    if (compoundStatement) {
      return this.visitCompoundStatement(compoundStatement)
    } else if (externalDeclarations.length > 0) {
      return {
        type: 'CompilationUnit',
        declarations: externalDeclarations.map(externalDeclaration =>
          this.visitExternalDeclaration(externalDeclaration)
        )
      }
    } else {
      // Invalid program string
      // return UNDEFINED_LITERAL
      throw new NotImplementedError(ctx.text)
    }
  }

  visitExternalDeclaration(ctx: ExternalDeclarationContext): Declarations {
    // Flatten this node away
    const declaration = ctx.declaration()
    const functionDefinition = ctx.functionDefinition()
    if (declaration) {
      return this.visitDeclaration(declaration)
    } else if (functionDefinition) {
      return this.visitFunctionDefinition(functionDefinition)
    } else {
      // stray ;
      return STRAY_SEMICOLON
      throw new NotImplementedError(ctx.text)
    }
  }

  //
  //
  // EXPRESSIONS
  //
  // The ordering of the expression visitor methods are in reverse order of C.g4
  // TODO: Change method signature to `Expression`
  //

  visitExpression(ctx: ExpressionContext): Expression {
    const assignmentExpression = ctx.assignmentExpression()
    if (assignmentExpression.length === 1) {
      return this.visitAssignmentExpression(assignmentExpression[0])
    } else {
      // Comma separated expressions
      throw new NotImplementedError(ctx.text)
    }
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext): Expression {
    const conditionalExpression = ctx.conditionalExpression()
    if (conditionalExpression) {
      return this.visitConditionalExpression(conditionalExpression) as Expression
    }
    // Assigning a value to something
    // TODO: implement parsing

    const leftContext = ctx.unaryExpression()
    const rightContext = ctx.assignmentExpression()

    if (leftContext === undefined || rightContext === undefined) {
      throw new NotImplementedError(ctx.text)
    }

    const operator = ctx.assignmentOperator()!.text

    // Left should be a name, right should be an expression
    return {
      type: 'AssignmentExpression',
      operator: operator as AssignmentOperator,
      identifier: leftContext.text,
      value: this.visitAssignmentExpression(rightContext)
    }
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): AstNode {
    if (ctx.childCount === 1) {
      return this.visitLogicalOrExpression(ctx.logicalOrExpression())
    } else {
      // Ternary conditional (?, :)
      const predicate = this.visitLogicalOrExpression(ctx.logicalOrExpression())
      const consequent = this.visitExpression(ctx.expression()!)
      const alternative = this.visitConditionalExpression(ctx.conditionalExpression()!)
      return {
        type: 'If',
        predicate: predicate,
        consequent: consequent,
        alternative: alternative
      }
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): AstNode {
    const logicalAndExpression = ctx.logicalAndExpression()
    if (logicalAndExpression.length === 1) {
      return logicalAndExpression[0].accept(this)
    } else {
      // Logical or (||)
      // TODO: implement parsing
      throw new NotImplementedError(ctx.text)
    }
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): AstNode {
    const inclusiveOrExpression = ctx.inclusiveOrExpression()
    if (inclusiveOrExpression.length === 1) {
      return inclusiveOrExpression[0].accept(this)
    } else {
      // Logical and (&&)
      // TODO: implement parsing
      throw new NotImplementedError(ctx.text)
    }
  }

  visitInclusiveOrExpression(ctx: InclusiveOrExpressionContext): Expression {
    const exclusiveOrExpression = ctx.exclusiveOrExpression()
    if (exclusiveOrExpression.length === 1) {
      return this.visitExclusiveOrExpression(exclusiveOrExpression[0])
    } else {
      // Bitwise or (|)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: '|',
        left: this.visitExclusiveOrExpression(exclusiveOrExpression[0]),
        right: this.visitExclusiveOrExpression(exclusiveOrExpression[1])
      }

      for (let i = 2; i < exclusiveOrExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: '|',
          left: expression,
          right: this.visitExclusiveOrExpression(exclusiveOrExpression[i])
        }
      }
      return expression
    }
  }

  visitExclusiveOrExpression(ctx: ExclusiveOrExpressionContext): Expression {
    const andExpression = ctx.andExpression()
    if (andExpression.length === 1) {
      return this.visitAndExpression(andExpression[0])
    } else {
      // Bitwise xor (^)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: '^',
        left: this.visitAndExpression(andExpression[0]),
        right: this.visitAndExpression(andExpression[1])
      }

      for (let i = 2; i < andExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: '^',
          left: expression,
          right: this.visitAndExpression(andExpression[i])
        }
      }
      return expression
    }
  }

  visitAndExpression(ctx: AndExpressionContext): Expression {
    const equalityExpression = ctx.equalityExpression()
    if (equalityExpression.length === 1) {
      return this.visitEqualityExpression(equalityExpression[0])
    } else {
      // Bitwise and (&)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: '&',
        left: this.visitEqualityExpression(equalityExpression[0]),
        right: this.visitEqualityExpression(equalityExpression[1])
      }

      for (let i = 2; i < equalityExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: '&',
          left: expression,
          right: this.visitEqualityExpression(equalityExpression[i])
        }
      }
      return expression
    }
  }

  visitEqualityExpression(ctx: EqualityExpressionContext): Expression {
    const relationalExpression = ctx.relationalExpression()
    if (relationalExpression.length === 1) {
      return this.visitRelationalExpression(relationalExpression[0])
    } else {
      // Equality comparison (==, !=)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: this.visitRelationalExpression(relationalExpression[0]),
        right: this.visitRelationalExpression(relationalExpression[1])
      }

      for (let i = 2; i < relationalExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: this.visitRelationalExpression(relationalExpression[i])
        }
      }
      return expression
    }
  }

  visitRelationalExpression(ctx: RelationalExpressionContext): Expression {
    const shiftExpression = ctx.shiftExpression()
    if (shiftExpression.length === 1) {
      return this.visitShiftExpression(shiftExpression[0])
    } else {
      // Relational comparison (<, >, <=, >=)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: this.visitShiftExpression(shiftExpression[0]),
        right: this.visitShiftExpression(shiftExpression[1])
      }

      for (let i = 2; i < shiftExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: this.visitShiftExpression(shiftExpression[i])
        }
      }
      return expression
    }
  }

  visitShiftExpression(ctx: ShiftExpressionContext): Expression {
    const additiveExpression = ctx.additiveExpression()
    if (additiveExpression.length === 1) {
      return this.visitAdditiveExpression(additiveExpression[0])
    } else {
      // Bitshift (<<, >>)
      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: this.visitAdditiveExpression(additiveExpression[0]),
        right: this.visitAdditiveExpression(additiveExpression[1])
      }

      for (let i = 2; i < additiveExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: this.visitAdditiveExpression(additiveExpression[i])
        }
      }
      return expression
    }
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): Expression {
    const multiplicativeExpression = ctx.multiplicativeExpression()
    if (multiplicativeExpression.length === 1) {
      return this.visitMultiplicativeExpression(multiplicativeExpression[0])
    } else {
      // Addition and subtraction (+, -)

      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: this.visitMultiplicativeExpression(multiplicativeExpression[0]),
        right: this.visitMultiplicativeExpression(multiplicativeExpression[1])
      }

      for (let i = 2; i < multiplicativeExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: this.visitMultiplicativeExpression(multiplicativeExpression[i])
        }
      }

      return expression
    }
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): Expression {
    const castExpressions = ctx.castExpression()
    if (castExpressions.length === 1) {
      return castExpressions[0].accept(this) as Expression
    } else {
      // Multiplication, division and modulo (*, /, %)

      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression = {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: castExpressions[0].accept(this) as Expression,
        right: castExpressions[1].accept(this) as Expression
      }

      for (let i = 2; i < castExpressions.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: castExpressions[i].accept(this) as Expression
        }
      }

      return expression
    }
  }

  visitCastExpression(ctx: CastExpressionContext): AstNode {
    const unaryExpression = ctx.unaryExpression()
    if (unaryExpression) {
      return unaryExpression.accept(this)
    } else {
      // Typecasting ((typeName) expression)
      // TODO: implement parsing
      throw new NotImplementedError(ctx.text)
    }
  }

  visitUnaryExpression(ctx: UnaryExpressionContext): AstNode {
    const postfixExpression = ctx.postfixExpression()
    if (postfixExpression) {
      return postfixExpression.accept(this)
    }

    const unaryOperator = ctx.unaryOperator()
    if (unaryOperator) {
      // unaryOperator castExpression
      return {
        type: 'UnaryExpression',
        operator: this.unaryOperatorContextToString(unaryOperator),
        operand: this.visitCastExpression(ctx.castExpression()!) as Expression
      }
    } else {
      // Unary expression (++, -- prefix)
      // TODO: implement parsing
      throw new NotImplementedError(ctx.text)
    }
  }

  // Internal method to convert unary operators to strings directly instead of an AstNode
  unaryOperatorContextToString(ctx: UnaryOperatorContext): UnaryOperator {
    if (ctx.Minus()) {
      return '-'
    } else {
      throw new NotImplementedError(ctx.text)
    }
  }

  visitPostfixExpression(ctx: PostfixExpressionContext): AstNode {
    const primaryExpression = ctx.primaryExpression()
    if (primaryExpression) {
      if (ctx.LeftParen().length > 0) {
        // Is function application
        const functionArguments = []
        const argumentExpressionList = ctx.argumentExpressionList()
        if (argumentExpressionList.length === 1) {
          for (const assignmentExpression of argumentExpressionList[0].assignmentExpression()) {
            functionArguments.push(this.visitAssignmentExpression(assignmentExpression))
          }
        }

        return {
          type: 'FunctionApplication',
          identifier: primaryExpression.text,
          arguments: functionArguments
        }
      } else {
        // Flatten
        return primaryExpression.accept(this)
      }
    } else {
      // Postfix expression (++, -- suffix, [] for arrays, ., -> for structs)
      // TODO: implement parsing
      throw new NotImplementedError(ctx.text)
    }
  }

  visitPrimaryExpression(ctx: PrimaryExpressionContext): Expression {
    const constantValue = ctx.Constant()
    if (constantValue) {
      // Assume integers for now
      const value = parseInt(constantValue.toString())
      if (!isNaN(value)) {
        return {
          type: 'Literal',
          typeSpecifier: 'int', // DEFAULT FOR NOW
          value: value
        }
      }
      throw new NotImplementedError(ctx.text)
    }

    const expression = ctx.expression()
    if (expression) {
      return this.visitExpression(expression)
    }

    const identifier = ctx.Identifier()
    if (identifier) {
      return {
        type: 'Identifier',
        identifier: identifier.toString()
      }
    }

    // TODO: String literals
    throw new NotImplementedError(ctx.text)
  }

  //
  //
  // STATEMENTS
  //
  //

  visitCompoundStatement(ctx: CompoundStatementContext): Block {
    const blockItemList = ctx.blockItemList()?.blockItem() ?? []
    return {
      type: 'Block',
      statements: blockItemList.map(v => v.accept(this)) as Statement[]
    }
  }

  extractFromCompoundStatement(ctx: CompoundStatementContext): Array<Statement> {
    const blockItemList = ctx.blockItemList()?.blockItem() ?? []
    return blockItemList.map(v => v.accept(this)) as Statement[]
  }

  visitStatement(ctx: StatementContext): AstNode {
    const expressionStatement = ctx.expressionStatement()
    if (expressionStatement) {
      return this.visitExpressionStatement(expressionStatement)
    }

    const selectionStatement = ctx.selectionStatement()
    if (selectionStatement) {
      return this.visitSelectionStatement(selectionStatement)
    }

    const compoundStatement = ctx.compoundStatement()
    if (compoundStatement) {
      return this.visitCompoundStatement(compoundStatement)
    }

    const iterationStatement = ctx.iterationStatement()
    if (iterationStatement) {
      return this.visitIterationStatement(iterationStatement)
    }

    const labeledStatement = ctx.labeledStatement()
    if (labeledStatement) {
      return this.visitLabeledStatement(labeledStatement)
    }

    const jumpStatement = ctx.jumpStatement()
    if (jumpStatement) {
      return this.visitJumpStatement(jumpStatement)
    }

    // Other forms of statements
    throw new NotImplementedError(ctx.text)
  }

  visitJumpStatement(ctx: JumpStatementContext): AstNode {
    if (ctx.Break()) {
      return {
        type: 'Break'
      }
    } else if (ctx.Return()) {
      const expression = ctx.expression()
      if (expression) {
        return {
          type: 'Return',
          expression: this.visitExpression(expression)
        }
      } else {
        return {
          type: 'Return'
        }
      }
    } else {
      throw new NotImplementedError(ctx.text)
    }
  }

  visitSelectionStatement(ctx: SelectionStatementContext): AstNode {
    if (ctx.If()) {
      const statements = ctx.statement()
      const ifStatementNode: If = {
        type: 'If',
        predicate: this.visitExpression(ctx.expression()),
        consequent: this.visitStatement(statements[0])
      }
      if (statements.length !== 1) {
        // There is an else statement
        ifStatementNode.alternative = this.visitStatement(statements[1])
      }
      return ifStatementNode
    } else {
      // Is switch case
      const expression = this.visitExpression(ctx.expression())
      // There must be only one statement, which is the compound statement in {}
      const switchBlock = this.visitCompoundStatement(ctx.statement()[0].compoundStatement()!)
      return {
        type: 'Switch',
        expression: expression,
        block: switchBlock
      }
    }
  }

  visitLabeledStatement(ctx: LabeledStatementContext): SwitchCase {
    if (ctx.Case()) {
      return {
        type: 'SwitchCaseBranch',
        case: this.visitConstantExpression(ctx.constantExpression()!),
        consequent: this.visitStatement(ctx.statement())
      }
    } else if (ctx.Default()) {
      return {
        type: 'SwitchCaseDefault',
        consequent: this.visitStatement(ctx.statement())
      }
    } else {
      // Is a label (e.g. done: ...)
      throw NotImplementedError
    }
  }

  visitConstantExpression(ctx: ConstantExpressionContext): AstNode {
    // Flatten this node as it only has one rule
    return this.visitConditionalExpression(ctx.conditionalExpression())
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): AstNode {
    const expression = ctx.expression()

    if (expression) {
      return {
        type: 'ExpressionStatement',
        expression: this.visitExpression(expression)
      }
    }

    throw new NotImplementedError(ctx.text)
  }

  visitIterationStatement(ctx: IterationStatementContext): Statement {
    if (ctx.Do()) {
      return {
        type: 'DoWhileStatement',
        pred: this.visitExpression(ctx.expression()!) as Expression, // expression should be defined for do-while
        body: this.visitStatement(ctx.statement()) as Statement
      }
    } else if (ctx.While()) {
      return {
        type: 'WhileStatement',
        pred: this.visitExpression(ctx.expression()!) as Expression, // expression should be defined for while
        body: this.visitStatement(ctx.statement()) as Statement
      }
    } else {
      // TODO: implement for loops
      throw new NotImplementedError(ctx.text)
    }
  }

  visitBlockItem(ctx: BlockItemContext): AstNode {
    // statement | declaration. Flatten this node away
    return (ctx.children as ParseTree[])[0].accept(this)
  }

  //
  //
  // DECLARATIONS
  //
  //

  visitDeclaration(ctx: DeclarationContext): ValueDeclaration {
    const typeSpecifier = ctx.typeSpecifier().text // TODO: Coerce into the actual class?
    const initDeclarator = ctx.initDeclaratorList().initDeclarator()

    if (initDeclarator.length != 1) {
      // Multiple declarations on a single line, ie int x = 1, y = 2;
      throw new NotImplementedError(ctx.text)
    }

    const identifier = initDeclarator[0].declarator().text
    const initializer = initDeclarator[0].initializer()

    const value =
      initializer === undefined
        ? undefined
        : this.visitAssignmentExpression(initializer.assignmentExpression())

    return {
      type: 'ValueDeclaration',
      typeSpecifier: typeSpecifier as TypeSpecifier,
      identifier: identifier,
      value: value
    }
  }

  // function definitions are essentially assignments like const name = fn {code}, as if fn {code} is a lambda expression in JS
  visitFunctionDefinition(ctx: FunctionDefinitionContext): FunctionDeclaration {
    const functionNameWithParameters = ctx.declarator().directDeclarator()
    const functionNameContext = functionNameWithParameters.directDeclarator()
    if (!functionNameContext) {
      // Invalid declaration
      throw new Error('Invalid function declaration, parentheses missing')
    }

    let returnType: TypeSpecifier
    const typeSpecifier = ctx.typeSpecifier()
    if (typeSpecifier.length == 0) {
      // Default to int
      returnType = 'int'
    } else if (typeSpecifier.length === 1) {
      returnType = this.typeSpecifierCtxToTypeSpecifier(typeSpecifier[0])
    } else {
      throw new NotImplementedError(ctx.text)
    }

    const parameterTypeList = functionNameWithParameters.parameterTypeList()
    const identifierList = functionNameWithParameters.identifierList()

    const baseFunctionDeclaration: FunctionDeclaration = {
      type: 'FunctionDeclaration',
      identifier: functionNameContext.text,
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: returnType,
        body: this.extractFromCompoundStatement(ctx.compoundStatement())
      }
    }
    if (parameterTypeList) {
      baseFunctionDeclaration.functionDefinition.parameterList =
        this.visitParameterTypeList(parameterTypeList)
      return baseFunctionDeclaration
    } else if (identifierList) {
      throw new NotImplementedError(ctx.text)
    } else {
      return baseFunctionDeclaration
    }
  }

  typeSpecifierCtxToTypeSpecifier(ctx: TypeSpecifierContext): TypeSpecifier {
    const text = ctx.text
    if (
      text === 'void' ||
      text === 'char' ||
      text === 'int' ||
      text === 'long' ||
      text === 'float' ||
      text === 'double'
    ) {
      return ctx.text as TypeSpecifier
    } else {
      throw new NotImplementedError(ctx.text)
    }
  }

  visitParameterTypeList(ctx: ParameterTypeListContext): ParameterList {
    const parameterList: ParameterList = {
      type: 'ParameterList',
      parameters: ctx
        .parameterList()
        .parameterDeclaration()
        .map(parameterDeclaration => this.visitParameterDeclaration(parameterDeclaration))
    }

    if (ctx.Ellipsis()) {
      // TODO: add a varargs: true property to the visited ParameterList
      throw new NotImplementedError(ctx.text)
    }

    return parameterList
  }

  visitParameterDeclaration(ctx: ParameterDeclarationContext): ParameterDeclaration {
    if (ctx.abstractDeclarator()) {
      throw new NotImplementedError(ctx.text)
    }
    const typeSpecifier = ctx.typeSpecifier()
    if (typeSpecifier.length != 1) {
      throw new NotImplementedError(ctx.text)
    }

    return {
      type: 'ParameterDeclaration',
      typeSpecifier: typeSpecifier[0].text as TypeSpecifier,
      name: this.visitDeclarator(ctx.declarator()!)
    }
  }

  visitDeclarator(ctx: DeclaratorContext): Declarator {
    if (ctx.pointer()) {
      throw new NotImplementedError(ctx.text)
    }
    const identifier = ctx.directDeclarator().Identifier()
    if (!identifier) {
      throw new NotImplementedError(ctx.text)
    }
    return {
      type: 'Declarator',
      name: identifier.text,
      pointerDepth: 0
    }
  }
}

export function parse(source: string) {
  const inputStream = CharStreams.fromString(source)
  const lexer = new CLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new CParser(tokenStream)
  parser.buildParseTree = true

  const tree = parser.compilationUnit()
  const generator = new CGenerator()
  const program: AstNode = tree.accept(generator)

  return program
}
