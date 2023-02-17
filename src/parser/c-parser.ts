/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { CLexer } from '../lang/CLexer'
import {
  AdditiveExpressionContext,
  AndExpressionContext,
  AssignmentExpressionContext,
  CastExpressionContext,
  CompilationUnitContext,
  ConditionalExpressionContext,
  CParser,
  DeclarationContext,
  DirectDeclaratorContext,
  EqualityExpressionContext,
  ExclusiveOrExpressionContext,
  ExternalDeclarationContext,
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
  UnaryExpressionContext
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'
import { Context, ErrorSeverity } from '../types'
import * as cst from './cslang-ast-types'
import { FatalSyntaxError } from './parser'

const InvalidNode: cst.AstNode = {
  type: 'InvalidNode'
}

function printContext(functionName: string, context: any) {
  console.log(functionName)
  console.log(context)
  console.log(`End ${functionName}`)
}
export class CGenerator implements CVisitor<cst.AstNode> {
  visitCompilationUnit(ctx: CompilationUnitContext): cst.AstNode {
    // Ignore translationUnit, add children directly to root node
    const childNodes: Array<cst.AstNode> = []
    for (let i = 0; i < ctx.childCount; i++) {
      childNodes.push(ctx.getChild(i).accept(this))
    }

    return {
      type: 'RootNode',
      children: childNodes
    }
  }

  visitExternalDeclaration(ctx: ExternalDeclarationContext): cst.AstNode {
    // There should only be one child. Visit that child
    return this.visit((ctx.children as ParseTree[])[0])
  }

  // Declaration is a sequence of one or more InitDeclarators, e.g. int i = 1, j = 2;
  visitDeclaration(ctx: DeclarationContext): cst.AstNode {
    if (!ctx.children) {
      return InvalidNode
    }
    const children: ParseTree[] = ctx.children
    // Skip initDeclaratorList
    const initDeclaratorListParseNode: ParseTree = children[1]
    const declarations: cst.AstNode[] = []
    for (let i = 0; i < initDeclaratorListParseNode.childCount; i++) {
      declarations.push(this.visit(initDeclaratorListParseNode.getChild(i)))
    }
    return {
      type: 'Declaration',
      children: [{ type: 'TypeSpecifier', value: children[0].text }, ...declarations]
    }
  }

  // InitDeclarator is of the syntax (var = val)
  visitInitDeclarator(ctx: InitDeclaratorContext): cst.AstNode {
    // There will only be 3 children
    if (ctx.children) {
      return {
        type: 'InitDeclarator',
        children: [this.visit(ctx.declarator()), this.visit(ctx.initializer())]
      }
    } else {
      return InvalidNode
    }
  }

  // varName, and possibly varName[2] in the future
  visitDirectDeclarator(ctx: DirectDeclaratorContext): cst.AstNode {
    return {
      type: 'DirectDeclarator',
      value: ctx.text
    }
  }

  visitInitializer(ctx: InitializerContext): cst.AstNode {
    const assignmentExpression = ctx.assignmentExpression()
    if (assignmentExpression) {
      return this.visit(assignmentExpression)
    } else {
      // Declaring a new array
      return {
        type: 'Initializer',
        value: ctx.text
      }
    }
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext): cst.AstNode {
    const conditionalExpression = ctx.conditionalExpression()
    if (conditionalExpression) {
      return this.visit(conditionalExpression)
    } else {
      // Assigning a value to something
      // TODO: implement parsing
      return {
        type: 'AssignmentExpression'
      }
    }
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): cst.AstNode {
    const logicalOrExpression = ctx.logicalOrExpression()
    if (logicalOrExpression) {
      return this.visit(logicalOrExpression)
    } else {
      // Ternary conditional (?, :)
      // TODO: implement parsing
      return {
        type: 'ConditionalExpression'
      }
    }
  }

  visitLogicalOrExpression(ctx: LogicalOrExpressionContext): cst.AstNode {
    const logicalAndExpression = ctx.logicalAndExpression()
    if (logicalAndExpression.length === 1) {
      return this.visit(logicalAndExpression[0])
    } else {
      // Logical or (||)
      // TODO: implement parsing
      return {
        type: 'LogicalOrExpression'
      }
    }
  }

  visitLogicalAndExpression(ctx: LogicalAndExpressionContext): cst.AstNode {
    const inclusiveOrExpression = ctx.inclusiveOrExpression()
    if (inclusiveOrExpression.length === 1) {
      return this.visit(inclusiveOrExpression[0])
    } else {
      // Logical and (&&)
      // TODO: implement parsing
      return {
        type: 'LogicalAndExpression'
      }
    }
  }

  visitInclusiveOrExpression(ctx: InclusiveOrExpressionContext): cst.AstNode {
    const exclusiveOrExpression = ctx.exclusiveOrExpression()
    if (exclusiveOrExpression.length === 1) {
      return this.visit(exclusiveOrExpression[0])
    } else {
      // Bitwise or (|)
      // TODO: implement parsing
      return {
        type: 'InclusiveOrExpression'
      }
    }
  }

  visitExclusiveOrExpression(ctx: ExclusiveOrExpressionContext): cst.AstNode {
    const andExpression = ctx.andExpression()
    if (andExpression.length === 1) {
      return this.visit(andExpression[0])
    } else {
      // Bitwise xor (^)
      // TODO: implement parsing
      return {
        type: 'ExclusiveOrExpression'
      }
    }
  }

  visitAndExpression(ctx: AndExpressionContext): cst.AstNode {
    const equalityExpression = ctx.equalityExpression()
    if (equalityExpression.length === 1) {
      return this.visit(equalityExpression[0])
    } else {
      // Bitwise and (&)
      // TODO: implement parsing
      return {
        type: 'AndExpression'
      }
    }
  }

  visitEqualityExpression(ctx: EqualityExpressionContext): cst.AstNode {
    const relationalExpression = ctx.relationalExpression()
    if (relationalExpression.length === 1) {
      return this.visit(relationalExpression[0])
    } else {
      // Equality comparison (==, !=)
      // TODO: implement parsing
      return {
        type: 'EqualityExpression'
      }
    }
  }

  visitRelationalExpression(ctx: RelationalExpressionContext): cst.AstNode {
    const shiftExpression = ctx.shiftExpression()
    if (shiftExpression.length === 1) {
      return this.visit(shiftExpression[0])
    } else {
      // Relational comparison (<, >, <=, >=)
      // TODO: implement parsing
      return {
        type: 'RelationalExpression'
      }
    }
  }

  visitShiftExpression(ctx: ShiftExpressionContext): cst.AstNode {
    const additiveExpression = ctx.additiveExpression()
    if (additiveExpression.length === 1) {
      return this.visit(additiveExpression[0])
    } else {
      // Bitshift (<<, >>)
      // TODO: implement parsing
      return {
        type: 'ShiftExpression'
      }
    }
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): cst.AstNode {
    const multiplicativeExpression = ctx.multiplicativeExpression()
    if (multiplicativeExpression.length === 1) {
      return this.visit(multiplicativeExpression[0])
    } else {
      // Addition and subtraction (+, -)
      // TODO: implement parsing
      return {
        type: 'AdditiveExpression'
      }
    }
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): cst.AstNode {
    const castExpression = ctx.castExpression()
    if (castExpression.length === 1) {
      return this.visit(castExpression[0])
    } else {
      // Multiplication, division and modulo (*, /, %)
      // TODO: implement parsing
      return {
        type: 'MultiplicativeExpression'
      }
    }
  }

  visitCastExpression(ctx: CastExpressionContext): cst.AstNode {
    const unaryExpression = ctx.unaryExpression()
    if (unaryExpression) {
      return this.visit(unaryExpression)
    } else {
      // Typecasting ((typeName) expression)
      // TODO: implement parsing
      return {
        type: 'CastExpression'
      }
    }
  }

  visitUnaryExpression(ctx: UnaryExpressionContext): cst.AstNode {
    const postfixExpression = ctx.postfixExpression()
    if (postfixExpression) {
      return this.visit(postfixExpression)
    } else {
      // Unary expression (++, -- prefix)
      // TODO: implement parsing
      return {
        type: 'UnaryExpression'
      }
    }
  }

  visitPostfixExpression(ctx: PostfixExpressionContext): cst.AstNode {
    const primaryExpression = ctx.primaryExpression()
    if (primaryExpression) {
      return this.visit(primaryExpression)
    } else {
      // Postfix expression (++, -- suffix, [] for arrays, ., -> for structs)
      // TODO: implement parsing
      return {
        type: 'PostfixExpression'
      }
    }
  }

  visitPrimaryExpression(ctx: PrimaryExpressionContext): cst.AstNode {
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

  visit(tree: ParseTree): cst.AstNode {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): cst.AstNode {
    const childNodes: cst.AstNode[] = []
    for (let i = 0; i < node.childCount; i++) {
      childNodes.push(node.getChild(i).accept(this))
    }
    return {
      type: node.constructor.name,
      children: childNodes
    }
  }
  visitTerminal(node: TerminalNode): cst.AstNode {
    return {
      type: 'TerminalNode'
    }
  }
  visitErrorNode(node: ErrorNode): cst.AstNode {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

export function parse(source: string, context: Context) {
  let program: cst.Program | undefined

  const inputStream = CharStreams.fromString(source)
  const lexer = new CLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new CParser(tokenStream)
  parser.buildParseTree = true

  try {
    const tree = parser.compilationUnit()
    const generator = new CGenerator()
    program = {
      type: 'Program',
      sourceType: 'script',
      body: [tree.accept(generator)]
    }
    console.error(program)
  } catch (error) {
    if (error instanceof FatalSyntaxError) {
      context.errors.push(error)
    } else {
      throw error
    }
  }

  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (program && !hasErrors) {
    return program
  }
  return undefined
}
