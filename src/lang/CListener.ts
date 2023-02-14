// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
 * This interface defines a complete listener for a parse tree produced by
 * `CParser`.
 */
export interface CListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `CParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.postfixExpression`.
   * @param ctx the parse tree
   */
  enterPostfixExpression?: (ctx: PostfixExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.postfixExpression`.
   * @param ctx the parse tree
   */
  exitPostfixExpression?: (ctx: PostfixExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.unaryExpression`.
   * @param ctx the parse tree
   */
  enterUnaryExpression?: (ctx: UnaryExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.unaryExpression`.
   * @param ctx the parse tree
   */
  exitUnaryExpression?: (ctx: UnaryExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.unaryOperator`.
   * @param ctx the parse tree
   */
  enterUnaryOperator?: (ctx: UnaryOperatorContext) => void
  /**
   * Exit a parse tree produced by `CParser.unaryOperator`.
   * @param ctx the parse tree
   */
  exitUnaryOperator?: (ctx: UnaryOperatorContext) => void

  /**
   * Enter a parse tree produced by `CParser.castExpression`.
   * @param ctx the parse tree
   */
  enterCastExpression?: (ctx: CastExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.castExpression`.
   * @param ctx the parse tree
   */
  exitCastExpression?: (ctx: CastExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.additiveExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.additiveExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.shiftExpression`.
   * @param ctx the parse tree
   */
  enterShiftExpression?: (ctx: ShiftExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.shiftExpression`.
   * @param ctx the parse tree
   */
  exitShiftExpression?: (ctx: ShiftExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.relationalExpression`.
   * @param ctx the parse tree
   */
  enterRelationalExpression?: (ctx: RelationalExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.relationalExpression`.
   * @param ctx the parse tree
   */
  exitRelationalExpression?: (ctx: RelationalExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.equalityExpression`.
   * @param ctx the parse tree
   */
  enterEqualityExpression?: (ctx: EqualityExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.equalityExpression`.
   * @param ctx the parse tree
   */
  exitEqualityExpression?: (ctx: EqualityExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.andExpression`.
   * @param ctx the parse tree
   */
  enterAndExpression?: (ctx: AndExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.andExpression`.
   * @param ctx the parse tree
   */
  exitAndExpression?: (ctx: AndExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.exclusiveOrExpression`.
   * @param ctx the parse tree
   */
  enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.exclusiveOrExpression`.
   * @param ctx the parse tree
   */
  exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.inclusiveOrExpression`.
   * @param ctx the parse tree
   */
  enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.inclusiveOrExpression`.
   * @param ctx the parse tree
   */
  exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.logicalAndExpression`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.logicalOrExpression`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.assignmentExpression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void

  /**
   * Enter a parse tree produced by `CParser.assignmentOperator`.
   * @param ctx the parse tree
   */
  enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void
  /**
   * Exit a parse tree produced by `CParser.assignmentOperator`.
   * @param ctx the parse tree
   */
  exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void

  /**
   * Enter a parse tree produced by `CParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `CParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `CParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `CParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void
}
