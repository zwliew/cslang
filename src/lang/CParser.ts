// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";


export class CParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly Auto = 20;
	public static readonly Break = 21;
	public static readonly Case = 22;
	public static readonly Char = 23;
	public static readonly Const = 24;
	public static readonly Continue = 25;
	public static readonly Default = 26;
	public static readonly Do = 27;
	public static readonly Double = 28;
	public static readonly Else = 29;
	public static readonly Enum = 30;
	public static readonly Extern = 31;
	public static readonly Float = 32;
	public static readonly For = 33;
	public static readonly Goto = 34;
	public static readonly If = 35;
	public static readonly Inline = 36;
	public static readonly Int = 37;
	public static readonly Long = 38;
	public static readonly Register = 39;
	public static readonly Restrict = 40;
	public static readonly Return = 41;
	public static readonly Short = 42;
	public static readonly Signed = 43;
	public static readonly Sizeof = 44;
	public static readonly Static = 45;
	public static readonly Struct = 46;
	public static readonly Switch = 47;
	public static readonly Typedef = 48;
	public static readonly Union = 49;
	public static readonly Unsigned = 50;
	public static readonly Void = 51;
	public static readonly Volatile = 52;
	public static readonly While = 53;
	public static readonly Alignas = 54;
	public static readonly Alignof = 55;
	public static readonly Atomic = 56;
	public static readonly Bool = 57;
	public static readonly Complex = 58;
	public static readonly Generic = 59;
	public static readonly Imaginary = 60;
	public static readonly Noreturn = 61;
	public static readonly StaticAssert = 62;
	public static readonly ThreadLocal = 63;
	public static readonly LeftParen = 64;
	public static readonly RightParen = 65;
	public static readonly LeftBracket = 66;
	public static readonly RightBracket = 67;
	public static readonly LeftBrace = 68;
	public static readonly RightBrace = 69;
	public static readonly Less = 70;
	public static readonly LessEqual = 71;
	public static readonly Greater = 72;
	public static readonly GreaterEqual = 73;
	public static readonly LeftShift = 74;
	public static readonly RightShift = 75;
	public static readonly Plus = 76;
	public static readonly PlusPlus = 77;
	public static readonly Minus = 78;
	public static readonly MinusMinus = 79;
	public static readonly Star = 80;
	public static readonly Div = 81;
	public static readonly Mod = 82;
	public static readonly And = 83;
	public static readonly Or = 84;
	public static readonly AndAnd = 85;
	public static readonly OrOr = 86;
	public static readonly Caret = 87;
	public static readonly Not = 88;
	public static readonly Tilde = 89;
	public static readonly Question = 90;
	public static readonly Colon = 91;
	public static readonly Semi = 92;
	public static readonly Comma = 93;
	public static readonly Assign = 94;
	public static readonly StarAssign = 95;
	public static readonly DivAssign = 96;
	public static readonly ModAssign = 97;
	public static readonly PlusAssign = 98;
	public static readonly MinusAssign = 99;
	public static readonly LeftShiftAssign = 100;
	public static readonly RightShiftAssign = 101;
	public static readonly AndAssign = 102;
	public static readonly XorAssign = 103;
	public static readonly OrAssign = 104;
	public static readonly Equal = 105;
	public static readonly NotEqual = 106;
	public static readonly Arrow = 107;
	public static readonly Dot = 108;
	public static readonly Ellipsis = 109;
	public static readonly Identifier = 110;
	public static readonly Constant = 111;
	public static readonly DigitSequence = 112;
	public static readonly StringLiteral = 113;
	public static readonly ComplexDefine = 114;
	public static readonly IncludeDirective = 115;
	public static readonly AsmBlock = 116;
	public static readonly LineAfterPreprocessing = 117;
	public static readonly LineDirective = 118;
	public static readonly PragmaDirective = 119;
	public static readonly Whitespace = 120;
	public static readonly Newline = 121;
	public static readonly BlockComment = 122;
	public static readonly LineComment = 123;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_genericSelection = 1;
	public static readonly RULE_genericAssocList = 2;
	public static readonly RULE_genericAssociation = 3;
	public static readonly RULE_postfixExpression = 4;
	public static readonly RULE_argumentExpressionList = 5;
	public static readonly RULE_unaryExpression = 6;
	public static readonly RULE_unaryOperator = 7;
	public static readonly RULE_castExpression = 8;
	public static readonly RULE_multiplicativeExpression = 9;
	public static readonly RULE_additiveExpression = 10;
	public static readonly RULE_shiftExpression = 11;
	public static readonly RULE_relationalExpression = 12;
	public static readonly RULE_equalityExpression = 13;
	public static readonly RULE_andExpression = 14;
	public static readonly RULE_exclusiveOrExpression = 15;
	public static readonly RULE_inclusiveOrExpression = 16;
	public static readonly RULE_logicalAndExpression = 17;
	public static readonly RULE_logicalOrExpression = 18;
	public static readonly RULE_conditionalExpression = 19;
	public static readonly RULE_assignmentExpression = 20;
	public static readonly RULE_assignmentOperator = 21;
	public static readonly RULE_expression = 22;
	public static readonly RULE_constantExpression = 23;
	public static readonly RULE_declaration = 24;
	public static readonly RULE_initDeclaratorList = 25;
	public static readonly RULE_initDeclarator = 26;
	public static readonly RULE_storageClassSpecifier = 27;
	public static readonly RULE_typeSpecifier = 28;
	public static readonly RULE_structOrUnionSpecifier = 29;
	public static readonly RULE_structOrUnion = 30;
	public static readonly RULE_structDeclarationList = 31;
	public static readonly RULE_structDeclaration = 32;
	public static readonly RULE_specifierQualifierList = 33;
	public static readonly RULE_structDeclaratorList = 34;
	public static readonly RULE_structDeclarator = 35;
	public static readonly RULE_enumSpecifier = 36;
	public static readonly RULE_enumeratorList = 37;
	public static readonly RULE_enumerator = 38;
	public static readonly RULE_enumerationConstant = 39;
	public static readonly RULE_atomicTypeSpecifier = 40;
	public static readonly RULE_typeQualifier = 41;
	public static readonly RULE_functionSpecifier = 42;
	public static readonly RULE_alignmentSpecifier = 43;
	public static readonly RULE_declarator = 44;
	public static readonly RULE_directDeclarator = 45;
	public static readonly RULE_vcSpecificModifer = 46;
	public static readonly RULE_gccDeclaratorExtension = 47;
	public static readonly RULE_gccAttributeSpecifier = 48;
	public static readonly RULE_gccAttributeList = 49;
	public static readonly RULE_gccAttribute = 50;
	public static readonly RULE_nestedParenthesesBlock = 51;
	public static readonly RULE_pointer = 52;
	public static readonly RULE_typeQualifierList = 53;
	public static readonly RULE_parameterTypeList = 54;
	public static readonly RULE_parameterList = 55;
	public static readonly RULE_parameterDeclaration = 56;
	public static readonly RULE_identifierList = 57;
	public static readonly RULE_typeName = 58;
	public static readonly RULE_abstractDeclarator = 59;
	public static readonly RULE_directAbstractDeclarator = 60;
	public static readonly RULE_typedefName = 61;
	public static readonly RULE_initializer = 62;
	public static readonly RULE_initializerList = 63;
	public static readonly RULE_designation = 64;
	public static readonly RULE_designatorList = 65;
	public static readonly RULE_designator = 66;
	public static readonly RULE_staticAssertDeclaration = 67;
	public static readonly RULE_statement = 68;
	public static readonly RULE_labeledStatement = 69;
	public static readonly RULE_compoundStatement = 70;
	public static readonly RULE_blockItem = 71;
	public static readonly RULE_expressionStatement = 72;
	public static readonly RULE_selectionStatement = 73;
	public static readonly RULE_iterationStatement = 74;
	public static readonly RULE_forCondition = 75;
	public static readonly RULE_forDeclaration = 76;
	public static readonly RULE_forExpression = 77;
	public static readonly RULE_jumpStatement = 78;
	public static readonly RULE_compilationUnit = 79;
	public static readonly RULE_calculatorUnit = 80;
	public static readonly RULE_externalDeclaration = 81;
	public static readonly RULE_functionDefinition = 82;
	public static readonly RULE_declarationList = 83;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "genericSelection", "genericAssocList", "genericAssociation", 
		"postfixExpression", "argumentExpressionList", "unaryExpression", "unaryOperator", 
		"castExpression", "multiplicativeExpression", "additiveExpression", "shiftExpression", 
		"relationalExpression", "equalityExpression", "andExpression", "exclusiveOrExpression", 
		"inclusiveOrExpression", "logicalAndExpression", "logicalOrExpression", 
		"conditionalExpression", "assignmentExpression", "assignmentOperator", 
		"expression", "constantExpression", "declaration", "initDeclaratorList", 
		"initDeclarator", "storageClassSpecifier", "typeSpecifier", "structOrUnionSpecifier", 
		"structOrUnion", "structDeclarationList", "structDeclaration", "specifierQualifierList", 
		"structDeclaratorList", "structDeclarator", "enumSpecifier", "enumeratorList", 
		"enumerator", "enumerationConstant", "atomicTypeSpecifier", "typeQualifier", 
		"functionSpecifier", "alignmentSpecifier", "declarator", "directDeclarator", 
		"vcSpecificModifer", "gccDeclaratorExtension", "gccAttributeSpecifier", 
		"gccAttributeList", "gccAttribute", "nestedParenthesesBlock", "pointer", 
		"typeQualifierList", "parameterTypeList", "parameterList", "parameterDeclaration", 
		"identifierList", "typeName", "abstractDeclarator", "directAbstractDeclarator", 
		"typedefName", "initializer", "initializerList", "designation", "designatorList", 
		"designator", "staticAssertDeclaration", "statement", "labeledStatement", 
		"compoundStatement", "blockItem", "expressionStatement", "selectionStatement", 
		"iterationStatement", "forCondition", "forDeclaration", "forExpression", 
		"jumpStatement", "compilationUnit", "calculatorUnit", "externalDeclaration", 
		"functionDefinition", "declarationList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'__extension__'", "'__builtin_va_arg'", "'__builtin_offsetof'", 
		"'__m128'", "'__m128d'", "'__m128i'", "'__typeof__'", "'__inline__'", 
		"'__stdcall'", "'__declspec'", "'__cdecl'", "'__clrcall'", "'__fastcall'", 
		"'__thiscall'", "'__vectorcall'", "'__asm'", "'__attribute__'", "'__asm__'", 
		"'__volatile__'", "'auto'", "'break'", "'case'", "'char'", "'const'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'", 
		"'float'", "'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", "'register'", 
		"'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
		"'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", "'_Bool'", 
		"'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", "'_Static_assert'", 
		"'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", "'<='", 
		"'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'", 
		"'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", "':'", 
		"';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Auto", 
		"Break", "Case", "Char", "Const", "Continue", "Default", "Do", "Double", 
		"Else", "Enum", "Extern", "Float", "For", "Goto", "If", "Inline", "Int", 
		"Long", "Register", "Restrict", "Return", "Short", "Signed", "Sizeof", 
		"Static", "Struct", "Switch", "Typedef", "Union", "Unsigned", "Void", 
		"Volatile", "While", "Alignas", "Alignof", "Atomic", "Bool", "Complex", 
		"Generic", "Imaginary", "Noreturn", "StaticAssert", "ThreadLocal", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "LeftShift", "RightShift", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "And", 
		"Or", "AndAnd", "OrOr", "Caret", "Not", "Tilde", "Question", "Colon", 
		"Semi", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign", 
		"MinusAssign", "LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign", 
		"OrAssign", "Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier", 
		"Constant", "DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective", 
		"AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_primaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.match(CParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(CParser.Constant);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 170;
						this.match(CParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 175;
				this.match(CParser.LeftParen);
				this.state = 176;
				this.expression();
				this.state = 177;
				this.match(CParser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 179;
				this.genericSelection();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.T__0) {
					{
					this.state = 180;
					this.match(CParser.T__0);
					}
				}

				this.state = 183;
				this.match(CParser.LeftParen);
				this.state = 184;
				this.compoundStatement();
				this.state = 185;
				this.match(CParser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 187;
				this.match(CParser.T__1);
				this.state = 188;
				this.match(CParser.LeftParen);
				this.state = 189;
				this.unaryExpression();
				this.state = 190;
				this.match(CParser.Comma);
				this.state = 191;
				this.typeName();
				this.state = 192;
				this.match(CParser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 194;
				this.match(CParser.T__2);
				this.state = 195;
				this.match(CParser.LeftParen);
				this.state = 196;
				this.typeName();
				this.state = 197;
				this.match(CParser.Comma);
				this.state = 198;
				this.unaryExpression();
				this.state = 199;
				this.match(CParser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericSelection(): GenericSelectionContext {
		let _localctx: GenericSelectionContext = new GenericSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CParser.RULE_genericSelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(CParser.Generic);
			this.state = 204;
			this.match(CParser.LeftParen);
			this.state = 205;
			this.assignmentExpression();
			this.state = 206;
			this.match(CParser.Comma);
			this.state = 207;
			this.genericAssocList();
			this.state = 208;
			this.match(CParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericAssocList(): GenericAssocListContext {
		let _localctx: GenericAssocListContext = new GenericAssocListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_genericAssocList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.genericAssociation();
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 211;
				this.match(CParser.Comma);
				this.state = 212;
				this.genericAssociation();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericAssociation(): GenericAssociationContext {
		let _localctx: GenericAssociationContext = new GenericAssociationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CParser.RULE_genericAssociation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.Char:
			case CParser.Const:
			case CParser.Double:
			case CParser.Enum:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Restrict:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Struct:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Volatile:
			case CParser.Atomic:
			case CParser.Bool:
			case CParser.Complex:
			case CParser.Identifier:
				{
				this.state = 218;
				this.typeName();
				}
				break;
			case CParser.Default:
				{
				this.state = 219;
				this.match(CParser.Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 222;
			this.match(CParser.Colon);
			this.state = 223;
			this.assignmentExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 225;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.T__0) {
					{
					this.state = 226;
					this.match(CParser.T__0);
					}
				}

				this.state = 229;
				this.match(CParser.LeftParen);
				this.state = 230;
				this.typeName();
				this.state = 231;
				this.match(CParser.RightParen);
				this.state = 232;
				this.match(CParser.LeftBrace);
				this.state = 233;
				this.initializerList();
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Comma) {
					{
					this.state = 234;
					this.match(CParser.Comma);
					}
				}

				this.state = 237;
				this.match(CParser.RightBrace);
				}
				break;
			}
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 253;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CParser.LeftBracket:
						{
						this.state = 241;
						this.match(CParser.LeftBracket);
						this.state = 242;
						this.expression();
						this.state = 243;
						this.match(CParser.RightBracket);
						}
						break;
					case CParser.LeftParen:
						{
						this.state = 245;
						this.match(CParser.LeftParen);
						this.state = 247;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
							{
							this.state = 246;
							this.argumentExpressionList();
							}
						}

						this.state = 249;
						this.match(CParser.RightParen);
						}
						break;
					case CParser.Arrow:
					case CParser.Dot:
						{
						this.state = 250;
						_la = this._input.LA(1);
						if (!(_la === CParser.Arrow || _la === CParser.Dot)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 251;
						this.match(CParser.Identifier);
						}
						break;
					case CParser.PlusPlus:
					case CParser.MinusMinus:
						{
						this.state = 252;
						_la = this._input.LA(1);
						if (!(_la === CParser.PlusPlus || _la === CParser.MinusMinus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.assignmentExpression();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 259;
				this.match(CParser.Comma);
				this.state = 260;
				this.assignmentExpression();
				}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CParser.RULE_unaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 266;
					_la = this._input.LA(1);
					if (!(_la === CParser.Sizeof || _la === CParser.PlusPlus || _la === CParser.MinusMinus)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__1:
			case CParser.T__2:
			case CParser.Generic:
			case CParser.LeftParen:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.StringLiteral:
				{
				this.state = 272;
				this.postfixExpression();
				}
				break;
			case CParser.Plus:
			case CParser.Minus:
			case CParser.Star:
			case CParser.And:
			case CParser.Not:
			case CParser.Tilde:
				{
				this.state = 273;
				this.unaryOperator();
				this.state = 274;
				this.castExpression();
				}
				break;
			case CParser.Sizeof:
			case CParser.Alignof:
				{
				this.state = 276;
				_la = this._input.LA(1);
				if (!(_la === CParser.Sizeof || _la === CParser.Alignof)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 277;
				this.match(CParser.LeftParen);
				this.state = 278;
				this.typeName();
				this.state = 279;
				this.match(CParser.RightParen);
				}
				break;
			case CParser.AndAnd:
				{
				this.state = 281;
				this.match(CParser.AndAnd);
				this.state = 282;
				this.match(CParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			_la = this._input.LA(1);
			if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.T__0) {
					{
					this.state = 287;
					this.match(CParser.T__0);
					}
				}

				this.state = 290;
				this.match(CParser.LeftParen);
				this.state = 291;
				this.typeName();
				this.state = 292;
				this.match(CParser.RightParen);
				this.state = 293;
				this.castExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 296;
				this.match(CParser.DigitSequence);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.castExpression();
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					_la = this._input.LA(1);
					if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (CParser.Star - 80)) | (1 << (CParser.Div - 80)) | (1 << (CParser.Mod - 80)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 301;
					this.castExpression();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_additiveExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.multiplicativeExpression();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					_la = this._input.LA(1);
					if (!(_la === CParser.Plus || _la === CParser.Minus)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 309;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_shiftExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.additiveExpression();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.LeftShift || _la === CParser.RightShift) {
				{
				{
				this.state = 316;
				_la = this._input.LA(1);
				if (!(_la === CParser.LeftShift || _la === CParser.RightShift)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 317;
				this.additiveExpression();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_relationalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.shiftExpression();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CParser.Less - 70)) | (1 << (CParser.LessEqual - 70)) | (1 << (CParser.Greater - 70)) | (1 << (CParser.GreaterEqual - 70)))) !== 0)) {
				{
				{
				this.state = 324;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CParser.Less - 70)) | (1 << (CParser.LessEqual - 70)) | (1 << (CParser.Greater - 70)) | (1 << (CParser.GreaterEqual - 70)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 325;
				this.shiftExpression();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.relationalExpression();
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Equal || _la === CParser.NotEqual) {
				{
				{
				this.state = 332;
				_la = this._input.LA(1);
				if (!(_la === CParser.Equal || _la === CParser.NotEqual)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 333;
				this.relationalExpression();
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_andExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.equalityExpression();
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 340;
					this.match(CParser.And);
					this.state = 341;
					this.equalityExpression();
					}
					}
				}
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CParser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.andExpression();
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Caret) {
				{
				{
				this.state = 348;
				this.match(CParser.Caret);
				this.state = 349;
				this.andExpression();
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.exclusiveOrExpression();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Or) {
				{
				{
				this.state = 356;
				this.match(CParser.Or);
				this.state = 357;
				this.exclusiveOrExpression();
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.inclusiveOrExpression();
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 364;
					this.match(CParser.AndAnd);
					this.state = 365;
					this.inclusiveOrExpression();
					}
					}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.logicalAndExpression();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.OrOr) {
				{
				{
				this.state = 372;
				this.match(CParser.OrOr);
				this.state = 373;
				this.logicalAndExpression();
				}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.logicalOrExpression();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Question) {
				{
				this.state = 380;
				this.match(CParser.Question);
				this.state = 381;
				this.expression();
				this.state = 382;
				this.match(CParser.Colon);
				this.state = 383;
				this.conditionalExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_assignmentExpression);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.unaryExpression();
				this.state = 389;
				this.assignmentOperator();
				this.state = 390;
				this.assignmentExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.match(CParser.DigitSequence);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (CParser.Assign - 94)) | (1 << (CParser.StarAssign - 94)) | (1 << (CParser.DivAssign - 94)) | (1 << (CParser.ModAssign - 94)) | (1 << (CParser.PlusAssign - 94)) | (1 << (CParser.MinusAssign - 94)) | (1 << (CParser.LeftShiftAssign - 94)) | (1 << (CParser.RightShiftAssign - 94)) | (1 << (CParser.AndAssign - 94)) | (1 << (CParser.XorAssign - 94)) | (1 << (CParser.OrAssign - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.assignmentExpression();
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 398;
				this.match(CParser.Comma);
				this.state = 399;
				this.assignmentExpression();
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.typeSpecifier();
			this.state = 408;
			this.initDeclaratorList();
			this.state = 409;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.initDeclarator();
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 412;
				this.match(CParser.Comma);
				this.state = 413;
				this.initDeclarator();
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.declarator();
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Assign) {
				{
				this.state = 420;
				this.match(CParser.Assign);
				this.state = 421;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CParser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			_la = this._input.LA(1);
			if (!(_la === CParser.Auto || _la === CParser.Extern || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Register - 39)) | (1 << (CParser.Static - 39)) | (1 << (CParser.Typedef - 39)) | (1 << (CParser.ThreadLocal - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.Char:
			case CParser.Double:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Bool:
			case CParser.Complex:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.Char) | (1 << CParser.Double))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.match(CParser.T__0);
				this.state = 428;
				this.match(CParser.LeftParen);
				this.state = 429;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 430;
				this.match(CParser.RightParen);
				}
				break;
			case CParser.Atomic:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 431;
				this.atomicTypeSpecifier();
				}
				break;
			case CParser.Struct:
			case CParser.Union:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 432;
				this.structOrUnionSpecifier();
				}
				break;
			case CParser.Enum:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 433;
				this.enumSpecifier();
				}
				break;
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 434;
				this.typedefName();
				}
				break;
			case CParser.T__6:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 435;
				this.match(CParser.T__6);
				this.state = 436;
				this.match(CParser.LeftParen);
				this.state = 437;
				this.constantExpression();
				this.state = 438;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		let _localctx: StructOrUnionSpecifierContext = new StructOrUnionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CParser.RULE_structOrUnionSpecifier);
		let _la: number;
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.structOrUnion();
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 443;
					this.match(CParser.Identifier);
					}
				}

				this.state = 446;
				this.match(CParser.LeftBrace);
				this.state = 447;
				this.structDeclarationList();
				this.state = 448;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 450;
				this.structOrUnion();
				this.state = 451;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structOrUnion(): StructOrUnionContext {
		let _localctx: StructOrUnionContext = new StructOrUnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CParser.RULE_structOrUnion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			_la = this._input.LA(1);
			if (!(_la === CParser.Struct || _la === CParser.Union)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclarationList(): StructDeclarationListContext {
		let _localctx: StructDeclarationListContext = new StructDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CParser.RULE_structDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 457;
				this.structDeclaration();
				}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.StaticAssert - 32)))) !== 0) || _la === CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CParser.RULE_structDeclaration);
		try {
			this.state = 470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.specifierQualifierList();
				this.state = 463;
				this.structDeclaratorList();
				this.state = 464;
				this.match(CParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
				this.specifierQualifierList();
				this.state = 467;
				this.match(CParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 469;
				this.staticAssertDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specifierQualifierList(): SpecifierQualifierListContext {
		let _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CParser.RULE_specifierQualifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.typeSpecifier();
				}
				break;

			case 2:
				{
				this.state = 473;
				this.typeQualifier();
				}
				break;
			}
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 476;
				this.specifierQualifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclaratorList(): StructDeclaratorListContext {
		let _localctx: StructDeclaratorListContext = new StructDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CParser.RULE_structDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.structDeclarator();
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 480;
				this.match(CParser.Comma);
				this.state = 481;
				this.structDeclarator();
				}
				}
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclarator(): StructDeclaratorContext {
		let _localctx: StructDeclaratorContext = new StructDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CParser.RULE_structDeclarator);
		let _la: number;
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (CParser.Star - 80)) | (1 << (CParser.Caret - 80)) | (1 << (CParser.Identifier - 80)))) !== 0)) {
					{
					this.state = 488;
					this.declarator();
					}
				}

				this.state = 491;
				this.match(CParser.Colon);
				this.state = 492;
				this.constantExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.match(CParser.Enum);
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 496;
					this.match(CParser.Identifier);
					}
				}

				this.state = 499;
				this.match(CParser.LeftBrace);
				this.state = 500;
				this.enumeratorList();
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Comma) {
					{
					this.state = 501;
					this.match(CParser.Comma);
					}
				}

				this.state = 504;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
				this.match(CParser.Enum);
				this.state = 507;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorList(): EnumeratorListContext {
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CParser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.enumerator();
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 511;
					this.match(CParser.Comma);
					this.state = 512;
					this.enumerator();
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CParser.RULE_enumerator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.enumerationConstant();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Assign) {
				{
				this.state = 519;
				this.match(CParser.Assign);
				this.state = 520;
				this.constantExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationConstant(): EnumerationConstantContext {
		let _localctx: EnumerationConstantContext = new EnumerationConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CParser.RULE_enumerationConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext {
		let _localctx: AtomicTypeSpecifierContext = new AtomicTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CParser.RULE_atomicTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(CParser.Atomic);
			this.state = 526;
			this.match(CParser.LeftParen);
			this.state = 527;
			this.typeName();
			this.state = 528;
			this.match(CParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQualifier(): TypeQualifierContext {
		let _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			_la = this._input.LA(1);
			if (!(_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSpecifier(): FunctionSpecifierContext {
		let _localctx: FunctionSpecifierContext = new FunctionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CParser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__7:
			case CParser.T__8:
			case CParser.Inline:
			case CParser.Noreturn:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				_la = this._input.LA(1);
				if (!(_la === CParser.T__7 || _la === CParser.T__8 || _la === CParser.Inline || _la === CParser.Noreturn)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.gccAttributeSpecifier();
				}
				break;
			case CParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 534;
				this.match(CParser.T__9);
				this.state = 535;
				this.match(CParser.LeftParen);
				this.state = 536;
				this.match(CParser.Identifier);
				this.state = 537;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alignmentSpecifier(): AlignmentSpecifierContext {
		let _localctx: AlignmentSpecifierContext = new AlignmentSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CParser.RULE_alignmentSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(CParser.Alignas);
			this.state = 541;
			this.match(CParser.LeftParen);
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 542;
				this.typeName();
				}
				break;

			case 2:
				{
				this.state = 543;
				this.constantExpression();
				}
				break;
			}
			this.state = 546;
			this.match(CParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Star || _la === CParser.Caret) {
				{
				this.state = 548;
				this.pointer();
				}
			}

			this.state = 551;
			this.directDeclarator();
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__15 || _la === CParser.T__16) {
				{
				{
				this.state = 552;
				this.gccDeclaratorExtension();
				}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directDeclarator(): DirectDeclaratorContext {
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vcSpecificModifer(): VcSpecificModiferContext {
		let _localctx: VcSpecificModiferContext = new VcSpecificModiferContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CParser.RULE_vcSpecificModifer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__8) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__14))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext {
		let _localctx: GccDeclaratorExtensionContext = new GccDeclaratorExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CParser.RULE_gccDeclaratorExtension);
		let _la: number;
		try {
			this.state = 571;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.match(CParser.T__15);
				this.state = 563;
				this.match(CParser.LeftParen);
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 564;
					this.match(CParser.StringLiteral);
					}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CParser.StringLiteral);
				this.state = 569;
				this.match(CParser.RightParen);
				}
				break;
			case CParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.gccAttributeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gccAttributeSpecifier(): GccAttributeSpecifierContext {
		let _localctx: GccAttributeSpecifierContext = new GccAttributeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CParser.RULE_gccAttributeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.match(CParser.T__16);
			this.state = 574;
			this.match(CParser.LeftParen);
			this.state = 575;
			this.match(CParser.LeftParen);
			this.state = 576;
			this.gccAttributeList();
			this.state = 577;
			this.match(CParser.RightParen);
			this.state = 578;
			this.match(CParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gccAttributeList(): GccAttributeListContext {
		let _localctx: GccAttributeListContext = new GccAttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CParser.RULE_gccAttributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.For - 32)) | (1 << (CParser.Goto - 32)) | (1 << (CParser.If - 32)) | (1 << (CParser.Inline - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CParser.LeftBracket - 66)) | (1 << (CParser.RightBracket - 66)) | (1 << (CParser.LeftBrace - 66)) | (1 << (CParser.RightBrace - 66)) | (1 << (CParser.Less - 66)) | (1 << (CParser.LessEqual - 66)) | (1 << (CParser.Greater - 66)) | (1 << (CParser.GreaterEqual - 66)) | (1 << (CParser.LeftShift - 66)) | (1 << (CParser.RightShift - 66)) | (1 << (CParser.Plus - 66)) | (1 << (CParser.PlusPlus - 66)) | (1 << (CParser.Minus - 66)) | (1 << (CParser.MinusMinus - 66)) | (1 << (CParser.Star - 66)) | (1 << (CParser.Div - 66)) | (1 << (CParser.Mod - 66)) | (1 << (CParser.And - 66)) | (1 << (CParser.Or - 66)) | (1 << (CParser.AndAnd - 66)) | (1 << (CParser.OrOr - 66)) | (1 << (CParser.Caret - 66)) | (1 << (CParser.Not - 66)) | (1 << (CParser.Tilde - 66)) | (1 << (CParser.Question - 66)) | (1 << (CParser.Colon - 66)) | (1 << (CParser.Semi - 66)) | (1 << (CParser.Assign - 66)) | (1 << (CParser.StarAssign - 66)) | (1 << (CParser.DivAssign - 66)) | (1 << (CParser.ModAssign - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CParser.PlusAssign - 98)) | (1 << (CParser.MinusAssign - 98)) | (1 << (CParser.LeftShiftAssign - 98)) | (1 << (CParser.RightShiftAssign - 98)) | (1 << (CParser.AndAssign - 98)) | (1 << (CParser.XorAssign - 98)) | (1 << (CParser.OrAssign - 98)) | (1 << (CParser.Equal - 98)) | (1 << (CParser.NotEqual - 98)) | (1 << (CParser.Arrow - 98)) | (1 << (CParser.Dot - 98)) | (1 << (CParser.Ellipsis - 98)) | (1 << (CParser.Identifier - 98)) | (1 << (CParser.Constant - 98)) | (1 << (CParser.DigitSequence - 98)) | (1 << (CParser.StringLiteral - 98)) | (1 << (CParser.ComplexDefine - 98)) | (1 << (CParser.IncludeDirective - 98)) | (1 << (CParser.AsmBlock - 98)) | (1 << (CParser.LineAfterPreprocessing - 98)) | (1 << (CParser.LineDirective - 98)) | (1 << (CParser.PragmaDirective - 98)) | (1 << (CParser.Whitespace - 98)) | (1 << (CParser.Newline - 98)) | (1 << (CParser.BlockComment - 98)) | (1 << (CParser.LineComment - 98)))) !== 0)) {
				{
				this.state = 580;
				this.gccAttribute();
				}
			}

			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 583;
				this.match(CParser.Comma);
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.For - 32)) | (1 << (CParser.Goto - 32)) | (1 << (CParser.If - 32)) | (1 << (CParser.Inline - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CParser.LeftBracket - 66)) | (1 << (CParser.RightBracket - 66)) | (1 << (CParser.LeftBrace - 66)) | (1 << (CParser.RightBrace - 66)) | (1 << (CParser.Less - 66)) | (1 << (CParser.LessEqual - 66)) | (1 << (CParser.Greater - 66)) | (1 << (CParser.GreaterEqual - 66)) | (1 << (CParser.LeftShift - 66)) | (1 << (CParser.RightShift - 66)) | (1 << (CParser.Plus - 66)) | (1 << (CParser.PlusPlus - 66)) | (1 << (CParser.Minus - 66)) | (1 << (CParser.MinusMinus - 66)) | (1 << (CParser.Star - 66)) | (1 << (CParser.Div - 66)) | (1 << (CParser.Mod - 66)) | (1 << (CParser.And - 66)) | (1 << (CParser.Or - 66)) | (1 << (CParser.AndAnd - 66)) | (1 << (CParser.OrOr - 66)) | (1 << (CParser.Caret - 66)) | (1 << (CParser.Not - 66)) | (1 << (CParser.Tilde - 66)) | (1 << (CParser.Question - 66)) | (1 << (CParser.Colon - 66)) | (1 << (CParser.Semi - 66)) | (1 << (CParser.Assign - 66)) | (1 << (CParser.StarAssign - 66)) | (1 << (CParser.DivAssign - 66)) | (1 << (CParser.ModAssign - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CParser.PlusAssign - 98)) | (1 << (CParser.MinusAssign - 98)) | (1 << (CParser.LeftShiftAssign - 98)) | (1 << (CParser.RightShiftAssign - 98)) | (1 << (CParser.AndAssign - 98)) | (1 << (CParser.XorAssign - 98)) | (1 << (CParser.OrAssign - 98)) | (1 << (CParser.Equal - 98)) | (1 << (CParser.NotEqual - 98)) | (1 << (CParser.Arrow - 98)) | (1 << (CParser.Dot - 98)) | (1 << (CParser.Ellipsis - 98)) | (1 << (CParser.Identifier - 98)) | (1 << (CParser.Constant - 98)) | (1 << (CParser.DigitSequence - 98)) | (1 << (CParser.StringLiteral - 98)) | (1 << (CParser.ComplexDefine - 98)) | (1 << (CParser.IncludeDirective - 98)) | (1 << (CParser.AsmBlock - 98)) | (1 << (CParser.LineAfterPreprocessing - 98)) | (1 << (CParser.LineDirective - 98)) | (1 << (CParser.PragmaDirective - 98)) | (1 << (CParser.Whitespace - 98)) | (1 << (CParser.Newline - 98)) | (1 << (CParser.BlockComment - 98)) | (1 << (CParser.LineComment - 98)))) !== 0)) {
					{
					this.state = 584;
					this.gccAttribute();
					}
				}

				}
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gccAttribute(): GccAttributeContext {
		let _localctx: GccAttributeContext = new GccAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CParser.RULE_gccAttribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if (_la <= 0 || (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.LeftParen - 64)) | (1 << (CParser.RightParen - 64)) | (1 << (CParser.Comma - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftParen) {
				{
				this.state = 593;
				this.match(CParser.LeftParen);
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
					{
					this.state = 594;
					this.argumentExpressionList();
					}
				}

				this.state = 597;
				this.match(CParser.RightParen);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.For - 32)) | (1 << (CParser.Goto - 32)) | (1 << (CParser.If - 32)) | (1 << (CParser.Inline - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.LeftParen - 64)) | (1 << (CParser.LeftBracket - 64)) | (1 << (CParser.RightBracket - 64)) | (1 << (CParser.LeftBrace - 64)) | (1 << (CParser.RightBrace - 64)) | (1 << (CParser.Less - 64)) | (1 << (CParser.LessEqual - 64)) | (1 << (CParser.Greater - 64)) | (1 << (CParser.GreaterEqual - 64)) | (1 << (CParser.LeftShift - 64)) | (1 << (CParser.RightShift - 64)) | (1 << (CParser.Plus - 64)) | (1 << (CParser.PlusPlus - 64)) | (1 << (CParser.Minus - 64)) | (1 << (CParser.MinusMinus - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.Div - 64)) | (1 << (CParser.Mod - 64)) | (1 << (CParser.And - 64)) | (1 << (CParser.Or - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.OrOr - 64)) | (1 << (CParser.Caret - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Question - 64)) | (1 << (CParser.Colon - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Comma - 64)) | (1 << (CParser.Assign - 64)) | (1 << (CParser.StarAssign - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CParser.DivAssign - 96)) | (1 << (CParser.ModAssign - 96)) | (1 << (CParser.PlusAssign - 96)) | (1 << (CParser.MinusAssign - 96)) | (1 << (CParser.LeftShiftAssign - 96)) | (1 << (CParser.RightShiftAssign - 96)) | (1 << (CParser.AndAssign - 96)) | (1 << (CParser.XorAssign - 96)) | (1 << (CParser.OrAssign - 96)) | (1 << (CParser.Equal - 96)) | (1 << (CParser.NotEqual - 96)) | (1 << (CParser.Arrow - 96)) | (1 << (CParser.Dot - 96)) | (1 << (CParser.Ellipsis - 96)) | (1 << (CParser.Identifier - 96)) | (1 << (CParser.Constant - 96)) | (1 << (CParser.DigitSequence - 96)) | (1 << (CParser.StringLiteral - 96)) | (1 << (CParser.ComplexDefine - 96)) | (1 << (CParser.IncludeDirective - 96)) | (1 << (CParser.AsmBlock - 96)) | (1 << (CParser.LineAfterPreprocessing - 96)) | (1 << (CParser.LineDirective - 96)) | (1 << (CParser.PragmaDirective - 96)) | (1 << (CParser.Whitespace - 96)) | (1 << (CParser.Newline - 96)) | (1 << (CParser.BlockComment - 96)) | (1 << (CParser.LineComment - 96)))) !== 0)) {
				{
				this.state = 605;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CParser.T__0:
				case CParser.T__1:
				case CParser.T__2:
				case CParser.T__3:
				case CParser.T__4:
				case CParser.T__5:
				case CParser.T__6:
				case CParser.T__7:
				case CParser.T__8:
				case CParser.T__9:
				case CParser.T__10:
				case CParser.T__11:
				case CParser.T__12:
				case CParser.T__13:
				case CParser.T__14:
				case CParser.T__15:
				case CParser.T__16:
				case CParser.T__17:
				case CParser.T__18:
				case CParser.Auto:
				case CParser.Break:
				case CParser.Case:
				case CParser.Char:
				case CParser.Const:
				case CParser.Continue:
				case CParser.Default:
				case CParser.Do:
				case CParser.Double:
				case CParser.Else:
				case CParser.Enum:
				case CParser.Extern:
				case CParser.Float:
				case CParser.For:
				case CParser.Goto:
				case CParser.If:
				case CParser.Inline:
				case CParser.Int:
				case CParser.Long:
				case CParser.Register:
				case CParser.Restrict:
				case CParser.Return:
				case CParser.Short:
				case CParser.Signed:
				case CParser.Sizeof:
				case CParser.Static:
				case CParser.Struct:
				case CParser.Switch:
				case CParser.Typedef:
				case CParser.Union:
				case CParser.Unsigned:
				case CParser.Void:
				case CParser.Volatile:
				case CParser.While:
				case CParser.Alignas:
				case CParser.Alignof:
				case CParser.Atomic:
				case CParser.Bool:
				case CParser.Complex:
				case CParser.Generic:
				case CParser.Imaginary:
				case CParser.Noreturn:
				case CParser.StaticAssert:
				case CParser.ThreadLocal:
				case CParser.LeftBracket:
				case CParser.RightBracket:
				case CParser.LeftBrace:
				case CParser.RightBrace:
				case CParser.Less:
				case CParser.LessEqual:
				case CParser.Greater:
				case CParser.GreaterEqual:
				case CParser.LeftShift:
				case CParser.RightShift:
				case CParser.Plus:
				case CParser.PlusPlus:
				case CParser.Minus:
				case CParser.MinusMinus:
				case CParser.Star:
				case CParser.Div:
				case CParser.Mod:
				case CParser.And:
				case CParser.Or:
				case CParser.AndAnd:
				case CParser.OrOr:
				case CParser.Caret:
				case CParser.Not:
				case CParser.Tilde:
				case CParser.Question:
				case CParser.Colon:
				case CParser.Semi:
				case CParser.Comma:
				case CParser.Assign:
				case CParser.StarAssign:
				case CParser.DivAssign:
				case CParser.ModAssign:
				case CParser.PlusAssign:
				case CParser.MinusAssign:
				case CParser.LeftShiftAssign:
				case CParser.RightShiftAssign:
				case CParser.AndAssign:
				case CParser.XorAssign:
				case CParser.OrAssign:
				case CParser.Equal:
				case CParser.NotEqual:
				case CParser.Arrow:
				case CParser.Dot:
				case CParser.Ellipsis:
				case CParser.Identifier:
				case CParser.Constant:
				case CParser.DigitSequence:
				case CParser.StringLiteral:
				case CParser.ComplexDefine:
				case CParser.IncludeDirective:
				case CParser.AsmBlock:
				case CParser.LineAfterPreprocessing:
				case CParser.LineDirective:
				case CParser.PragmaDirective:
				case CParser.Whitespace:
				case CParser.Newline:
				case CParser.BlockComment:
				case CParser.LineComment:
					{
					this.state = 600;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === CParser.LeftParen || _la === CParser.RightParen)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				case CParser.LeftParen:
					{
					this.state = 601;
					this.match(CParser.LeftParen);
					this.state = 602;
					this.nestedParenthesesBlock();
					this.state = 603;
					this.match(CParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CParser.RULE_pointer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 610;
				_la = this._input.LA(1);
				if (!(_la === CParser.Star || _la === CParser.Caret)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0)) {
					{
					this.state = 611;
					this.typeQualifierList();
					}
				}

				}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.Star || _la === CParser.Caret);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQualifierList(): TypeQualifierListContext {
		let _localctx: TypeQualifierListContext = new TypeQualifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CParser.RULE_typeQualifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 618;
				this.typeQualifier();
				}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.parameterList();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Comma) {
				{
				this.state = 624;
				this.match(CParser.Comma);
				this.state = 625;
				this.match(CParser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CParser.RULE_parameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.parameterDeclaration();
			this.state = 633;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 629;
					this.match(CParser.Comma);
					this.state = 630;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 637;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 636;
						this.typeSpecifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 639;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 641;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 643;
					this.typeSpecifier();
					}
					}
					this.state = 646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.LeftParen - 64)) | (1 << (CParser.LeftBracket - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.Caret - 64)))) !== 0)) {
					{
					this.state = 648;
					this.abstractDeclarator();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(CParser.Identifier);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 654;
				this.match(CParser.Comma);
				this.state = 655;
				this.match(CParser.Identifier);
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.specifierQualifierList();
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.LeftParen - 64)) | (1 << (CParser.LeftBracket - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.Caret - 64)))) !== 0)) {
				{
				this.state = 662;
				this.abstractDeclarator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CParser.RULE_abstractDeclarator);
		let _la: number;
		try {
			this.state = 676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Star || _la === CParser.Caret) {
					{
					this.state = 666;
					this.pointer();
					}
				}

				this.state = 669;
				this.directAbstractDeclarator(0);
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__15 || _la === CParser.T__16) {
					{
					{
					this.state = 670;
					this.gccDeclaratorExtension();
					}
					}
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public directAbstractDeclarator(): DirectAbstractDeclaratorContext;
	public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext;
	// @RuleVersion(0)
	public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectAbstractDeclaratorContext = _localctx;
		let _startState: number = 120;
		this.enterRecursionRule(_localctx, 120, CParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 679;
				this.match(CParser.LeftParen);
				this.state = 680;
				this.abstractDeclarator();
				this.state = 681;
				this.match(CParser.RightParen);
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 682;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 687;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 688;
				this.match(CParser.LeftBracket);
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0)) {
					{
					this.state = 689;
					this.typeQualifierList();
					}
				}

				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
					{
					this.state = 692;
					this.assignmentExpression();
					}
				}

				this.state = 695;
				this.match(CParser.RightBracket);
				}
				break;

			case 3:
				{
				this.state = 696;
				this.match(CParser.LeftBracket);
				this.state = 697;
				this.match(CParser.Static);
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0)) {
					{
					this.state = 698;
					this.typeQualifierList();
					}
				}

				this.state = 701;
				this.assignmentExpression();
				this.state = 702;
				this.match(CParser.RightBracket);
				}
				break;

			case 4:
				{
				this.state = 704;
				this.match(CParser.LeftBracket);
				this.state = 705;
				this.typeQualifierList();
				this.state = 706;
				this.match(CParser.Static);
				this.state = 707;
				this.assignmentExpression();
				this.state = 708;
				this.match(CParser.RightBracket);
				}
				break;

			case 5:
				{
				this.state = 710;
				this.match(CParser.LeftBracket);
				this.state = 711;
				this.match(CParser.Star);
				this.state = 712;
				this.match(CParser.RightBracket);
				}
				break;

			case 6:
				{
				this.state = 713;
				this.match(CParser.LeftParen);
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier) {
					{
					this.state = 714;
					this.parameterTypeList();
					}
				}

				this.state = 717;
				this.match(CParser.RightParen);
				this.state = 721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 718;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 723;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 767;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 726;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 727;
						this.match(CParser.LeftBracket);
						this.state = 729;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0)) {
							{
							this.state = 728;
							this.typeQualifierList();
							}
						}

						this.state = 732;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
							{
							this.state = 731;
							this.assignmentExpression();
							}
						}

						this.state = 734;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 735;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 736;
						this.match(CParser.LeftBracket);
						this.state = 737;
						this.match(CParser.Static);
						this.state = 739;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CParser.Restrict - 40)) | (1 << (CParser.Volatile - 40)) | (1 << (CParser.Atomic - 40)))) !== 0)) {
							{
							this.state = 738;
							this.typeQualifierList();
							}
						}

						this.state = 741;
						this.assignmentExpression();
						this.state = 742;
						this.match(CParser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 744;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 745;
						this.match(CParser.LeftBracket);
						this.state = 746;
						this.typeQualifierList();
						this.state = 747;
						this.match(CParser.Static);
						this.state = 748;
						this.assignmentExpression();
						this.state = 749;
						this.match(CParser.RightBracket);
						}
						break;

					case 4:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 751;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 752;
						this.match(CParser.LeftBracket);
						this.state = 753;
						this.match(CParser.Star);
						this.state = 754;
						this.match(CParser.RightBracket);
						}
						break;

					case 5:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 755;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 756;
						this.match(CParser.LeftParen);
						this.state = 758;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier) {
							{
							this.state = 757;
							this.parameterTypeList();
							}
						}

						this.state = 760;
						this.match(CParser.RightParen);
						this.state = 764;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 761;
								this.gccDeclaratorExtension();
								}
								}
							}
							this.state = 766;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.assignmentExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftBracket || _la === CParser.Dot) {
				{
				this.state = 776;
				this.designation();
				}
			}

			this.state = 779;
			this.initializer();
			this.state = 787;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 780;
					this.match(CParser.Comma);
					this.state = 782;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CParser.LeftBracket || _la === CParser.Dot) {
						{
						this.state = 781;
						this.designation();
						}
					}

					this.state = 784;
					this.initializer();
					}
					}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CParser.RULE_designation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.designatorList();
			this.state = 791;
			this.match(CParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designatorList(): DesignatorListContext {
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 793;
				this.designator();
				}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.LeftBracket || _la === CParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CParser.RULE_designator);
		try {
			this.state = 804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 798;
				this.match(CParser.LeftBracket);
				this.state = 799;
				this.constantExpression();
				this.state = 800;
				this.match(CParser.RightBracket);
				}
				break;
			case CParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 802;
				this.match(CParser.Dot);
				this.state = 803;
				this.match(CParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticAssertDeclaration(): StaticAssertDeclarationContext {
		let _localctx: StaticAssertDeclarationContext = new StaticAssertDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CParser.RULE_staticAssertDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(CParser.StaticAssert);
			this.state = 807;
			this.match(CParser.LeftParen);
			this.state = 808;
			this.constantExpression();
			this.state = 809;
			this.match(CParser.Comma);
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 810;
				this.match(CParser.StringLiteral);
				}
				}
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.StringLiteral);
			this.state = 815;
			this.match(CParser.RightParen);
			this.state = 816;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CParser.RULE_statement);
		let _la: number;
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 818;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 819;
				this.compoundStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 821;
				this.selectionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 822;
				this.iterationStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 823;
				this.jumpStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 824;
				_la = this._input.LA(1);
				if (!(_la === CParser.T__15 || _la === CParser.T__17)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 825;
				_la = this._input.LA(1);
				if (!(_la === CParser.T__18 || _la === CParser.Volatile)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 826;
				this.match(CParser.LeftParen);
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
					{
					this.state = 827;
					this.logicalOrExpression();
					this.state = 832;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CParser.Comma) {
						{
						{
						this.state = 828;
						this.match(CParser.Comma);
						this.state = 829;
						this.logicalOrExpression();
						}
						}
						this.state = 834;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.Colon) {
					{
					{
					this.state = 837;
					this.match(CParser.Colon);
					this.state = 846;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
						{
						this.state = 838;
						this.logicalOrExpression();
						this.state = 843;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CParser.Comma) {
							{
							{
							this.state = 839;
							this.match(CParser.Comma);
							this.state = 840;
							this.logicalOrExpression();
							}
							}
							this.state = 845;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					}
					}
					this.state = 852;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 853;
				this.match(CParser.RightParen);
				this.state = 854;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CParser.RULE_labeledStatement);
		try {
			this.state = 868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.match(CParser.Identifier);
				this.state = 858;
				this.match(CParser.Colon);
				this.state = 859;
				this.statement();
				}
				break;
			case CParser.Case:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 860;
				this.match(CParser.Case);
				this.state = 861;
				this.constantExpression();
				this.state = 862;
				this.match(CParser.Colon);
				this.state = 863;
				this.statement();
				}
				break;
			case CParser.Default:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 865;
				this.match(CParser.Default);
				this.state = 866;
				this.match(CParser.Colon);
				this.state = 867;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this.match(CParser.LeftBrace);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 871;
				this.blockItem();
				}
				}
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__15) | (1 << CParser.T__17) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.For - 32)) | (1 << (CParser.Goto - 32)) | (1 << (CParser.If - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.LeftParen - 64)) | (1 << (CParser.LeftBrace - 64)) | (1 << (CParser.Plus - 64)) | (1 << (CParser.PlusPlus - 64)) | (1 << (CParser.Minus - 64)) | (1 << (CParser.MinusMinus - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.And - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Semi - 64)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0));
			this.state = 876;
			this.match(CParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CParser.RULE_blockItem);
		try {
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 878;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 879;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
				{
				this.state = 882;
				this.expression();
				}
			}

			this.state = 885;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CParser.RULE_selectionStatement);
		try {
			this.state = 902;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.match(CParser.If);
				this.state = 888;
				this.match(CParser.LeftParen);
				this.state = 889;
				this.expression();
				this.state = 890;
				this.match(CParser.RightParen);
				this.state = 891;
				this.statement();
				this.state = 894;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 892;
					this.match(CParser.Else);
					this.state = 893;
					this.statement();
					}
					break;
				}
				}
				break;
			case CParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 896;
				this.match(CParser.Switch);
				this.state = 897;
				this.match(CParser.LeftParen);
				this.state = 898;
				this.expression();
				this.state = 899;
				this.match(CParser.RightParen);
				this.state = 900;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CParser.RULE_iterationStatement);
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 904;
				this.match(CParser.While);
				this.state = 905;
				this.match(CParser.LeftParen);
				this.state = 906;
				this.expression();
				this.state = 907;
				this.match(CParser.RightParen);
				this.state = 908;
				this.statement();
				}
				break;
			case CParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 910;
				this.match(CParser.Do);
				this.state = 911;
				this.statement();
				this.state = 912;
				this.match(CParser.While);
				this.state = 913;
				this.match(CParser.LeftParen);
				this.state = 914;
				this.expression();
				this.state = 915;
				this.match(CParser.RightParen);
				this.state = 916;
				this.match(CParser.Semi);
				}
				break;
			case CParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 918;
				this.match(CParser.For);
				this.state = 919;
				this.match(CParser.LeftParen);
				this.state = 920;
				this.forCondition();
				this.state = 921;
				this.match(CParser.RightParen);
				this.state = 922;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 926;
				this.forDeclaration();
				}
				break;

			case 2:
				{
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
					{
					this.state = 927;
					this.expression();
					}
				}

				}
				break;
			}
			this.state = 932;
			this.match(CParser.Semi);
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
				{
				this.state = 933;
				this.forExpression();
				}
			}

			this.state = 936;
			this.match(CParser.Semi);
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
				{
				this.state = 937;
				this.forExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CParser.RULE_forDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 940;
					this.typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 943;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (CParser.Star - 80)) | (1 << (CParser.Caret - 80)) | (1 << (CParser.Identifier - 80)))) !== 0)) {
				{
				this.state = 945;
				this.initDeclaratorList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.assignmentExpression();
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 949;
				this.match(CParser.Comma);
				this.state = 950;
				this.assignmentExpression();
				}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 956;
				this.match(CParser.Goto);
				this.state = 957;
				this.match(CParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 958;
				_la = this._input.LA(1);
				if (!(_la === CParser.Break || _la === CParser.Continue)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				{
				this.state = 959;
				this.match(CParser.Return);
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CParser.Sizeof - 44)) | (1 << (CParser.Alignof - 44)) | (1 << (CParser.Generic - 44)) | (1 << (CParser.LeftParen - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CParser.Plus - 76)) | (1 << (CParser.PlusPlus - 76)) | (1 << (CParser.Minus - 76)) | (1 << (CParser.MinusMinus - 76)) | (1 << (CParser.Star - 76)) | (1 << (CParser.And - 76)) | (1 << (CParser.AndAnd - 76)) | (1 << (CParser.Not - 76)) | (1 << (CParser.Tilde - 76)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CParser.Identifier - 110)) | (1 << (CParser.Constant - 110)) | (1 << (CParser.DigitSequence - 110)) | (1 << (CParser.StringLiteral - 110)))) !== 0)) {
					{
					this.state = 960;
					this.expression();
					}
				}

				}
				break;

			case 4:
				{
				this.state = 963;
				this.match(CParser.Goto);
				this.state = 964;
				this.unaryExpression();
				}
				break;
			}
			this.state = 967;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.Char:
			case CParser.Double:
			case CParser.Enum:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Struct:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Atomic:
			case CParser.Bool:
			case CParser.Complex:
			case CParser.Semi:
			case CParser.Identifier:
				{
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 969;
					this.externalDeclaration();
					}
					}
					this.state = 972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Semi || _la === CParser.Identifier);
				}
				break;
			case CParser.LeftBrace:
				{
				this.state = 974;
				this.compoundStatement();
				}
				break;
			case CParser.EOF:
				break;
			default:
				break;
			}
			this.state = 977;
			this.match(CParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calculatorUnit(): CalculatorUnitContext {
		let _localctx: CalculatorUnitContext = new CalculatorUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CParser.RULE_calculatorUnit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					this.state = 982;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
					case 1:
						{
						this.state = 979;
						this.externalDeclaration();
						}
						break;

					case 2:
						{
						this.state = 980;
						this.expression();
						}
						break;

					case 3:
						{
						this.state = 981;
						this.expressionStatement();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalDeclaration(): ExternalDeclarationContext {
		let _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CParser.RULE_externalDeclaration);
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.functionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 988;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CParser.RULE_functionDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 991;
					this.typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 994;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 996;
			this.declarator();
			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier) {
				{
				this.state = 997;
				this.declarationList();
				}
			}

			this.state = 1000;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1002;
				this.declaration();
				}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Float - 32)) | (1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 60:
			return this.directAbstractDeclarator_sempred(_localctx as DirectAbstractDeclaratorContext, predIndex);
		}
		return true;
	}
	private directAbstractDeclarator_sempred(_localctx: DirectAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03}\u03F2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x03" +
		"\x02\x06\x02\xAE\n\x02\r\x02\x0E\x02\xAF\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x05\x02\xB8\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xCC\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\xD8\n\x04\f\x04\x0E\x04\xDB\v\x04\x03\x05\x03\x05\x05\x05\xDF\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\xE6\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xEE\n\x06\x03\x06\x03\x06\x05" +
		"\x06\xF2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xFA\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0100\n\x06\f\x06\x0E" +
		"\x06\u0103\v\x06\x03\x07\x03\x07\x03\x07\x07\x07\u0108\n\x07\f\x07\x0E" +
		"\x07\u010B\v\x07\x03\b\x07\b\u010E\n\b\f\b\x0E\b\u0111\v\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u011E\n\b" +
		"\x03\t\x03\t\x03\n\x05\n\u0123\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u012C\n\n\x03\v\x03\v\x03\v\x07\v\u0131\n\v\f\v\x0E\v\u0134" +
		"\v\v\x03\f\x03\f\x03\f\x07\f\u0139\n\f\f\f\x0E\f\u013C\v\f\x03\r\x03\r" +
		"\x03\r\x07\r\u0141\n\r\f\r\x0E\r\u0144\v\r\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u0149\n\x0E\f\x0E\x0E\x0E\u014C\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\u0151\n\x0F\f\x0F\x0E\x0F\u0154\v\x0F\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\u0159\n\x10\f\x10\x0E\x10\u015C\v\x10\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\u0161\n\x11\f\x11\x0E\x11\u0164\v\x11\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\u0169\n\x12\f\x12\x0E\x12\u016C\v\x12\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\u0171\n\x13\f\x13\x0E\x13\u0174\v\x13\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u0179\n\x14\f\x14\x0E\x14\u017C\v\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0184\n\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u018C\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\u0193\n\x18\f\x18\x0E\x18\u0196\v\x18\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01A1\n\x1B" +
		"\f\x1B\x0E\x1B\u01A4\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01A9\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01BB" +
		"\n\x1E\x03\x1F\x03\x1F\x05\x1F\u01BF\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01C8\n\x1F\x03 \x03 \x03!\x06!\u01CD" +
		"\n!\r!\x0E!\u01CE\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\u01D9\n\"\x03#\x03#\x05#\u01DD\n#\x03#\x05#\u01E0\n#\x03$\x03$\x03" +
		"$\x07$\u01E5\n$\f$\x0E$\u01E8\v$\x03%\x03%\x05%\u01EC\n%\x03%\x03%\x05" +
		"%\u01F0\n%\x03&\x03&\x05&\u01F4\n&\x03&\x03&\x03&\x05&\u01F9\n&\x03&\x03" +
		"&\x03&\x03&\x05&\u01FF\n&\x03\'\x03\'\x03\'\x07\'\u0204\n\'\f\'\x0E\'" +
		"\u0207\v\'\x03(\x03(\x03(\x05(\u020C\n(\x03)\x03)\x03*\x03*\x03*\x03*" +
		"\x03*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u021D\n,\x03-\x03-" +
		"\x03-\x03-\x05-\u0223\n-\x03-\x03-\x03.\x05.\u0228\n.\x03.\x03.\x07.\u022C" +
		"\n.\f.\x0E.\u022F\v.\x03/\x03/\x030\x030\x031\x031\x031\x061\u0238\n1" +
		"\r1\x0E1\u0239\x031\x031\x051\u023E\n1\x032\x032\x032\x032\x032\x032\x03" +
		"2\x033\x053\u0248\n3\x033\x033\x053\u024C\n3\x073\u024E\n3\f3\x0E3\u0251" +
		"\v3\x034\x034\x034\x054\u0256\n4\x034\x054\u0259\n4\x035\x035\x035\x03" +
		"5\x035\x075\u0260\n5\f5\x0E5\u0263\v5\x036\x036\x056\u0267\n6\x066\u0269" +
		"\n6\r6\x0E6\u026A\x037\x067\u026E\n7\r7\x0E7\u026F\x038\x038\x038\x05" +
		"8\u0275\n8\x039\x039\x039\x079\u027A\n9\f9\x0E9\u027D\v9\x03:\x06:\u0280" +
		"\n:\r:\x0E:\u0281\x03:\x03:\x03:\x06:\u0287\n:\r:\x0E:\u0288\x03:\x05" +
		":\u028C\n:\x05:\u028E\n:\x03;\x03;\x03;\x07;\u0293\n;\f;\x0E;\u0296\v" +
		";\x03<\x03<\x05<\u029A\n<\x03=\x03=\x05=\u029E\n=\x03=\x03=\x07=\u02A2" +
		"\n=\f=\x0E=\u02A5\v=\x05=\u02A7\n=\x03>\x03>\x03>\x03>\x03>\x07>\u02AE" +
		"\n>\f>\x0E>\u02B1\v>\x03>\x03>\x05>\u02B5\n>\x03>\x05>\u02B8\n>\x03>\x03" +
		">\x03>\x03>\x05>\u02BE\n>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x05>\u02CE\n>\x03>\x03>\x07>\u02D2\n>\f>\x0E" +
		">\u02D5\v>\x05>\u02D7\n>\x03>\x03>\x03>\x05>\u02DC\n>\x03>\x05>\u02DF" +
		"\n>\x03>\x03>\x03>\x03>\x03>\x05>\u02E6\n>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u02F9\n" +
		">\x03>\x03>\x07>\u02FD\n>\f>\x0E>\u0300\v>\x07>\u0302\n>\f>\x0E>\u0305" +
		"\v>\x03?\x03?\x03@\x03@\x03A\x05A\u030C\nA\x03A\x03A\x03A\x05A\u0311\n" +
		"A\x03A\x07A\u0314\nA\fA\x0EA\u0317\vA\x03B\x03B\x03B\x03C\x06C\u031D\n" +
		"C\rC\x0EC\u031E\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0327\nD\x03E\x03E" +
		"\x03E\x03E\x03E\x06E\u032E\nE\rE\x0EE\u032F\x03E\x03E\x03E\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u0341\nF\fF\x0EF\u0344" +
		"\vF\x05F\u0346\nF\x03F\x03F\x03F\x03F\x07F\u034C\nF\fF\x0EF\u034F\vF\x05" +
		"F\u0351\nF\x07F\u0353\nF\fF\x0EF\u0356\vF\x03F\x03F\x05F\u035A\nF\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0367\nG\x03" +
		"H\x03H\x06H\u036B\nH\rH\x0EH\u036C\x03H\x03H\x03I\x03I\x05I\u0373\nI\x03" +
		"J\x05J\u0376\nJ\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0381" +
		"\nK\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0389\nK\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x05L\u039F\nL\x03M\x03M\x05M\u03A3\nM\x05M\u03A5\nM\x03M\x03M\x05" +
		"M\u03A9\nM\x03M\x03M\x05M\u03AD\nM\x03N\x06N\u03B0\nN\rN\x0EN\u03B1\x03" +
		"N\x05N\u03B5\nN\x03O\x03O\x03O\x07O\u03BA\nO\fO\x0EO\u03BD\vO\x03P\x03" +
		"P\x03P\x03P\x03P\x05P\u03C4\nP\x03P\x03P\x05P\u03C8\nP\x03P\x03P\x03Q" +
		"\x06Q\u03CD\nQ\rQ\x0EQ\u03CE\x03Q\x05Q\u03D2\nQ\x03Q\x03Q\x03R\x03R\x03" +
		"R\x06R\u03D9\nR\rR\x0ER\u03DA\x03S\x03S\x03S\x05S\u03E0\nS\x03T\x06T\u03E3" +
		"\nT\rT\x0ET\u03E4\x03T\x03T\x05T\u03E9\nT\x03T\x03T\x03U\x06U\u03EE\n" +
		"U\rU\x0EU\u03EF\x03U\x04\u03DA\u03E4\x02\x03zV\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
		"\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96" +
		"\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8" +
		"\x02\x02\x1A\x03\x02mn\x04\x02OOQQ\x05\x02..OOQQ\x04\x02..99\x07\x02N" +
		"NPPRRUUZ[\x03\x02RT\x04\x02NNPP\x03\x02LM\x03\x02HK\x03\x02kl\x03\x02" +
		"`j\b\x02\x16\x16!!))//22AA\n\x02\x06\b\x19\x19\x1E\x1E\"\"\'(,-45;<\x03" +
		"\x02\x06\b\x04\x020033\x06\x02\x1A\x1A**66::\x05\x02\n\v&&??\x04\x02\v" +
		"\v\r\x11\x04\x02BC__\x03\x02BC\x04\x02RRYY\x04\x02\x12\x12\x14\x14\x04" +
		"\x02\x15\x1566\x04\x02\x17\x17\x1B\x1B\x02\u043E\x02\xCB\x03\x02\x02\x02" +
		"\x04\xCD\x03\x02\x02\x02\x06\xD4\x03\x02\x02\x02\b\xDE\x03\x02\x02\x02" +
		"\n\xF1\x03\x02\x02\x02\f\u0104\x03\x02\x02\x02\x0E\u010F\x03\x02\x02\x02" +
		"\x10\u011F\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u012D\x03\x02" +
		"\x02\x02\x16\u0135\x03\x02\x02\x02\x18\u013D\x03\x02\x02\x02\x1A\u0145" +
		"\x03\x02\x02\x02\x1C\u014D\x03\x02\x02\x02\x1E\u0155\x03\x02\x02\x02 " +
		"\u015D\x03\x02\x02\x02\"\u0165\x03\x02\x02\x02$\u016D\x03\x02\x02\x02" +
		"&\u0175\x03\x02\x02\x02(\u017D\x03\x02\x02\x02*\u018B\x03\x02\x02\x02" +
		",\u018D\x03\x02\x02\x02.\u018F\x03\x02\x02\x020\u0197\x03\x02\x02\x02" +
		"2\u0199\x03\x02\x02\x024\u019D\x03\x02\x02\x026\u01A5\x03\x02\x02\x02" +
		"8\u01AA\x03\x02\x02\x02:\u01BA\x03\x02\x02\x02<\u01C7\x03\x02\x02\x02" +
		">\u01C9\x03\x02\x02\x02@\u01CC\x03\x02\x02\x02B\u01D8\x03\x02\x02\x02" +
		"D\u01DC\x03\x02\x02\x02F\u01E1\x03\x02\x02\x02H\u01EF\x03\x02\x02\x02" +
		"J\u01FE\x03\x02\x02\x02L\u0200\x03\x02\x02\x02N\u0208\x03\x02\x02\x02" +
		"P\u020D\x03\x02\x02\x02R\u020F\x03\x02\x02\x02T\u0214\x03\x02\x02\x02" +
		"V\u021C\x03\x02\x02\x02X\u021E\x03\x02\x02\x02Z\u0227\x03\x02\x02\x02" +
		"\\\u0230\x03\x02\x02\x02^\u0232\x03\x02\x02\x02`\u023D\x03\x02\x02\x02" +
		"b\u023F\x03\x02\x02\x02d\u0247\x03\x02\x02\x02f\u0252\x03\x02\x02\x02" +
		"h\u0261\x03\x02\x02\x02j\u0268\x03\x02\x02\x02l\u026D\x03\x02\x02\x02" +
		"n\u0271\x03\x02\x02\x02p\u0276\x03\x02\x02\x02r\u028D\x03\x02\x02\x02" +
		"t\u028F\x03\x02\x02\x02v\u0297\x03\x02\x02\x02x\u02A6\x03\x02\x02\x02" +
		"z\u02D6\x03\x02\x02\x02|\u0306\x03\x02\x02\x02~\u0308\x03\x02\x02\x02" +
		"\x80\u030B\x03\x02\x02\x02\x82\u0318\x03\x02\x02\x02\x84\u031C\x03\x02" +
		"\x02\x02\x86\u0326\x03\x02\x02\x02\x88\u0328\x03\x02\x02\x02\x8A\u0359" +
		"\x03\x02\x02\x02\x8C\u0366\x03\x02\x02\x02\x8E\u0368\x03\x02\x02\x02\x90" +
		"\u0372\x03\x02\x02\x02\x92\u0375\x03\x02\x02\x02\x94\u0388\x03\x02\x02" +
		"\x02\x96\u039E\x03\x02\x02\x02\x98\u03A4\x03\x02\x02\x02\x9A\u03AF\x03" +
		"\x02\x02\x02\x9C\u03B6\x03\x02\x02\x02\x9E\u03C7\x03\x02\x02\x02\xA0\u03D1" +
		"\x03\x02\x02\x02\xA2\u03D8\x03\x02\x02\x02\xA4\u03DF\x03\x02\x02\x02\xA6" +
		"\u03E2\x03\x02\x02\x02\xA8\u03ED\x03\x02\x02\x02\xAA\xCC\x07p\x02\x02" +
		"\xAB\xCC\x07q\x02\x02\xAC\xAE\x07s\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0" +
		"\xCC\x03\x02\x02\x02\xB1\xB2\x07B\x02\x02\xB2\xB3\x05.\x18\x02\xB3\xB4" +
		"\x07C\x02\x02\xB4\xCC\x03\x02\x02\x02\xB5\xCC\x05\x04\x03\x02\xB6\xB8" +
		"\x07\x03\x02\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9" +
		"\x03\x02\x02\x02\xB9\xBA\x07B\x02\x02\xBA\xBB\x05\x8EH\x02\xBB\xBC\x07" +
		"C\x02\x02\xBC\xCC\x03\x02\x02\x02\xBD\xBE\x07\x04\x02\x02\xBE\xBF\x07" +
		"B\x02\x02\xBF\xC0\x05\x0E\b\x02\xC0\xC1\x07_\x02\x02\xC1\xC2\x05v<\x02" +
		"\xC2\xC3\x07C\x02\x02\xC3\xCC\x03\x02\x02\x02\xC4\xC5\x07\x05\x02\x02" +
		"\xC5\xC6\x07B\x02\x02\xC6\xC7\x05v<\x02\xC7\xC8\x07_\x02\x02\xC8\xC9\x05" +
		"\x0E\b\x02\xC9\xCA\x07C\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xAA\x03\x02" +
		"\x02\x02\xCB\xAB\x03\x02\x02\x02\xCB\xAD\x03\x02\x02\x02\xCB\xB1\x03\x02" +
		"\x02\x02\xCB\xB5\x03\x02\x02\x02\xCB\xB7\x03\x02\x02\x02\xCB\xBD\x03\x02" +
		"\x02\x02\xCB\xC4\x03\x02\x02\x02\xCC\x03\x03\x02\x02\x02\xCD\xCE\x07=" +
		"\x02\x02\xCE\xCF\x07B\x02\x02\xCF\xD0\x05*\x16\x02\xD0\xD1\x07_\x02\x02" +
		"\xD1\xD2\x05\x06\x04\x02\xD2\xD3\x07C\x02\x02\xD3\x05\x03\x02\x02\x02" +
		"\xD4\xD9\x05\b\x05\x02\xD5\xD6\x07_\x02\x02\xD6\xD8\x05\b\x05\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\x07\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC" +
		"\xDF\x05v<\x02\xDD\xDF\x07\x1C\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD" +
		"\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x07]\x02\x02\xE1\xE2" +
		"\x05*\x16\x02\xE2\t\x03\x02\x02\x02\xE3\xF2\x05\x02\x02\x02\xE4\xE6\x07" +
		"\x03\x02\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xE8\x07B\x02\x02\xE8\xE9\x05v<\x02\xE9\xEA\x07C\x02\x02" +
		"\xEA\xEB\x07F\x02\x02\xEB\xED\x05\x80A\x02\xEC\xEE\x07_\x02\x02\xED\xEC" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0" +
		"\x07G\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xE3\x03\x02\x02\x02\xF1\xE5" +
		"\x03\x02\x02\x02\xF2\u0101\x03\x02\x02\x02\xF3\xF4\x07D\x02\x02\xF4\xF5" +
		"\x05.\x18\x02\xF5\xF6\x07E\x02\x02\xF6\u0100\x03\x02\x02\x02\xF7\xF9\x07" +
		"B\x02\x02\xF8\xFA\x05\f\x07\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02" +
		"\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\u0100\x07C\x02\x02\xFC\xFD\t\x02" +
		"\x02\x02\xFD\u0100\x07p\x02\x02\xFE\u0100\t\x03\x02\x02\xFF\xF3\x03\x02" +
		"\x02\x02\xFF\xF7\x03\x02\x02\x02\xFF\xFC\x03\x02\x02\x02\xFF\xFE\x03\x02" +
		"\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102" +
		"\x03\x02\x02\x02\u0102\v\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104" +
		"\u0109\x05*\x16\x02\u0105\u0106\x07_\x02\x02\u0106\u0108\x05*\x16\x02" +
		"\u0107\u0105\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03" +
		"\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\r\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010C\u010E\t\x04\x02\x02\u010D\u010C\x03\x02\x02" +
		"\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110" +
		"\x03\x02\x02\x02\u0110\u011D\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0112\u011E\x05\n\x06\x02\u0113\u0114\x05\x10\t\x02\u0114\u0115\x05\x12" +
		"\n\x02\u0115\u011E\x03\x02\x02\x02\u0116\u0117\t\x05\x02\x02\u0117\u0118" +
		"\x07B\x02\x02\u0118\u0119\x05v<\x02\u0119\u011A\x07C\x02\x02\u011A\u011E" +
		"\x03\x02\x02\x02\u011B\u011C\x07W\x02\x02\u011C\u011E\x07p\x02\x02\u011D" +
		"\u0112\x03\x02\x02\x02\u011D\u0113\x03\x02\x02\x02\u011D\u0116\x03\x02" +
		"\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E\x0F\x03\x02\x02\x02\u011F\u0120" +
		"\t\x06\x02\x02\u0120\x11\x03\x02\x02\x02\u0121\u0123\x07\x03\x02\x02\u0122" +
		"\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02" +
		"\x02\x02\u0124\u0125\x07B\x02\x02\u0125\u0126\x05v<\x02\u0126\u0127\x07" +
		"C\x02\x02\u0127\u0128\x05\x12\n\x02\u0128\u012C\x03\x02\x02\x02\u0129" +
		"\u012C\x05\x0E\b\x02\u012A\u012C\x07r\x02\x02\u012B\u0122\x03\x02\x02" +
		"\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C\x13" +
		"\x03\x02\x02\x02\u012D\u0132\x05\x12\n\x02\u012E\u012F\t\x07\x02\x02\u012F" +
		"\u0131\x05\x12\n\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0134\x03\x02\x02" +
		"\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\x15" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u013A\x05\x14\v\x02" +
		"\u0136\u0137\t\b\x02\x02\u0137\u0139\x05\x14\v\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\x17\x03\x02\x02\x02\u013C\u013A\x03\x02\x02" +
		"\x02\u013D\u0142\x05\x16\f\x02\u013E\u013F\t\t\x02\x02\u013F\u0141\x05" +
		"\x16\f\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142" +
		"\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\x19\x03\x02\x02" +
		"\x02\u0144\u0142\x03\x02\x02\x02\u0145\u014A\x05\x18\r\x02\u0146\u0147" +
		"\t\n\x02\x02\u0147\u0149\x05\x18\r\x02\u0148\u0146\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\x1B\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0152" +
		"\x05\x1A\x0E\x02\u014E\u014F\t\v\x02\x02\u014F\u0151\x05\x1A\x0E\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\x1D\x03\x02\x02\x02\u0154\u0152" +
		"\x03\x02\x02\x02\u0155\u015A\x05\x1C\x0F\x02\u0156\u0157\x07U\x02\x02" +
		"\u0157\u0159\x05\x1C\x0F\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015C\x03" +
		"\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
		"\x1F\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D\u0162\x05\x1E\x10" +
		"\x02\u015E\u015F\x07Y\x02\x02\u015F\u0161\x05\x1E\x10\x02\u0160\u015E" +
		"\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163!\x03\x02\x02\x02\u0164\u0162\x03\x02" +
		"\x02\x02\u0165\u016A\x05 \x11\x02\u0166\u0167\x07V\x02\x02\u0167\u0169" +
		"\x05 \x11\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02" +
		"\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B#\x03\x02" +
		"\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0172\x05\"\x12\x02\u016E\u016F" +
		"\x07W\x02\x02\u016F\u0171\x05\"\x12\x02\u0170\u016E\x03\x02\x02\x02\u0171" +
		"\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0173%\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u017A" +
		"\x05$\x13\x02\u0176\u0177\x07X\x02\x02\u0177\u0179\x05$\x13\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02" +
		"\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\'\x03\x02\x02\x02\u017C\u017A" +
		"\x03\x02\x02\x02\u017D\u0183\x05&\x14\x02\u017E\u017F\x07\\\x02\x02\u017F" +
		"\u0180\x05.\x18\x02\u0180\u0181\x07]\x02\x02\u0181\u0182\x05(\x15\x02" +
		"\u0182\u0184\x03\x02\x02\x02\u0183\u017E\x03\x02\x02\x02\u0183\u0184\x03" +
		"\x02\x02\x02\u0184)\x03\x02\x02\x02\u0185\u018C\x05(\x15\x02\u0186\u0187" +
		"\x05\x0E\b\x02\u0187\u0188\x05,\x17\x02\u0188\u0189\x05*\x16\x02\u0189" +
		"\u018C\x03\x02\x02\x02\u018A\u018C\x07r\x02\x02\u018B\u0185\x03\x02\x02" +
		"\x02\u018B\u0186\x03\x02\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C+\x03" +
		"\x02\x02\x02\u018D\u018E\t\f\x02\x02\u018E-\x03\x02\x02\x02\u018F\u0194" +
		"\x05*\x16\x02\u0190\u0191\x07_\x02\x02\u0191\u0193\x05*\x16\x02\u0192" +
		"\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02" +
		"\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195/\x03\x02\x02\x02\u0196\u0194" +
		"\x03\x02\x02\x02\u0197\u0198\x05(\x15\x02\u01981\x03\x02\x02\x02\u0199" +
		"\u019A\x05:\x1E\x02\u019A\u019B\x054\x1B\x02\u019B\u019C\x07^\x02\x02" +
		"\u019C3\x03\x02\x02\x02\u019D\u01A2\x056\x1C\x02\u019E\u019F\x07_\x02" +
		"\x02\u019F\u01A1\x056\x1C\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A4" +
		"\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02" +
		"\u01A35\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A8\x05Z." +
		"\x02\u01A6\u01A7\x07`\x02\x02\u01A7\u01A9\x05~@\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A97\x03\x02\x02\x02\u01AA\u01AB" +
		"\t\r\x02\x02\u01AB9\x03\x02\x02\x02\u01AC\u01BB\t\x0E\x02\x02\u01AD\u01AE" +
		"\x07\x03\x02\x02\u01AE\u01AF\x07B\x02\x02\u01AF\u01B0\t\x0F\x02\x02\u01B0" +
		"\u01BB\x07C\x02\x02\u01B1\u01BB\x05R*\x02\u01B2\u01BB\x05<\x1F\x02\u01B3" +
		"\u01BB\x05J&\x02\u01B4\u01BB\x05|?\x02\u01B5\u01B6\x07\t\x02\x02\u01B6" +
		"\u01B7\x07B\x02\x02\u01B7\u01B8\x050\x19\x02\u01B8\u01B9\x07C\x02\x02" +
		"\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01AC\x03\x02\x02\x02\u01BA\u01AD\x03" +
		"\x02\x02\x02\u01BA\u01B1\x03\x02\x02\x02\u01BA\u01B2\x03\x02\x02\x02\u01BA" +
		"\u01B3\x03\x02\x02\x02\u01BA\u01B4\x03\x02\x02\x02\u01BA\u01B5\x03\x02" +
		"\x02\x02\u01BB;\x03\x02\x02\x02\u01BC\u01BE\x05> \x02\u01BD\u01BF\x07" +
		"p\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x07F\x02\x02\u01C1\u01C2" +
		"\x05@!\x02\u01C2\u01C3\x07G\x02\x02\u01C3\u01C8\x03\x02\x02\x02\u01C4" +
		"\u01C5\x05> \x02\u01C5\u01C6\x07p\x02\x02\u01C6\u01C8\x03\x02\x02\x02" +
		"\u01C7\u01BC\x03\x02\x02\x02\u01C7\u01C4\x03\x02\x02\x02\u01C8=\x03\x02" +
		"\x02\x02\u01C9\u01CA\t\x10\x02\x02\u01CA?\x03\x02\x02\x02\u01CB\u01CD" +
		"\x05B\"\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CFA\x03\x02\x02" +
		"\x02\u01D0\u01D1\x05D#\x02\u01D1\u01D2\x05F$\x02\u01D2\u01D3\x07^\x02" +
		"\x02\u01D3\u01D9\x03\x02\x02\x02\u01D4\u01D5\x05D#\x02\u01D5\u01D6\x07" +
		"^\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D9\x05\x88E\x02\u01D8\u01D0" +
		"\x03\x02\x02\x02\u01D8\u01D4\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02" +
		"\u01D9C\x03\x02\x02\x02\u01DA\u01DD\x05:\x1E\x02\u01DB\u01DD\x05T+\x02" +
		"\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01DF\x03" +
		"\x02\x02\x02\u01DE\u01E0\x05D#\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0" +
		"\x03\x02\x02\x02\u01E0E\x03\x02\x02\x02\u01E1\u01E6\x05H%\x02\u01E2\u01E3" +
		"\x07_\x02\x02\u01E3\u01E5\x05H%\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5" +
		"\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
		"\x02\x02\u01E7G\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01F0" +
		"\x05Z.\x02\u01EA\u01EC\x05Z.\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB\u01EC" +
		"\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x07]\x02\x02" +
		"\u01EE\u01F0\x050\x19\x02\u01EF\u01E9\x03\x02\x02\x02\u01EF\u01EB\x03" +
		"\x02\x02\x02\u01F0I\x03\x02\x02\x02\u01F1\u01F3\x07 \x02\x02\u01F2\u01F4" +
		"\x07p\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07F\x02\x02\u01F6\u01F8\x05" +
		"L\'\x02\u01F7\u01F9\x07_\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x07G\x02\x02" +
		"\u01FB\u01FF\x03\x02\x02\x02\u01FC\u01FD\x07 \x02\x02\u01FD\u01FF\x07" +
		"p\x02\x02\u01FE\u01F1\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF" +
		"K\x03\x02\x02\x02\u0200\u0205\x05N(\x02\u0201\u0202\x07_\x02\x02\u0202" +
		"\u0204\x05N(\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02" +
		"\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206M\x03\x02" +
		"\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020B\x05P)\x02\u0209\u020A" +
		"\x07`\x02\x02\u020A\u020C\x050\x19\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020CO\x03\x02\x02\x02\u020D\u020E\x07p\x02\x02" +
		"\u020EQ\x03\x02\x02\x02\u020F\u0210\x07:\x02\x02\u0210\u0211\x07B\x02" +
		"\x02\u0211\u0212\x05v<\x02\u0212\u0213\x07C\x02\x02\u0213S\x03\x02\x02" +
		"\x02\u0214\u0215\t\x11\x02\x02\u0215U\x03\x02\x02\x02\u0216\u021D\t\x12" +
		"\x02\x02\u0217\u021D\x05b2\x02\u0218\u0219\x07\f\x02\x02\u0219\u021A\x07" +
		"B\x02\x02\u021A\u021B\x07p\x02\x02\u021B\u021D\x07C\x02\x02\u021C\u0216" +
		"\x03\x02\x02\x02\u021C\u0217\x03\x02\x02\x02\u021C\u0218\x03\x02\x02\x02" +
		"\u021DW\x03\x02\x02\x02\u021E\u021F\x078\x02\x02\u021F\u0222\x07B\x02" +
		"\x02\u0220\u0223\x05v<\x02\u0221\u0223\x050\x19\x02\u0222\u0220\x03\x02" +
		"\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224" +
		"\u0225\x07C\x02\x02\u0225Y\x03\x02\x02\x02\u0226\u0228\x05j6\x02\u0227" +
		"\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x03\x02" +
		"\x02\x02\u0229\u022D\x05\\/\x02\u022A\u022C\x05`1\x02\u022B\u022A\x03" +
		"\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D" +
		"\u022E\x03\x02\x02\x02\u022E[\x03\x02\x02\x02\u022F\u022D\x03\x02\x02" +
		"\x02\u0230\u0231\x07p\x02\x02\u0231]\x03\x02\x02\x02\u0232\u0233\t\x13" +
		"\x02\x02\u0233_\x03\x02\x02\x02\u0234\u0235\x07\x12\x02\x02\u0235\u0237" +
		"\x07B\x02\x02\u0236\u0238\x07s\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02" +
		"\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023E\x07C\x02\x02\u023C\u023E" +
		"\x05b2\x02\u023D\u0234\x03\x02\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E" +
		"a\x03\x02\x02\x02\u023F\u0240\x07\x13\x02\x02\u0240\u0241\x07B\x02\x02" +
		"\u0241\u0242\x07B\x02\x02\u0242\u0243\x05d3\x02\u0243\u0244\x07C\x02\x02" +
		"\u0244\u0245\x07C\x02\x02\u0245c\x03\x02\x02\x02\u0246\u0248\x05f4\x02" +
		"\u0247\u0246\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u024F\x03" +
		"\x02\x02\x02\u0249\u024B\x07_\x02\x02\u024A\u024C\x05f4\x02\u024B\u024A" +
		"\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02" +
		"\u024D\u0249\x03\x02\x02\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03" +
		"\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250e\x03\x02\x02\x02\u0251" +
		"\u024F\x03\x02\x02\x02\u0252\u0258\n\x14\x02\x02\u0253\u0255\x07B\x02" +
		"\x02\u0254\u0256\x05\f\x07\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x07C\x02\x02" +
		"\u0258\u0253\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259g\x03\x02" +
		"\x02\x02\u025A\u0260\n\x15\x02\x02\u025B\u025C\x07B\x02\x02\u025C\u025D" +
		"\x05h5\x02\u025D\u025E\x07C\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
		"\u025A\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02\u0260\u0263\x03\x02" +
		"\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262" +
		"i\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0264\u0266\t\x16\x02\x02" +
		"\u0265\u0267\x05l7\x02\u0266\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02" +
		"\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02\u0269" +
		"\u026A\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03\x02" +
		"\x02\x02\u026Bk\x03\x02\x02\x02\u026C\u026E\x05T+\x02\u026D\u026C\x03" +
		"\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F" +
		"\u0270\x03\x02\x02\x02\u0270m\x03\x02\x02\x02\u0271\u0274\x05p9\x02\u0272" +
		"\u0273\x07_\x02\x02\u0273\u0275\x07o\x02\x02\u0274\u0272\x03\x02\x02\x02" +
		"\u0274\u0275\x03\x02\x02\x02\u0275o\x03\x02\x02\x02\u0276\u027B\x05r:" +
		"\x02\u0277\u0278\x07_\x02\x02\u0278\u027A\x05r:\x02\u0279\u0277\x03\x02" +
		"\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B" +
		"\u027C\x03\x02\x02\x02\u027Cq\x03\x02\x02\x02\u027D\u027B\x03\x02\x02" +
		"\x02\u027E\u0280\x05:\x1E\x02\u027F\u027E\x03\x02\x02\x02\u0280\u0281" +
		"\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02" +
		"\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x05Z.\x02\u0284\u028E\x03\x02" +
		"\x02\x02\u0285\u0287\x05:\x1E\x02\u0286\u0285\x03\x02\x02\x02\u0287\u0288" +
		"\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02" +
		"\u0289\u028B\x03\x02\x02\x02\u028A\u028C\x05x=\x02\u028B\u028A\x03\x02" +
		"\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D" +
		"\u027F\x03\x02\x02\x02\u028D\u0286\x03\x02\x02\x02\u028Es\x03\x02\x02" +
		"\x02\u028F\u0294\x07p\x02\x02\u0290\u0291\x07_\x02\x02\u0291\u0293\x07" +
		"p\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294" +
		"\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295u\x03\x02\x02" +
		"\x02\u0296\u0294\x03\x02\x02\x02\u0297\u0299\x05D#\x02\u0298\u029A\x05" +
		"x=\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029Aw" +
		"\x03\x02\x02\x02\u029B\u02A7\x05j6\x02\u029C\u029E\x05j6\x02\u029D\u029C" +
		"\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02" +
		"\u029F\u02A3\x05z>\x02\u02A0\u02A2\x05`1\x02\u02A1\u02A0\x03\x02\x02\x02" +
		"\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03" +
		"\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6" +
		"\u029B\x03\x02\x02\x02\u02A6\u029D\x03\x02\x02\x02\u02A7y\x03\x02\x02" +
		"\x02\u02A8\u02A9\b>\x01\x02\u02A9\u02AA\x07B\x02\x02\u02AA\u02AB\x05x" +
		"=\x02\u02AB\u02AF\x07C\x02\x02\u02AC\u02AE\x05`1\x02\u02AD\u02AC\x03\x02" +
		"\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF" +
		"\u02B0\x03\x02\x02\x02\u02B0\u02D7\x03\x02\x02\x02\u02B1\u02AF\x03\x02" +
		"\x02\x02\u02B2\u02B4\x07D\x02\x02\u02B3\u02B5\x05l7\x02\u02B4\u02B3\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6" +
		"\u02B8\x05*\x16\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02" +
		"\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02D7\x07E\x02\x02\u02BA\u02BB" +
		"\x07D\x02\x02\u02BB\u02BD\x07/\x02\x02\u02BC\u02BE\x05l7\x02\u02BD\u02BC" +
		"\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02" +
		"\u02BF\u02C0\x05*\x16\x02\u02C0\u02C1\x07E\x02\x02\u02C1\u02D7\x03\x02" +
		"\x02\x02\u02C2\u02C3\x07D\x02\x02\u02C3\u02C4\x05l7\x02\u02C4\u02C5\x07" +
		"/\x02\x02\u02C5\u02C6\x05*\x16\x02\u02C6\u02C7\x07E\x02\x02\u02C7\u02D7" +
		"\x03\x02\x02\x02\u02C8\u02C9\x07D\x02\x02\u02C9\u02CA\x07R\x02\x02\u02CA" +
		"\u02D7\x07E\x02\x02\u02CB\u02CD\x07B\x02\x02\u02CC\u02CE\x05n8\x02\u02CD" +
		"\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02" +
		"\x02\x02\u02CF\u02D3\x07C\x02\x02\u02D0\u02D2\x05`1\x02\u02D1\u02D0\x03" +
		"\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3" +
		"\u02D4\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02" +
		"\x02\x02\u02D6\u02A8\x03\x02\x02\x02\u02D6\u02B2\x03\x02\x02\x02\u02D6" +
		"\u02BA\x03\x02\x02\x02\u02D6\u02C2\x03\x02\x02\x02\u02D6\u02C8\x03\x02" +
		"\x02\x02\u02D6\u02CB\x03\x02\x02\x02\u02D7\u0303\x03\x02\x02\x02\u02D8" +
		"\u02D9\f\x07\x02\x02\u02D9\u02DB\x07D\x02\x02\u02DA\u02DC\x05l7\x02\u02DB" +
		"\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02" +
		"\x02\x02\u02DD\u02DF\x05*\x16\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u0302\x07E\x02\x02" +
		"\u02E1\u02E2\f\x06\x02\x02\u02E2\u02E3\x07D\x02\x02\u02E3\u02E5\x07/\x02" +
		"\x02\u02E4\u02E6\x05l7\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03" +
		"\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x05*\x16\x02\u02E8" +
		"\u02E9\x07E\x02\x02\u02E9\u0302\x03\x02\x02\x02\u02EA\u02EB\f\x05\x02" +
		"\x02\u02EB\u02EC\x07D\x02\x02\u02EC\u02ED\x05l7\x02\u02ED\u02EE\x07/\x02" +
		"\x02\u02EE\u02EF\x05*\x16\x02\u02EF\u02F0\x07E\x02\x02\u02F0\u0302\x03" +
		"\x02\x02\x02\u02F1\u02F2\f\x04\x02\x02\u02F2\u02F3\x07D\x02\x02\u02F3" +
		"\u02F4\x07R\x02\x02\u02F4\u0302\x07E\x02\x02\u02F5\u02F6\f\x03\x02\x02" +
		"\u02F6\u02F8\x07B\x02\x02\u02F7\u02F9\x05n8\x02\u02F8\u02F7\x03\x02\x02" +
		"\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FE" +
		"\x07C\x02\x02\u02FB\u02FD\x05`1\x02\u02FC\u02FB\x03\x02\x02\x02\u02FD" +
		"\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02" +
		"\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
		"\u02D8\x03\x02\x02\x02\u0301\u02E1\x03\x02\x02\x02\u0301\u02EA\x03\x02" +
		"\x02\x02\u0301\u02F1\x03\x02\x02\x02\u0301\u02F5\x03\x02\x02\x02\u0302" +
		"\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02" +
		"\x02\x02\u0304{\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306\u0307" +
		"\x07p\x02\x02\u0307}\x03\x02\x02\x02\u0308\u0309\x05*\x16\x02\u0309\x7F" +
		"\x03\x02\x02\x02\u030A\u030C\x05\x82B\x02\u030B\u030A\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u0315\x05" +
		"~@\x02\u030E\u0310\x07_\x02\x02\u030F\u0311\x05\x82B\x02\u0310\u030F\x03" +
		"\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
		"\u0314\x05~@\x02\u0313\u030E\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02" +
		"\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\x81\x03" +
		"\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0318\u0319\x05\x84C\x02\u0319" +
		"\u031A\x07`\x02\x02\u031A\x83\x03\x02\x02\x02\u031B\u031D\x05\x86D\x02" +
		"\u031C\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031C\x03" +
		"\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\x85\x03\x02\x02\x02\u0320" +
		"\u0321\x07D\x02\x02\u0321\u0322\x050\x19\x02\u0322\u0323\x07E\x02\x02" +
		"\u0323\u0327\x03\x02\x02\x02\u0324\u0325\x07n\x02\x02\u0325\u0327\x07" +
		"p\x02\x02\u0326\u0320\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0327" +
		"\x87\x03\x02\x02\x02\u0328\u0329\x07@\x02\x02\u0329\u032A\x07B\x02\x02" +
		"\u032A\u032B\x050\x19\x02\u032B\u032D\x07_\x02\x02\u032C\u032E\x07s\x02" +
		"\x02\u032D\u032C\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u032D" +
		"\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02" +
		"\u0331\u0332\x07C\x02\x02\u0332\u0333\x07^\x02\x02\u0333\x89\x03\x02\x02" +
		"\x02\u0334\u035A\x05\x8CG\x02\u0335\u035A\x05\x8EH\x02\u0336\u035A\x05" +
		"\x92J\x02\u0337\u035A\x05\x94K\x02\u0338\u035A\x05\x96L\x02\u0339\u035A" +
		"\x05\x9EP\x02\u033A\u033B\t\x17\x02\x02\u033B\u033C\t\x18\x02\x02\u033C" +
		"\u0345\x07B\x02\x02\u033D\u0342\x05&\x14\x02\u033E\u033F\x07_\x02\x02" +
		"\u033F\u0341\x05&\x14\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0344\x03" +
		"\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343" +
		"\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u033D\x03\x02" +
		"\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0354\x03\x02\x02\x02\u0347" +
		"\u0350\x07]\x02\x02\u0348\u034D\x05&\x14\x02\u0349\u034A\x07_\x02\x02" +
		"\u034A\u034C\x05&\x14\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034F\x03" +
		"\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0348\x03\x02" +
		"\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352" +
		"\u0347\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0352\x03\x02" +
		"\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356" +
		"\u0354\x03\x02\x02\x02\u0357\u0358\x07C\x02\x02\u0358\u035A\x07^\x02\x02" +
		"\u0359\u0334\x03\x02\x02\x02\u0359\u0335\x03\x02\x02\x02\u0359\u0336\x03" +
		"\x02\x02\x02\u0359\u0337\x03\x02\x02\x02\u0359\u0338\x03\x02\x02\x02\u0359" +
		"\u0339\x03\x02\x02\x02\u0359\u033A\x03\x02\x02\x02\u035A\x8B\x03\x02\x02" +
		"\x02\u035B\u035C\x07p\x02\x02\u035C\u035D\x07]\x02\x02\u035D\u0367\x05" +
		"\x8AF\x02\u035E\u035F\x07\x18\x02\x02\u035F\u0360\x050\x19\x02\u0360\u0361" +
		"\x07]\x02\x02\u0361\u0362\x05\x8AF\x02\u0362\u0367\x03\x02\x02\x02\u0363" +
		"\u0364\x07\x1C\x02\x02\u0364\u0365\x07]\x02\x02\u0365\u0367\x05\x8AF\x02" +
		"\u0366\u035B\x03\x02\x02\x02\u0366\u035E\x03\x02\x02\x02\u0366\u0363\x03" +
		"\x02\x02\x02\u0367\x8D\x03\x02\x02\x02\u0368\u036A\x07F\x02\x02\u0369" +
		"\u036B\x05\x90I\x02\u036A\u0369\x03\x02\x02\x02\u036B\u036C\x03\x02\x02" +
		"\x02\u036C\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036E" +
		"\x03\x02\x02\x02\u036E\u036F\x07G\x02\x02\u036F\x8F\x03\x02\x02\x02\u0370" +
		"\u0373\x05\x8AF\x02\u0371\u0373\x052\x1A\x02\u0372\u0370\x03\x02\x02\x02" +
		"\u0372\u0371\x03\x02\x02\x02\u0373\x91\x03\x02\x02\x02\u0374\u0376\x05" +
		".\x18\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376" +
		"\u0377\x03\x02\x02\x02\u0377\u0378\x07^\x02\x02\u0378\x93\x03\x02\x02" +
		"\x02\u0379\u037A\x07%\x02\x02\u037A\u037B\x07B\x02\x02\u037B\u037C\x05" +
		".\x18\x02\u037C\u037D\x07C\x02\x02\u037D\u0380\x05\x8AF\x02\u037E\u037F" +
		"\x07\x1F\x02\x02\u037F\u0381\x05\x8AF\x02\u0380\u037E\x03\x02\x02\x02" +
		"\u0380\u0381\x03\x02\x02\x02\u0381\u0389\x03\x02\x02\x02\u0382\u0383\x07" +
		"1\x02\x02\u0383\u0384\x07B\x02\x02\u0384\u0385\x05.\x18\x02\u0385\u0386" +
		"\x07C\x02\x02\u0386\u0387\x05\x8AF\x02\u0387\u0389\x03\x02\x02\x02\u0388" +
		"\u0379\x03\x02\x02\x02\u0388\u0382\x03\x02\x02\x02\u0389\x95\x03\x02\x02" +
		"\x02\u038A\u038B\x077\x02\x02\u038B\u038C\x07B\x02\x02\u038C\u038D\x05" +
		".\x18\x02\u038D\u038E\x07C\x02\x02\u038E\u038F\x05\x8AF\x02\u038F\u039F" +
		"\x03\x02\x02\x02\u0390\u0391\x07\x1D\x02\x02\u0391\u0392\x05\x8AF\x02" +
		"\u0392\u0393\x077\x02\x02\u0393\u0394\x07B\x02\x02\u0394\u0395\x05.\x18" +
		"\x02\u0395\u0396\x07C\x02\x02\u0396\u0397\x07^\x02\x02\u0397\u039F\x03" +
		"\x02\x02\x02\u0398\u0399\x07#\x02\x02\u0399\u039A\x07B\x02\x02\u039A\u039B" +
		"\x05\x98M\x02\u039B\u039C\x07C\x02\x02\u039C\u039D\x05\x8AF\x02\u039D" +
		"\u039F\x03\x02\x02\x02\u039E\u038A\x03\x02\x02\x02\u039E\u0390\x03\x02" +
		"\x02\x02\u039E\u0398\x03\x02\x02\x02\u039F\x97\x03\x02\x02\x02\u03A0\u03A5" +
		"\x05\x9AN\x02\u03A1\u03A3\x05.\x18\x02\u03A2\u03A1\x03\x02\x02\x02\u03A2" +
		"\u03A3\x03\x02\x02\x02\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A0\x03\x02" +
		"\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6" +
		"\u03A8\x07^\x02\x02\u03A7\u03A9\x05\x9CO\x02\u03A8\u03A7\x03\x02\x02\x02" +
		"\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x07" +
		"^\x02\x02\u03AB\u03AD\x05\x9CO\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD" +
		"\x03\x02\x02\x02\u03AD\x99\x03\x02\x02\x02\u03AE\u03B0\x05:\x1E\x02\u03AF" +
		"\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03AF\x03\x02" +
		"\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x03\x02\x02\x02\u03B3" +
		"\u03B5\x054\x1B\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02" +
		"\x02\u03B5\x9B\x03\x02\x02\x02\u03B6\u03BB\x05*\x16\x02\u03B7\u03B8\x07" +
		"_\x02\x02\u03B8\u03BA\x05*\x16\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BD" +
		"\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02" +
		"\u03BC\x9D\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03BF\x07" +
		"$\x02\x02\u03BF\u03C8\x07p\x02\x02\u03C0\u03C8\t\x19\x02\x02\u03C1\u03C3" +
		"\x07+\x02\x02\u03C2\u03C4\x05.\x18\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3" +
		"\u03C4\x03\x02\x02\x02\u03C4\u03C8\x03\x02\x02\x02\u03C5\u03C6\x07$\x02" +
		"\x02\u03C6\u03C8\x05\x0E\b\x02\u03C7\u03BE\x03\x02\x02\x02\u03C7\u03C0" +
		"\x03\x02\x02\x02\u03C7\u03C1\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02" +
		"\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x07^\x02\x02\u03CA\x9F\x03\x02" +
		"\x02\x02\u03CB\u03CD\x05\xA4S\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03CE" +
		"\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02" +
		"\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03D2\x05\x8EH\x02\u03D1\u03CC\x03" +
		"\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2" +
		"\u03D3\x03\x02\x02\x02\u03D3\u03D4\x07\x02\x02\x03\u03D4\xA1\x03\x02\x02" +
		"\x02\u03D5\u03D9\x05\xA4S\x02\u03D6\u03D9\x05.\x18\x02\u03D7\u03D9\x05" +
		"\x92J\x02\u03D8\u03D5\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8" +
		"\u03D7\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03DB\x03\x02" +
		"\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB\xA3\x03\x02\x02\x02\u03DC\u03E0" +
		"\x05\xA6T\x02\u03DD\u03E0\x052\x1A\x02\u03DE\u03E0\x07^\x02\x02\u03DF" +
		"\u03DC\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03DE\x03\x02" +
		"\x02\x02\u03E0\xA5\x03\x02\x02\x02\u03E1\u03E3\x05:\x1E\x02\u03E2\u03E1" +
		"\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02" +
		"\u03E4\u03E2\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E8\x05" +
		"Z.\x02\u03E7\u03E9\x05\xA8U\x02\u03E8\u03E7\x03\x02\x02\x02\u03E8\u03E9" +
		"\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB\x05\x8EH\x02" +
		"\u03EB\xA7\x03\x02\x02\x02\u03EC\u03EE\x052\x1A\x02\u03ED\u03EC\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF" +
		"\u03F0\x03\x02\x02\x02\u03F0\xA9\x03\x02\x02\x02}\xAF\xB7\xCB\xD9\xDE" +
		"\xE5\xED\xF1\xF9\xFF\u0101\u0109\u010F\u011D\u0122\u012B\u0132\u013A\u0142" +
		"\u014A\u0152\u015A\u0162\u016A\u0172\u017A\u0183\u018B\u0194\u01A2\u01A8" +
		"\u01BA\u01BE\u01C7\u01CE\u01D8\u01DC\u01DF\u01E6\u01EB\u01EF\u01F3\u01F8" +
		"\u01FE\u0205\u020B\u021C\u0222\u0227\u022D\u0239\u023D\u0247\u024B\u024F" +
		"\u0255\u0258\u025F\u0261\u0266\u026A\u026F\u0274\u027B\u0281\u0288\u028B" +
		"\u028D\u0294\u0299\u029D\u02A3\u02A6\u02AF\u02B4\u02B7\u02BD\u02CD\u02D3" +
		"\u02D6\u02DB\u02DE\u02E5\u02F8\u02FE\u0301\u0303\u030B\u0310\u0315\u031E" +
		"\u0326\u032F\u0342\u0345\u034D\u0350\u0354\u0359\u0366\u036C\u0372\u0375" +
		"\u0380\u0388\u039E\u03A2\u03A4\u03A8\u03AC\u03B1\u03B4\u03BB\u03C3\u03C7" +
		"\u03CE\u03D1\u03D8\u03DA\u03DF\u03E4\u03E8\u03EF";
	public static readonly _serializedATN: string = Utils.join(
		[
			CParser._serializedATNSegment0,
			CParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(CParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public genericSelection(): GenericSelectionContext | undefined {
		return this.tryGetRuleContext(0, GenericSelectionContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericSelectionContext extends ParserRuleContext {
	public Generic(): TerminalNode { return this.getToken(CParser.Generic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CParser.Comma, 0); }
	public genericAssocList(): GenericAssocListContext {
		return this.getRuleContext(0, GenericAssocListContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericSelection; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericSelection) {
			listener.enterGenericSelection(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericSelection) {
			listener.exitGenericSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericSelection) {
			return visitor.visitGenericSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssocListContext extends ParserRuleContext {
	public genericAssociation(): GenericAssociationContext[];
	public genericAssociation(i: number): GenericAssociationContext;
	public genericAssociation(i?: number): GenericAssociationContext | GenericAssociationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericAssociationContext);
		} else {
			return this.getRuleContext(i, GenericAssociationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericAssocList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericAssocList) {
			listener.enterGenericAssocList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericAssocList) {
			listener.exitGenericAssocList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericAssocList) {
			return visitor.visitGenericAssocList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssociationContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CParser.Colon, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericAssociation; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericAssociation) {
			listener.enterGenericAssociation(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericAssociation) {
			listener.exitGenericAssociation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericAssociation) {
			return visitor.visitGenericAssociation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftBracket);
		} else {
			return this.getToken(CParser.LeftBracket, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightBracket);
		} else {
			return this.getToken(CParser.RightBracket, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Identifier);
		} else {
			return this.getToken(CParser.Identifier, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Dot);
		} else {
			return this.getToken(CParser.Dot, i);
		}
	}
	public Arrow(): TerminalNode[];
	public Arrow(i: number): TerminalNode;
	public Arrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Arrow);
		} else {
			return this.getToken(CParser.Arrow, i);
		}
	}
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.PlusPlus);
		} else {
			return this.getToken(CParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MinusMinus);
		} else {
			return this.getToken(CParser.MinusMinus, i);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext[];
	public argumentExpressionList(i: number): ArgumentExpressionListContext;
	public argumentExpressionList(i?: number): ArgumentExpressionListContext | ArgumentExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentExpressionListContext);
		} else {
			return this.getRuleContext(i, ArgumentExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_argumentExpressionList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAnd, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Sizeof(): TerminalNode[];
	public Sizeof(i: number): TerminalNode;
	public Sizeof(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Sizeof);
		} else {
			return this.getToken(CParser.Sizeof, i);
		}
	}
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CParser.Alignof, 0); }
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.PlusPlus);
		} else {
			return this.getToken(CParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MinusMinus);
		} else {
			return this.getToken(CParser.MinusMinus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CParser.And, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CParser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext[];
	public castExpression(i: number): CastExpressionContext;
	public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CastExpressionContext);
		} else {
			return this.getRuleContext(i, CastExpressionContext);
		}
	}
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Star);
		} else {
			return this.getToken(CParser.Star, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Div);
		} else {
			return this.getToken(CParser.Div, i);
		}
	}
	public Mod(): TerminalNode[];
	public Mod(i: number): TerminalNode;
	public Mod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Mod);
		} else {
			return this.getToken(CParser.Mod, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Plus);
		} else {
			return this.getToken(CParser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Minus);
		} else {
			return this.getToken(CParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public LeftShift(): TerminalNode[];
	public LeftShift(i: number): TerminalNode;
	public LeftShift(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftShift);
		} else {
			return this.getToken(CParser.LeftShift, i);
		}
	}
	public RightShift(): TerminalNode[];
	public RightShift(i: number): TerminalNode;
	public RightShift(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightShift);
		} else {
			return this.getToken(CParser.RightShift, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Less);
		} else {
			return this.getToken(CParser.Less, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Greater);
		} else {
			return this.getToken(CParser.Greater, i);
		}
	}
	public LessEqual(): TerminalNode[];
	public LessEqual(i: number): TerminalNode;
	public LessEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LessEqual);
		} else {
			return this.getToken(CParser.LessEqual, i);
		}
	}
	public GreaterEqual(): TerminalNode[];
	public GreaterEqual(i: number): TerminalNode;
	public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.GreaterEqual);
		} else {
			return this.getToken(CParser.GreaterEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public Equal(): TerminalNode[];
	public Equal(i: number): TerminalNode;
	public Equal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Equal);
		} else {
			return this.getToken(CParser.Equal, i);
		}
	}
	public NotEqual(): TerminalNode[];
	public NotEqual(i: number): TerminalNode;
	public NotEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.NotEqual);
		} else {
			return this.getToken(CParser.NotEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.And);
		} else {
			return this.getToken(CParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public Caret(): TerminalNode[];
	public Caret(i: number): TerminalNode;
	public Caret(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Caret);
		} else {
			return this.getToken(CParser.Caret, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext[];
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(i?: number): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, ExclusiveOrExpressionContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Or);
		} else {
			return this.getToken(CParser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext[];
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
	public inclusiveOrExpression(i?: number): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, InclusiveOrExpressionContext);
		}
	}
	public AndAnd(): TerminalNode[];
	public AndAnd(i: number): TerminalNode;
	public AndAnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.AndAnd);
		} else {
			return this.getToken(CParser.AndAnd, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	public OrOr(): TerminalNode[];
	public OrOr(i: number): TerminalNode;
	public OrOr(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.OrOr);
		} else {
			return this.getToken(CParser.OrOr, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftShiftAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.RightShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getRuleContext(0, InitDeclaratorListContext);
	}
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CParser.Typedef, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CParser.Extern, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CParser.Static, 0); }
	public ThreadLocal(): TerminalNode | undefined { return this.tryGetToken(CParser.ThreadLocal, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CParser.Auto, 0); }
	public Register(): TerminalNode | undefined { return this.tryGetToken(CParser.Register, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_storageClassSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStorageClassSpecifier) {
			listener.enterStorageClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStorageClassSpecifier) {
			listener.exitStorageClassSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStorageClassSpecifier) {
			return visitor.visitStorageClassSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public Void(): TerminalNode | undefined { return this.tryGetToken(CParser.Void, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(CParser.Char, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CParser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CParser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CParser.Long, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CParser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CParser.Double, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CParser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CParser.Unsigned, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CParser.Bool, 0); }
	public Complex(): TerminalNode | undefined { return this.tryGetToken(CParser.Complex, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AtomicTypeSpecifierContext);
	}
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionSpecifierContext extends ParserRuleContext {
	public structOrUnion(): StructOrUnionContext {
		return this.getRuleContext(0, StructOrUnionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnionSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructOrUnionSpecifier) {
			listener.enterStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructOrUnionSpecifier) {
			listener.exitStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructOrUnionSpecifier) {
			return visitor.visitStructOrUnionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionContext extends ParserRuleContext {
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CParser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CParser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnion; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructOrUnion) {
			listener.enterStructOrUnion(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructOrUnion) {
			listener.exitStructOrUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructOrUnion) {
			return visitor.visitStructOrUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationListContext extends ParserRuleContext {
	public structDeclaration(): StructDeclarationContext[];
	public structDeclaration(i: number): StructDeclarationContext;
	public structDeclaration(i?: number): StructDeclarationContext | StructDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDeclarationContext);
		} else {
			return this.getRuleContext(i, StructDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarationList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclarationList) {
			listener.enterStructDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclarationList) {
			listener.exitStructDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclarationList) {
			return visitor.visitStructDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclaration) {
			listener.enterStructDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclaration) {
			listener.exitStructDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecifierQualifierListContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_specifierQualifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSpecifierQualifierList) {
			listener.enterSpecifierQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSpecifierQualifierList) {
			listener.exitSpecifierQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSpecifierQualifierList) {
			return visitor.visitSpecifierQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorListContext extends ParserRuleContext {
	public structDeclarator(): StructDeclaratorContext[];
	public structDeclarator(i: number): StructDeclaratorContext;
	public structDeclarator(i?: number): StructDeclaratorContext | StructDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDeclaratorContext);
		} else {
			return this.getRuleContext(i, StructDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclaratorList) {
			listener.enterStructDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclaratorList) {
			listener.exitStructDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclaratorList) {
			return visitor.visitStructDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclarator) {
			listener.enterStructDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclarator) {
			listener.exitStructDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclarator) {
			return visitor.visitStructDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CParser.Enum, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumSpecifier) {
			listener.enterEnumSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumSpecifier) {
			listener.exitEnumSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumSpecifier) {
			return visitor.visitEnumSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext[];
	public enumerator(i: number): EnumeratorContext;
	public enumerator(i?: number): EnumeratorContext | EnumeratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumeratorContext);
		} else {
			return this.getRuleContext(i, EnumeratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumeratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumeratorList) {
			listener.enterEnumeratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumeratorList) {
			listener.exitEnumeratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumeratorList) {
			return visitor.visitEnumeratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public enumerationConstant(): EnumerationConstantContext {
		return this.getRuleContext(0, EnumerationConstantContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerationConstant; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumerationConstant) {
			listener.enterEnumerationConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumerationConstant) {
			listener.exitEnumerationConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumerationConstant) {
			return visitor.visitEnumerationConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicTypeSpecifierContext extends ParserRuleContext {
	public Atomic(): TerminalNode { return this.getToken(CParser.Atomic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_atomicTypeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAtomicTypeSpecifier) {
			listener.enterAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAtomicTypeSpecifier) {
			listener.exitAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAtomicTypeSpecifier) {
			return visitor.visitAtomicTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CParser.Const, 0); }
	public Restrict(): TerminalNode | undefined { return this.tryGetToken(CParser.Restrict, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CParser.Volatile, 0); }
	public Atomic(): TerminalNode | undefined { return this.tryGetToken(CParser.Atomic, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifier) {
			listener.enterTypeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifier) {
			listener.exitTypeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifier) {
			return visitor.visitTypeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSpecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CParser.Inline, 0); }
	public Noreturn(): TerminalNode | undefined { return this.tryGetToken(CParser.Noreturn, 0); }
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionSpecifier) {
			listener.enterFunctionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionSpecifier) {
			listener.exitFunctionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionSpecifier) {
			return visitor.visitFunctionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignmentSpecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CParser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_alignmentSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAlignmentSpecifier) {
			listener.enterAlignmentSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAlignmentSpecifier) {
			listener.exitAlignmentSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAlignmentSpecifier) {
			return visitor.visitAlignmentSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VcSpecificModiferContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_vcSpecificModifer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterVcSpecificModifer) {
			listener.enterVcSpecificModifer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitVcSpecificModifer) {
			listener.exitVcSpecificModifer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitVcSpecificModifer) {
			return visitor.visitVcSpecificModifer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccDeclaratorExtensionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccDeclaratorExtension; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccDeclaratorExtension) {
			listener.enterGccDeclaratorExtension(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccDeclaratorExtension) {
			listener.exitGccDeclaratorExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccDeclaratorExtension) {
			return visitor.visitGccDeclaratorExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeSpecifierContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public gccAttributeList(): GccAttributeListContext {
		return this.getRuleContext(0, GccAttributeListContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttributeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttributeSpecifier) {
			listener.enterGccAttributeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttributeSpecifier) {
			listener.exitGccAttributeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttributeSpecifier) {
			return visitor.visitGccAttributeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeListContext extends ParserRuleContext {
	public gccAttribute(): GccAttributeContext[];
	public gccAttribute(i: number): GccAttributeContext;
	public gccAttribute(i?: number): GccAttributeContext | GccAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccAttributeContext);
		} else {
			return this.getRuleContext(i, GccAttributeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttributeList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttributeList) {
			listener.enterGccAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttributeList) {
			listener.exitGccAttributeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttributeList) {
			return visitor.visitGccAttributeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeContext extends ParserRuleContext {
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttribute; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttribute) {
			listener.enterGccAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttribute) {
			listener.exitGccAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttribute) {
			return visitor.visitGccAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedParenthesesBlockContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public nestedParenthesesBlock(): NestedParenthesesBlockContext[];
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
	public nestedParenthesesBlock(i?: number): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedParenthesesBlockContext);
		} else {
			return this.getRuleContext(i, NestedParenthesesBlockContext);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_nestedParenthesesBlock; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterNestedParenthesesBlock) {
			listener.enterNestedParenthesesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitNestedParenthesesBlock) {
			listener.exitNestedParenthesesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitNestedParenthesesBlock) {
			return visitor.visitNestedParenthesesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Star);
		} else {
			return this.getToken(CParser.Star, i);
		}
	}
	public Caret(): TerminalNode[];
	public Caret(i: number): TerminalNode;
	public Caret(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Caret);
		} else {
			return this.getToken(CParser.Caret, i);
		}
	}
	public typeQualifierList(): TypeQualifierListContext[];
	public typeQualifierList(i: number): TypeQualifierListContext;
	public typeQualifierList(i?: number): TypeQualifierListContext | TypeQualifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeQualifierListContext);
		} else {
			return this.getRuleContext(i, TypeQualifierListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierListContext extends ParserRuleContext {
	public typeQualifier(): TypeQualifierContext[];
	public typeQualifier(i: number): TypeQualifierContext;
	public typeQualifier(i?: number): TypeQualifierContext | TypeQualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeQualifierContext);
		} else {
			return this.getRuleContext(i, TypeQualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifierList) {
			listener.enterTypeQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifierList) {
			listener.exitTypeQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifierList) {
			return visitor.visitTypeQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Identifier);
		} else {
			return this.getToken(CParser.Identifier, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getRuleContext(0, SpecifierQualifierListContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeName; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAbstractDeclarator) {
			return visitor.visitAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectAbstractDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(CParser.Static, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directAbstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectAbstractDeclarator) {
			listener.enterDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectAbstractDeclarator) {
			listener.exitDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectAbstractDeclarator) {
			return visitor.visitDirectAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typedefName; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypedefName) {
			listener.enterTypedefName(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypedefName) {
			listener.exitTypedefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypedefName) {
			return visitor.visitTypedefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext[];
	public initializer(i: number): InitializerContext;
	public initializer(i?: number): InitializerContext | InitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerContext);
		} else {
			return this.getRuleContext(i, InitializerContext);
		}
	}
	public designation(): DesignationContext[];
	public designation(i: number): DesignationContext;
	public designation(i?: number): DesignationContext | DesignationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignationContext);
		} else {
			return this.getRuleContext(i, DesignationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public Assign(): TerminalNode { return this.getToken(CParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designation; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignation) {
			listener.enterDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignation) {
			listener.exitDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignation) {
			return visitor.visitDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext[];
	public designator(i: number): DesignatorContext;
	public designator(i?: number): DesignatorContext | DesignatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignatorContext);
		} else {
			return this.getRuleContext(i, DesignatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designatorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignatorList) {
			listener.enterDesignatorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignatorList) {
			listener.exitDesignatorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignatorList) {
			return visitor.visitDesignatorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticAssertDeclarationContext extends ParserRuleContext {
	public StaticAssert(): TerminalNode { return this.getToken(CParser.StaticAssert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext {
		return this.getRuleContext(0, ConstantExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CParser.Comma, 0); }
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_staticAssertDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStaticAssertDeclaration) {
			listener.enterStaticAssertDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStaticAssertDeclaration) {
			listener.exitStaticAssertDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStaticAssertDeclaration) {
			return visitor.visitStaticAssertDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CParser.Volatile, 0); }
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Colon);
		} else {
			return this.getToken(CParser.Colon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_statement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(CParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CParser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CParser.RightBrace, 0); }
	public blockItem(): BlockItemContext[];
	public blockItem(i: number): BlockItemContext;
	public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockItemContext);
		} else {
			return this.getRuleContext(i, BlockItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItem; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CParser.Do, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CParser.For, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Semi);
		} else {
			return this.getToken(CParser.Semi, i);
		}
	}
	public forDeclaration(): ForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForDeclarationContext);
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forCondition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForDeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForDeclaration) {
			listener.enterForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForDeclaration) {
			listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CParser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CParser.Return, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CParser.Continue, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CParser.Break, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CParser.EOF, 0); }
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public externalDeclaration(): ExternalDeclarationContext[];
	public externalDeclaration(i: number): ExternalDeclarationContext;
	public externalDeclaration(i?: number): ExternalDeclarationContext | ExternalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalDeclarationContext);
		} else {
			return this.getRuleContext(i, ExternalDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalculatorUnitContext extends ParserRuleContext {
	public externalDeclaration(): ExternalDeclarationContext[];
	public externalDeclaration(i: number): ExternalDeclarationContext;
	public externalDeclaration(i?: number): ExternalDeclarationContext | ExternalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalDeclarationContext);
		} else {
			return this.getRuleContext(i, ExternalDeclarationContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public expressionStatement(): ExpressionStatementContext[];
	public expressionStatement(i: number): ExpressionStatementContext;
	public expressionStatement(i?: number): ExpressionStatementContext | ExpressionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionStatementContext);
		} else {
			return this.getRuleContext(i, ExpressionStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_calculatorUnit; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCalculatorUnit) {
			listener.enterCalculatorUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCalculatorUnit) {
			listener.exitCalculatorUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCalculatorUnit) {
			return visitor.visitCalculatorUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalDeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_externalDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExternalDeclaration) {
			listener.enterExternalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExternalDeclaration) {
			listener.exitExternalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExternalDeclaration) {
			return visitor.visitExternalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


