import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ContextSensitivityInfo } from 'antlr4ts/atn/ContextSensitivityInfo'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

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
  CParser,
  DeclarationContext,
  DirectDeclaratorContext,
  EqualityExpressionContext,
  ExclusiveOrExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalDeclarationContext,
  GenericAssocListContext,
  InclusiveOrExpressionContext,
  InitDeclaratorContext,
  InitializerContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  ShiftExpressionContext,
  StatementContext,
  UnaryExpressionContext
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'
import { AstNode, BinaryOperator, Expression, Statement } from './ast-types'

const NotImplementedError = "NotImplementedError";

export class CGenerator implements CVisitor<AstNode> {
  visit(tree: ParseTree): AstNode {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): AstNode {
    // From what I can tell, if we don't override one of the visitors for a rule,
    // It would use this visit method instead.
    console.warn("[Warn] Using undefined visitor method! " + node.constructor.name)

    // Just return the first child for now
    return node.getChild(0).accept(this);
  }

  visitTerminal(node: TerminalNode): AstNode {
    // We should not reach here - We should be handling the terminal nodes directly
    // in each visit method.
    throw "Visited TerminalNode: " + JSON.stringify(node)
  }

  visitErrorNode(node: ErrorNode): AstNode {
    throw "Visited ErrorNode: " + JSON.stringify(node)
  }

  //
  //
  // EXPRESSIONS
  //
  // The ordering of the expression visitor methods are in reverse order of C.g4
  //

  visitExpression(ctx: ExpressionContext): AstNode {
    const assignmentExpression = ctx.assignmentExpression()
    if (assignmentExpression.length === 1) {
      return assignmentExpression[0].accept(this)
    } else {
      // Comma separated expressions
      throw NotImplementedError
    }
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext): AstNode {
    const conditionalExpression = ctx.conditionalExpression()
    if (conditionalExpression) {
      return conditionalExpression.accept(this)
    } else {
      // Assigning a value to something
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): AstNode {
    const logicalOrExpression = ctx.logicalOrExpression()
    if (logicalOrExpression) {
      return logicalOrExpression.accept(this)
    } else {
      // Ternary conditional (?, :)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): AstNode {
    const logicalAndExpression = ctx.logicalAndExpression()
    if (logicalAndExpression.length === 1) {
      return logicalAndExpression[0].accept(this)
    } else {
      // Logical or (||)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): AstNode {
    const inclusiveOrExpression = ctx.inclusiveOrExpression()
    if (inclusiveOrExpression.length === 1) {
      return inclusiveOrExpression[0].accept(this)
    } else {
      // Logical and (&&)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitInclusiveOrExpression(ctx: InclusiveOrExpressionContext): AstNode {
    const exclusiveOrExpression = ctx.exclusiveOrExpression()
    if (exclusiveOrExpression.length === 1) {
      return exclusiveOrExpression[0].accept(this)
    } else {
      // Bitwise or (|)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitExclusiveOrExpression(ctx: ExclusiveOrExpressionContext): AstNode {
    const andExpression = ctx.andExpression()
    if (andExpression.length === 1) {
      return andExpression[0].accept(this)
    } else {
      // Bitwise xor (^)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitAndExpression(ctx: AndExpressionContext): AstNode {
    const equalityExpression = ctx.equalityExpression()
    if (equalityExpression.length === 1) {
      return equalityExpression[0].accept(this)
    } else {
      // Bitwise and (&)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitEqualityExpression(ctx: EqualityExpressionContext): AstNode {
    const relationalExpression = ctx.relationalExpression()
    if (relationalExpression.length === 1) {
      return relationalExpression[0].accept(this)
    } else {
      // Equality comparison (==, !=)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitRelationalExpression(ctx: RelationalExpressionContext): AstNode {
    const shiftExpression = ctx.shiftExpression()
    if (shiftExpression.length === 1) {
      return shiftExpression[0].accept(this)
    } else {
      // Relational comparison (<, >, <=, >=)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitShiftExpression(ctx: ShiftExpressionContext): AstNode {
    const additiveExpression = ctx.additiveExpression()
    if (additiveExpression.length === 1) {
      return additiveExpression[0].accept(this)
    } else {
      // Bitshift (<<, >>)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): AstNode {
    const multiplicativeExpression = ctx.multiplicativeExpression()
    if (multiplicativeExpression.length === 1) {
      return multiplicativeExpression[0].accept(this)
    } else {
      // Addition and subtraction (+, -)

      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression =  {
        type: 'BinaryExpression',
        operator: ctx.getChild(1).text as BinaryOperator,
        left: multiplicativeExpression[0].accept(this) as Expression,
        right: multiplicativeExpression[1].accept(this) as Expression
      }

      for (let i = 2; i < multiplicativeExpression.length; i++) {
        expression = {
          type: 'BinaryExpression',
          operator: ctx.getChild(2 * i - 1).text as BinaryOperator,
          left: expression,
          right: multiplicativeExpression[i].accept(this) as Expression
        }
      }

      return expression;
    }
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): AstNode {
    const castExpressions = ctx.castExpression()
    if (castExpressions.length === 1) {
      return castExpressions[0].accept(this)
    } else {
      // Multiplication, division and modulo (*, /, %)

      // There may be more than one set.
      // Assume these operations are left associative

      let expression: Expression =  {
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

      return expression;
    }
  }

  visitCastExpression(ctx: CastExpressionContext): AstNode {
    const unaryExpression = ctx.unaryExpression()
    if (unaryExpression) {
      return unaryExpression.accept(this)
    } else {
      // Typecasting ((typeName) expression)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitUnaryExpression(ctx: UnaryExpressionContext): AstNode {
    const postfixExpression = ctx.postfixExpression()
    if (postfixExpression) {
      return postfixExpression.accept(this)
    } else {
      // Unary expression (++, -- prefix)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitPostfixExpression(ctx: PostfixExpressionContext): AstNode {
    const primaryExpression = ctx.primaryExpression()
    if (primaryExpression) {
      return primaryExpression.accept(this)
    } else {
      // Postfix expression (++, -- suffix, [] for arrays, ., -> for structs)
      // TODO: implement parsing
      throw NotImplementedError
    }
  }

  visitPrimaryExpression(ctx: PrimaryExpressionContext): AstNode {
    // Assuming it is either Identifier or Constant
    // Constants can only be ints or strings
    const constantValue = parseInt(ctx.text)
    if (!isNaN(constantValue)) {
      return {
        type: 'Literal',
        value: constantValue
      }
    } else {
      return {
        type: 'Identifier',
        value: ctx.text
      }
    }
  }

  //
  //
  // EXPRESSIONS
  //
  //

  visitCompoundStatement(ctx: CompoundStatementContext): AstNode {
    return {
      type: "Block",
      statements: ctx.blockItem().map(v => v.accept(this)) as Array<Statement>
    }
  }

  visitStatement(ctx: StatementContext): AstNode {
    let statement = ctx.expressionStatement()
    if (statement) {
      return statement.accept(this)
    }

    // Other forms of statements
    throw NotImplementedError
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): AstNode {
    return {
      type: "ExpressionStatement",
      expression: ctx.expression()?.accept(this) as Expression
    }
  }

  visitBlockItem(ctx: BlockItemContext): AstNode {
    // statement | declaration. Flatten this node away
    return (ctx.children as ParseTree[])[0].accept(this)
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