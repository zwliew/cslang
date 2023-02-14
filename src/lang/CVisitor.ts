// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { PrimaryExpressionContext } from './CParser'
import { PostfixExpressionContext } from './CParser'
import { UnaryExpressionContext } from './CParser'
import { UnaryOperatorContext } from './CParser'
import { CastExpressionContext } from './CParser'
import { MultiplicativeExpressionContext } from './CParser'
import { AdditiveExpressionContext } from './CParser'
import { ShiftExpressionContext } from './CParser'
import { RelationalExpressionContext } from './CParser'
import { EqualityExpressionContext } from './CParser'
import { AndExpressionContext } from './CParser'
import { ExclusiveOrExpressionContext } from './CParser'
import { InclusiveOrExpressionContext } from './CParser'
import { LogicalAndExpressionContext } from './CParser'
import { LogicalOrExpressionContext } from './CParser'
import { ConditionalExpressionContext } from './CParser'
import { AssignmentExpressionContext } from './CParser'
import { AssignmentOperatorContext } from './CParser'
import { ExpressionStatementContext } from './CParser'
import { ExpressionContext } from './CParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `CParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.unaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.unaryOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result

  /**
   * Visit a parse tree produced by `CParser.castExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpression?: (ctx: CastExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.multiplicativeExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.additiveExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.shiftExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShiftExpression?: (ctx: ShiftExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.relationalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.equalityExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.andExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndExpression?: (ctx: AndExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.exclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.inclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.logicalAndExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.logicalOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CParser.assignmentOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result

  /**
   * Visit a parse tree produced by `CParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result

  /**
   * Visit a parse tree produced by `CParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result
}
