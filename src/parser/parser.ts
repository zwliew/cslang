import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { STRAY_SEMICOLON } from '../interpreter/constants'
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
  DeclarationSpecifiersContext,
  DeclaratorContext,
  EqualityExpressionContext,
  ExclusiveOrExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalDeclarationContext,
  ForDeclarationContext,
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
  TypeNameContext,
  UnaryExpressionContext,
  UnaryOperatorContext
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'
import { isValidRawTypeSpecifier, multiwordTypeToTypeSpecifier, sizeOfType } from '../types'
import Decimal from '../utils/decimal'
import { IllegalArgumentError, NotImplementedError, ParseError } from '../utils/errors'
import {
  AssignmentOperator,
  AstNode,
  BinaryOperator,
  Block,
  Declarations,
  DeclarationSpecifiers,
  Declarator,
  Expression,
  FunctionDeclaration,
  If,
  ParameterDeclaration,
  ParameterList,
  RawTypeSpecifier,
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

    const operator = ctx.assignmentOperator()!.text

    const leftContext = ctx.unaryExpression()
    const rightContext = ctx.assignmentExpression()
    if (leftContext === undefined || rightContext === undefined) {
      throw new NotImplementedError(ctx.text)
    }

    // Left should be a name or a pointer to some expression, right should be an expression
    return {
      type: 'AssignmentExpression',
      operator: operator as AssignmentOperator,
      assignee: this.visitUnaryExpression(leftContext),
      value: this.visitAssignmentExpression(rightContext)
    }
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): Expression {
    if (ctx.childCount === 1) {
      return this.visitLogicalOrExpression(ctx.logicalOrExpression())
    } else {
      // Ternary conditional (?, :)
      const predicate = this.visitLogicalOrExpression(ctx.logicalOrExpression())
      const consequent = this.visitExpression(ctx.expression()!)
      const alternative = this.visitConditionalExpression(ctx.conditionalExpression()!)
      return {
        type: 'ConditionalExpression',
        predicate: predicate,
        consequent: consequent,
        alternative: alternative
      }
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): Expression {
    const logicalAndExpression = ctx.logicalAndExpression()
    if (logicalAndExpression.length === 1) {
      return logicalAndExpression[0].accept(this) as Expression
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
      let expression: Expression = {
        type: 'BinaryExpression',
        operator: '&&',
        left: this.visitInclusiveOrExpression(inclusiveOrExpression[0]),
        right: this.visitInclusiveOrExpression(inclusiveOrExpression[1])
      }

      for (let i = 2; i < inclusiveOrExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: '&&',
          left: expression,
          right: this.visitInclusiveOrExpression(inclusiveOrExpression[i])
        }
      }
      return expression
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

  visitCastExpression(ctx: CastExpressionContext): Expression {
    const unaryExpression = ctx.unaryExpression()
    if (unaryExpression) {
      return this.visitUnaryExpression(unaryExpression)
    }

    const typeName = ctx.typeName()

    if (typeName) {
      // Typecasting ((typeName) expression)
      const typeSpecifier = this.getTypeName(typeName)
      return {
        type: 'CastExpression',
        typeSpecifier: typeSpecifier,
        operand: this.visitCastExpression(ctx.castExpression()!)
      }
    }

    throw new NotImplementedError(ctx.text)
  }

  visitUnaryExpression(ctx: UnaryExpressionContext): Expression {
    const unaryOperator = ctx.unaryOperator()
    if (unaryOperator) {
      return {
        type: 'UnaryExpression',
        operator: this.unaryOperatorContextToString(unaryOperator),
        operand: this.visitCastExpression(ctx.castExpression()!)
      }
    }

    const postfixExpression = ctx.postfixExpression()
    const plusPlus = ctx.PlusPlus()
    const minusMinus = ctx.MinusMinus()
    if (plusPlus.length > 0 || minusMinus.length > 0) {
      if (plusPlus.length + minusMinus.length > 1) {
        throw new ParseError(`More than one ++/-- not allowed: ${ctx.text}`)
      } else if (ctx.Sizeof().length > 0) {
        throw new ParseError(`++/-- with sizeof not allowed: ${ctx.text}`)
      } else if (!postfixExpression || !postfixExpression.primaryExpression()) {
        throw new ParseError(`++/-- without operand: ${ctx.text}`)
      } else if (!postfixExpression.primaryExpression()?.Identifier) {
        throw new ParseError(`++/-- without valid identifier: ${ctx.text}`)
      }

      return {
        type: 'UnaryExpression',
        operator: plusPlus.length > 0 ? 'pr++' : 'pr--',
        operand: this.visitPostfixExpression(postfixExpression)
      }
    }

    const typeName = ctx.typeName()
    if (typeName) {
      // Finding size of a type. Immediately return a literal
      return {
        type: 'Literal',
        typeSpecifier: 'int',
        value: new Decimal(sizeOfType(this.getTypeName(typeName)))
      }
    }

    const sizeOf = ctx.Sizeof()[0]
    if (sizeOf) {
      // There are two sizeOf operators in C,
      // sizeOf(type) and sizeOf(value)
      // The previous if block already checked for sizeOf(type)
      // So we are doing sizeOf(value) here instead

      return {
        type: 'UnaryExpression',
        operator: 'sizeof',
        operand: this.visitPostfixExpression(ctx.postfixExpression()!)
      }
    }

    if (postfixExpression) {
      return this.visitPostfixExpression(postfixExpression)
    }

    throw new NotImplementedError(ctx.text)
  }

  // Internal method to convert unary operators to strings directly instead of an AstNode
  unaryOperatorContextToString(ctx: UnaryOperatorContext): UnaryOperator {
    if (ctx.Minus()) {
      // Unary minus
      return '-'
    } else if (ctx.And()) {
      // Address-of operator
      // TODO: enforce that the operand is a function designator, result of [] or unary * operator, or lvalue (6.5.3.2)
      return '&'
    } else if (ctx.Star()) {
      // Dereference operator
      // TODO: enforce that the operand has pointer type (6.5.3.2)
      return '*'
    } else if (ctx.Not()) {
      return '!'
    } else {
      // TODO: implement '+', '~' unary operators
      throw new NotImplementedError(ctx.text)
    }
  }

  visitPostfixExpression(ctx: PostfixExpressionContext): Expression {
    // Postfix expression (++, -- suffix, [] for arrays, ., -> for structs)
    const primaryExpression = ctx.primaryExpression()
    // Explicitly type the function to allow all return types of visitPostfixExpression to be used as an argument
    type expressionProducerType = (x: Expression) => Expression
    let expressionProducer: expressionProducerType = x => x
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
        return expressionProducer({
          type: 'FunctionApplication',
          identifier: primaryExpression.text,
          arguments: functionArguments
        })
      }

      // Check for po++ and po--. If they are present, change the function expressionProducer to delay the application of the operators
      const plusPlus = ctx.PlusPlus().length
      const minusMinus = ctx.MinusMinus().length
      if (plusPlus > 0 || minusMinus > 0) {
        // There should only be one increment/decrement operator
        const numberOfCrementOperators = plusPlus + minusMinus
        if (numberOfCrementOperators > 1) {
          throw new ParseError(ctx.text)
        }
        expressionProducer = x => ({
          type: 'UnaryExpression',
          operator: plusPlus > 0 ? 'po++' : 'po--',
          operand: x
        })
      }

      if (ctx.expression().length > 0) {
        // Array subscripting (6.5.2.1)
        const expression = ctx.expression()
        if (expression.length > 1) {
          // TODO: support more than 1 subscripts
          throw new NotImplementedError(
            'Array subscripting with more than 1 subscript is not supported yet'
          )
        }
        return expressionProducer({
          type: 'UnaryExpression',
          operator: '*',
          operand: {
            type: 'BinaryExpression',
            operator: '+',
            left: this.visitPrimaryExpression(primaryExpression),
            right: this.visitExpression(expression[0])
          }
        })
      } else {
        // Flatten
        return expressionProducer(this.visitPrimaryExpression(primaryExpression))
      }
    }
    throw new NotImplementedError(ctx.text)
  }

  visitPrimaryExpression(ctx: PrimaryExpressionContext): Expression {
    const constantString = ctx.Constant()?.toString()

    if (constantString) {
      // Check if it's a supported character literal
      if (constantString.charAt(constantString.length - 1) === `'`) {
        if (constantString.charAt(0) !== `'`) {
          // u8/u/U/L prefixed strings
          throw new NotImplementedError('Prefixed character literals not supported')
        }

        const charWithoutQuotes = constantString.substring(1, constantString.length - 1)
        const encoding = charWithoutQuotes.charAt(1)
        if (encoding === 'x') {
          // Value of character literal is limited by size of char
          const largeUnicodeInt = parseInt(charWithoutQuotes.substring(2), 16) % 64
          return {
            type: 'Literal',
            typeSpecifier: 'char',
            value: new Decimal(largeUnicodeInt)
          }
        }

        const charCodeStr = charWithoutQuotes.replace(/\\u[\dA-F]{4}/gi, match => {
          return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
        })
        // Assert that there is only one character
        if (charCodeStr.length > 1) {
          throw new NotImplementedError(
            'Attempting to create char literal of length greater than 1'
          )
        }
        return {
          type: 'Literal',
          typeSpecifier: 'char',
          value: new Decimal(charCodeStr.charCodeAt(0))
        }
      }

      // Is either an integer or float literal
      // Check for prefixes
      let literalValue: Decimal
      const isInt = !(
        constantString.includes('.') ||
        constantString.includes('e') ||
        constantString.includes('E')
      )
      try {
        if (constantString.length > 1 && constantString.charAt(0) === '0') {
          const prefixEncoding = constantString.charAt(1)
          switch (prefixEncoding) {
            case 'x':
            case 'X':
              literalValue = new Decimal(parseInt(constantString.substring(2), 16))
              break

            case 'b':
            case 'B':
              literalValue = new Decimal(parseInt(constantString.substring(2), 2))
              break

            default:
              // Octal
              literalValue = new Decimal(parseInt(constantString.substring(1), 8))
              break
          }
        } else {
          literalValue = new Decimal(constantString)
        }
      } catch (e) {
        throw new ParseError(`'${ctx.text}' is not a valid integer or float literal`)
      }

      if (literalValue.isNaN()) {
        throw new ParseError(`'${ctx.text}' is NaN`)
      }

      if (isInt) {
        return {
          type: 'Literal',
          typeSpecifier: 'int',
          value: literalValue
        }
      } else {
        return {
          type: 'Literal',
          typeSpecifier: 'double', // Floating point literals (eg 1.23) have type double
          value: literalValue
        }
      }
    }

    const stringLiteral = ctx.StringLiteral()
    if (stringLiteral.length === 1) {
      // Is a string literal
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

    // Unknown literal
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

  visitStatement(ctx: StatementContext): Statement {
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

  visitJumpStatement(ctx: JumpStatementContext): Statement {
    if (ctx.Continue()) {
      return {
        type: 'Continue'
      }
    } else if (ctx.Break()) {
      return {
        type: 'Break'
      }
    } else if (ctx.Return()) {
      const expression = ctx.expression()
      return {
        type: 'Return',
        expression: expression ? this.visitExpression(expression) : undefined
      }
    } else {
      throw new NotImplementedError(ctx.text)
    }
  }

  visitSelectionStatement(ctx: SelectionStatementContext): Statement {
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
      const switchBlockRaw = this.visitCompoundStatement(ctx.statement()[0].compoundStatement()!)
      // Extract consequents and put them after the switch case branch
      const switchBlock: Block = { type: 'Block', statements: [] }
      for (const statement of switchBlockRaw.statements) {
        if (statement.type === 'SwitchCaseBranchRaw') {
          switchBlock.statements.push(
            {
              type: 'SwitchCaseBranch',
              case: statement.case
            },
            statement.consequent
          )
        } else if (statement.type === 'SwitchCaseDefaultRaw') {
          switchBlock.statements.push({ type: 'SwitchCaseDefault' }, statement.consequent)
        } else {
          switchBlock.statements.push(statement)
        }
      }
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
        type: 'SwitchCaseBranchRaw',
        case: this.visitConstantExpression(ctx.constantExpression()!),
        consequent: this.visitStatement(ctx.statement())
      }
    } else if (ctx.Default()) {
      return {
        type: 'SwitchCaseDefaultRaw',
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

  visitExpressionStatement(ctx: ExpressionStatementContext): Statement {
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
        pred: this.visitExpression(ctx.expression()!), // expression should be defined for do-while
        body: this.visitStatement(ctx.statement())
      }
    } else if (ctx.While()) {
      return {
        type: 'WhileStatement',
        pred: this.visitExpression(ctx.expression()!), // expression should be defined for while
        body: this.visitStatement(ctx.statement())
      }
    } else if (ctx.For()) {
      // This is a for loop.
      const cond = ctx.forCondition()
      if (!cond) {
        throw new IllegalArgumentError('For loop must have a condition.')
      }

      const forExpr = cond.forExpression()
      if (!forExpr || forExpr.length <= 1) {
        // TODO: support omission of expressions
        throw new NotImplementedError('For loop without predicate is not implemented. (6.8.5.3)')
      }

      const forInitExpr = cond.expression()
      if (forInitExpr !== undefined) {
        throw new NotImplementedError('For loop with init expressions is not implemented.')
      }

      const forDecl = cond.forDeclaration()

      return {
        type: 'ForStatement',
        init: forDecl ? this.visitForDeclaration(forDecl) : undefined,
        pred: this.visitExpression(forExpr[0]),
        body: this.visitStatement(ctx.statement()),
        post: this.visitExpression(forExpr[1])
      }
    }
    throw new NotImplementedError(ctx.text)
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
    // TODO: remove duplication of code with visitForDeclaration()
    const declarationSpecifiers = this.visitDeclarationSpecifiers(ctx.declarationSpecifiers())

    const initDeclarator = ctx.initDeclaratorList()!.initDeclarator()
    if (initDeclarator.length != 1) {
      // Multiple declarations on a single line, ie int x = 1, y = 2;
      throw new NotImplementedError(ctx.text)
    }

    let typeSpecifier = declarationSpecifiers.typeSpecifier
    const declarator = this.visitDeclarator(initDeclarator[0].declarator())
    for (let i = 0; i < declarator.pointerDepth; ++i) {
      typeSpecifier = { ptrTo: typeSpecifier }
    }
    if (declarator.arraySize) {
      typeSpecifier = { arrOf: typeSpecifier, size: declarator.arraySize }
    }

    const initializer = initDeclarator[0].initializer()
    const value =
      initializer === undefined
        ? undefined
        : this.visitAssignmentExpression(initializer.assignmentExpression())

    return {
      type: 'ValueDeclaration',
      typeSpecifier,
      identifier: declarator.identifier,
      value
    }
  }

  visitForDeclaration(ctx: ForDeclarationContext): ValueDeclaration {
    // TODO: remove duplication of code with visitDeclaration()
    const typeSpecifiers = ctx
      .typeSpecifier()
      .map(typeSpecifier => typeSpecifier.text)
      .reduce((nextType, previousTypes) => nextType + ' ' + previousTypes)

    if (!isValidRawTypeSpecifier(typeSpecifiers)) {
      throw new NotImplementedError(`Attempting to use unknown type ${typeSpecifiers}`)
    }

    let typeSpecifier = multiwordTypeToTypeSpecifier(typeSpecifiers)

    const initDeclaratorList = ctx.initDeclaratorList()
    if (initDeclaratorList === undefined) {
      throw new IllegalArgumentError('For loop declaration init declarator list is undefined.')
    }
    const initDeclarator = initDeclaratorList.initDeclarator()

    if (initDeclarator.length != 1) {
      // Multiple declarations on a single line, ie int x = 1, y = 2;
      throw new NotImplementedError(ctx.text)
    }

    const declarator = this.visitDeclarator(initDeclarator[0].declarator())
    for (let i = 0; i < declarator.pointerDepth; ++i) {
      typeSpecifier = { ptrTo: typeSpecifier }
    }
    if (declarator.arraySize) {
      typeSpecifier = { arrOf: typeSpecifier, size: declarator.arraySize }
    }

    const initializer = initDeclarator[0].initializer()
    const value =
      initializer === undefined
        ? undefined
        : this.visitAssignmentExpression(initializer.assignmentExpression())

    return {
      type: 'ValueDeclaration',
      typeSpecifier,
      identifier: declarator.identifier,
      value
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
    if (ctx.declarationSpecifiers() === undefined) {
      // Default function return types to int
      returnType = 'int'
    } else {
      const declarationSpecifiers = this.visitDeclarationSpecifiers(ctx.declarationSpecifiers()!)
      returnType = declarationSpecifiers.typeSpecifier
    }

    const parameterTypeList = functionNameWithParameters.parameterTypeList()
    const identifierList = functionNameWithParameters.identifierList()

    const baseFunctionDeclaration: FunctionDeclaration = {
      type: 'FunctionDeclaration',
      identifier: functionNameContext.text,
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: returnType,
        body: this.extractFromCompoundStatement(ctx.compoundStatement()),
        primitive: false
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
      // TODO: implement abstract declarators (i.e. void f(int *) without an identifier)
      throw new NotImplementedError(ctx.text)
    }

    const declarationSpecifiers = this.visitDeclarationSpecifiers(ctx.declarationSpecifiers())

    const declarator = ctx.declarator()
    if (!declarator) {
      throw new NotImplementedError(
        "Parameter declarations without declarators aren't supported yet."
      )
    }

    const { pointerDepth, arraySize, identifier } = this.visitDeclarator(declarator)
    let typeSpecifier = declarationSpecifiers.typeSpecifier
    for (let i = 0; i < pointerDepth; ++i) {
      typeSpecifier = { ptrTo: typeSpecifier }
    }
    if (arraySize) {
      typeSpecifier = { arrOf: typeSpecifier, size: arraySize }
    }

    return {
      type: 'ParameterDeclaration',
      typeSpecifier,
      identifier
    }
  }

  visitDeclarator(ctx: DeclaratorContext): Declarator {
    // Determine the number of pointers we need (i.e. for `int **x;`)
    let pointerDepth = 0
    const pointerChildren = ctx.pointer()?.children ?? []
    for (const child of pointerChildren) {
      if (child.text !== '*') {
        // Stop at the first non-pointer child
        // TODO: support other "pointer-like" keywords like `int *const`.
        break
      }
      ++pointerDepth
    }

    // Now, we get the left-most direct declarator (the identifier).
    // This is needed to parse arrays (i.e. int arr[1];)
    let curDeclarator = ctx.directDeclarator()
    let directDeclaratorCount = 0
    for (
      let nextDeclarator = curDeclarator.directDeclarator();
      nextDeclarator !== undefined;
      nextDeclarator = nextDeclarator.directDeclarator()
    ) {
      ++directDeclaratorCount
      curDeclarator = nextDeclarator
    }

    let arraySize = undefined
    if (directDeclaratorCount >= 1) {
      // TODO: support multi-dimensional arrays
      const assignmentExpression = ctx.directDeclarator().assignmentExpression()
      if (assignmentExpression) {
        arraySize = this.visitAssignmentExpression(assignmentExpression)
        if (arraySize.type !== 'Literal') {
          throw new IllegalArgumentError('Array size must be a literal')
        }
        arraySize = arraySize.value.toNumber()
      }
    }

    // TODO: support multi-dimensional arrays
    if (directDeclaratorCount > 1) {
      throw new NotImplementedError("Multi-dimensional arrays aren't supported yet")
    }

    return {
      type: 'Declarator',
      identifier: curDeclarator.text,
      pointerDepth,
      arraySize
    }
  }

  visitDeclarationSpecifiers(ctx: DeclarationSpecifiersContext): DeclarationSpecifiers {
    const typeSpecifiers = ctx
      .declarationSpecifier()
      .map(declarationSpecifier => declarationSpecifier.typeSpecifier()!.text)
      .reduce((nextType, previousTypes) => nextType + ' ' + previousTypes)

    if (!isValidRawTypeSpecifier(typeSpecifiers)) {
      throw new NotImplementedError(`Attempting to use unknown type ${typeSpecifiers}`)
    }

    const typeSpecifier = multiwordTypeToTypeSpecifier(typeSpecifiers)
    return {
      type: 'DeclarationSpecifiers',
      typeSpecifier
    }
  }

  visitTypeName(ctx: TypeNameContext): AstNode {
    // All visit methods need to return an AstNode, but a "type" isn't an AstNode
    // So I use another function instead.
    throw new NotImplementedError('Use the getTypeName method instead!')
  }

  getTypeName(ctx: TypeNameContext): TypeSpecifier {
    // Contains the main type
    const specialQualifierList = ctx.specifierQualifierList()
    let typeName = specialQualifierList.typeSpecifier()!.text

    let nextWordCtx = specialQualifierList.specifierQualifierList()

    // We need to rebuild the type if it has multiple words, eg "long long".
    while (nextWordCtx) {
      typeName += ' ' + nextWordCtx.typeSpecifier()!.text
      nextWordCtx = nextWordCtx.specifierQualifierList()
    }

    // This is just to please the typechecking - otherwise I'd reuse typeName
    let typeSpecifier = multiwordTypeToTypeSpecifier(typeName as RawTypeSpecifier)

    // Check if pointer
    const abstractDeclarator = ctx.abstractDeclarator()

    if (abstractDeclarator) {
      // Determine the number of pointers we need (i.e. for `int **x;`)
      const pointerChildren = abstractDeclarator.pointer()?.children ?? []
      for (const child of pointerChildren) {
        if (child.text !== '*') {
          // Stop at the first non-pointer child
          // TODO: support other "pointer-like" keywords like `int *const`.
          break
        }
        typeSpecifier = { ptrTo: typeSpecifier }
      }
    }

    return typeSpecifier
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
