// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { CListener } from './CListener'
import { CVisitor } from './CVisitor'

export class CParser extends Parser {
  public static readonly Auto = 1
  public static readonly Break = 2
  public static readonly Case = 3
  public static readonly Char = 4
  public static readonly Const = 5
  public static readonly Continue = 6
  public static readonly Default = 7
  public static readonly Do = 8
  public static readonly Double = 9
  public static readonly Else = 10
  public static readonly Enum = 11
  public static readonly Extern = 12
  public static readonly Float = 13
  public static readonly For = 14
  public static readonly Goto = 15
  public static readonly If = 16
  public static readonly Inline = 17
  public static readonly Int = 18
  public static readonly Long = 19
  public static readonly Register = 20
  public static readonly Restrict = 21
  public static readonly Return = 22
  public static readonly Short = 23
  public static readonly Signed = 24
  public static readonly Sizeof = 25
  public static readonly Static = 26
  public static readonly Struct = 27
  public static readonly Switch = 28
  public static readonly Typedef = 29
  public static readonly Union = 30
  public static readonly Unsigned = 31
  public static readonly Void = 32
  public static readonly Volatile = 33
  public static readonly While = 34
  public static readonly Alignas = 35
  public static readonly Alignof = 36
  public static readonly Atomic = 37
  public static readonly Bool = 38
  public static readonly Complex = 39
  public static readonly Generic = 40
  public static readonly Imaginary = 41
  public static readonly Noreturn = 42
  public static readonly StaticAssert = 43
  public static readonly ThreadLocal = 44
  public static readonly LeftParen = 45
  public static readonly RightParen = 46
  public static readonly LeftBracket = 47
  public static readonly RightBracket = 48
  public static readonly LeftBrace = 49
  public static readonly RightBrace = 50
  public static readonly Less = 51
  public static readonly LessEqual = 52
  public static readonly Greater = 53
  public static readonly GreaterEqual = 54
  public static readonly LeftShift = 55
  public static readonly RightShift = 56
  public static readonly Plus = 57
  public static readonly PlusPlus = 58
  public static readonly Minus = 59
  public static readonly MinusMinus = 60
  public static readonly Star = 61
  public static readonly Div = 62
  public static readonly Mod = 63
  public static readonly And = 64
  public static readonly Or = 65
  public static readonly AndAnd = 66
  public static readonly OrOr = 67
  public static readonly Caret = 68
  public static readonly Not = 69
  public static readonly Tilde = 70
  public static readonly Question = 71
  public static readonly Colon = 72
  public static readonly Semi = 73
  public static readonly Comma = 74
  public static readonly Assign = 75
  public static readonly StarAssign = 76
  public static readonly DivAssign = 77
  public static readonly ModAssign = 78
  public static readonly PlusAssign = 79
  public static readonly MinusAssign = 80
  public static readonly LeftShiftAssign = 81
  public static readonly RightShiftAssign = 82
  public static readonly AndAssign = 83
  public static readonly XorAssign = 84
  public static readonly OrAssign = 85
  public static readonly Equal = 86
  public static readonly NotEqual = 87
  public static readonly Arrow = 88
  public static readonly Dot = 89
  public static readonly Ellipsis = 90
  public static readonly Identifier = 91
  public static readonly Constant = 92
  public static readonly DigitSequence = 93
  public static readonly StringLiteral = 94
  public static readonly ComplexDefine = 95
  public static readonly IncludeDirective = 96
  public static readonly AsmBlock = 97
  public static readonly LineAfterPreprocessing = 98
  public static readonly LineDirective = 99
  public static readonly PragmaDirective = 100
  public static readonly Whitespace = 101
  public static readonly Newline = 102
  public static readonly BlockComment = 103
  public static readonly LineComment = 104
  public static readonly RULE_primaryExpression = 0
  public static readonly RULE_postfixExpression = 1
  public static readonly RULE_unaryExpression = 2
  public static readonly RULE_unaryOperator = 3
  public static readonly RULE_castExpression = 4
  public static readonly RULE_multiplicativeExpression = 5
  public static readonly RULE_additiveExpression = 6
  public static readonly RULE_shiftExpression = 7
  public static readonly RULE_relationalExpression = 8
  public static readonly RULE_equalityExpression = 9
  public static readonly RULE_andExpression = 10
  public static readonly RULE_exclusiveOrExpression = 11
  public static readonly RULE_inclusiveOrExpression = 12
  public static readonly RULE_logicalAndExpression = 13
  public static readonly RULE_logicalOrExpression = 14
  public static readonly RULE_conditionalExpression = 15
  public static readonly RULE_assignmentExpression = 16
  public static readonly RULE_assignmentOperator = 17
  public static readonly RULE_expressionStatement = 18
  public static readonly RULE_expression = 19
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'primaryExpression',
    'postfixExpression',
    'unaryExpression',
    'unaryOperator',
    'castExpression',
    'multiplicativeExpression',
    'additiveExpression',
    'shiftExpression',
    'relationalExpression',
    'equalityExpression',
    'andExpression',
    'exclusiveOrExpression',
    'inclusiveOrExpression',
    'logicalAndExpression',
    'logicalOrExpression',
    'conditionalExpression',
    'assignmentExpression',
    'assignmentOperator',
    'expressionStatement',
    'expression'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'auto'",
    "'break'",
    "'case'",
    "'char'",
    "'const'",
    "'continue'",
    "'default'",
    "'do'",
    "'double'",
    "'else'",
    "'enum'",
    "'extern'",
    "'float'",
    "'for'",
    "'goto'",
    "'if'",
    "'inline'",
    "'int'",
    "'long'",
    "'register'",
    "'restrict'",
    "'return'",
    "'short'",
    "'signed'",
    "'sizeof'",
    "'static'",
    "'struct'",
    "'switch'",
    "'typedef'",
    "'union'",
    "'unsigned'",
    "'void'",
    "'volatile'",
    "'while'",
    "'_Alignas'",
    "'_Alignof'",
    "'_Atomic'",
    "'_Bool'",
    "'_Complex'",
    "'_Generic'",
    "'_Imaginary'",
    "'_Noreturn'",
    "'_Static_assert'",
    "'_Thread_local'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'<<'",
    "'>>'",
    "'+'",
    "'++'",
    "'-'",
    "'--'",
    "'*'",
    "'/'",
    "'%'",
    "'&'",
    "'|'",
    "'&&'",
    "'||'",
    "'^'",
    "'!'",
    "'~'",
    "'?'",
    "':'",
    "';'",
    "','",
    "'='",
    "'*='",
    "'/='",
    "'%='",
    "'+='",
    "'-='",
    "'<<='",
    "'>>='",
    "'&='",
    "'^='",
    "'|='",
    "'=='",
    "'!='",
    "'->'",
    "'.'",
    "'...'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'Auto',
    'Break',
    'Case',
    'Char',
    'Const',
    'Continue',
    'Default',
    'Do',
    'Double',
    'Else',
    'Enum',
    'Extern',
    'Float',
    'For',
    'Goto',
    'If',
    'Inline',
    'Int',
    'Long',
    'Register',
    'Restrict',
    'Return',
    'Short',
    'Signed',
    'Sizeof',
    'Static',
    'Struct',
    'Switch',
    'Typedef',
    'Union',
    'Unsigned',
    'Void',
    'Volatile',
    'While',
    'Alignas',
    'Alignof',
    'Atomic',
    'Bool',
    'Complex',
    'Generic',
    'Imaginary',
    'Noreturn',
    'StaticAssert',
    'ThreadLocal',
    'LeftParen',
    'RightParen',
    'LeftBracket',
    'RightBracket',
    'LeftBrace',
    'RightBrace',
    'Less',
    'LessEqual',
    'Greater',
    'GreaterEqual',
    'LeftShift',
    'RightShift',
    'Plus',
    'PlusPlus',
    'Minus',
    'MinusMinus',
    'Star',
    'Div',
    'Mod',
    'And',
    'Or',
    'AndAnd',
    'OrOr',
    'Caret',
    'Not',
    'Tilde',
    'Question',
    'Colon',
    'Semi',
    'Comma',
    'Assign',
    'StarAssign',
    'DivAssign',
    'ModAssign',
    'PlusAssign',
    'MinusAssign',
    'LeftShiftAssign',
    'RightShiftAssign',
    'AndAssign',
    'XorAssign',
    'OrAssign',
    'Equal',
    'NotEqual',
    'Arrow',
    'Dot',
    'Ellipsis',
    'Identifier',
    'Constant',
    'DigitSequence',
    'StringLiteral',
    'ComplexDefine',
    'IncludeDirective',
    'AsmBlock',
    'LineAfterPreprocessing',
    'LineDirective',
    'PragmaDirective',
    'Whitespace',
    'Newline',
    'BlockComment',
    'LineComment'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CParser._LITERAL_NAMES,
    CParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'C.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(CParser._ATN, this)
  }
  // @RuleVersion(0)
  public primaryExpression(): PrimaryExpressionContext {
    const _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CParser.RULE_primaryExpression)
    try {
      this.state = 46
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 40
            this.match(CParser.Identifier)
          }
          break
        case CParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 41
            this.match(CParser.Constant)
          }
          break
        case CParser.LeftParen:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 42
            this.match(CParser.LeftParen)
            this.state = 43
            this.expression()
            this.state = 44
            this.match(CParser.RightParen)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public postfixExpression(): PostfixExpressionContext {
    const _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, CParser.RULE_postfixExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 48
          this.primaryExpression()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public unaryExpression(): UnaryExpressionContext {
    const _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, CParser.RULE_unaryExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 54
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CParser.LeftParen:
          case CParser.Identifier:
          case CParser.Constant:
            {
              this.state = 50
              this.postfixExpression()
            }
            break
          case CParser.Plus:
          case CParser.Minus:
          case CParser.Star:
          case CParser.And:
          case CParser.Not:
          case CParser.Tilde:
            {
              this.state = 51
              this.unaryOperator()
              this.state = 52
              this.castExpression()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public unaryOperator(): UnaryOperatorContext {
    const _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CParser.RULE_unaryOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 56
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 57) & ~0x1f) === 0 &&
            ((1 << (_la - 57)) &
              ((1 << (CParser.Plus - 57)) |
                (1 << (CParser.Minus - 57)) |
                (1 << (CParser.Star - 57)) |
                (1 << (CParser.And - 57)) |
                (1 << (CParser.Not - 57)) |
                (1 << (CParser.Tilde - 57)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public castExpression(): CastExpressionContext {
    const _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, CParser.RULE_castExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 58
        this.unaryExpression()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public multiplicativeExpression(): MultiplicativeExpressionContext {
    const _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 10, CParser.RULE_multiplicativeExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 60
        this.castExpression()
        this.state = 65
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 61) & ~0x1f) === 0 &&
          ((1 << (_la - 61)) &
            ((1 << (CParser.Star - 61)) |
              (1 << (CParser.Div - 61)) |
              (1 << (CParser.Mod - 61)))) !==
            0
        ) {
          {
            {
              this.state = 61
              _la = this._input.LA(1)
              if (
                !(
                  ((_la - 61) & ~0x1f) === 0 &&
                  ((1 << (_la - 61)) &
                    ((1 << (CParser.Star - 61)) |
                      (1 << (CParser.Div - 61)) |
                      (1 << (CParser.Mod - 61)))) !==
                    0
                )
              ) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 62
              this.castExpression()
            }
          }
          this.state = 67
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public additiveExpression(): AdditiveExpressionContext {
    const _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 12, CParser.RULE_additiveExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 68
        this.multiplicativeExpression()
        this.state = 73
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.Plus || _la === CParser.Minus) {
          {
            {
              this.state = 69
              _la = this._input.LA(1)
              if (!(_la === CParser.Plus || _la === CParser.Minus)) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 70
              this.multiplicativeExpression()
            }
          }
          this.state = 75
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public shiftExpression(): ShiftExpressionContext {
    const _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, CParser.RULE_shiftExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 76
        this.additiveExpression()
        this.state = 81
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.LeftShift || _la === CParser.RightShift) {
          {
            {
              this.state = 77
              _la = this._input.LA(1)
              if (!(_la === CParser.LeftShift || _la === CParser.RightShift)) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 78
              this.additiveExpression()
            }
          }
          this.state = 83
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public relationalExpression(): RelationalExpressionContext {
    const _localctx: RelationalExpressionContext = new RelationalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 16, CParser.RULE_relationalExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 84
        this.shiftExpression()
        this.state = 89
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 51) & ~0x1f) === 0 &&
          ((1 << (_la - 51)) &
            ((1 << (CParser.Less - 51)) |
              (1 << (CParser.LessEqual - 51)) |
              (1 << (CParser.Greater - 51)) |
              (1 << (CParser.GreaterEqual - 51)))) !==
            0
        ) {
          {
            {
              this.state = 85
              _la = this._input.LA(1)
              if (
                !(
                  ((_la - 51) & ~0x1f) === 0 &&
                  ((1 << (_la - 51)) &
                    ((1 << (CParser.Less - 51)) |
                      (1 << (CParser.LessEqual - 51)) |
                      (1 << (CParser.Greater - 51)) |
                      (1 << (CParser.GreaterEqual - 51)))) !==
                    0
                )
              ) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 86
              this.shiftExpression()
            }
          }
          this.state = 91
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public equalityExpression(): EqualityExpressionContext {
    const _localctx: EqualityExpressionContext = new EqualityExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, CParser.RULE_equalityExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 92
        this.relationalExpression()
        this.state = 97
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.Equal || _la === CParser.NotEqual) {
          {
            {
              this.state = 93
              _la = this._input.LA(1)
              if (!(_la === CParser.Equal || _la === CParser.NotEqual)) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 94
              this.relationalExpression()
            }
          }
          this.state = 99
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public andExpression(): AndExpressionContext {
    const _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, CParser.RULE_andExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 100
        this.equalityExpression()
        this.state = 105
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.And) {
          {
            {
              this.state = 101
              this.match(CParser.And)
              this.state = 102
              this.equalityExpression()
            }
          }
          this.state = 107
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public exclusiveOrExpression(): ExclusiveOrExpressionContext {
    const _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 22, CParser.RULE_exclusiveOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 108
        this.andExpression()
        this.state = 113
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.Caret) {
          {
            {
              this.state = 109
              this.match(CParser.Caret)
              this.state = 110
              this.andExpression()
            }
          }
          this.state = 115
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public inclusiveOrExpression(): InclusiveOrExpressionContext {
    const _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 24, CParser.RULE_inclusiveOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 116
        this.exclusiveOrExpression()
        this.state = 121
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.Or) {
          {
            {
              this.state = 117
              this.match(CParser.Or)
              this.state = 118
              this.exclusiveOrExpression()
            }
          }
          this.state = 123
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public logicalAndExpression(): LogicalAndExpressionContext {
    const _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 26, CParser.RULE_logicalAndExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 124
        this.inclusiveOrExpression()
        this.state = 129
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.AndAnd) {
          {
            {
              this.state = 125
              this.match(CParser.AndAnd)
              this.state = 126
              this.inclusiveOrExpression()
            }
          }
          this.state = 131
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public logicalOrExpression(): LogicalOrExpressionContext {
    const _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 28, CParser.RULE_logicalOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 132
        this.logicalAndExpression()
        this.state = 137
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.OrOr) {
          {
            {
              this.state = 133
              this.match(CParser.OrOr)
              this.state = 134
              this.logicalAndExpression()
            }
          }
          this.state = 139
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 30, CParser.RULE_conditionalExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 140
        this.logicalOrExpression()
        this.state = 146
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CParser.Question) {
          {
            this.state = 141
            this.match(CParser.Question)
            this.state = 142
            this.expression()
            this.state = 143
            this.match(CParser.Colon)
            this.state = 144
            this.conditionalExpression()
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignmentExpression(): AssignmentExpressionContext {
    const _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 32, CParser.RULE_assignmentExpression)
    try {
      this.state = 153
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 148
            this.conditionalExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 149
            this.unaryExpression()
            this.state = 150
            this.assignmentOperator()
            this.state = 151
            this.assignmentExpression()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignmentOperator(): AssignmentOperatorContext {
    const _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 34, CParser.RULE_assignmentOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 155
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 75) & ~0x1f) === 0 &&
            ((1 << (_la - 75)) &
              ((1 << (CParser.Assign - 75)) |
                (1 << (CParser.StarAssign - 75)) |
                (1 << (CParser.DivAssign - 75)) |
                (1 << (CParser.ModAssign - 75)) |
                (1 << (CParser.PlusAssign - 75)) |
                (1 << (CParser.MinusAssign - 75)) |
                (1 << (CParser.LeftShiftAssign - 75)) |
                (1 << (CParser.RightShiftAssign - 75)) |
                (1 << (CParser.AndAssign - 75)) |
                (1 << (CParser.XorAssign - 75)) |
                (1 << (CParser.OrAssign - 75)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 36, CParser.RULE_expressionStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 158
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          (((_la - 45) & ~0x1f) === 0 &&
            ((1 << (_la - 45)) &
              ((1 << (CParser.LeftParen - 45)) |
                (1 << (CParser.Plus - 45)) |
                (1 << (CParser.Minus - 45)) |
                (1 << (CParser.Star - 45)) |
                (1 << (CParser.And - 45)) |
                (1 << (CParser.Not - 45)) |
                (1 << (CParser.Tilde - 45)))) !==
              0) ||
          _la === CParser.Identifier ||
          _la === CParser.Constant
        ) {
          {
            this.state = 157
            this.expression()
          }
        }

        this.state = 160
        this.match(CParser.Semi)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    const _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, CParser.RULE_expression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 162
        this.assignmentExpression()
        this.state = 167
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CParser.Comma) {
          {
            {
              this.state = 163
              this.match(CParser.Comma)
              this.state = 164
              this.assignmentExpression()
            }
          }
          this.state = 169
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\xAD\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02' +
    '\x03\x02\x03\x02\x05\x021\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x05\x049\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07' +
    '\x03\x07\x07\x07B\n\x07\f\x07\x0E\x07E\v\x07\x03\b\x03\b\x03\b\x07\bJ' +
    '\n\b\f\b\x0E\bM\v\b\x03\t\x03\t\x03\t\x07\tR\n\t\f\t\x0E\tU\v\t\x03\n' +
    '\x03\n\x03\n\x07\nZ\n\n\f\n\x0E\n]\v\n\x03\v\x03\v\x03\v\x07\vb\n\v\f' +
    '\v\x0E\ve\v\v\x03\f\x03\f\x03\f\x07\fj\n\f\f\f\x0E\fm\v\f\x03\r\x03\r' +
    '\x03\r\x07\rr\n\r\f\r\x0E\ru\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0Ez\n\x0E' +
    '\f\x0E\x0E\x0E}\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x82\n\x0F\f\x0F' +
    '\x0E\x0F\x85\v\x0F\x03\x10\x03\x10\x03\x10\x07\x10\x8A\n\x10\f\x10\x0E' +
    '\x10\x8D\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11' +
    '\x95\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x9C\n\x12\x03' +
    '\x13\x03\x13\x03\x14\x05\x14\xA1\n\x14\x03\x14\x03\x14\x03\x15\x03\x15' +
    '\x03\x15\x07\x15\xA8\n\x15\f\x15\x0E\x15\xAB\v\x15\x03\x15\x02\x02\x02' +
    '\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02' +
    '\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02' +
    '(\x02\x02\t\x07\x02;;==??BBGH\x03\x02?A\x04\x02;;==\x03\x029:\x03\x02' +
    '58\x03\x02XY\x03\x02MW\x02\xA9\x020\x03\x02\x02\x02\x042\x03\x02\x02\x02' +
    '\x068\x03\x02\x02\x02\b:\x03\x02\x02\x02\n<\x03\x02\x02\x02\f>\x03\x02' +
    '\x02\x02\x0EF\x03\x02\x02\x02\x10N\x03\x02\x02\x02\x12V\x03\x02\x02\x02' +
    '\x14^\x03\x02\x02\x02\x16f\x03\x02\x02\x02\x18n\x03\x02\x02\x02\x1Av\x03' +
    '\x02\x02\x02\x1C~\x03\x02\x02\x02\x1E\x86\x03\x02\x02\x02 \x8E\x03\x02' +
    '\x02\x02"\x9B\x03\x02\x02\x02$\x9D\x03\x02\x02\x02&\xA0\x03\x02\x02\x02' +
    '(\xA4\x03\x02\x02\x02*1\x07]\x02\x02+1\x07^\x02\x02,-\x07/\x02\x02-.\x05' +
    '(\x15\x02./\x070\x02\x02/1\x03\x02\x02\x020*\x03\x02\x02\x020+\x03\x02' +
    '\x02\x020,\x03\x02\x02\x021\x03\x03\x02\x02\x0223\x05\x02\x02\x023\x05' +
    '\x03\x02\x02\x0249\x05\x04\x03\x0256\x05\b\x05\x0267\x05\n\x06\x0279\x03' +
    '\x02\x02\x0284\x03\x02\x02\x0285\x03\x02\x02\x029\x07\x03\x02\x02\x02' +
    ':;\t\x02\x02\x02;\t\x03\x02\x02\x02<=\x05\x06\x04\x02=\v\x03\x02\x02\x02' +
    '>C\x05\n\x06\x02?@\t\x03\x02\x02@B\x05\n\x06\x02A?\x03\x02\x02\x02BE\x03' +
    '\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\r\x03\x02\x02\x02EC' +
    '\x03\x02\x02\x02FK\x05\f\x07\x02GH\t\x04\x02\x02HJ\x05\f\x07\x02IG\x03' +
    '\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\x0F' +
    '\x03\x02\x02\x02MK\x03\x02\x02\x02NS\x05\x0E\b\x02OP\t\x05\x02\x02PR\x05' +
    '\x0E\b\x02QO\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03' +
    '\x02\x02\x02T\x11\x03\x02\x02\x02US\x03\x02\x02\x02V[\x05\x10\t\x02WX' +
    '\t\x06\x02\x02XZ\x05\x10\t\x02YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03' +
    '\x02\x02\x02[\\\x03\x02\x02\x02\\\x13\x03\x02\x02\x02][\x03\x02\x02\x02' +
    '^c\x05\x12\n\x02_`\t\x07\x02\x02`b\x05\x12\n\x02a_\x03\x02\x02\x02be\x03' +
    '\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x15\x03\x02\x02\x02' +
    'ec\x03\x02\x02\x02fk\x05\x14\v\x02gh\x07B\x02\x02hj\x05\x14\v\x02ig\x03' +
    '\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\x17' +
    '\x03\x02\x02\x02mk\x03\x02\x02\x02ns\x05\x16\f\x02op\x07F\x02\x02pr\x05' +
    '\x16\f\x02qo\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03' +
    '\x02\x02\x02t\x19\x03\x02\x02\x02us\x03\x02\x02\x02v{\x05\x18\r\x02wx' +
    '\x07C\x02\x02xz\x05\x18\r\x02yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03' +
    '\x02\x02\x02{|\x03\x02\x02\x02|\x1B\x03\x02\x02\x02}{\x03\x02\x02\x02' +
    '~\x83\x05\x1A\x0E\x02\x7F\x80\x07D\x02\x02\x80\x82\x05\x1A\x0E\x02\x81' +
    '\x7F\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83' +
    '\x84\x03\x02\x02\x02\x84\x1D\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86' +
    '\x8B\x05\x1C\x0F\x02\x87\x88\x07E\x02\x02\x88\x8A\x05\x1C\x0F\x02\x89' +
    '\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B' +
    '\x8C\x03\x02\x02\x02\x8C\x1F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E' +
    '\x94\x05\x1E\x10\x02\x8F\x90\x07I\x02\x02\x90\x91\x05(\x15\x02\x91\x92' +
    '\x07J\x02\x02\x92\x93\x05 \x11\x02\x93\x95\x03\x02\x02\x02\x94\x8F\x03' +
    '\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95!\x03\x02\x02\x02\x96\x9C\x05' +
    ' \x11\x02\x97\x98\x05\x06\x04\x02\x98\x99\x05$\x13\x02\x99\x9A\x05"\x12' +
    '\x02\x9A\x9C\x03\x02\x02\x02\x9B\x96\x03\x02\x02\x02\x9B\x97\x03\x02\x02' +
    '\x02\x9C#\x03\x02\x02\x02\x9D\x9E\t\b\x02\x02\x9E%\x03\x02\x02\x02\x9F' +
    '\xA1\x05(\x15\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1' +
    "\xA2\x03\x02\x02\x02\xA2\xA3\x07K\x02\x02\xA3'\x03\x02\x02\x02\xA4\xA9" +
    '\x05"\x12\x02\xA5\xA6\x07L\x02\x02\xA6\xA8\x05"\x12\x02\xA7\xA5\x03' +
    '\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03' +
    '\x02\x02\x02\xAA)\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\x1208CKS[ck' +
    's{\x83\x8B\x94\x9B\xA0\xA9'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CParser.__ATN) {
      CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN))
    }

    return CParser.__ATN
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Identifier, 0)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Constant, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightParen, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_primaryExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PostfixExpressionContext extends ParserRuleContext {
  public primaryExpression(): PrimaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, PrimaryExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_postfixExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterPostfixExpression) {
      listener.enterPostfixExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitPostfixExpression) {
      listener.exitPostfixExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitPostfixExpression) {
      return visitor.visitPostfixExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public unaryOperator(): UnaryOperatorContext | undefined {
    return this.tryGetRuleContext(0, UnaryOperatorContext)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_unaryExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryOperatorContext extends ParserRuleContext {
  public And(): TerminalNode | undefined {
    return this.tryGetToken(CParser.And, 0)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Star, 0)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Minus, 0)
  }
  public Tilde(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Tilde, 0)
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Not, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_unaryOperator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterUnaryOperator) {
      listener.enterUnaryOperator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitUnaryOperator) {
      listener.exitUnaryOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitUnaryOperator) {
      return visitor.visitUnaryOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CastExpressionContext extends ParserRuleContext {
  public unaryExpression(): UnaryExpressionContext {
    return this.getRuleContext(0, UnaryExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_castExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitCastExpression) {
      return visitor.visitCastExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
  public castExpression(): CastExpressionContext[]
  public castExpression(i: number): CastExpressionContext
  public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CastExpressionContext)
    } else {
      return this.getRuleContext(i, CastExpressionContext)
    }
  }
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Star)
    } else {
      return this.getToken(CParser.Star, i)
    }
  }
  public Div(): TerminalNode[]
  public Div(i: number): TerminalNode
  public Div(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Div)
    } else {
      return this.getToken(CParser.Div, i)
    }
  }
  public Mod(): TerminalNode[]
  public Mod(i: number): TerminalNode
  public Mod(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Mod)
    } else {
      return this.getToken(CParser.Mod, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_multiplicativeExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveExpressionContext extends ParserRuleContext {
  public multiplicativeExpression(): MultiplicativeExpressionContext[]
  public multiplicativeExpression(i: number): MultiplicativeExpressionContext
  public multiplicativeExpression(
    i?: number
  ): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MultiplicativeExpressionContext)
    } else {
      return this.getRuleContext(i, MultiplicativeExpressionContext)
    }
  }
  public Plus(): TerminalNode[]
  public Plus(i: number): TerminalNode
  public Plus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Plus)
    } else {
      return this.getToken(CParser.Plus, i)
    }
  }
  public Minus(): TerminalNode[]
  public Minus(i: number): TerminalNode
  public Minus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Minus)
    } else {
      return this.getToken(CParser.Minus, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_additiveExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ShiftExpressionContext extends ParserRuleContext {
  public additiveExpression(): AdditiveExpressionContext[]
  public additiveExpression(i: number): AdditiveExpressionContext
  public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AdditiveExpressionContext)
    } else {
      return this.getRuleContext(i, AdditiveExpressionContext)
    }
  }
  public LeftShift(): TerminalNode[]
  public LeftShift(i: number): TerminalNode
  public LeftShift(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.LeftShift)
    } else {
      return this.getToken(CParser.LeftShift, i)
    }
  }
  public RightShift(): TerminalNode[]
  public RightShift(i: number): TerminalNode
  public RightShift(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.RightShift)
    } else {
      return this.getToken(CParser.RightShift, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_shiftExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterShiftExpression) {
      listener.enterShiftExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitShiftExpression) {
      listener.exitShiftExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitShiftExpression) {
      return visitor.visitShiftExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelationalExpressionContext extends ParserRuleContext {
  public shiftExpression(): ShiftExpressionContext[]
  public shiftExpression(i: number): ShiftExpressionContext
  public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ShiftExpressionContext)
    } else {
      return this.getRuleContext(i, ShiftExpressionContext)
    }
  }
  public Less(): TerminalNode[]
  public Less(i: number): TerminalNode
  public Less(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Less)
    } else {
      return this.getToken(CParser.Less, i)
    }
  }
  public Greater(): TerminalNode[]
  public Greater(i: number): TerminalNode
  public Greater(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Greater)
    } else {
      return this.getToken(CParser.Greater, i)
    }
  }
  public LessEqual(): TerminalNode[]
  public LessEqual(i: number): TerminalNode
  public LessEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.LessEqual)
    } else {
      return this.getToken(CParser.LessEqual, i)
    }
  }
  public GreaterEqual(): TerminalNode[]
  public GreaterEqual(i: number): TerminalNode
  public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.GreaterEqual)
    } else {
      return this.getToken(CParser.GreaterEqual, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_relationalExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitRelationalExpression) {
      return visitor.visitRelationalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityExpressionContext extends ParserRuleContext {
  public relationalExpression(): RelationalExpressionContext[]
  public relationalExpression(i: number): RelationalExpressionContext
  public relationalExpression(
    i?: number
  ): RelationalExpressionContext | RelationalExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(RelationalExpressionContext)
    } else {
      return this.getRuleContext(i, RelationalExpressionContext)
    }
  }
  public Equal(): TerminalNode[]
  public Equal(i: number): TerminalNode
  public Equal(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Equal)
    } else {
      return this.getToken(CParser.Equal, i)
    }
  }
  public NotEqual(): TerminalNode[]
  public NotEqual(i: number): TerminalNode
  public NotEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.NotEqual)
    } else {
      return this.getToken(CParser.NotEqual, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_equalityExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitEqualityExpression) {
      return visitor.visitEqualityExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AndExpressionContext extends ParserRuleContext {
  public equalityExpression(): EqualityExpressionContext[]
  public equalityExpression(i: number): EqualityExpressionContext
  public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EqualityExpressionContext)
    } else {
      return this.getRuleContext(i, EqualityExpressionContext)
    }
  }
  public And(): TerminalNode[]
  public And(i: number): TerminalNode
  public And(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.And)
    } else {
      return this.getToken(CParser.And, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_andExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAndExpression) {
      listener.enterAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAndExpression) {
      listener.exitAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAndExpression) {
      return visitor.visitAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExclusiveOrExpressionContext extends ParserRuleContext {
  public andExpression(): AndExpressionContext[]
  public andExpression(i: number): AndExpressionContext
  public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AndExpressionContext)
    } else {
      return this.getRuleContext(i, AndExpressionContext)
    }
  }
  public Caret(): TerminalNode[]
  public Caret(i: number): TerminalNode
  public Caret(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Caret)
    } else {
      return this.getToken(CParser.Caret, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_exclusiveOrExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterExclusiveOrExpression) {
      listener.enterExclusiveOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitExclusiveOrExpression) {
      listener.exitExclusiveOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitExclusiveOrExpression) {
      return visitor.visitExclusiveOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InclusiveOrExpressionContext extends ParserRuleContext {
  public exclusiveOrExpression(): ExclusiveOrExpressionContext[]
  public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext
  public exclusiveOrExpression(
    i?: number
  ): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExclusiveOrExpressionContext)
    } else {
      return this.getRuleContext(i, ExclusiveOrExpressionContext)
    }
  }
  public Or(): TerminalNode[]
  public Or(i: number): TerminalNode
  public Or(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Or)
    } else {
      return this.getToken(CParser.Or, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_inclusiveOrExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterInclusiveOrExpression) {
      listener.enterInclusiveOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitInclusiveOrExpression) {
      listener.exitInclusiveOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitInclusiveOrExpression) {
      return visitor.visitInclusiveOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalAndExpressionContext extends ParserRuleContext {
  public inclusiveOrExpression(): InclusiveOrExpressionContext[]
  public inclusiveOrExpression(i: number): InclusiveOrExpressionContext
  public inclusiveOrExpression(
    i?: number
  ): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InclusiveOrExpressionContext)
    } else {
      return this.getRuleContext(i, InclusiveOrExpressionContext)
    }
  }
  public AndAnd(): TerminalNode[]
  public AndAnd(i: number): TerminalNode
  public AndAnd(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.AndAnd)
    } else {
      return this.getToken(CParser.AndAnd, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_logicalAndExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterLogicalAndExpression) {
      listener.enterLogicalAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitLogicalAndExpression) {
      listener.exitLogicalAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpression) {
      return visitor.visitLogicalAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalOrExpressionContext extends ParserRuleContext {
  public logicalAndExpression(): LogicalAndExpressionContext[]
  public logicalAndExpression(i: number): LogicalAndExpressionContext
  public logicalAndExpression(
    i?: number
  ): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LogicalAndExpressionContext)
    } else {
      return this.getRuleContext(i, LogicalAndExpressionContext)
    }
  }
  public OrOr(): TerminalNode[]
  public OrOr(i: number): TerminalNode
  public OrOr(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.OrOr)
    } else {
      return this.getToken(CParser.OrOr, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_logicalOrExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterLogicalOrExpression) {
      listener.enterLogicalOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitLogicalOrExpression) {
      listener.exitLogicalOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpression) {
      return visitor.visitLogicalOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public logicalOrExpression(): LogicalOrExpressionContext {
    return this.getRuleContext(0, LogicalOrExpressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Question, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Colon, 0)
  }
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_conditionalExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public assignmentOperator(): AssignmentOperatorContext | undefined {
    return this.tryGetRuleContext(0, AssignmentOperatorContext)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_assignmentExpression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAssignmentExpression) {
      listener.enterAssignmentExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAssignmentExpression) {
      listener.exitAssignmentExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAssignmentExpression) {
      return visitor.visitAssignmentExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentOperatorContext extends ParserRuleContext {
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.Assign, 0)
  }
  public StarAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.StarAssign, 0)
  }
  public DivAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.DivAssign, 0)
  }
  public ModAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.ModAssign, 0)
  }
  public PlusAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.PlusAssign, 0)
  }
  public MinusAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.MinusAssign, 0)
  }
  public LeftShiftAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.LeftShiftAssign, 0)
  }
  public RightShiftAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.RightShiftAssign, 0)
  }
  public AndAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.AndAssign, 0)
  }
  public XorAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.XorAssign, 0)
  }
  public OrAssign(): TerminalNode | undefined {
    return this.tryGetToken(CParser.OrAssign, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_assignmentOperator
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterAssignmentOperator) {
      listener.enterAssignmentOperator(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitAssignmentOperator) {
      listener.exitAssignmentOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitAssignmentOperator) {
      return visitor.visitAssignmentOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public Semi(): TerminalNode {
    return this.getToken(CParser.Semi, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_expressionStatement
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext[]
  public assignmentExpression(i: number): AssignmentExpressionContext
  public assignmentExpression(
    i?: number
  ): AssignmentExpressionContext | AssignmentExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AssignmentExpressionContext)
    } else {
      return this.getRuleContext(i, AssignmentExpressionContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CParser.Comma)
    } else {
      return this.getToken(CParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CParser.RULE_expression
  }
  // @Override
  public enterRule(listener: CListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
