// Generated from c:\Users\hcich\Documents\GitHub\cslang\src\lang\C.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, Auto=20, Break=21, Case=22, Char=23, Const=24, Continue=25, 
		Default=26, Do=27, Double=28, Else=29, Enum=30, Extern=31, Float=32, For=33, 
		Goto=34, If=35, Inline=36, Int=37, Long=38, Register=39, Restrict=40, 
		Return=41, Short=42, Signed=43, Sizeof=44, Static=45, Struct=46, Switch=47, 
		Typedef=48, Union=49, Unsigned=50, Void=51, Volatile=52, While=53, Alignas=54, 
		Alignof=55, Atomic=56, Bool=57, Complex=58, Generic=59, Imaginary=60, 
		Noreturn=61, StaticAssert=62, ThreadLocal=63, LeftParen=64, RightParen=65, 
		LeftBracket=66, RightBracket=67, LeftBrace=68, RightBrace=69, Less=70, 
		LessEqual=71, Greater=72, GreaterEqual=73, LeftShift=74, RightShift=75, 
		Plus=76, PlusPlus=77, Minus=78, MinusMinus=79, Star=80, Div=81, Mod=82, 
		And=83, Or=84, AndAnd=85, OrOr=86, Caret=87, Not=88, Tilde=89, Question=90, 
		Colon=91, Semi=92, Comma=93, Assign=94, StarAssign=95, DivAssign=96, ModAssign=97, 
		PlusAssign=98, MinusAssign=99, LeftShiftAssign=100, RightShiftAssign=101, 
		AndAssign=102, XorAssign=103, OrAssign=104, Equal=105, NotEqual=106, Arrow=107, 
		Dot=108, Ellipsis=109, Identifier=110, Constant=111, DigitSequence=112, 
		StringLiteral=113, ComplexDefine=114, IncludeDirective=115, AsmBlock=116, 
		LineAfterPreprocessing=117, LineDirective=118, PragmaDirective=119, Whitespace=120, 
		Newline=121, BlockComment=122, LineComment=123;
	public static final int
		RULE_primaryExpression = 0, RULE_genericSelection = 1, RULE_genericAssocList = 2, 
		RULE_genericAssociation = 3, RULE_postfixExpression = 4, RULE_argumentExpressionList = 5, 
		RULE_unaryExpression = 6, RULE_unaryOperator = 7, RULE_castExpression = 8, 
		RULE_multiplicativeExpression = 9, RULE_additiveExpression = 10, RULE_shiftExpression = 11, 
		RULE_relationalExpression = 12, RULE_equalityExpression = 13, RULE_andExpression = 14, 
		RULE_exclusiveOrExpression = 15, RULE_inclusiveOrExpression = 16, RULE_logicalAndExpression = 17, 
		RULE_logicalOrExpression = 18, RULE_conditionalExpression = 19, RULE_assignmentExpression = 20, 
		RULE_assignmentOperator = 21, RULE_expression = 22, RULE_constantExpression = 23, 
		RULE_declaration = 24, RULE_initDeclaratorList = 25, RULE_initDeclarator = 26, 
		RULE_storageClassSpecifier = 27, RULE_typeSpecifier = 28, RULE_structOrUnionSpecifier = 29, 
		RULE_structOrUnion = 30, RULE_structDeclarationList = 31, RULE_structDeclaration = 32, 
		RULE_specifierQualifierList = 33, RULE_structDeclaratorList = 34, RULE_structDeclarator = 35, 
		RULE_enumSpecifier = 36, RULE_enumeratorList = 37, RULE_enumerator = 38, 
		RULE_enumerationConstant = 39, RULE_atomicTypeSpecifier = 40, RULE_typeQualifier = 41, 
		RULE_functionSpecifier = 42, RULE_alignmentSpecifier = 43, RULE_declarator = 44, 
		RULE_directDeclarator = 45, RULE_vcSpecificModifer = 46, RULE_gccDeclaratorExtension = 47, 
		RULE_gccAttributeSpecifier = 48, RULE_gccAttributeList = 49, RULE_gccAttribute = 50, 
		RULE_nestedParenthesesBlock = 51, RULE_pointer = 52, RULE_typeQualifierList = 53, 
		RULE_parameterTypeList = 54, RULE_parameterList = 55, RULE_parameterDeclaration = 56, 
		RULE_identifierList = 57, RULE_typeName = 58, RULE_abstractDeclarator = 59, 
		RULE_directAbstractDeclarator = 60, RULE_typedefName = 61, RULE_initializer = 62, 
		RULE_initializerList = 63, RULE_designation = 64, RULE_designatorList = 65, 
		RULE_designator = 66, RULE_staticAssertDeclaration = 67, RULE_statement = 68, 
		RULE_labeledStatement = 69, RULE_compoundStatement = 70, RULE_blockItemList = 71, 
		RULE_blockItem = 72, RULE_expressionStatement = 73, RULE_selectionStatement = 74, 
		RULE_iterationStatement = 75, RULE_forCondition = 76, RULE_forDeclaration = 77, 
		RULE_forExpression = 78, RULE_jumpStatement = 79, RULE_compilationUnit = 80, 
		RULE_externalDeclaration = 81, RULE_functionDefinition = 82, RULE_declarationList = 83;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
			"selectionStatement", "iterationStatement", "forCondition", "forDeclaration", 
			"forExpression", "jumpStatement", "compilationUnit", "externalDeclaration", 
			"functionDefinition", "declarationList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'__extension__'", "'__builtin_va_arg'", "'__builtin_offsetof'", 
			"'__m128'", "'__m128d'", "'__m128i'", "'__typeof__'", "'__inline__'", 
			"'__stdcall'", "'__declspec'", "'__cdecl'", "'__clrcall'", "'__fastcall'", 
			"'__thiscall'", "'__vectorcall'", "'__asm'", "'__attribute__'", "'__asm__'", 
			"'__volatile__'", "'auto'", "'break'", "'case'", "'char'", "'const'", 
			"'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'", 
			"'float'", "'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", 
			"'register'", "'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", 
			"'static'", "'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", 
			"'void'", "'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", 
			"'_Bool'", "'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", 
			"'_Static_assert'", "'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", 
			"'}'", "'<'", "'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", 
			"'--'", "'*'", "'/'", "'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", 
			"'~'", "'?'", "':'", "';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", 
			"'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", 
			"'.'", "'...'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "Auto", "Break", "Case", 
			"Char", "Const", "Continue", "Default", "Do", "Double", "Else", "Enum", 
			"Extern", "Float", "For", "Goto", "If", "Inline", "Int", "Long", "Register", 
			"Restrict", "Return", "Short", "Signed", "Sizeof", "Static", "Struct", 
			"Switch", "Typedef", "Union", "Unsigned", "Void", "Volatile", "While", 
			"Alignas", "Alignof", "Atomic", "Bool", "Complex", "Generic", "Imaginary", 
			"Noreturn", "StaticAssert", "ThreadLocal", "LeftParen", "RightParen", 
			"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "Less", "LessEqual", 
			"Greater", "GreaterEqual", "LeftShift", "RightShift", "Plus", "PlusPlus", 
			"Minus", "MinusMinus", "Star", "Div", "Mod", "And", "Or", "AndAnd", "OrOr", 
			"Caret", "Not", "Tilde", "Question", "Colon", "Semi", "Comma", "Assign", 
			"StarAssign", "DivAssign", "ModAssign", "PlusAssign", "MinusAssign", 
			"LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign", "OrAssign", 
			"Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier", "Constant", 
			"DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective", 
			"AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective", 
			"Whitespace", "Newline", "BlockComment", "LineComment"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TerminalNode Constant() { return getToken(CParser.Constant, 0); }
		public List<TerminalNode> StringLiteral() { return getTokens(CParser.StringLiteral); }
		public TerminalNode StringLiteral(int i) {
			return getToken(CParser.StringLiteral, i);
		}
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public GenericSelectionContext genericSelection() {
			return getRuleContext(GenericSelectionContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_primaryExpression);
		int _la;
		try {
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(168);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(169);
				match(Constant);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(171); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(170);
					match(StringLiteral);
					}
					}
					setState(173); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==StringLiteral );
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(175);
				match(LeftParen);
				setState(176);
				expression();
				setState(177);
				match(RightParen);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(179);
				genericSelection();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(181);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(180);
					match(T__0);
					}
				}

				setState(183);
				match(LeftParen);
				setState(184);
				compoundStatement();
				setState(185);
				match(RightParen);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(187);
				match(T__1);
				setState(188);
				match(LeftParen);
				setState(189);
				unaryExpression();
				setState(190);
				match(Comma);
				setState(191);
				typeName();
				setState(192);
				match(RightParen);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(194);
				match(T__2);
				setState(195);
				match(LeftParen);
				setState(196);
				typeName();
				setState(197);
				match(Comma);
				setState(198);
				unaryExpression();
				setState(199);
				match(RightParen);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericSelectionContext extends ParserRuleContext {
		public TerminalNode Generic() { return getToken(CParser.Generic, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public GenericAssocListContext genericAssocList() {
			return getRuleContext(GenericAssocListContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public GenericSelectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericSelection; }
	}

	public final GenericSelectionContext genericSelection() throws RecognitionException {
		GenericSelectionContext _localctx = new GenericSelectionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_genericSelection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(Generic);
			setState(204);
			match(LeftParen);
			setState(205);
			assignmentExpression();
			setState(206);
			match(Comma);
			setState(207);
			genericAssocList();
			setState(208);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericAssocListContext extends ParserRuleContext {
		public List<GenericAssociationContext> genericAssociation() {
			return getRuleContexts(GenericAssociationContext.class);
		}
		public GenericAssociationContext genericAssociation(int i) {
			return getRuleContext(GenericAssociationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public GenericAssocListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericAssocList; }
	}

	public final GenericAssocListContext genericAssocList() throws RecognitionException {
		GenericAssocListContext _localctx = new GenericAssocListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_genericAssocList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			genericAssociation();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(211);
				match(Comma);
				setState(212);
				genericAssociation();
				}
				}
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericAssociationContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(CParser.Colon, 0); }
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode Default() { return getToken(CParser.Default, 0); }
		public GenericAssociationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericAssociation; }
	}

	public final GenericAssociationContext genericAssociation() throws RecognitionException {
		GenericAssociationContext _localctx = new GenericAssociationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_genericAssociation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case Char:
			case Const:
			case Double:
			case Enum:
			case Float:
			case Int:
			case Long:
			case Restrict:
			case Short:
			case Signed:
			case Struct:
			case Union:
			case Unsigned:
			case Void:
			case Volatile:
			case Atomic:
			case Bool:
			case Complex:
			case Identifier:
				{
				setState(218);
				typeName();
				}
				break;
			case Default:
				{
				setState(219);
				match(Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(222);
			match(Colon);
			setState(223);
			assignmentExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public List<TerminalNode> LeftParen() { return getTokens(CParser.LeftParen); }
		public TerminalNode LeftParen(int i) {
			return getToken(CParser.LeftParen, i);
		}
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public List<TerminalNode> RightParen() { return getTokens(CParser.RightParen); }
		public TerminalNode RightParen(int i) {
			return getToken(CParser.RightParen, i);
		}
		public TerminalNode LeftBrace() { return getToken(CParser.LeftBrace, 0); }
		public InitializerListContext initializerList() {
			return getRuleContext(InitializerListContext.class,0);
		}
		public TerminalNode RightBrace() { return getToken(CParser.RightBrace, 0); }
		public List<TerminalNode> LeftBracket() { return getTokens(CParser.LeftBracket); }
		public TerminalNode LeftBracket(int i) {
			return getToken(CParser.LeftBracket, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> RightBracket() { return getTokens(CParser.RightBracket); }
		public TerminalNode RightBracket(int i) {
			return getToken(CParser.RightBracket, i);
		}
		public List<TerminalNode> Identifier() { return getTokens(CParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(CParser.Identifier, i);
		}
		public List<TerminalNode> Dot() { return getTokens(CParser.Dot); }
		public TerminalNode Dot(int i) {
			return getToken(CParser.Dot, i);
		}
		public List<TerminalNode> Arrow() { return getTokens(CParser.Arrow); }
		public TerminalNode Arrow(int i) {
			return getToken(CParser.Arrow, i);
		}
		public List<TerminalNode> PlusPlus() { return getTokens(CParser.PlusPlus); }
		public TerminalNode PlusPlus(int i) {
			return getToken(CParser.PlusPlus, i);
		}
		public List<TerminalNode> MinusMinus() { return getTokens(CParser.MinusMinus); }
		public TerminalNode MinusMinus(int i) {
			return getToken(CParser.MinusMinus, i);
		}
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public List<ArgumentExpressionListContext> argumentExpressionList() {
			return getRuleContexts(ArgumentExpressionListContext.class);
		}
		public ArgumentExpressionListContext argumentExpressionList(int i) {
			return getRuleContext(ArgumentExpressionListContext.class,i);
		}
		public PostfixExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixExpression; }
	}

	public final PostfixExpressionContext postfixExpression() throws RecognitionException {
		PostfixExpressionContext _localctx = new PostfixExpressionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_postfixExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(225);
				primaryExpression();
				}
				break;
			case 2:
				{
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(226);
					match(T__0);
					}
				}

				setState(229);
				match(LeftParen);
				setState(230);
				typeName();
				setState(231);
				match(RightParen);
				setState(232);
				match(LeftBrace);
				setState(233);
				initializerList();
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(234);
					match(Comma);
					}
				}

				setState(237);
				match(RightBrace);
				}
				break;
			}
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (PlusPlus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Arrow - 64)) | (1L << (Dot - 64)))) != 0)) {
				{
				setState(253);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LeftBracket:
					{
					setState(241);
					match(LeftBracket);
					setState(242);
					expression();
					setState(243);
					match(RightBracket);
					}
					break;
				case LeftParen:
					{
					setState(245);
					match(LeftParen);
					setState(247);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
						{
						setState(246);
						argumentExpressionList();
						}
					}

					setState(249);
					match(RightParen);
					}
					break;
				case Arrow:
				case Dot:
					{
					setState(250);
					_la = _input.LA(1);
					if ( !(_la==Arrow || _la==Dot) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(251);
					match(Identifier);
					}
					break;
				case PlusPlus:
				case MinusMinus:
					{
					setState(252);
					_la = _input.LA(1);
					if ( !(_la==PlusPlus || _la==MinusMinus) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(257);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentExpressionListContext extends ParserRuleContext {
		public List<AssignmentExpressionContext> assignmentExpression() {
			return getRuleContexts(AssignmentExpressionContext.class);
		}
		public AssignmentExpressionContext assignmentExpression(int i) {
			return getRuleContext(AssignmentExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public ArgumentExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentExpressionList; }
	}

	public final ArgumentExpressionListContext argumentExpressionList() throws RecognitionException {
		ArgumentExpressionListContext _localctx = new ArgumentExpressionListContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_argumentExpressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			assignmentExpression();
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(259);
				match(Comma);
				setState(260);
				assignmentExpression();
				}
				}
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryExpressionContext extends ParserRuleContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public UnaryOperatorContext unaryOperator() {
			return getRuleContext(UnaryOperatorContext.class,0);
		}
		public CastExpressionContext castExpression() {
			return getRuleContext(CastExpressionContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public TerminalNode AndAnd() { return getToken(CParser.AndAnd, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public List<TerminalNode> Sizeof() { return getTokens(CParser.Sizeof); }
		public TerminalNode Sizeof(int i) {
			return getToken(CParser.Sizeof, i);
		}
		public TerminalNode Alignof() { return getToken(CParser.Alignof, 0); }
		public List<TerminalNode> PlusPlus() { return getTokens(CParser.PlusPlus); }
		public TerminalNode PlusPlus(int i) {
			return getToken(CParser.PlusPlus, i);
		}
		public List<TerminalNode> MinusMinus() { return getTokens(CParser.MinusMinus); }
		public TerminalNode MinusMinus(int i) {
			return getToken(CParser.MinusMinus, i);
		}
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_unaryExpression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(266);
					_la = _input.LA(1);
					if ( !(((((_la - 44)) & ~0x3f) == 0 && ((1L << (_la - 44)) & ((1L << (Sizeof - 44)) | (1L << (PlusPlus - 44)) | (1L << (MinusMinus - 44)))) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(271);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(283);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
			case T__2:
			case Generic:
			case LeftParen:
			case Identifier:
			case Constant:
			case StringLiteral:
				{
				setState(272);
				postfixExpression();
				}
				break;
			case Plus:
			case Minus:
			case Star:
			case And:
			case Not:
			case Tilde:
				{
				setState(273);
				unaryOperator();
				setState(274);
				castExpression();
				}
				break;
			case Sizeof:
			case Alignof:
				{
				setState(276);
				_la = _input.LA(1);
				if ( !(_la==Sizeof || _la==Alignof) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(277);
				match(LeftParen);
				setState(278);
				typeName();
				setState(279);
				match(RightParen);
				}
				break;
			case AndAnd:
				{
				setState(281);
				match(AndAnd);
				setState(282);
				match(Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOperatorContext extends ParserRuleContext {
		public TerminalNode And() { return getToken(CParser.And, 0); }
		public TerminalNode Star() { return getToken(CParser.Star, 0); }
		public TerminalNode Plus() { return getToken(CParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(CParser.Minus, 0); }
		public TerminalNode Tilde() { return getToken(CParser.Tilde, 0); }
		public TerminalNode Not() { return getToken(CParser.Not, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			_la = _input.LA(1);
			if ( !(((((_la - 76)) & ~0x3f) == 0 && ((1L << (_la - 76)) & ((1L << (Plus - 76)) | (1L << (Minus - 76)) | (1L << (Star - 76)) | (1L << (And - 76)) | (1L << (Not - 76)) | (1L << (Tilde - 76)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CastExpressionContext extends ParserRuleContext {
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public CastExpressionContext castExpression() {
			return getRuleContext(CastExpressionContext.class,0);
		}
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public TerminalNode DigitSequence() { return getToken(CParser.DigitSequence, 0); }
		public CastExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_castExpression; }
	}

	public final CastExpressionContext castExpression() throws RecognitionException {
		CastExpressionContext _localctx = new CastExpressionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_castExpression);
		int _la;
		try {
			setState(297);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(287);
					match(T__0);
					}
				}

				setState(290);
				match(LeftParen);
				setState(291);
				typeName();
				setState(292);
				match(RightParen);
				setState(293);
				castExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(295);
				unaryExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(296);
				match(DigitSequence);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiplicativeExpressionContext extends ParserRuleContext {
		public List<CastExpressionContext> castExpression() {
			return getRuleContexts(CastExpressionContext.class);
		}
		public CastExpressionContext castExpression(int i) {
			return getRuleContext(CastExpressionContext.class,i);
		}
		public List<TerminalNode> Star() { return getTokens(CParser.Star); }
		public TerminalNode Star(int i) {
			return getToken(CParser.Star, i);
		}
		public List<TerminalNode> Div() { return getTokens(CParser.Div); }
		public TerminalNode Div(int i) {
			return getToken(CParser.Div, i);
		}
		public List<TerminalNode> Mod() { return getTokens(CParser.Mod); }
		public TerminalNode Mod(int i) {
			return getToken(CParser.Mod, i);
		}
		public MultiplicativeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeExpression; }
	}

	public final MultiplicativeExpressionContext multiplicativeExpression() throws RecognitionException {
		MultiplicativeExpressionContext _localctx = new MultiplicativeExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_multiplicativeExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			castExpression();
			setState(304);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (Star - 80)) | (1L << (Div - 80)) | (1L << (Mod - 80)))) != 0)) {
				{
				{
				setState(300);
				_la = _input.LA(1);
				if ( !(((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (Star - 80)) | (1L << (Div - 80)) | (1L << (Mod - 80)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(301);
				castExpression();
				}
				}
				setState(306);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AdditiveExpressionContext extends ParserRuleContext {
		public List<MultiplicativeExpressionContext> multiplicativeExpression() {
			return getRuleContexts(MultiplicativeExpressionContext.class);
		}
		public MultiplicativeExpressionContext multiplicativeExpression(int i) {
			return getRuleContext(MultiplicativeExpressionContext.class,i);
		}
		public List<TerminalNode> Plus() { return getTokens(CParser.Plus); }
		public TerminalNode Plus(int i) {
			return getToken(CParser.Plus, i);
		}
		public List<TerminalNode> Minus() { return getTokens(CParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(CParser.Minus, i);
		}
		public AdditiveExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveExpression; }
	}

	public final AdditiveExpressionContext additiveExpression() throws RecognitionException {
		AdditiveExpressionContext _localctx = new AdditiveExpressionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_additiveExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			multiplicativeExpression();
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Minus) {
				{
				{
				setState(308);
				_la = _input.LA(1);
				if ( !(_la==Plus || _la==Minus) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(309);
				multiplicativeExpression();
				}
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShiftExpressionContext extends ParserRuleContext {
		public List<AdditiveExpressionContext> additiveExpression() {
			return getRuleContexts(AdditiveExpressionContext.class);
		}
		public AdditiveExpressionContext additiveExpression(int i) {
			return getRuleContext(AdditiveExpressionContext.class,i);
		}
		public List<TerminalNode> LeftShift() { return getTokens(CParser.LeftShift); }
		public TerminalNode LeftShift(int i) {
			return getToken(CParser.LeftShift, i);
		}
		public List<TerminalNode> RightShift() { return getTokens(CParser.RightShift); }
		public TerminalNode RightShift(int i) {
			return getToken(CParser.RightShift, i);
		}
		public ShiftExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shiftExpression; }
	}

	public final ShiftExpressionContext shiftExpression() throws RecognitionException {
		ShiftExpressionContext _localctx = new ShiftExpressionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_shiftExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			additiveExpression();
			setState(320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LeftShift || _la==RightShift) {
				{
				{
				setState(316);
				_la = _input.LA(1);
				if ( !(_la==LeftShift || _la==RightShift) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(317);
				additiveExpression();
				}
				}
				setState(322);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationalExpressionContext extends ParserRuleContext {
		public List<ShiftExpressionContext> shiftExpression() {
			return getRuleContexts(ShiftExpressionContext.class);
		}
		public ShiftExpressionContext shiftExpression(int i) {
			return getRuleContext(ShiftExpressionContext.class,i);
		}
		public List<TerminalNode> Less() { return getTokens(CParser.Less); }
		public TerminalNode Less(int i) {
			return getToken(CParser.Less, i);
		}
		public List<TerminalNode> Greater() { return getTokens(CParser.Greater); }
		public TerminalNode Greater(int i) {
			return getToken(CParser.Greater, i);
		}
		public List<TerminalNode> LessEqual() { return getTokens(CParser.LessEqual); }
		public TerminalNode LessEqual(int i) {
			return getToken(CParser.LessEqual, i);
		}
		public List<TerminalNode> GreaterEqual() { return getTokens(CParser.GreaterEqual); }
		public TerminalNode GreaterEqual(int i) {
			return getToken(CParser.GreaterEqual, i);
		}
		public RelationalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalExpression; }
	}

	public final RelationalExpressionContext relationalExpression() throws RecognitionException {
		RelationalExpressionContext _localctx = new RelationalExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_relationalExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			shiftExpression();
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (Less - 70)) | (1L << (LessEqual - 70)) | (1L << (Greater - 70)) | (1L << (GreaterEqual - 70)))) != 0)) {
				{
				{
				setState(324);
				_la = _input.LA(1);
				if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (Less - 70)) | (1L << (LessEqual - 70)) | (1L << (Greater - 70)) | (1L << (GreaterEqual - 70)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(325);
				shiftExpression();
				}
				}
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqualityExpressionContext extends ParserRuleContext {
		public List<RelationalExpressionContext> relationalExpression() {
			return getRuleContexts(RelationalExpressionContext.class);
		}
		public RelationalExpressionContext relationalExpression(int i) {
			return getRuleContext(RelationalExpressionContext.class,i);
		}
		public List<TerminalNode> Equal() { return getTokens(CParser.Equal); }
		public TerminalNode Equal(int i) {
			return getToken(CParser.Equal, i);
		}
		public List<TerminalNode> NotEqual() { return getTokens(CParser.NotEqual); }
		public TerminalNode NotEqual(int i) {
			return getToken(CParser.NotEqual, i);
		}
		public EqualityExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equalityExpression; }
	}

	public final EqualityExpressionContext equalityExpression() throws RecognitionException {
		EqualityExpressionContext _localctx = new EqualityExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_equalityExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			relationalExpression();
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Equal || _la==NotEqual) {
				{
				{
				setState(332);
				_la = _input.LA(1);
				if ( !(_la==Equal || _la==NotEqual) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(333);
				relationalExpression();
				}
				}
				setState(338);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AndExpressionContext extends ParserRuleContext {
		public List<EqualityExpressionContext> equalityExpression() {
			return getRuleContexts(EqualityExpressionContext.class);
		}
		public EqualityExpressionContext equalityExpression(int i) {
			return getRuleContext(EqualityExpressionContext.class,i);
		}
		public List<TerminalNode> And() { return getTokens(CParser.And); }
		public TerminalNode And(int i) {
			return getToken(CParser.And, i);
		}
		public AndExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andExpression; }
	}

	public final AndExpressionContext andExpression() throws RecognitionException {
		AndExpressionContext _localctx = new AndExpressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_andExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			equalityExpression();
			setState(344);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==And) {
				{
				{
				setState(340);
				match(And);
				setState(341);
				equalityExpression();
				}
				}
				setState(346);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExclusiveOrExpressionContext extends ParserRuleContext {
		public List<AndExpressionContext> andExpression() {
			return getRuleContexts(AndExpressionContext.class);
		}
		public AndExpressionContext andExpression(int i) {
			return getRuleContext(AndExpressionContext.class,i);
		}
		public List<TerminalNode> Caret() { return getTokens(CParser.Caret); }
		public TerminalNode Caret(int i) {
			return getToken(CParser.Caret, i);
		}
		public ExclusiveOrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exclusiveOrExpression; }
	}

	public final ExclusiveOrExpressionContext exclusiveOrExpression() throws RecognitionException {
		ExclusiveOrExpressionContext _localctx = new ExclusiveOrExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_exclusiveOrExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			andExpression();
			setState(352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Caret) {
				{
				{
				setState(348);
				match(Caret);
				setState(349);
				andExpression();
				}
				}
				setState(354);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InclusiveOrExpressionContext extends ParserRuleContext {
		public List<ExclusiveOrExpressionContext> exclusiveOrExpression() {
			return getRuleContexts(ExclusiveOrExpressionContext.class);
		}
		public ExclusiveOrExpressionContext exclusiveOrExpression(int i) {
			return getRuleContext(ExclusiveOrExpressionContext.class,i);
		}
		public List<TerminalNode> Or() { return getTokens(CParser.Or); }
		public TerminalNode Or(int i) {
			return getToken(CParser.Or, i);
		}
		public InclusiveOrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inclusiveOrExpression; }
	}

	public final InclusiveOrExpressionContext inclusiveOrExpression() throws RecognitionException {
		InclusiveOrExpressionContext _localctx = new InclusiveOrExpressionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_inclusiveOrExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			exclusiveOrExpression();
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Or) {
				{
				{
				setState(356);
				match(Or);
				setState(357);
				exclusiveOrExpression();
				}
				}
				setState(362);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalAndExpressionContext extends ParserRuleContext {
		public List<InclusiveOrExpressionContext> inclusiveOrExpression() {
			return getRuleContexts(InclusiveOrExpressionContext.class);
		}
		public InclusiveOrExpressionContext inclusiveOrExpression(int i) {
			return getRuleContext(InclusiveOrExpressionContext.class,i);
		}
		public List<TerminalNode> AndAnd() { return getTokens(CParser.AndAnd); }
		public TerminalNode AndAnd(int i) {
			return getToken(CParser.AndAnd, i);
		}
		public LogicalAndExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalAndExpression; }
	}

	public final LogicalAndExpressionContext logicalAndExpression() throws RecognitionException {
		LogicalAndExpressionContext _localctx = new LogicalAndExpressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_logicalAndExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			inclusiveOrExpression();
			setState(368);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AndAnd) {
				{
				{
				setState(364);
				match(AndAnd);
				setState(365);
				inclusiveOrExpression();
				}
				}
				setState(370);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalOrExpressionContext extends ParserRuleContext {
		public List<LogicalAndExpressionContext> logicalAndExpression() {
			return getRuleContexts(LogicalAndExpressionContext.class);
		}
		public LogicalAndExpressionContext logicalAndExpression(int i) {
			return getRuleContext(LogicalAndExpressionContext.class,i);
		}
		public List<TerminalNode> OrOr() { return getTokens(CParser.OrOr); }
		public TerminalNode OrOr(int i) {
			return getToken(CParser.OrOr, i);
		}
		public LogicalOrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalOrExpression; }
	}

	public final LogicalOrExpressionContext logicalOrExpression() throws RecognitionException {
		LogicalOrExpressionContext _localctx = new LogicalOrExpressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_logicalOrExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			logicalAndExpression();
			setState(376);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OrOr) {
				{
				{
				setState(372);
				match(OrOr);
				setState(373);
				logicalAndExpression();
				}
				}
				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalExpressionContext extends ParserRuleContext {
		public LogicalOrExpressionContext logicalOrExpression() {
			return getRuleContext(LogicalOrExpressionContext.class,0);
		}
		public TerminalNode Question() { return getToken(CParser.Question, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(CParser.Colon, 0); }
		public ConditionalExpressionContext conditionalExpression() {
			return getRuleContext(ConditionalExpressionContext.class,0);
		}
		public ConditionalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalExpression; }
	}

	public final ConditionalExpressionContext conditionalExpression() throws RecognitionException {
		ConditionalExpressionContext _localctx = new ConditionalExpressionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_conditionalExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			logicalOrExpression();
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Question) {
				{
				setState(380);
				match(Question);
				setState(381);
				expression();
				setState(382);
				match(Colon);
				setState(383);
				conditionalExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentExpressionContext extends ParserRuleContext {
		public ConditionalExpressionContext conditionalExpression() {
			return getRuleContext(ConditionalExpressionContext.class,0);
		}
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public TerminalNode DigitSequence() { return getToken(CParser.DigitSequence, 0); }
		public AssignmentExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentExpression; }
	}

	public final AssignmentExpressionContext assignmentExpression() throws RecognitionException {
		AssignmentExpressionContext _localctx = new AssignmentExpressionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_assignmentExpression);
		try {
			setState(393);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(387);
				conditionalExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(388);
				unaryExpression();
				setState(389);
				assignmentOperator();
				setState(390);
				assignmentExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(392);
				match(DigitSequence);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode Assign() { return getToken(CParser.Assign, 0); }
		public TerminalNode StarAssign() { return getToken(CParser.StarAssign, 0); }
		public TerminalNode DivAssign() { return getToken(CParser.DivAssign, 0); }
		public TerminalNode ModAssign() { return getToken(CParser.ModAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(CParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(CParser.MinusAssign, 0); }
		public TerminalNode LeftShiftAssign() { return getToken(CParser.LeftShiftAssign, 0); }
		public TerminalNode RightShiftAssign() { return getToken(CParser.RightShiftAssign, 0); }
		public TerminalNode AndAssign() { return getToken(CParser.AndAssign, 0); }
		public TerminalNode XorAssign() { return getToken(CParser.XorAssign, 0); }
		public TerminalNode OrAssign() { return getToken(CParser.OrAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			_la = _input.LA(1);
			if ( !(((((_la - 94)) & ~0x3f) == 0 && ((1L << (_la - 94)) & ((1L << (Assign - 94)) | (1L << (StarAssign - 94)) | (1L << (DivAssign - 94)) | (1L << (ModAssign - 94)) | (1L << (PlusAssign - 94)) | (1L << (MinusAssign - 94)) | (1L << (LeftShiftAssign - 94)) | (1L << (RightShiftAssign - 94)) | (1L << (AndAssign - 94)) | (1L << (XorAssign - 94)) | (1L << (OrAssign - 94)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public List<AssignmentExpressionContext> assignmentExpression() {
			return getRuleContexts(AssignmentExpressionContext.class);
		}
		public AssignmentExpressionContext assignmentExpression(int i) {
			return getRuleContext(AssignmentExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			assignmentExpression();
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(398);
				match(Comma);
				setState(399);
				assignmentExpression();
				}
				}
				setState(404);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantExpressionContext extends ParserRuleContext {
		public ConditionalExpressionContext conditionalExpression() {
			return getRuleContext(ConditionalExpressionContext.class,0);
		}
		public ConstantExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantExpression; }
	}

	public final ConstantExpressionContext constantExpression() throws RecognitionException {
		ConstantExpressionContext _localctx = new ConstantExpressionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_constantExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			conditionalExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public InitDeclaratorListContext initDeclaratorList() {
			return getRuleContext(InitDeclaratorListContext.class,0);
		}
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(407);
			typeSpecifier();
			setState(408);
			initDeclaratorList();
			setState(409);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitDeclaratorListContext extends ParserRuleContext {
		public List<InitDeclaratorContext> initDeclarator() {
			return getRuleContexts(InitDeclaratorContext.class);
		}
		public InitDeclaratorContext initDeclarator(int i) {
			return getRuleContext(InitDeclaratorContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public InitDeclaratorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initDeclaratorList; }
	}

	public final InitDeclaratorListContext initDeclaratorList() throws RecognitionException {
		InitDeclaratorListContext _localctx = new InitDeclaratorListContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_initDeclaratorList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			initDeclarator();
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(412);
				match(Comma);
				setState(413);
				initDeclarator();
				}
				}
				setState(418);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitDeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode Assign() { return getToken(CParser.Assign, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public InitDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initDeclarator; }
	}

	public final InitDeclaratorContext initDeclarator() throws RecognitionException {
		InitDeclaratorContext _localctx = new InitDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_initDeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			declarator();
			setState(420);
			match(Assign);
			setState(421);
			initializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StorageClassSpecifierContext extends ParserRuleContext {
		public TerminalNode Typedef() { return getToken(CParser.Typedef, 0); }
		public TerminalNode Extern() { return getToken(CParser.Extern, 0); }
		public TerminalNode Static() { return getToken(CParser.Static, 0); }
		public TerminalNode ThreadLocal() { return getToken(CParser.ThreadLocal, 0); }
		public TerminalNode Auto() { return getToken(CParser.Auto, 0); }
		public TerminalNode Register() { return getToken(CParser.Register, 0); }
		public StorageClassSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storageClassSpecifier; }
	}

	public final StorageClassSpecifierContext storageClassSpecifier() throws RecognitionException {
		StorageClassSpecifierContext _localctx = new StorageClassSpecifierContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_storageClassSpecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Auto) | (1L << Extern) | (1L << Register) | (1L << Static) | (1L << Typedef) | (1L << ThreadLocal))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeSpecifierContext extends ParserRuleContext {
		public TerminalNode Void() { return getToken(CParser.Void, 0); }
		public TerminalNode Char() { return getToken(CParser.Char, 0); }
		public TerminalNode Short() { return getToken(CParser.Short, 0); }
		public TerminalNode Int() { return getToken(CParser.Int, 0); }
		public TerminalNode Long() { return getToken(CParser.Long, 0); }
		public TerminalNode Float() { return getToken(CParser.Float, 0); }
		public TerminalNode Double() { return getToken(CParser.Double, 0); }
		public TerminalNode Signed() { return getToken(CParser.Signed, 0); }
		public TerminalNode Unsigned() { return getToken(CParser.Unsigned, 0); }
		public TerminalNode Bool() { return getToken(CParser.Bool, 0); }
		public TerminalNode Complex() { return getToken(CParser.Complex, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public AtomicTypeSpecifierContext atomicTypeSpecifier() {
			return getRuleContext(AtomicTypeSpecifierContext.class,0);
		}
		public StructOrUnionSpecifierContext structOrUnionSpecifier() {
			return getRuleContext(StructOrUnionSpecifierContext.class,0);
		}
		public EnumSpecifierContext enumSpecifier() {
			return getRuleContext(EnumSpecifierContext.class,0);
		}
		public TypedefNameContext typedefName() {
			return getRuleContext(TypedefNameContext.class,0);
		}
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public TypeSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSpecifier; }
	}

	public final TypeSpecifierContext typeSpecifier() throws RecognitionException {
		TypeSpecifierContext _localctx = new TypeSpecifierContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_typeSpecifier);
		int _la;
		try {
			setState(439);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case T__4:
			case T__5:
			case Char:
			case Double:
			case Float:
			case Int:
			case Long:
			case Short:
			case Signed:
			case Unsigned:
			case Void:
			case Bool:
			case Complex:
				enterOuterAlt(_localctx, 1);
				{
				setState(425);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << Char) | (1L << Double) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Unsigned) | (1L << Void) | (1L << Bool) | (1L << Complex))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(426);
				match(T__0);
				setState(427);
				match(LeftParen);
				setState(428);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__4) | (1L << T__5))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(429);
				match(RightParen);
				}
				break;
			case Atomic:
				enterOuterAlt(_localctx, 3);
				{
				setState(430);
				atomicTypeSpecifier();
				}
				break;
			case Struct:
			case Union:
				enterOuterAlt(_localctx, 4);
				{
				setState(431);
				structOrUnionSpecifier();
				}
				break;
			case Enum:
				enterOuterAlt(_localctx, 5);
				{
				setState(432);
				enumSpecifier();
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 6);
				{
				setState(433);
				typedefName();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 7);
				{
				setState(434);
				match(T__6);
				setState(435);
				match(LeftParen);
				setState(436);
				constantExpression();
				setState(437);
				match(RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructOrUnionSpecifierContext extends ParserRuleContext {
		public StructOrUnionContext structOrUnion() {
			return getRuleContext(StructOrUnionContext.class,0);
		}
		public TerminalNode LeftBrace() { return getToken(CParser.LeftBrace, 0); }
		public StructDeclarationListContext structDeclarationList() {
			return getRuleContext(StructDeclarationListContext.class,0);
		}
		public TerminalNode RightBrace() { return getToken(CParser.RightBrace, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public StructOrUnionSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structOrUnionSpecifier; }
	}

	public final StructOrUnionSpecifierContext structOrUnionSpecifier() throws RecognitionException {
		StructOrUnionSpecifierContext _localctx = new StructOrUnionSpecifierContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_structOrUnionSpecifier);
		int _la;
		try {
			setState(452);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(441);
				structOrUnion();
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(442);
					match(Identifier);
					}
				}

				setState(445);
				match(LeftBrace);
				setState(446);
				structDeclarationList();
				setState(447);
				match(RightBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(449);
				structOrUnion();
				setState(450);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructOrUnionContext extends ParserRuleContext {
		public TerminalNode Struct() { return getToken(CParser.Struct, 0); }
		public TerminalNode Union() { return getToken(CParser.Union, 0); }
		public StructOrUnionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structOrUnion; }
	}

	public final StructOrUnionContext structOrUnion() throws RecognitionException {
		StructOrUnionContext _localctx = new StructOrUnionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_structOrUnion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			_la = _input.LA(1);
			if ( !(_la==Struct || _la==Union) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclarationListContext extends ParserRuleContext {
		public List<StructDeclarationContext> structDeclaration() {
			return getRuleContexts(StructDeclarationContext.class);
		}
		public StructDeclarationContext structDeclaration(int i) {
			return getRuleContext(StructDeclarationContext.class,i);
		}
		public StructDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclarationList; }
	}

	public final StructDeclarationListContext structDeclarationList() throws RecognitionException {
		StructDeclarationListContext _localctx = new StructDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_structDeclarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(456);
				structDeclaration();
				}
				}
				setState(459); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Const) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Restrict) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Volatile) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << StaticAssert))) != 0) || _la==Identifier );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclarationContext extends ParserRuleContext {
		public SpecifierQualifierListContext specifierQualifierList() {
			return getRuleContext(SpecifierQualifierListContext.class,0);
		}
		public StructDeclaratorListContext structDeclaratorList() {
			return getRuleContext(StructDeclaratorListContext.class,0);
		}
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public StaticAssertDeclarationContext staticAssertDeclaration() {
			return getRuleContext(StaticAssertDeclarationContext.class,0);
		}
		public StructDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclaration; }
	}

	public final StructDeclarationContext structDeclaration() throws RecognitionException {
		StructDeclarationContext _localctx = new StructDeclarationContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_structDeclaration);
		try {
			setState(469);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(461);
				specifierQualifierList();
				setState(462);
				structDeclaratorList();
				setState(463);
				match(Semi);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(465);
				specifierQualifierList();
				setState(466);
				match(Semi);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(468);
				staticAssertDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpecifierQualifierListContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TypeQualifierContext typeQualifier() {
			return getRuleContext(TypeQualifierContext.class,0);
		}
		public SpecifierQualifierListContext specifierQualifierList() {
			return getRuleContext(SpecifierQualifierListContext.class,0);
		}
		public SpecifierQualifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specifierQualifierList; }
	}

	public final SpecifierQualifierListContext specifierQualifierList() throws RecognitionException {
		SpecifierQualifierListContext _localctx = new SpecifierQualifierListContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_specifierQualifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(471);
				typeSpecifier();
				}
				break;
			case 2:
				{
				setState(472);
				typeQualifier();
				}
				break;
			}
			setState(476);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(475);
				specifierQualifierList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclaratorListContext extends ParserRuleContext {
		public List<StructDeclaratorContext> structDeclarator() {
			return getRuleContexts(StructDeclaratorContext.class);
		}
		public StructDeclaratorContext structDeclarator(int i) {
			return getRuleContext(StructDeclaratorContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public StructDeclaratorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclaratorList; }
	}

	public final StructDeclaratorListContext structDeclaratorList() throws RecognitionException {
		StructDeclaratorListContext _localctx = new StructDeclaratorListContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_structDeclaratorList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(478);
			structDeclarator();
			setState(483);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(479);
				match(Comma);
				setState(480);
				structDeclarator();
				}
				}
				setState(485);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode Colon() { return getToken(CParser.Colon, 0); }
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public StructDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclarator; }
	}

	public final StructDeclaratorContext structDeclarator() throws RecognitionException {
		StructDeclaratorContext _localctx = new StructDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_structDeclarator);
		int _la;
		try {
			setState(492);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(486);
				declarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(488);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (Star - 80)) | (1L << (Caret - 80)) | (1L << (Identifier - 80)))) != 0)) {
					{
					setState(487);
					declarator();
					}
				}

				setState(490);
				match(Colon);
				setState(491);
				constantExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumSpecifierContext extends ParserRuleContext {
		public TerminalNode Enum() { return getToken(CParser.Enum, 0); }
		public TerminalNode LeftBrace() { return getToken(CParser.LeftBrace, 0); }
		public EnumeratorListContext enumeratorList() {
			return getRuleContext(EnumeratorListContext.class,0);
		}
		public TerminalNode RightBrace() { return getToken(CParser.RightBrace, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public EnumSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumSpecifier; }
	}

	public final EnumSpecifierContext enumSpecifier() throws RecognitionException {
		EnumSpecifierContext _localctx = new EnumSpecifierContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_enumSpecifier);
		int _la;
		try {
			setState(507);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(494);
				match(Enum);
				setState(496);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(495);
					match(Identifier);
					}
				}

				setState(498);
				match(LeftBrace);
				setState(499);
				enumeratorList();
				setState(501);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(500);
					match(Comma);
					}
				}

				setState(503);
				match(RightBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(505);
				match(Enum);
				setState(506);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumeratorListContext extends ParserRuleContext {
		public List<EnumeratorContext> enumerator() {
			return getRuleContexts(EnumeratorContext.class);
		}
		public EnumeratorContext enumerator(int i) {
			return getRuleContext(EnumeratorContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public EnumeratorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumeratorList; }
	}

	public final EnumeratorListContext enumeratorList() throws RecognitionException {
		EnumeratorListContext _localctx = new EnumeratorListContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_enumeratorList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			enumerator();
			setState(514);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(510);
					match(Comma);
					setState(511);
					enumerator();
					}
					} 
				}
				setState(516);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumeratorContext extends ParserRuleContext {
		public EnumerationConstantContext enumerationConstant() {
			return getRuleContext(EnumerationConstantContext.class,0);
		}
		public TerminalNode Assign() { return getToken(CParser.Assign, 0); }
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public EnumeratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumerator; }
	}

	public final EnumeratorContext enumerator() throws RecognitionException {
		EnumeratorContext _localctx = new EnumeratorContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_enumerator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			enumerationConstant();
			setState(520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(518);
				match(Assign);
				setState(519);
				constantExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumerationConstantContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public EnumerationConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumerationConstant; }
	}

	public final EnumerationConstantContext enumerationConstant() throws RecognitionException {
		EnumerationConstantContext _localctx = new EnumerationConstantContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_enumerationConstant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(522);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomicTypeSpecifierContext extends ParserRuleContext {
		public TerminalNode Atomic() { return getToken(CParser.Atomic, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public AtomicTypeSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atomicTypeSpecifier; }
	}

	public final AtomicTypeSpecifierContext atomicTypeSpecifier() throws RecognitionException {
		AtomicTypeSpecifierContext _localctx = new AtomicTypeSpecifierContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_atomicTypeSpecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(524);
			match(Atomic);
			setState(525);
			match(LeftParen);
			setState(526);
			typeName();
			setState(527);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQualifierContext extends ParserRuleContext {
		public TerminalNode Const() { return getToken(CParser.Const, 0); }
		public TerminalNode Restrict() { return getToken(CParser.Restrict, 0); }
		public TerminalNode Volatile() { return getToken(CParser.Volatile, 0); }
		public TerminalNode Atomic() { return getToken(CParser.Atomic, 0); }
		public TypeQualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQualifier; }
	}

	public final TypeQualifierContext typeQualifier() throws RecognitionException {
		TypeQualifierContext _localctx = new TypeQualifierContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_typeQualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(529);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionSpecifierContext extends ParserRuleContext {
		public TerminalNode Inline() { return getToken(CParser.Inline, 0); }
		public TerminalNode Noreturn() { return getToken(CParser.Noreturn, 0); }
		public GccAttributeSpecifierContext gccAttributeSpecifier() {
			return getRuleContext(GccAttributeSpecifierContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public FunctionSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionSpecifier; }
	}

	public final FunctionSpecifierContext functionSpecifier() throws RecognitionException {
		FunctionSpecifierContext _localctx = new FunctionSpecifierContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_functionSpecifier);
		int _la;
		try {
			setState(537);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__8:
			case Inline:
			case Noreturn:
				enterOuterAlt(_localctx, 1);
				{
				setState(531);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << Inline) | (1L << Noreturn))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(532);
				gccAttributeSpecifier();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 3);
				{
				setState(533);
				match(T__9);
				setState(534);
				match(LeftParen);
				setState(535);
				match(Identifier);
				setState(536);
				match(RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlignmentSpecifierContext extends ParserRuleContext {
		public TerminalNode Alignas() { return getToken(CParser.Alignas, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public AlignmentSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alignmentSpecifier; }
	}

	public final AlignmentSpecifierContext alignmentSpecifier() throws RecognitionException {
		AlignmentSpecifierContext _localctx = new AlignmentSpecifierContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_alignmentSpecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			match(Alignas);
			setState(540);
			match(LeftParen);
			setState(543);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				{
				setState(541);
				typeName();
				}
				break;
			case 2:
				{
				setState(542);
				constantExpression();
				}
				break;
			}
			setState(545);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclaratorContext extends ParserRuleContext {
		public DirectDeclaratorContext directDeclarator() {
			return getRuleContext(DirectDeclaratorContext.class,0);
		}
		public PointerContext pointer() {
			return getRuleContext(PointerContext.class,0);
		}
		public List<GccDeclaratorExtensionContext> gccDeclaratorExtension() {
			return getRuleContexts(GccDeclaratorExtensionContext.class);
		}
		public GccDeclaratorExtensionContext gccDeclaratorExtension(int i) {
			return getRuleContext(GccDeclaratorExtensionContext.class,i);
		}
		public DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarator; }
	}

	public final DeclaratorContext declarator() throws RecognitionException {
		DeclaratorContext _localctx = new DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_declarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(548);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Star || _la==Caret) {
				{
				setState(547);
				pointer();
				}
			}

			setState(550);
			directDeclarator();
			setState(554);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15 || _la==T__16) {
				{
				{
				setState(551);
				gccDeclaratorExtension();
				}
				}
				setState(556);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectDeclaratorContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public DirectDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directDeclarator; }
	}

	public final DirectDeclaratorContext directDeclarator() throws RecognitionException {
		DirectDeclaratorContext _localctx = new DirectDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_directDeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(557);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VcSpecificModiferContext extends ParserRuleContext {
		public VcSpecificModiferContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vcSpecificModifer; }
	}

	public final VcSpecificModiferContext vcSpecificModifer() throws RecognitionException {
		VcSpecificModiferContext _localctx = new VcSpecificModiferContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_vcSpecificModifer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(559);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GccDeclaratorExtensionContext extends ParserRuleContext {
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public List<TerminalNode> StringLiteral() { return getTokens(CParser.StringLiteral); }
		public TerminalNode StringLiteral(int i) {
			return getToken(CParser.StringLiteral, i);
		}
		public GccAttributeSpecifierContext gccAttributeSpecifier() {
			return getRuleContext(GccAttributeSpecifierContext.class,0);
		}
		public GccDeclaratorExtensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gccDeclaratorExtension; }
	}

	public final GccDeclaratorExtensionContext gccDeclaratorExtension() throws RecognitionException {
		GccDeclaratorExtensionContext _localctx = new GccDeclaratorExtensionContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_gccDeclaratorExtension);
		int _la;
		try {
			setState(570);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__15:
				enterOuterAlt(_localctx, 1);
				{
				setState(561);
				match(T__15);
				setState(562);
				match(LeftParen);
				setState(564); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(563);
					match(StringLiteral);
					}
					}
					setState(566); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==StringLiteral );
				setState(568);
				match(RightParen);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(569);
				gccAttributeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GccAttributeSpecifierContext extends ParserRuleContext {
		public List<TerminalNode> LeftParen() { return getTokens(CParser.LeftParen); }
		public TerminalNode LeftParen(int i) {
			return getToken(CParser.LeftParen, i);
		}
		public GccAttributeListContext gccAttributeList() {
			return getRuleContext(GccAttributeListContext.class,0);
		}
		public List<TerminalNode> RightParen() { return getTokens(CParser.RightParen); }
		public TerminalNode RightParen(int i) {
			return getToken(CParser.RightParen, i);
		}
		public GccAttributeSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gccAttributeSpecifier; }
	}

	public final GccAttributeSpecifierContext gccAttributeSpecifier() throws RecognitionException {
		GccAttributeSpecifierContext _localctx = new GccAttributeSpecifierContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_gccAttributeSpecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(572);
			match(T__16);
			setState(573);
			match(LeftParen);
			setState(574);
			match(LeftParen);
			setState(575);
			gccAttributeList();
			setState(576);
			match(RightParen);
			setState(577);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GccAttributeListContext extends ParserRuleContext {
		public List<GccAttributeContext> gccAttribute() {
			return getRuleContexts(GccAttributeContext.class);
		}
		public GccAttributeContext gccAttribute(int i) {
			return getRuleContext(GccAttributeContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public GccAttributeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gccAttributeList; }
	}

	public final GccAttributeListContext gccAttributeList() throws RecognitionException {
		GccAttributeListContext _localctx = new GccAttributeListContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_gccAttributeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(580);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << Auto) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Const) | (1L << Continue) | (1L << Default) | (1L << Do) | (1L << Double) | (1L << Else) | (1L << Enum) | (1L << Extern) | (1L << Float) | (1L << For) | (1L << Goto) | (1L << If) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Register) | (1L << Restrict) | (1L << Return) | (1L << Short) | (1L << Signed) | (1L << Sizeof) | (1L << Static) | (1L << Struct) | (1L << Switch) | (1L << Typedef) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Volatile) | (1L << While) | (1L << Alignas) | (1L << Alignof) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << Generic) | (1L << Imaginary) | (1L << Noreturn) | (1L << StaticAssert) | (1L << ThreadLocal))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (LeftBracket - 66)) | (1L << (RightBracket - 66)) | (1L << (LeftBrace - 66)) | (1L << (RightBrace - 66)) | (1L << (Less - 66)) | (1L << (LessEqual - 66)) | (1L << (Greater - 66)) | (1L << (GreaterEqual - 66)) | (1L << (LeftShift - 66)) | (1L << (RightShift - 66)) | (1L << (Plus - 66)) | (1L << (PlusPlus - 66)) | (1L << (Minus - 66)) | (1L << (MinusMinus - 66)) | (1L << (Star - 66)) | (1L << (Div - 66)) | (1L << (Mod - 66)) | (1L << (And - 66)) | (1L << (Or - 66)) | (1L << (AndAnd - 66)) | (1L << (OrOr - 66)) | (1L << (Caret - 66)) | (1L << (Not - 66)) | (1L << (Tilde - 66)) | (1L << (Question - 66)) | (1L << (Colon - 66)) | (1L << (Semi - 66)) | (1L << (Assign - 66)) | (1L << (StarAssign - 66)) | (1L << (DivAssign - 66)) | (1L << (ModAssign - 66)) | (1L << (PlusAssign - 66)) | (1L << (MinusAssign - 66)) | (1L << (LeftShiftAssign - 66)) | (1L << (RightShiftAssign - 66)) | (1L << (AndAssign - 66)) | (1L << (XorAssign - 66)) | (1L << (OrAssign - 66)) | (1L << (Equal - 66)) | (1L << (NotEqual - 66)) | (1L << (Arrow - 66)) | (1L << (Dot - 66)) | (1L << (Ellipsis - 66)) | (1L << (Identifier - 66)) | (1L << (Constant - 66)) | (1L << (DigitSequence - 66)) | (1L << (StringLiteral - 66)) | (1L << (ComplexDefine - 66)) | (1L << (IncludeDirective - 66)) | (1L << (AsmBlock - 66)) | (1L << (LineAfterPreprocessing - 66)) | (1L << (LineDirective - 66)) | (1L << (PragmaDirective - 66)) | (1L << (Whitespace - 66)) | (1L << (Newline - 66)) | (1L << (BlockComment - 66)) | (1L << (LineComment - 66)))) != 0)) {
				{
				setState(579);
				gccAttribute();
				}
			}

			setState(588);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(582);
				match(Comma);
				setState(584);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << Auto) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Const) | (1L << Continue) | (1L << Default) | (1L << Do) | (1L << Double) | (1L << Else) | (1L << Enum) | (1L << Extern) | (1L << Float) | (1L << For) | (1L << Goto) | (1L << If) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Register) | (1L << Restrict) | (1L << Return) | (1L << Short) | (1L << Signed) | (1L << Sizeof) | (1L << Static) | (1L << Struct) | (1L << Switch) | (1L << Typedef) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Volatile) | (1L << While) | (1L << Alignas) | (1L << Alignof) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << Generic) | (1L << Imaginary) | (1L << Noreturn) | (1L << StaticAssert) | (1L << ThreadLocal))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (LeftBracket - 66)) | (1L << (RightBracket - 66)) | (1L << (LeftBrace - 66)) | (1L << (RightBrace - 66)) | (1L << (Less - 66)) | (1L << (LessEqual - 66)) | (1L << (Greater - 66)) | (1L << (GreaterEqual - 66)) | (1L << (LeftShift - 66)) | (1L << (RightShift - 66)) | (1L << (Plus - 66)) | (1L << (PlusPlus - 66)) | (1L << (Minus - 66)) | (1L << (MinusMinus - 66)) | (1L << (Star - 66)) | (1L << (Div - 66)) | (1L << (Mod - 66)) | (1L << (And - 66)) | (1L << (Or - 66)) | (1L << (AndAnd - 66)) | (1L << (OrOr - 66)) | (1L << (Caret - 66)) | (1L << (Not - 66)) | (1L << (Tilde - 66)) | (1L << (Question - 66)) | (1L << (Colon - 66)) | (1L << (Semi - 66)) | (1L << (Assign - 66)) | (1L << (StarAssign - 66)) | (1L << (DivAssign - 66)) | (1L << (ModAssign - 66)) | (1L << (PlusAssign - 66)) | (1L << (MinusAssign - 66)) | (1L << (LeftShiftAssign - 66)) | (1L << (RightShiftAssign - 66)) | (1L << (AndAssign - 66)) | (1L << (XorAssign - 66)) | (1L << (OrAssign - 66)) | (1L << (Equal - 66)) | (1L << (NotEqual - 66)) | (1L << (Arrow - 66)) | (1L << (Dot - 66)) | (1L << (Ellipsis - 66)) | (1L << (Identifier - 66)) | (1L << (Constant - 66)) | (1L << (DigitSequence - 66)) | (1L << (StringLiteral - 66)) | (1L << (ComplexDefine - 66)) | (1L << (IncludeDirective - 66)) | (1L << (AsmBlock - 66)) | (1L << (LineAfterPreprocessing - 66)) | (1L << (LineDirective - 66)) | (1L << (PragmaDirective - 66)) | (1L << (Whitespace - 66)) | (1L << (Newline - 66)) | (1L << (BlockComment - 66)) | (1L << (LineComment - 66)))) != 0)) {
					{
					setState(583);
					gccAttribute();
					}
				}

				}
				}
				setState(590);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GccAttributeContext extends ParserRuleContext {
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public List<TerminalNode> LeftParen() { return getTokens(CParser.LeftParen); }
		public TerminalNode LeftParen(int i) {
			return getToken(CParser.LeftParen, i);
		}
		public List<TerminalNode> RightParen() { return getTokens(CParser.RightParen); }
		public TerminalNode RightParen(int i) {
			return getToken(CParser.RightParen, i);
		}
		public ArgumentExpressionListContext argumentExpressionList() {
			return getRuleContext(ArgumentExpressionListContext.class,0);
		}
		public GccAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gccAttribute; }
	}

	public final GccAttributeContext gccAttribute() throws RecognitionException {
		GccAttributeContext _localctx = new GccAttributeContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_gccAttribute);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(591);
			_la = _input.LA(1);
			if ( _la <= 0 || (((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (RightParen - 64)) | (1L << (Comma - 64)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LeftParen) {
				{
				setState(592);
				match(LeftParen);
				setState(594);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(593);
					argumentExpressionList();
					}
				}

				setState(596);
				match(RightParen);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestedParenthesesBlockContext extends ParserRuleContext {
		public List<TerminalNode> LeftParen() { return getTokens(CParser.LeftParen); }
		public TerminalNode LeftParen(int i) {
			return getToken(CParser.LeftParen, i);
		}
		public List<NestedParenthesesBlockContext> nestedParenthesesBlock() {
			return getRuleContexts(NestedParenthesesBlockContext.class);
		}
		public NestedParenthesesBlockContext nestedParenthesesBlock(int i) {
			return getRuleContext(NestedParenthesesBlockContext.class,i);
		}
		public List<TerminalNode> RightParen() { return getTokens(CParser.RightParen); }
		public TerminalNode RightParen(int i) {
			return getToken(CParser.RightParen, i);
		}
		public NestedParenthesesBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedParenthesesBlock; }
	}

	public final NestedParenthesesBlockContext nestedParenthesesBlock() throws RecognitionException {
		NestedParenthesesBlockContext _localctx = new NestedParenthesesBlockContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_nestedParenthesesBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(606);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << Auto) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Const) | (1L << Continue) | (1L << Default) | (1L << Do) | (1L << Double) | (1L << Else) | (1L << Enum) | (1L << Extern) | (1L << Float) | (1L << For) | (1L << Goto) | (1L << If) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Register) | (1L << Restrict) | (1L << Return) | (1L << Short) | (1L << Signed) | (1L << Sizeof) | (1L << Static) | (1L << Struct) | (1L << Switch) | (1L << Typedef) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Volatile) | (1L << While) | (1L << Alignas) | (1L << Alignof) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << Generic) | (1L << Imaginary) | (1L << Noreturn) | (1L << StaticAssert) | (1L << ThreadLocal))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (RightBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (RightBrace - 64)) | (1L << (Less - 64)) | (1L << (LessEqual - 64)) | (1L << (Greater - 64)) | (1L << (GreaterEqual - 64)) | (1L << (LeftShift - 64)) | (1L << (RightShift - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (Div - 64)) | (1L << (Mod - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (AndAnd - 64)) | (1L << (OrOr - 64)) | (1L << (Caret - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Question - 64)) | (1L << (Colon - 64)) | (1L << (Semi - 64)) | (1L << (Comma - 64)) | (1L << (Assign - 64)) | (1L << (StarAssign - 64)) | (1L << (DivAssign - 64)) | (1L << (ModAssign - 64)) | (1L << (PlusAssign - 64)) | (1L << (MinusAssign - 64)) | (1L << (LeftShiftAssign - 64)) | (1L << (RightShiftAssign - 64)) | (1L << (AndAssign - 64)) | (1L << (XorAssign - 64)) | (1L << (OrAssign - 64)) | (1L << (Equal - 64)) | (1L << (NotEqual - 64)) | (1L << (Arrow - 64)) | (1L << (Dot - 64)) | (1L << (Ellipsis - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)) | (1L << (ComplexDefine - 64)) | (1L << (IncludeDirective - 64)) | (1L << (AsmBlock - 64)) | (1L << (LineAfterPreprocessing - 64)) | (1L << (LineDirective - 64)) | (1L << (PragmaDirective - 64)) | (1L << (Whitespace - 64)) | (1L << (Newline - 64)) | (1L << (BlockComment - 64)) | (1L << (LineComment - 64)))) != 0)) {
				{
				setState(604);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case T__18:
				case Auto:
				case Break:
				case Case:
				case Char:
				case Const:
				case Continue:
				case Default:
				case Do:
				case Double:
				case Else:
				case Enum:
				case Extern:
				case Float:
				case For:
				case Goto:
				case If:
				case Inline:
				case Int:
				case Long:
				case Register:
				case Restrict:
				case Return:
				case Short:
				case Signed:
				case Sizeof:
				case Static:
				case Struct:
				case Switch:
				case Typedef:
				case Union:
				case Unsigned:
				case Void:
				case Volatile:
				case While:
				case Alignas:
				case Alignof:
				case Atomic:
				case Bool:
				case Complex:
				case Generic:
				case Imaginary:
				case Noreturn:
				case StaticAssert:
				case ThreadLocal:
				case LeftBracket:
				case RightBracket:
				case LeftBrace:
				case RightBrace:
				case Less:
				case LessEqual:
				case Greater:
				case GreaterEqual:
				case LeftShift:
				case RightShift:
				case Plus:
				case PlusPlus:
				case Minus:
				case MinusMinus:
				case Star:
				case Div:
				case Mod:
				case And:
				case Or:
				case AndAnd:
				case OrOr:
				case Caret:
				case Not:
				case Tilde:
				case Question:
				case Colon:
				case Semi:
				case Comma:
				case Assign:
				case StarAssign:
				case DivAssign:
				case ModAssign:
				case PlusAssign:
				case MinusAssign:
				case LeftShiftAssign:
				case RightShiftAssign:
				case AndAssign:
				case XorAssign:
				case OrAssign:
				case Equal:
				case NotEqual:
				case Arrow:
				case Dot:
				case Ellipsis:
				case Identifier:
				case Constant:
				case DigitSequence:
				case StringLiteral:
				case ComplexDefine:
				case IncludeDirective:
				case AsmBlock:
				case LineAfterPreprocessing:
				case LineDirective:
				case PragmaDirective:
				case Whitespace:
				case Newline:
				case BlockComment:
				case LineComment:
					{
					setState(599);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==LeftParen || _la==RightParen) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				case LeftParen:
					{
					setState(600);
					match(LeftParen);
					setState(601);
					nestedParenthesesBlock();
					setState(602);
					match(RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(608);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerContext extends ParserRuleContext {
		public List<TerminalNode> Star() { return getTokens(CParser.Star); }
		public TerminalNode Star(int i) {
			return getToken(CParser.Star, i);
		}
		public List<TerminalNode> Caret() { return getTokens(CParser.Caret); }
		public TerminalNode Caret(int i) {
			return getToken(CParser.Caret, i);
		}
		public List<TypeQualifierListContext> typeQualifierList() {
			return getRuleContexts(TypeQualifierListContext.class);
		}
		public TypeQualifierListContext typeQualifierList(int i) {
			return getRuleContext(TypeQualifierListContext.class,i);
		}
		public PointerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointer; }
	}

	public final PointerContext pointer() throws RecognitionException {
		PointerContext _localctx = new PointerContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_pointer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(613); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(609);
				_la = _input.LA(1);
				if ( !(_la==Star || _la==Caret) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(611);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) {
					{
					setState(610);
					typeQualifierList();
					}
				}

				}
				}
				setState(615); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Star || _la==Caret );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQualifierListContext extends ParserRuleContext {
		public List<TypeQualifierContext> typeQualifier() {
			return getRuleContexts(TypeQualifierContext.class);
		}
		public TypeQualifierContext typeQualifier(int i) {
			return getRuleContext(TypeQualifierContext.class,i);
		}
		public TypeQualifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQualifierList; }
	}

	public final TypeQualifierListContext typeQualifierList() throws RecognitionException {
		TypeQualifierListContext _localctx = new TypeQualifierListContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_typeQualifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(618); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(617);
				typeQualifier();
				}
				}
				setState(620); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterTypeListContext extends ParserRuleContext {
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public TerminalNode Ellipsis() { return getToken(CParser.Ellipsis, 0); }
		public ParameterTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterTypeList; }
	}

	public final ParameterTypeListContext parameterTypeList() throws RecognitionException {
		ParameterTypeListContext _localctx = new ParameterTypeListContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_parameterTypeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(622);
			parameterList();
			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Comma) {
				{
				setState(623);
				match(Comma);
				setState(624);
				match(Ellipsis);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterDeclarationContext> parameterDeclaration() {
			return getRuleContexts(ParameterDeclarationContext.class);
		}
		public ParameterDeclarationContext parameterDeclaration(int i) {
			return getRuleContext(ParameterDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_parameterList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(627);
			parameterDeclaration();
			setState(632);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(628);
					match(Comma);
					setState(629);
					parameterDeclaration();
					}
					} 
				}
				setState(634);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterDeclarationContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public List<TypeSpecifierContext> typeSpecifier() {
			return getRuleContexts(TypeSpecifierContext.class);
		}
		public TypeSpecifierContext typeSpecifier(int i) {
			return getRuleContext(TypeSpecifierContext.class,i);
		}
		public AbstractDeclaratorContext abstractDeclarator() {
			return getRuleContext(AbstractDeclaratorContext.class,0);
		}
		public ParameterDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterDeclaration; }
	}

	public final ParameterDeclarationContext parameterDeclaration() throws RecognitionException {
		ParameterDeclarationContext _localctx = new ParameterDeclarationContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_parameterDeclaration);
		int _la;
		try {
			int _alt;
			setState(650);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(636); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(635);
						typeSpecifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(638); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(640);
				declarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(643); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(642);
					typeSpecifier();
					}
					}
					setState(645); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Atomic) | (1L << Bool) | (1L << Complex))) != 0) || _la==Identifier );
				setState(648);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Star - 64)) | (1L << (Caret - 64)))) != 0)) {
					{
					setState(647);
					abstractDeclarator();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(CParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(CParser.Identifier, i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_identifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(652);
			match(Identifier);
			setState(657);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(653);
				match(Comma);
				setState(654);
				match(Identifier);
				}
				}
				setState(659);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNameContext extends ParserRuleContext {
		public SpecifierQualifierListContext specifierQualifierList() {
			return getRuleContext(SpecifierQualifierListContext.class,0);
		}
		public AbstractDeclaratorContext abstractDeclarator() {
			return getRuleContext(AbstractDeclaratorContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
	}

	public final TypeNameContext typeName() throws RecognitionException {
		TypeNameContext _localctx = new TypeNameContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_typeName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(660);
			specifierQualifierList();
			setState(662);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Star - 64)) | (1L << (Caret - 64)))) != 0)) {
				{
				setState(661);
				abstractDeclarator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AbstractDeclaratorContext extends ParserRuleContext {
		public PointerContext pointer() {
			return getRuleContext(PointerContext.class,0);
		}
		public DirectAbstractDeclaratorContext directAbstractDeclarator() {
			return getRuleContext(DirectAbstractDeclaratorContext.class,0);
		}
		public List<GccDeclaratorExtensionContext> gccDeclaratorExtension() {
			return getRuleContexts(GccDeclaratorExtensionContext.class);
		}
		public GccDeclaratorExtensionContext gccDeclaratorExtension(int i) {
			return getRuleContext(GccDeclaratorExtensionContext.class,i);
		}
		public AbstractDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_abstractDeclarator; }
	}

	public final AbstractDeclaratorContext abstractDeclarator() throws RecognitionException {
		AbstractDeclaratorContext _localctx = new AbstractDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_abstractDeclarator);
		int _la;
		try {
			setState(675);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(664);
				pointer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(666);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Star || _la==Caret) {
					{
					setState(665);
					pointer();
					}
				}

				setState(668);
				directAbstractDeclarator(0);
				setState(672);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15 || _la==T__16) {
					{
					{
					setState(669);
					gccDeclaratorExtension();
					}
					}
					setState(674);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectAbstractDeclaratorContext extends ParserRuleContext {
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public AbstractDeclaratorContext abstractDeclarator() {
			return getRuleContext(AbstractDeclaratorContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public List<GccDeclaratorExtensionContext> gccDeclaratorExtension() {
			return getRuleContexts(GccDeclaratorExtensionContext.class);
		}
		public GccDeclaratorExtensionContext gccDeclaratorExtension(int i) {
			return getRuleContext(GccDeclaratorExtensionContext.class,i);
		}
		public TerminalNode LeftBracket() { return getToken(CParser.LeftBracket, 0); }
		public TerminalNode RightBracket() { return getToken(CParser.RightBracket, 0); }
		public TypeQualifierListContext typeQualifierList() {
			return getRuleContext(TypeQualifierListContext.class,0);
		}
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public TerminalNode Static() { return getToken(CParser.Static, 0); }
		public TerminalNode Star() { return getToken(CParser.Star, 0); }
		public ParameterTypeListContext parameterTypeList() {
			return getRuleContext(ParameterTypeListContext.class,0);
		}
		public DirectAbstractDeclaratorContext directAbstractDeclarator() {
			return getRuleContext(DirectAbstractDeclaratorContext.class,0);
		}
		public DirectAbstractDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directAbstractDeclarator; }
	}

	public final DirectAbstractDeclaratorContext directAbstractDeclarator() throws RecognitionException {
		return directAbstractDeclarator(0);
	}

	private DirectAbstractDeclaratorContext directAbstractDeclarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DirectAbstractDeclaratorContext _localctx = new DirectAbstractDeclaratorContext(_ctx, _parentState);
		DirectAbstractDeclaratorContext _prevctx = _localctx;
		int _startState = 120;
		enterRecursionRule(_localctx, 120, RULE_directAbstractDeclarator, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(723);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				{
				setState(678);
				match(LeftParen);
				setState(679);
				abstractDeclarator();
				setState(680);
				match(RightParen);
				setState(684);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(681);
						gccDeclaratorExtension();
						}
						} 
					}
					setState(686);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(687);
				match(LeftBracket);
				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) {
					{
					setState(688);
					typeQualifierList();
					}
				}

				setState(692);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(691);
					assignmentExpression();
					}
				}

				setState(694);
				match(RightBracket);
				}
				break;
			case 3:
				{
				setState(695);
				match(LeftBracket);
				setState(696);
				match(Static);
				setState(698);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) {
					{
					setState(697);
					typeQualifierList();
					}
				}

				setState(700);
				assignmentExpression();
				setState(701);
				match(RightBracket);
				}
				break;
			case 4:
				{
				setState(703);
				match(LeftBracket);
				setState(704);
				typeQualifierList();
				setState(705);
				match(Static);
				setState(706);
				assignmentExpression();
				setState(707);
				match(RightBracket);
				}
				break;
			case 5:
				{
				setState(709);
				match(LeftBracket);
				setState(710);
				match(Star);
				setState(711);
				match(RightBracket);
				}
				break;
			case 6:
				{
				setState(712);
				match(LeftParen);
				setState(714);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Atomic) | (1L << Bool) | (1L << Complex))) != 0) || _la==Identifier) {
					{
					setState(713);
					parameterTypeList();
					}
				}

				setState(716);
				match(RightParen);
				setState(720);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(717);
						gccDeclaratorExtension();
						}
						} 
					}
					setState(722);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(768);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(766);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
					case 1:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_directAbstractDeclarator);
						setState(725);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(726);
						match(LeftBracket);
						setState(728);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) {
							{
							setState(727);
							typeQualifierList();
							}
						}

						setState(731);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
							{
							setState(730);
							assignmentExpression();
							}
						}

						setState(733);
						match(RightBracket);
						}
						break;
					case 2:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_directAbstractDeclarator);
						setState(734);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(735);
						match(LeftBracket);
						setState(736);
						match(Static);
						setState(738);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Const) | (1L << Restrict) | (1L << Volatile) | (1L << Atomic))) != 0)) {
							{
							setState(737);
							typeQualifierList();
							}
						}

						setState(740);
						assignmentExpression();
						setState(741);
						match(RightBracket);
						}
						break;
					case 3:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_directAbstractDeclarator);
						setState(743);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(744);
						match(LeftBracket);
						setState(745);
						typeQualifierList();
						setState(746);
						match(Static);
						setState(747);
						assignmentExpression();
						setState(748);
						match(RightBracket);
						}
						break;
					case 4:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_directAbstractDeclarator);
						setState(750);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(751);
						match(LeftBracket);
						setState(752);
						match(Star);
						setState(753);
						match(RightBracket);
						}
						break;
					case 5:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_directAbstractDeclarator);
						setState(754);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(755);
						match(LeftParen);
						setState(757);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Atomic) | (1L << Bool) | (1L << Complex))) != 0) || _la==Identifier) {
							{
							setState(756);
							parameterTypeList();
							}
						}

						setState(759);
						match(RightParen);
						setState(763);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
						while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
							if ( _alt==1 ) {
								{
								{
								setState(760);
								gccDeclaratorExtension();
								}
								} 
							}
							setState(765);
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
						}
						}
						break;
					}
					} 
				}
				setState(770);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypedefNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TypedefNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedefName; }
	}

	public final TypedefNameContext typedefName() throws RecognitionException {
		TypedefNameContext _localctx = new TypedefNameContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_typedefName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(771);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerContext extends ParserRuleContext {
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_initializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(773);
			assignmentExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerListContext extends ParserRuleContext {
		public List<InitializerContext> initializer() {
			return getRuleContexts(InitializerContext.class);
		}
		public InitializerContext initializer(int i) {
			return getRuleContext(InitializerContext.class,i);
		}
		public List<DesignationContext> designation() {
			return getRuleContexts(DesignationContext.class);
		}
		public DesignationContext designation(int i) {
			return getRuleContext(DesignationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public InitializerListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerList; }
	}

	public final InitializerListContext initializerList() throws RecognitionException {
		InitializerListContext _localctx = new InitializerListContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_initializerList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(776);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LeftBracket || _la==Dot) {
				{
				setState(775);
				designation();
				}
			}

			setState(778);
			initializer();
			setState(786);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,88,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(779);
					match(Comma);
					setState(781);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LeftBracket || _la==Dot) {
						{
						setState(780);
						designation();
						}
					}

					setState(783);
					initializer();
					}
					} 
				}
				setState(788);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,88,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DesignationContext extends ParserRuleContext {
		public DesignatorListContext designatorList() {
			return getRuleContext(DesignatorListContext.class,0);
		}
		public TerminalNode Assign() { return getToken(CParser.Assign, 0); }
		public DesignationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designation; }
	}

	public final DesignationContext designation() throws RecognitionException {
		DesignationContext _localctx = new DesignationContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_designation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(789);
			designatorList();
			setState(790);
			match(Assign);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DesignatorListContext extends ParserRuleContext {
		public List<DesignatorContext> designator() {
			return getRuleContexts(DesignatorContext.class);
		}
		public DesignatorContext designator(int i) {
			return getRuleContext(DesignatorContext.class,i);
		}
		public DesignatorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designatorList; }
	}

	public final DesignatorListContext designatorList() throws RecognitionException {
		DesignatorListContext _localctx = new DesignatorListContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_designatorList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(793); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(792);
				designator();
				}
				}
				setState(795); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==LeftBracket || _la==Dot );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DesignatorContext extends ParserRuleContext {
		public TerminalNode LeftBracket() { return getToken(CParser.LeftBracket, 0); }
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public TerminalNode RightBracket() { return getToken(CParser.RightBracket, 0); }
		public TerminalNode Dot() { return getToken(CParser.Dot, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public DesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designator; }
	}

	public final DesignatorContext designator() throws RecognitionException {
		DesignatorContext _localctx = new DesignatorContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_designator);
		try {
			setState(803);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftBracket:
				enterOuterAlt(_localctx, 1);
				{
				setState(797);
				match(LeftBracket);
				setState(798);
				constantExpression();
				setState(799);
				match(RightBracket);
				}
				break;
			case Dot:
				enterOuterAlt(_localctx, 2);
				{
				setState(801);
				match(Dot);
				setState(802);
				match(Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaticAssertDeclarationContext extends ParserRuleContext {
		public TerminalNode StaticAssert() { return getToken(CParser.StaticAssert, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public TerminalNode Comma() { return getToken(CParser.Comma, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public List<TerminalNode> StringLiteral() { return getTokens(CParser.StringLiteral); }
		public TerminalNode StringLiteral(int i) {
			return getToken(CParser.StringLiteral, i);
		}
		public StaticAssertDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticAssertDeclaration; }
	}

	public final StaticAssertDeclarationContext staticAssertDeclaration() throws RecognitionException {
		StaticAssertDeclarationContext _localctx = new StaticAssertDeclarationContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_staticAssertDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(805);
			match(StaticAssert);
			setState(806);
			match(LeftParen);
			setState(807);
			constantExpression();
			setState(808);
			match(Comma);
			setState(810); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(809);
				match(StringLiteral);
				}
				}
				setState(812); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==StringLiteral );
			setState(814);
			match(RightParen);
			setState(815);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public LabeledStatementContext labeledStatement() {
			return getRuleContext(LabeledStatementContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public SelectionStatementContext selectionStatement() {
			return getRuleContext(SelectionStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public JumpStatementContext jumpStatement() {
			return getRuleContext(JumpStatementContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public TerminalNode Volatile() { return getToken(CParser.Volatile, 0); }
		public List<LogicalOrExpressionContext> logicalOrExpression() {
			return getRuleContexts(LogicalOrExpressionContext.class);
		}
		public LogicalOrExpressionContext logicalOrExpression(int i) {
			return getRuleContext(LogicalOrExpressionContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(CParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(CParser.Colon, i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_statement);
		int _la;
		try {
			setState(854);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(817);
				labeledStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(818);
				compoundStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(819);
				expressionStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(820);
				selectionStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(821);
				iterationStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(822);
				jumpStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(823);
				_la = _input.LA(1);
				if ( !(_la==T__15 || _la==T__17) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(824);
				_la = _input.LA(1);
				if ( !(_la==T__18 || _la==Volatile) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(825);
				match(LeftParen);
				setState(834);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(826);
					logicalOrExpression();
					setState(831);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==Comma) {
						{
						{
						setState(827);
						match(Comma);
						setState(828);
						logicalOrExpression();
						}
						}
						setState(833);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(849);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Colon) {
					{
					{
					setState(836);
					match(Colon);
					setState(845);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
						{
						setState(837);
						logicalOrExpression();
						setState(842);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==Comma) {
							{
							{
							setState(838);
							match(Comma);
							setState(839);
							logicalOrExpression();
							}
							}
							setState(844);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
					}

					}
					}
					setState(851);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(852);
				match(RightParen);
				setState(853);
				match(Semi);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabeledStatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TerminalNode Colon() { return getToken(CParser.Colon, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Case() { return getToken(CParser.Case, 0); }
		public ConstantExpressionContext constantExpression() {
			return getRuleContext(ConstantExpressionContext.class,0);
		}
		public TerminalNode Default() { return getToken(CParser.Default, 0); }
		public LabeledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labeledStatement; }
	}

	public final LabeledStatementContext labeledStatement() throws RecognitionException {
		LabeledStatementContext _localctx = new LabeledStatementContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_labeledStatement);
		try {
			setState(867);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(856);
				match(Identifier);
				setState(857);
				match(Colon);
				setState(858);
				statement();
				}
				break;
			case Case:
				enterOuterAlt(_localctx, 2);
				{
				setState(859);
				match(Case);
				setState(860);
				constantExpression();
				setState(861);
				match(Colon);
				setState(862);
				statement();
				}
				break;
			case Default:
				enterOuterAlt(_localctx, 3);
				{
				setState(864);
				match(Default);
				setState(865);
				match(Colon);
				setState(866);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundStatementContext extends ParserRuleContext {
		public TerminalNode LeftBrace() { return getToken(CParser.LeftBrace, 0); }
		public TerminalNode RightBrace() { return getToken(CParser.RightBrace, 0); }
		public BlockItemListContext blockItemList() {
			return getRuleContext(BlockItemListContext.class,0);
		}
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_compoundStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(869);
			match(LeftBrace);
			setState(871);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__15) | (1L << T__17) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Continue) | (1L << Default) | (1L << Do) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << For) | (1L << Goto) | (1L << If) | (1L << Int) | (1L << Long) | (1L << Return) | (1L << Short) | (1L << Signed) | (1L << Sizeof) | (1L << Struct) | (1L << Switch) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << While) | (1L << Alignof) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Semi - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(870);
				blockItemList();
				}
			}

			setState(873);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockItemListContext extends ParserRuleContext {
		public List<BlockItemContext> blockItem() {
			return getRuleContexts(BlockItemContext.class);
		}
		public BlockItemContext blockItem(int i) {
			return getRuleContext(BlockItemContext.class,i);
		}
		public BlockItemListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockItemList; }
	}

	public final BlockItemListContext blockItemList() throws RecognitionException {
		BlockItemListContext _localctx = new BlockItemListContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_blockItemList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(876); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(875);
				blockItem();
				}
				}
				setState(878); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__15) | (1L << T__17) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Continue) | (1L << Default) | (1L << Do) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << For) | (1L << Goto) | (1L << If) | (1L << Int) | (1L << Long) | (1L << Return) | (1L << Short) | (1L << Signed) | (1L << Sizeof) | (1L << Struct) | (1L << Switch) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << While) | (1L << Alignof) | (1L << Atomic) | (1L << Bool) | (1L << Complex) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Semi - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockItemContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public BlockItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockItem; }
	}

	public final BlockItemContext blockItem() throws RecognitionException {
		BlockItemContext _localctx = new BlockItemContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_blockItem);
		try {
			setState(882);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(880);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(881);
				declaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_expressionStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(885);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(884);
				expression();
				}
			}

			setState(887);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectionStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(CParser.If, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(CParser.Else, 0); }
		public TerminalNode Switch() { return getToken(CParser.Switch, 0); }
		public SelectionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectionStatement; }
	}

	public final SelectionStatementContext selectionStatement() throws RecognitionException {
		SelectionStatementContext _localctx = new SelectionStatementContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_selectionStatement);
		try {
			setState(904);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case If:
				enterOuterAlt(_localctx, 1);
				{
				setState(889);
				match(If);
				setState(890);
				match(LeftParen);
				setState(891);
				expression();
				setState(892);
				match(RightParen);
				setState(893);
				statement();
				setState(896);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
				case 1:
					{
					setState(894);
					match(Else);
					setState(895);
					statement();
					}
					break;
				}
				}
				break;
			case Switch:
				enterOuterAlt(_localctx, 2);
				{
				setState(898);
				match(Switch);
				setState(899);
				match(LeftParen);
				setState(900);
				expression();
				setState(901);
				match(RightParen);
				setState(902);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStatementContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(CParser.While, 0); }
		public TerminalNode LeftParen() { return getToken(CParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(CParser.RightParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Do() { return getToken(CParser.Do, 0); }
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public TerminalNode For() { return getToken(CParser.For, 0); }
		public ForConditionContext forCondition() {
			return getRuleContext(ForConditionContext.class,0);
		}
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_iterationStatement);
		try {
			setState(926);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case While:
				enterOuterAlt(_localctx, 1);
				{
				setState(906);
				match(While);
				setState(907);
				match(LeftParen);
				setState(908);
				expression();
				setState(909);
				match(RightParen);
				setState(910);
				statement();
				}
				break;
			case Do:
				enterOuterAlt(_localctx, 2);
				{
				setState(912);
				match(Do);
				setState(913);
				statement();
				setState(914);
				match(While);
				setState(915);
				match(LeftParen);
				setState(916);
				expression();
				setState(917);
				match(RightParen);
				setState(918);
				match(Semi);
				}
				break;
			case For:
				enterOuterAlt(_localctx, 3);
				{
				setState(920);
				match(For);
				setState(921);
				match(LeftParen);
				setState(922);
				forCondition();
				setState(923);
				match(RightParen);
				setState(924);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForConditionContext extends ParserRuleContext {
		public List<TerminalNode> Semi() { return getTokens(CParser.Semi); }
		public TerminalNode Semi(int i) {
			return getToken(CParser.Semi, i);
		}
		public ForDeclarationContext forDeclaration() {
			return getRuleContext(ForDeclarationContext.class,0);
		}
		public List<ForExpressionContext> forExpression() {
			return getRuleContexts(ForExpressionContext.class);
		}
		public ForExpressionContext forExpression(int i) {
			return getRuleContext(ForExpressionContext.class,i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forCondition; }
	}

	public final ForConditionContext forCondition() throws RecognitionException {
		ForConditionContext _localctx = new ForConditionContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_forCondition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(932);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(928);
				forDeclaration();
				}
				break;
			case 2:
				{
				setState(930);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(929);
					expression();
					}
				}

				}
				break;
			}
			setState(934);
			match(Semi);
			setState(936);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(935);
				forExpression();
				}
			}

			setState(938);
			match(Semi);
			setState(940);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(939);
				forExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForDeclarationContext extends ParserRuleContext {
		public List<TypeSpecifierContext> typeSpecifier() {
			return getRuleContexts(TypeSpecifierContext.class);
		}
		public TypeSpecifierContext typeSpecifier(int i) {
			return getRuleContext(TypeSpecifierContext.class,i);
		}
		public InitDeclaratorListContext initDeclaratorList() {
			return getRuleContext(InitDeclaratorListContext.class,0);
		}
		public ForDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forDeclaration; }
	}

	public final ForDeclarationContext forDeclaration() throws RecognitionException {
		ForDeclarationContext _localctx = new ForDeclarationContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_forDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(943); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(942);
					typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(945); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,110,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(948);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (Star - 80)) | (1L << (Caret - 80)) | (1L << (Identifier - 80)))) != 0)) {
				{
				setState(947);
				initDeclaratorList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForExpressionContext extends ParserRuleContext {
		public List<AssignmentExpressionContext> assignmentExpression() {
			return getRuleContexts(AssignmentExpressionContext.class);
		}
		public AssignmentExpressionContext assignmentExpression(int i) {
			return getRuleContext(AssignmentExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(CParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(CParser.Comma, i);
		}
		public ForExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forExpression; }
	}

	public final ForExpressionContext forExpression() throws RecognitionException {
		ForExpressionContext _localctx = new ForExpressionContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_forExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(950);
			assignmentExpression();
			setState(955);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(951);
				match(Comma);
				setState(952);
				assignmentExpression();
				}
				}
				setState(957);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JumpStatementContext extends ParserRuleContext {
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public TerminalNode Goto() { return getToken(CParser.Goto, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TerminalNode Return() { return getToken(CParser.Return, 0); }
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public TerminalNode Continue() { return getToken(CParser.Continue, 0); }
		public TerminalNode Break() { return getToken(CParser.Break, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public JumpStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jumpStatement; }
	}

	public final JumpStatementContext jumpStatement() throws RecognitionException {
		JumpStatementContext _localctx = new JumpStatementContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_jumpStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(967);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				{
				setState(958);
				match(Goto);
				setState(959);
				match(Identifier);
				}
				break;
			case 2:
				{
				setState(960);
				_la = _input.LA(1);
				if ( !(_la==Break || _la==Continue) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 3:
				{
				setState(961);
				match(Return);
				setState(963);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << Sizeof) | (1L << Alignof) | (1L << Generic))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LeftParen - 64)) | (1L << (Plus - 64)) | (1L << (PlusPlus - 64)) | (1L << (Minus - 64)) | (1L << (MinusMinus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (AndAnd - 64)) | (1L << (Not - 64)) | (1L << (Tilde - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (DigitSequence - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(962);
					expression();
					}
				}

				}
				break;
			case 4:
				{
				setState(965);
				match(Goto);
				setState(966);
				unaryExpression();
				}
				break;
			}
			setState(969);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CParser.EOF, 0); }
		public List<ExternalDeclarationContext> externalDeclaration() {
			return getRuleContexts(ExternalDeclarationContext.class);
		}
		public ExternalDeclarationContext externalDeclaration(int i) {
			return getRuleContext(ExternalDeclarationContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_compilationUnit);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(972); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(971);
					externalDeclaration();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(974); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,115,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(976);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExternalDeclarationContext extends ParserRuleContext {
		public FunctionDefinitionContext functionDefinition() {
			return getRuleContext(FunctionDefinitionContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode Semi() { return getToken(CParser.Semi, 0); }
		public ExternalDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externalDeclaration; }
	}

	public final ExternalDeclarationContext externalDeclaration() throws RecognitionException {
		ExternalDeclarationContext _localctx = new ExternalDeclarationContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_externalDeclaration);
		try {
			setState(981);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(978);
				functionDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(979);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(980);
				match(Semi);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDefinitionContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public List<TypeSpecifierContext> typeSpecifier() {
			return getRuleContexts(TypeSpecifierContext.class);
		}
		public TypeSpecifierContext typeSpecifier(int i) {
			return getRuleContext(TypeSpecifierContext.class,i);
		}
		public DeclarationListContext declarationList() {
			return getRuleContext(DeclarationListContext.class,0);
		}
		public FunctionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDefinition; }
	}

	public final FunctionDefinitionContext functionDefinition() throws RecognitionException {
		FunctionDefinitionContext _localctx = new FunctionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_functionDefinition);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(984); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(983);
					typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(986); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,117,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(988);
			declarator();
			setState(990);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Atomic) | (1L << Bool) | (1L << Complex))) != 0) || _la==Identifier) {
				{
				setState(989);
				declarationList();
				}
			}

			setState(992);
			compoundStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationListContext extends ParserRuleContext {
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public DeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationList; }
	}

	public final DeclarationListContext declarationList() throws RecognitionException {
		DeclarationListContext _localctx = new DeclarationListContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_declarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(995); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(994);
				declaration();
				}
				}
				setState(997); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << Char) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << Short) | (1L << Signed) | (1L << Struct) | (1L << Union) | (1L << Unsigned) | (1L << Void) | (1L << Atomic) | (1L << Bool) | (1L << Complex))) != 0) || _la==Identifier );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 60:
			return directAbstractDeclarator_sempred((DirectAbstractDeclaratorContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean directAbstractDeclarator_sempred(DirectAbstractDeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		case 3:
			return precpred(_ctx, 2);
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3}\u03ea\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\3\2\3\2\3\2\6\2\u00ae\n\2\r\2\16\2\u00af\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\5\2\u00b8\n\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\5\2\u00cc\n\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3"+
		"\4\7\4\u00d8\n\4\f\4\16\4\u00db\13\4\3\5\3\5\5\5\u00df\n\5\3\5\3\5\3\5"+
		"\3\6\3\6\5\6\u00e6\n\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00ee\n\6\3\6\3\6\5"+
		"\6\u00f2\n\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00fa\n\6\3\6\3\6\3\6\3\6\7\6"+
		"\u0100\n\6\f\6\16\6\u0103\13\6\3\7\3\7\3\7\7\7\u0108\n\7\f\7\16\7\u010b"+
		"\13\7\3\b\7\b\u010e\n\b\f\b\16\b\u0111\13\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\5\b\u011e\n\b\3\t\3\t\3\n\5\n\u0123\n\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\5\n\u012c\n\n\3\13\3\13\3\13\7\13\u0131\n\13\f\13\16"+
		"\13\u0134\13\13\3\f\3\f\3\f\7\f\u0139\n\f\f\f\16\f\u013c\13\f\3\r\3\r"+
		"\3\r\7\r\u0141\n\r\f\r\16\r\u0144\13\r\3\16\3\16\3\16\7\16\u0149\n\16"+
		"\f\16\16\16\u014c\13\16\3\17\3\17\3\17\7\17\u0151\n\17\f\17\16\17\u0154"+
		"\13\17\3\20\3\20\3\20\7\20\u0159\n\20\f\20\16\20\u015c\13\20\3\21\3\21"+
		"\3\21\7\21\u0161\n\21\f\21\16\21\u0164\13\21\3\22\3\22\3\22\7\22\u0169"+
		"\n\22\f\22\16\22\u016c\13\22\3\23\3\23\3\23\7\23\u0171\n\23\f\23\16\23"+
		"\u0174\13\23\3\24\3\24\3\24\7\24\u0179\n\24\f\24\16\24\u017c\13\24\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\5\25\u0184\n\25\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\5\26\u018c\n\26\3\27\3\27\3\30\3\30\3\30\7\30\u0193\n\30\f\30\16\30\u0196"+
		"\13\30\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\33\7\33\u01a1\n\33\f"+
		"\33\16\33\u01a4\13\33\3\34\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u01ba\n\36\3\37"+
		"\3\37\5\37\u01be\n\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u01c7\n"+
		"\37\3 \3 \3!\6!\u01cc\n!\r!\16!\u01cd\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\""+
		"\5\"\u01d8\n\"\3#\3#\5#\u01dc\n#\3#\5#\u01df\n#\3$\3$\3$\7$\u01e4\n$\f"+
		"$\16$\u01e7\13$\3%\3%\5%\u01eb\n%\3%\3%\5%\u01ef\n%\3&\3&\5&\u01f3\n&"+
		"\3&\3&\3&\5&\u01f8\n&\3&\3&\3&\3&\5&\u01fe\n&\3\'\3\'\3\'\7\'\u0203\n"+
		"\'\f\'\16\'\u0206\13\'\3(\3(\3(\5(\u020b\n(\3)\3)\3*\3*\3*\3*\3*\3+\3"+
		"+\3,\3,\3,\3,\3,\3,\5,\u021c\n,\3-\3-\3-\3-\5-\u0222\n-\3-\3-\3.\5.\u0227"+
		"\n.\3.\3.\7.\u022b\n.\f.\16.\u022e\13.\3/\3/\3\60\3\60\3\61\3\61\3\61"+
		"\6\61\u0237\n\61\r\61\16\61\u0238\3\61\3\61\5\61\u023d\n\61\3\62\3\62"+
		"\3\62\3\62\3\62\3\62\3\62\3\63\5\63\u0247\n\63\3\63\3\63\5\63\u024b\n"+
		"\63\7\63\u024d\n\63\f\63\16\63\u0250\13\63\3\64\3\64\3\64\5\64\u0255\n"+
		"\64\3\64\5\64\u0258\n\64\3\65\3\65\3\65\3\65\3\65\7\65\u025f\n\65\f\65"+
		"\16\65\u0262\13\65\3\66\3\66\5\66\u0266\n\66\6\66\u0268\n\66\r\66\16\66"+
		"\u0269\3\67\6\67\u026d\n\67\r\67\16\67\u026e\38\38\38\58\u0274\n8\39\3"+
		"9\39\79\u0279\n9\f9\169\u027c\139\3:\6:\u027f\n:\r:\16:\u0280\3:\3:\3"+
		":\6:\u0286\n:\r:\16:\u0287\3:\5:\u028b\n:\5:\u028d\n:\3;\3;\3;\7;\u0292"+
		"\n;\f;\16;\u0295\13;\3<\3<\5<\u0299\n<\3=\3=\5=\u029d\n=\3=\3=\7=\u02a1"+
		"\n=\f=\16=\u02a4\13=\5=\u02a6\n=\3>\3>\3>\3>\3>\7>\u02ad\n>\f>\16>\u02b0"+
		"\13>\3>\3>\5>\u02b4\n>\3>\5>\u02b7\n>\3>\3>\3>\3>\5>\u02bd\n>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\5>\u02cd\n>\3>\3>\7>\u02d1\n>\f>\16"+
		">\u02d4\13>\5>\u02d6\n>\3>\3>\3>\5>\u02db\n>\3>\5>\u02de\n>\3>\3>\3>\3"+
		">\3>\5>\u02e5\n>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\5"+
		">\u02f8\n>\3>\3>\7>\u02fc\n>\f>\16>\u02ff\13>\7>\u0301\n>\f>\16>\u0304"+
		"\13>\3?\3?\3@\3@\3A\5A\u030b\nA\3A\3A\3A\5A\u0310\nA\3A\7A\u0313\nA\f"+
		"A\16A\u0316\13A\3B\3B\3B\3C\6C\u031c\nC\rC\16C\u031d\3D\3D\3D\3D\3D\3"+
		"D\5D\u0326\nD\3E\3E\3E\3E\3E\6E\u032d\nE\rE\16E\u032e\3E\3E\3E\3F\3F\3"+
		"F\3F\3F\3F\3F\3F\3F\3F\3F\3F\7F\u0340\nF\fF\16F\u0343\13F\5F\u0345\nF"+
		"\3F\3F\3F\3F\7F\u034b\nF\fF\16F\u034e\13F\5F\u0350\nF\7F\u0352\nF\fF\16"+
		"F\u0355\13F\3F\3F\5F\u0359\nF\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\5G\u0366"+
		"\nG\3H\3H\5H\u036a\nH\3H\3H\3I\6I\u036f\nI\rI\16I\u0370\3J\3J\5J\u0375"+
		"\nJ\3K\5K\u0378\nK\3K\3K\3L\3L\3L\3L\3L\3L\3L\5L\u0383\nL\3L\3L\3L\3L"+
		"\3L\3L\5L\u038b\nL\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M"+
		"\3M\3M\3M\5M\u03a1\nM\3N\3N\5N\u03a5\nN\5N\u03a7\nN\3N\3N\5N\u03ab\nN"+
		"\3N\3N\5N\u03af\nN\3O\6O\u03b2\nO\rO\16O\u03b3\3O\5O\u03b7\nO\3P\3P\3"+
		"P\7P\u03bc\nP\fP\16P\u03bf\13P\3Q\3Q\3Q\3Q\3Q\5Q\u03c6\nQ\3Q\3Q\5Q\u03ca"+
		"\nQ\3Q\3Q\3R\6R\u03cf\nR\rR\16R\u03d0\3R\3R\3S\3S\3S\5S\u03d8\nS\3T\6"+
		"T\u03db\nT\rT\16T\u03dc\3T\3T\5T\u03e1\nT\3T\3T\3U\6U\u03e6\nU\rU\16U"+
		"\u03e7\3U\4\u03d0\u03dc\3zV\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\2\32\3\2mn\4\2OOQQ\5\2..OOQQ\4\2"+
		"..99\7\2NNPPRRUUZ[\3\2RT\4\2NNPP\3\2LM\3\2HK\3\2kl\3\2`j\b\2\26\26!!)"+
		")//\62\62AA\n\2\6\b\31\31\36\36\"\"\'(,-\64\65;<\3\2\6\b\4\2\60\60\63"+
		"\63\6\2\32\32**\66\66::\5\2\n\13&&??\4\2\13\13\r\21\4\2BC__\3\2BC\4\2"+
		"RRYY\4\2\22\22\24\24\4\2\25\25\66\66\4\2\27\27\33\33\2\u0431\2\u00cb\3"+
		"\2\2\2\4\u00cd\3\2\2\2\6\u00d4\3\2\2\2\b\u00de\3\2\2\2\n\u00f1\3\2\2\2"+
		"\f\u0104\3\2\2\2\16\u010f\3\2\2\2\20\u011f\3\2\2\2\22\u012b\3\2\2\2\24"+
		"\u012d\3\2\2\2\26\u0135\3\2\2\2\30\u013d\3\2\2\2\32\u0145\3\2\2\2\34\u014d"+
		"\3\2\2\2\36\u0155\3\2\2\2 \u015d\3\2\2\2\"\u0165\3\2\2\2$\u016d\3\2\2"+
		"\2&\u0175\3\2\2\2(\u017d\3\2\2\2*\u018b\3\2\2\2,\u018d\3\2\2\2.\u018f"+
		"\3\2\2\2\60\u0197\3\2\2\2\62\u0199\3\2\2\2\64\u019d\3\2\2\2\66\u01a5\3"+
		"\2\2\28\u01a9\3\2\2\2:\u01b9\3\2\2\2<\u01c6\3\2\2\2>\u01c8\3\2\2\2@\u01cb"+
		"\3\2\2\2B\u01d7\3\2\2\2D\u01db\3\2\2\2F\u01e0\3\2\2\2H\u01ee\3\2\2\2J"+
		"\u01fd\3\2\2\2L\u01ff\3\2\2\2N\u0207\3\2\2\2P\u020c\3\2\2\2R\u020e\3\2"+
		"\2\2T\u0213\3\2\2\2V\u021b\3\2\2\2X\u021d\3\2\2\2Z\u0226\3\2\2\2\\\u022f"+
		"\3\2\2\2^\u0231\3\2\2\2`\u023c\3\2\2\2b\u023e\3\2\2\2d\u0246\3\2\2\2f"+
		"\u0251\3\2\2\2h\u0260\3\2\2\2j\u0267\3\2\2\2l\u026c\3\2\2\2n\u0270\3\2"+
		"\2\2p\u0275\3\2\2\2r\u028c\3\2\2\2t\u028e\3\2\2\2v\u0296\3\2\2\2x\u02a5"+
		"\3\2\2\2z\u02d5\3\2\2\2|\u0305\3\2\2\2~\u0307\3\2\2\2\u0080\u030a\3\2"+
		"\2\2\u0082\u0317\3\2\2\2\u0084\u031b\3\2\2\2\u0086\u0325\3\2\2\2\u0088"+
		"\u0327\3\2\2\2\u008a\u0358\3\2\2\2\u008c\u0365\3\2\2\2\u008e\u0367\3\2"+
		"\2\2\u0090\u036e\3\2\2\2\u0092\u0374\3\2\2\2\u0094\u0377\3\2\2\2\u0096"+
		"\u038a\3\2\2\2\u0098\u03a0\3\2\2\2\u009a\u03a6\3\2\2\2\u009c\u03b1\3\2"+
		"\2\2\u009e\u03b8\3\2\2\2\u00a0\u03c9\3\2\2\2\u00a2\u03ce\3\2\2\2\u00a4"+
		"\u03d7\3\2\2\2\u00a6\u03da\3\2\2\2\u00a8\u03e5\3\2\2\2\u00aa\u00cc\7p"+
		"\2\2\u00ab\u00cc\7q\2\2\u00ac\u00ae\7s\2\2\u00ad\u00ac\3\2\2\2\u00ae\u00af"+
		"\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00cc\3\2\2\2\u00b1"+
		"\u00b2\7B\2\2\u00b2\u00b3\5.\30\2\u00b3\u00b4\7C\2\2\u00b4\u00cc\3\2\2"+
		"\2\u00b5\u00cc\5\4\3\2\u00b6\u00b8\7\3\2\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8"+
		"\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00ba\7B\2\2\u00ba\u00bb\5\u008eH\2"+
		"\u00bb\u00bc\7C\2\2\u00bc\u00cc\3\2\2\2\u00bd\u00be\7\4\2\2\u00be\u00bf"+
		"\7B\2\2\u00bf\u00c0\5\16\b\2\u00c0\u00c1\7_\2\2\u00c1\u00c2\5v<\2\u00c2"+
		"\u00c3\7C\2\2\u00c3\u00cc\3\2\2\2\u00c4\u00c5\7\5\2\2\u00c5\u00c6\7B\2"+
		"\2\u00c6\u00c7\5v<\2\u00c7\u00c8\7_\2\2\u00c8\u00c9\5\16\b\2\u00c9\u00ca"+
		"\7C\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00aa\3\2\2\2\u00cb\u00ab\3\2\2\2\u00cb"+
		"\u00ad\3\2\2\2\u00cb\u00b1\3\2\2\2\u00cb\u00b5\3\2\2\2\u00cb\u00b7\3\2"+
		"\2\2\u00cb\u00bd\3\2\2\2\u00cb\u00c4\3\2\2\2\u00cc\3\3\2\2\2\u00cd\u00ce"+
		"\7=\2\2\u00ce\u00cf\7B\2\2\u00cf\u00d0\5*\26\2\u00d0\u00d1\7_\2\2\u00d1"+
		"\u00d2\5\6\4\2\u00d2\u00d3\7C\2\2\u00d3\5\3\2\2\2\u00d4\u00d9\5\b\5\2"+
		"\u00d5\u00d6\7_\2\2\u00d6\u00d8\5\b\5\2\u00d7\u00d5\3\2\2\2\u00d8\u00db"+
		"\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\7\3\2\2\2\u00db"+
		"\u00d9\3\2\2\2\u00dc\u00df\5v<\2\u00dd\u00df\7\34\2\2\u00de\u00dc\3\2"+
		"\2\2\u00de\u00dd\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\7]\2\2\u00e1"+
		"\u00e2\5*\26\2\u00e2\t\3\2\2\2\u00e3\u00f2\5\2\2\2\u00e4\u00e6\7\3\2\2"+
		"\u00e5\u00e4\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8"+
		"\7B\2\2\u00e8\u00e9\5v<\2\u00e9\u00ea\7C\2\2\u00ea\u00eb\7F\2\2\u00eb"+
		"\u00ed\5\u0080A\2\u00ec\u00ee\7_\2\2\u00ed\u00ec\3\2\2\2\u00ed\u00ee\3"+
		"\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f0\7G\2\2\u00f0\u00f2\3\2\2\2\u00f1"+
		"\u00e3\3\2\2\2\u00f1\u00e5\3\2\2\2\u00f2\u0101\3\2\2\2\u00f3\u00f4\7D"+
		"\2\2\u00f4\u00f5\5.\30\2\u00f5\u00f6\7E\2\2\u00f6\u0100\3\2\2\2\u00f7"+
		"\u00f9\7B\2\2\u00f8\u00fa\5\f\7\2\u00f9\u00f8\3\2\2\2\u00f9\u00fa\3\2"+
		"\2\2\u00fa\u00fb\3\2\2\2\u00fb\u0100\7C\2\2\u00fc\u00fd\t\2\2\2\u00fd"+
		"\u0100\7p\2\2\u00fe\u0100\t\3\2\2\u00ff\u00f3\3\2\2\2\u00ff\u00f7\3\2"+
		"\2\2\u00ff\u00fc\3\2\2\2\u00ff\u00fe\3\2\2\2\u0100\u0103\3\2\2\2\u0101"+
		"\u00ff\3\2\2\2\u0101\u0102\3\2\2\2\u0102\13\3\2\2\2\u0103\u0101\3\2\2"+
		"\2\u0104\u0109\5*\26\2\u0105\u0106\7_\2\2\u0106\u0108\5*\26\2\u0107\u0105"+
		"\3\2\2\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\r\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u010e\t\4\2\2\u010d\u010c\3\2\2\2"+
		"\u010e\u0111\3\2\2\2\u010f\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u011d"+
		"\3\2\2\2\u0111\u010f\3\2\2\2\u0112\u011e\5\n\6\2\u0113\u0114\5\20\t\2"+
		"\u0114\u0115\5\22\n\2\u0115\u011e\3\2\2\2\u0116\u0117\t\5\2\2\u0117\u0118"+
		"\7B\2\2\u0118\u0119\5v<\2\u0119\u011a\7C\2\2\u011a\u011e\3\2\2\2\u011b"+
		"\u011c\7W\2\2\u011c\u011e\7p\2\2\u011d\u0112\3\2\2\2\u011d\u0113\3\2\2"+
		"\2\u011d\u0116\3\2\2\2\u011d\u011b\3\2\2\2\u011e\17\3\2\2\2\u011f\u0120"+
		"\t\6\2\2\u0120\21\3\2\2\2\u0121\u0123\7\3\2\2\u0122\u0121\3\2\2\2\u0122"+
		"\u0123\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0125\7B\2\2\u0125\u0126\5v<"+
		"\2\u0126\u0127\7C\2\2\u0127\u0128\5\22\n\2\u0128\u012c\3\2\2\2\u0129\u012c"+
		"\5\16\b\2\u012a\u012c\7r\2\2\u012b\u0122\3\2\2\2\u012b\u0129\3\2\2\2\u012b"+
		"\u012a\3\2\2\2\u012c\23\3\2\2\2\u012d\u0132\5\22\n\2\u012e\u012f\t\7\2"+
		"\2\u012f\u0131\5\22\n\2\u0130\u012e\3\2\2\2\u0131\u0134\3\2\2\2\u0132"+
		"\u0130\3\2\2\2\u0132\u0133\3\2\2\2\u0133\25\3\2\2\2\u0134\u0132\3\2\2"+
		"\2\u0135\u013a\5\24\13\2\u0136\u0137\t\b\2\2\u0137\u0139\5\24\13\2\u0138"+
		"\u0136\3\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2"+
		"\2\2\u013b\27\3\2\2\2\u013c\u013a\3\2\2\2\u013d\u0142\5\26\f\2\u013e\u013f"+
		"\t\t\2\2\u013f\u0141\5\26\f\2\u0140\u013e\3\2\2\2\u0141\u0144\3\2\2\2"+
		"\u0142\u0140\3\2\2\2\u0142\u0143\3\2\2\2\u0143\31\3\2\2\2\u0144\u0142"+
		"\3\2\2\2\u0145\u014a\5\30\r\2\u0146\u0147\t\n\2\2\u0147\u0149\5\30\r\2"+
		"\u0148\u0146\3\2\2\2\u0149\u014c\3\2\2\2\u014a\u0148\3\2\2\2\u014a\u014b"+
		"\3\2\2\2\u014b\33\3\2\2\2\u014c\u014a\3\2\2\2\u014d\u0152\5\32\16\2\u014e"+
		"\u014f\t\13\2\2\u014f\u0151\5\32\16\2\u0150\u014e\3\2\2\2\u0151\u0154"+
		"\3\2\2\2\u0152\u0150\3\2\2\2\u0152\u0153\3\2\2\2\u0153\35\3\2\2\2\u0154"+
		"\u0152\3\2\2\2\u0155\u015a\5\34\17\2\u0156\u0157\7U\2\2\u0157\u0159\5"+
		"\34\17\2\u0158\u0156\3\2\2\2\u0159\u015c\3\2\2\2\u015a\u0158\3\2\2\2\u015a"+
		"\u015b\3\2\2\2\u015b\37\3\2\2\2\u015c\u015a\3\2\2\2\u015d\u0162\5\36\20"+
		"\2\u015e\u015f\7Y\2\2\u015f\u0161\5\36\20\2\u0160\u015e\3\2\2\2\u0161"+
		"\u0164\3\2\2\2\u0162\u0160\3\2\2\2\u0162\u0163\3\2\2\2\u0163!\3\2\2\2"+
		"\u0164\u0162\3\2\2\2\u0165\u016a\5 \21\2\u0166\u0167\7V\2\2\u0167\u0169"+
		"\5 \21\2\u0168\u0166\3\2\2\2\u0169\u016c\3\2\2\2\u016a\u0168\3\2\2\2\u016a"+
		"\u016b\3\2\2\2\u016b#\3\2\2\2\u016c\u016a\3\2\2\2\u016d\u0172\5\"\22\2"+
		"\u016e\u016f\7W\2\2\u016f\u0171\5\"\22\2\u0170\u016e\3\2\2\2\u0171\u0174"+
		"\3\2\2\2\u0172\u0170\3\2\2\2\u0172\u0173\3\2\2\2\u0173%\3\2\2\2\u0174"+
		"\u0172\3\2\2\2\u0175\u017a\5$\23\2\u0176\u0177\7X\2\2\u0177\u0179\5$\23"+
		"\2\u0178\u0176\3\2\2\2\u0179\u017c\3\2\2\2\u017a\u0178\3\2\2\2\u017a\u017b"+
		"\3\2\2\2\u017b\'\3\2\2\2\u017c\u017a\3\2\2\2\u017d\u0183\5&\24\2\u017e"+
		"\u017f\7\\\2\2\u017f\u0180\5.\30\2\u0180\u0181\7]\2\2\u0181\u0182\5(\25"+
		"\2\u0182\u0184\3\2\2\2\u0183\u017e\3\2\2\2\u0183\u0184\3\2\2\2\u0184)"+
		"\3\2\2\2\u0185\u018c\5(\25\2\u0186\u0187\5\16\b\2\u0187\u0188\5,\27\2"+
		"\u0188\u0189\5*\26\2\u0189\u018c\3\2\2\2\u018a\u018c\7r\2\2\u018b\u0185"+
		"\3\2\2\2\u018b\u0186\3\2\2\2\u018b\u018a\3\2\2\2\u018c+\3\2\2\2\u018d"+
		"\u018e\t\f\2\2\u018e-\3\2\2\2\u018f\u0194\5*\26\2\u0190\u0191\7_\2\2\u0191"+
		"\u0193\5*\26\2\u0192\u0190\3\2\2\2\u0193\u0196\3\2\2\2\u0194\u0192\3\2"+
		"\2\2\u0194\u0195\3\2\2\2\u0195/\3\2\2\2\u0196\u0194\3\2\2\2\u0197\u0198"+
		"\5(\25\2\u0198\61\3\2\2\2\u0199\u019a\5:\36\2\u019a\u019b\5\64\33\2\u019b"+
		"\u019c\7^\2\2\u019c\63\3\2\2\2\u019d\u01a2\5\66\34\2\u019e\u019f\7_\2"+
		"\2\u019f\u01a1\5\66\34\2\u01a0\u019e\3\2\2\2\u01a1\u01a4\3\2\2\2\u01a2"+
		"\u01a0\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\65\3\2\2\2\u01a4\u01a2\3\2\2"+
		"\2\u01a5\u01a6\5Z.\2\u01a6\u01a7\7`\2\2\u01a7\u01a8\5~@\2\u01a8\67\3\2"+
		"\2\2\u01a9\u01aa\t\r\2\2\u01aa9\3\2\2\2\u01ab\u01ba\t\16\2\2\u01ac\u01ad"+
		"\7\3\2\2\u01ad\u01ae\7B\2\2\u01ae\u01af\t\17\2\2\u01af\u01ba\7C\2\2\u01b0"+
		"\u01ba\5R*\2\u01b1\u01ba\5<\37\2\u01b2\u01ba\5J&\2\u01b3\u01ba\5|?\2\u01b4"+
		"\u01b5\7\t\2\2\u01b5\u01b6\7B\2\2\u01b6\u01b7\5\60\31\2\u01b7\u01b8\7"+
		"C\2\2\u01b8\u01ba\3\2\2\2\u01b9\u01ab\3\2\2\2\u01b9\u01ac\3\2\2\2\u01b9"+
		"\u01b0\3\2\2\2\u01b9\u01b1\3\2\2\2\u01b9\u01b2\3\2\2\2\u01b9\u01b3\3\2"+
		"\2\2\u01b9\u01b4\3\2\2\2\u01ba;\3\2\2\2\u01bb\u01bd\5> \2\u01bc\u01be"+
		"\7p\2\2\u01bd\u01bc\3\2\2\2\u01bd\u01be\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf"+
		"\u01c0\7F\2\2\u01c0\u01c1\5@!\2\u01c1\u01c2\7G\2\2\u01c2\u01c7\3\2\2\2"+
		"\u01c3\u01c4\5> \2\u01c4\u01c5\7p\2\2\u01c5\u01c7\3\2\2\2\u01c6\u01bb"+
		"\3\2\2\2\u01c6\u01c3\3\2\2\2\u01c7=\3\2\2\2\u01c8\u01c9\t\20\2\2\u01c9"+
		"?\3\2\2\2\u01ca\u01cc\5B\"\2\u01cb\u01ca\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd"+
		"\u01cb\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ceA\3\2\2\2\u01cf\u01d0\5D#\2\u01d0"+
		"\u01d1\5F$\2\u01d1\u01d2\7^\2\2\u01d2\u01d8\3\2\2\2\u01d3\u01d4\5D#\2"+
		"\u01d4\u01d5\7^\2\2\u01d5\u01d8\3\2\2\2\u01d6\u01d8\5\u0088E\2\u01d7\u01cf"+
		"\3\2\2\2\u01d7\u01d3\3\2\2\2\u01d7\u01d6\3\2\2\2\u01d8C\3\2\2\2\u01d9"+
		"\u01dc\5:\36\2\u01da\u01dc\5T+\2\u01db\u01d9\3\2\2\2\u01db\u01da\3\2\2"+
		"\2\u01dc\u01de\3\2\2\2\u01dd\u01df\5D#\2\u01de\u01dd\3\2\2\2\u01de\u01df"+
		"\3\2\2\2\u01dfE\3\2\2\2\u01e0\u01e5\5H%\2\u01e1\u01e2\7_\2\2\u01e2\u01e4"+
		"\5H%\2\u01e3\u01e1\3\2\2\2\u01e4\u01e7\3\2\2\2\u01e5\u01e3\3\2\2\2\u01e5"+
		"\u01e6\3\2\2\2\u01e6G\3\2\2\2\u01e7\u01e5\3\2\2\2\u01e8\u01ef\5Z.\2\u01e9"+
		"\u01eb\5Z.\2\u01ea\u01e9\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb\u01ec\3\2\2"+
		"\2\u01ec\u01ed\7]\2\2\u01ed\u01ef\5\60\31\2\u01ee\u01e8\3\2\2\2\u01ee"+
		"\u01ea\3\2\2\2\u01efI\3\2\2\2\u01f0\u01f2\7 \2\2\u01f1\u01f3\7p\2\2\u01f2"+
		"\u01f1\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\7F"+
		"\2\2\u01f5\u01f7\5L\'\2\u01f6\u01f8\7_\2\2\u01f7\u01f6\3\2\2\2\u01f7\u01f8"+
		"\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fa\7G\2\2\u01fa\u01fe\3\2\2\2\u01fb"+
		"\u01fc\7 \2\2\u01fc\u01fe\7p\2\2\u01fd\u01f0\3\2\2\2\u01fd\u01fb\3\2\2"+
		"\2\u01feK\3\2\2\2\u01ff\u0204\5N(\2\u0200\u0201\7_\2\2\u0201\u0203\5N"+
		"(\2\u0202\u0200\3\2\2\2\u0203\u0206\3\2\2\2\u0204\u0202\3\2\2\2\u0204"+
		"\u0205\3\2\2\2\u0205M\3\2\2\2\u0206\u0204\3\2\2\2\u0207\u020a\5P)\2\u0208"+
		"\u0209\7`\2\2\u0209\u020b\5\60\31\2\u020a\u0208\3\2\2\2\u020a\u020b\3"+
		"\2\2\2\u020bO\3\2\2\2\u020c\u020d\7p\2\2\u020dQ\3\2\2\2\u020e\u020f\7"+
		":\2\2\u020f\u0210\7B\2\2\u0210\u0211\5v<\2\u0211\u0212\7C\2\2\u0212S\3"+
		"\2\2\2\u0213\u0214\t\21\2\2\u0214U\3\2\2\2\u0215\u021c\t\22\2\2\u0216"+
		"\u021c\5b\62\2\u0217\u0218\7\f\2\2\u0218\u0219\7B\2\2\u0219\u021a\7p\2"+
		"\2\u021a\u021c\7C\2\2\u021b\u0215\3\2\2\2\u021b\u0216\3\2\2\2\u021b\u0217"+
		"\3\2\2\2\u021cW\3\2\2\2\u021d\u021e\78\2\2\u021e\u0221\7B\2\2\u021f\u0222"+
		"\5v<\2\u0220\u0222\5\60\31\2\u0221\u021f\3\2\2\2\u0221\u0220\3\2\2\2\u0222"+
		"\u0223\3\2\2\2\u0223\u0224\7C\2\2\u0224Y\3\2\2\2\u0225\u0227\5j\66\2\u0226"+
		"\u0225\3\2\2\2\u0226\u0227\3\2\2\2\u0227\u0228\3\2\2\2\u0228\u022c\5\\"+
		"/\2\u0229\u022b\5`\61\2\u022a\u0229\3\2\2\2\u022b\u022e\3\2\2\2\u022c"+
		"\u022a\3\2\2\2\u022c\u022d\3\2\2\2\u022d[\3\2\2\2\u022e\u022c\3\2\2\2"+
		"\u022f\u0230\7p\2\2\u0230]\3\2\2\2\u0231\u0232\t\23\2\2\u0232_\3\2\2\2"+
		"\u0233\u0234\7\22\2\2\u0234\u0236\7B\2\2\u0235\u0237\7s\2\2\u0236\u0235"+
		"\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u0236\3\2\2\2\u0238\u0239\3\2\2\2\u0239"+
		"\u023a\3\2\2\2\u023a\u023d\7C\2\2\u023b\u023d\5b\62\2\u023c\u0233\3\2"+
		"\2\2\u023c\u023b\3\2\2\2\u023da\3\2\2\2\u023e\u023f\7\23\2\2\u023f\u0240"+
		"\7B\2\2\u0240\u0241\7B\2\2\u0241\u0242\5d\63\2\u0242\u0243\7C\2\2\u0243"+
		"\u0244\7C\2\2\u0244c\3\2\2\2\u0245\u0247\5f\64\2\u0246\u0245\3\2\2\2\u0246"+
		"\u0247\3\2\2\2\u0247\u024e\3\2\2\2\u0248\u024a\7_\2\2\u0249\u024b\5f\64"+
		"\2\u024a\u0249\3\2\2\2\u024a\u024b\3\2\2\2\u024b\u024d\3\2\2\2\u024c\u0248"+
		"\3\2\2\2\u024d\u0250\3\2\2\2\u024e\u024c\3\2\2\2\u024e\u024f\3\2\2\2\u024f"+
		"e\3\2\2\2\u0250\u024e\3\2\2\2\u0251\u0257\n\24\2\2\u0252\u0254\7B\2\2"+
		"\u0253\u0255\5\f\7\2\u0254\u0253\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0256"+
		"\3\2\2\2\u0256\u0258\7C\2\2\u0257\u0252\3\2\2\2\u0257\u0258\3\2\2\2\u0258"+
		"g\3\2\2\2\u0259\u025f\n\25\2\2\u025a\u025b\7B\2\2\u025b\u025c\5h\65\2"+
		"\u025c\u025d\7C\2\2\u025d\u025f\3\2\2\2\u025e\u0259\3\2\2\2\u025e\u025a"+
		"\3\2\2\2\u025f\u0262\3\2\2\2\u0260\u025e\3\2\2\2\u0260\u0261\3\2\2\2\u0261"+
		"i\3\2\2\2\u0262\u0260\3\2\2\2\u0263\u0265\t\26\2\2\u0264\u0266\5l\67\2"+
		"\u0265\u0264\3\2\2\2\u0265\u0266\3\2\2\2\u0266\u0268\3\2\2\2\u0267\u0263"+
		"\3\2\2\2\u0268\u0269\3\2\2\2\u0269\u0267\3\2\2\2\u0269\u026a\3\2\2\2\u026a"+
		"k\3\2\2\2\u026b\u026d\5T+\2\u026c\u026b\3\2\2\2\u026d\u026e\3\2\2\2\u026e"+
		"\u026c\3\2\2\2\u026e\u026f\3\2\2\2\u026fm\3\2\2\2\u0270\u0273\5p9\2\u0271"+
		"\u0272\7_\2\2\u0272\u0274\7o\2\2\u0273\u0271\3\2\2\2\u0273\u0274\3\2\2"+
		"\2\u0274o\3\2\2\2\u0275\u027a\5r:\2\u0276\u0277\7_\2\2\u0277\u0279\5r"+
		":\2\u0278\u0276\3\2\2\2\u0279\u027c\3\2\2\2\u027a\u0278\3\2\2\2\u027a"+
		"\u027b\3\2\2\2\u027bq\3\2\2\2\u027c\u027a\3\2\2\2\u027d\u027f\5:\36\2"+
		"\u027e\u027d\3\2\2\2\u027f\u0280\3\2\2\2\u0280\u027e\3\2\2\2\u0280\u0281"+
		"\3\2\2\2\u0281\u0282\3\2\2\2\u0282\u0283\5Z.\2\u0283\u028d\3\2\2\2\u0284"+
		"\u0286\5:\36\2\u0285\u0284\3\2\2\2\u0286\u0287\3\2\2\2\u0287\u0285\3\2"+
		"\2\2\u0287\u0288\3\2\2\2\u0288\u028a\3\2\2\2\u0289\u028b\5x=\2\u028a\u0289"+
		"\3\2\2\2\u028a\u028b\3\2\2\2\u028b\u028d\3\2\2\2\u028c\u027e\3\2\2\2\u028c"+
		"\u0285\3\2\2\2\u028ds\3\2\2\2\u028e\u0293\7p\2\2\u028f\u0290\7_\2\2\u0290"+
		"\u0292\7p\2\2\u0291\u028f\3\2\2\2\u0292\u0295\3\2\2\2\u0293\u0291\3\2"+
		"\2\2\u0293\u0294\3\2\2\2\u0294u\3\2\2\2\u0295\u0293\3\2\2\2\u0296\u0298"+
		"\5D#\2\u0297\u0299\5x=\2\u0298\u0297\3\2\2\2\u0298\u0299\3\2\2\2\u0299"+
		"w\3\2\2\2\u029a\u02a6\5j\66\2\u029b\u029d\5j\66\2\u029c\u029b\3\2\2\2"+
		"\u029c\u029d\3\2\2\2\u029d\u029e\3\2\2\2\u029e\u02a2\5z>\2\u029f\u02a1"+
		"\5`\61\2\u02a0\u029f\3\2\2\2\u02a1\u02a4\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a2"+
		"\u02a3\3\2\2\2\u02a3\u02a6\3\2\2\2\u02a4\u02a2\3\2\2\2\u02a5\u029a\3\2"+
		"\2\2\u02a5\u029c\3\2\2\2\u02a6y\3\2\2\2\u02a7\u02a8\b>\1\2\u02a8\u02a9"+
		"\7B\2\2\u02a9\u02aa\5x=\2\u02aa\u02ae\7C\2\2\u02ab\u02ad\5`\61\2\u02ac"+
		"\u02ab\3\2\2\2\u02ad\u02b0\3\2\2\2\u02ae\u02ac\3\2\2\2\u02ae\u02af\3\2"+
		"\2\2\u02af\u02d6\3\2\2\2\u02b0\u02ae\3\2\2\2\u02b1\u02b3\7D\2\2\u02b2"+
		"\u02b4\5l\67\2\u02b3\u02b2\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02b6\3\2"+
		"\2\2\u02b5\u02b7\5*\26\2\u02b6\u02b5\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7"+
		"\u02b8\3\2\2\2\u02b8\u02d6\7E\2\2\u02b9\u02ba\7D\2\2\u02ba\u02bc\7/\2"+
		"\2\u02bb\u02bd\5l\67\2\u02bc\u02bb\3\2\2\2\u02bc\u02bd\3\2\2\2\u02bd\u02be"+
		"\3\2\2\2\u02be\u02bf\5*\26\2\u02bf\u02c0\7E\2\2\u02c0\u02d6\3\2\2\2\u02c1"+
		"\u02c2\7D\2\2\u02c2\u02c3\5l\67\2\u02c3\u02c4\7/\2\2\u02c4\u02c5\5*\26"+
		"\2\u02c5\u02c6\7E\2\2\u02c6\u02d6\3\2\2\2\u02c7\u02c8\7D\2\2\u02c8\u02c9"+
		"\7R\2\2\u02c9\u02d6\7E\2\2\u02ca\u02cc\7B\2\2\u02cb\u02cd\5n8\2\u02cc"+
		"\u02cb\3\2\2\2\u02cc\u02cd\3\2\2\2\u02cd\u02ce\3\2\2\2\u02ce\u02d2\7C"+
		"\2\2\u02cf\u02d1\5`\61\2\u02d0\u02cf\3\2\2\2\u02d1\u02d4\3\2\2\2\u02d2"+
		"\u02d0\3\2\2\2\u02d2\u02d3\3\2\2\2\u02d3\u02d6\3\2\2\2\u02d4\u02d2\3\2"+
		"\2\2\u02d5\u02a7\3\2\2\2\u02d5\u02b1\3\2\2\2\u02d5\u02b9\3\2\2\2\u02d5"+
		"\u02c1\3\2\2\2\u02d5\u02c7\3\2\2\2\u02d5\u02ca\3\2\2\2\u02d6\u0302\3\2"+
		"\2\2\u02d7\u02d8\f\7\2\2\u02d8\u02da\7D\2\2\u02d9\u02db\5l\67\2\u02da"+
		"\u02d9\3\2\2\2\u02da\u02db\3\2\2\2\u02db\u02dd\3\2\2\2\u02dc\u02de\5*"+
		"\26\2\u02dd\u02dc\3\2\2\2\u02dd\u02de\3\2\2\2\u02de\u02df\3\2\2\2\u02df"+
		"\u0301\7E\2\2\u02e0\u02e1\f\6\2\2\u02e1\u02e2\7D\2\2\u02e2\u02e4\7/\2"+
		"\2\u02e3\u02e5\5l\67\2\u02e4\u02e3\3\2\2\2\u02e4\u02e5\3\2\2\2\u02e5\u02e6"+
		"\3\2\2\2\u02e6\u02e7\5*\26\2\u02e7\u02e8\7E\2\2\u02e8\u0301\3\2\2\2\u02e9"+
		"\u02ea\f\5\2\2\u02ea\u02eb\7D\2\2\u02eb\u02ec\5l\67\2\u02ec\u02ed\7/\2"+
		"\2\u02ed\u02ee\5*\26\2\u02ee\u02ef\7E\2\2\u02ef\u0301\3\2\2\2\u02f0\u02f1"+
		"\f\4\2\2\u02f1\u02f2\7D\2\2\u02f2\u02f3\7R\2\2\u02f3\u0301\7E\2\2\u02f4"+
		"\u02f5\f\3\2\2\u02f5\u02f7\7B\2\2\u02f6\u02f8\5n8\2\u02f7\u02f6\3\2\2"+
		"\2\u02f7\u02f8\3\2\2\2\u02f8\u02f9\3\2\2\2\u02f9\u02fd\7C\2\2\u02fa\u02fc"+
		"\5`\61\2\u02fb\u02fa\3\2\2\2\u02fc\u02ff\3\2\2\2\u02fd\u02fb\3\2\2\2\u02fd"+
		"\u02fe\3\2\2\2\u02fe\u0301\3\2\2\2\u02ff\u02fd\3\2\2\2\u0300\u02d7\3\2"+
		"\2\2\u0300\u02e0\3\2\2\2\u0300\u02e9\3\2\2\2\u0300\u02f0\3\2\2\2\u0300"+
		"\u02f4\3\2\2\2\u0301\u0304\3\2\2\2\u0302\u0300\3\2\2\2\u0302\u0303\3\2"+
		"\2\2\u0303{\3\2\2\2\u0304\u0302\3\2\2\2\u0305\u0306\7p\2\2\u0306}\3\2"+
		"\2\2\u0307\u0308\5*\26\2\u0308\177\3\2\2\2\u0309\u030b\5\u0082B\2\u030a"+
		"\u0309\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u030c\3\2\2\2\u030c\u0314\5~"+
		"@\2\u030d\u030f\7_\2\2\u030e\u0310\5\u0082B\2\u030f\u030e\3\2\2\2\u030f"+
		"\u0310\3\2\2\2\u0310\u0311\3\2\2\2\u0311\u0313\5~@\2\u0312\u030d\3\2\2"+
		"\2\u0313\u0316\3\2\2\2\u0314\u0312\3\2\2\2\u0314\u0315\3\2\2\2\u0315\u0081"+
		"\3\2\2\2\u0316\u0314\3\2\2\2\u0317\u0318\5\u0084C\2\u0318\u0319\7`\2\2"+
		"\u0319\u0083\3\2\2\2\u031a\u031c\5\u0086D\2\u031b\u031a\3\2\2\2\u031c"+
		"\u031d\3\2\2\2\u031d\u031b\3\2\2\2\u031d\u031e\3\2\2\2\u031e\u0085\3\2"+
		"\2\2\u031f\u0320\7D\2\2\u0320\u0321\5\60\31\2\u0321\u0322\7E\2\2\u0322"+
		"\u0326\3\2\2\2\u0323\u0324\7n\2\2\u0324\u0326\7p\2\2\u0325\u031f\3\2\2"+
		"\2\u0325\u0323\3\2\2\2\u0326\u0087\3\2\2\2\u0327\u0328\7@\2\2\u0328\u0329"+
		"\7B\2\2\u0329\u032a\5\60\31\2\u032a\u032c\7_\2\2\u032b\u032d\7s\2\2\u032c"+
		"\u032b\3\2\2\2\u032d\u032e\3\2\2\2\u032e\u032c\3\2\2\2\u032e\u032f\3\2"+
		"\2\2\u032f\u0330\3\2\2\2\u0330\u0331\7C\2\2\u0331\u0332\7^\2\2\u0332\u0089"+
		"\3\2\2\2\u0333\u0359\5\u008cG\2\u0334\u0359\5\u008eH\2\u0335\u0359\5\u0094"+
		"K\2\u0336\u0359\5\u0096L\2\u0337\u0359\5\u0098M\2\u0338\u0359\5\u00a0"+
		"Q\2\u0339\u033a\t\27\2\2\u033a\u033b\t\30\2\2\u033b\u0344\7B\2\2\u033c"+
		"\u0341\5&\24\2\u033d\u033e\7_\2\2\u033e\u0340\5&\24\2\u033f\u033d\3\2"+
		"\2\2\u0340\u0343\3\2\2\2\u0341\u033f\3\2\2\2\u0341\u0342\3\2\2\2\u0342"+
		"\u0345\3\2\2\2\u0343\u0341\3\2\2\2\u0344\u033c\3\2\2\2\u0344\u0345\3\2"+
		"\2\2\u0345\u0353\3\2\2\2\u0346\u034f\7]\2\2\u0347\u034c\5&\24\2\u0348"+
		"\u0349\7_\2\2\u0349\u034b\5&\24\2\u034a\u0348\3\2\2\2\u034b\u034e\3\2"+
		"\2\2\u034c\u034a\3\2\2\2\u034c\u034d\3\2\2\2\u034d\u0350\3\2\2\2\u034e"+
		"\u034c\3\2\2\2\u034f\u0347\3\2\2\2\u034f\u0350\3\2\2\2\u0350\u0352\3\2"+
		"\2\2\u0351\u0346\3\2\2\2\u0352\u0355\3\2\2\2\u0353\u0351\3\2\2\2\u0353"+
		"\u0354\3\2\2\2\u0354\u0356\3\2\2\2\u0355\u0353\3\2\2\2\u0356\u0357\7C"+
		"\2\2\u0357\u0359\7^\2\2\u0358\u0333\3\2\2\2\u0358\u0334\3\2\2\2\u0358"+
		"\u0335\3\2\2\2\u0358\u0336\3\2\2\2\u0358\u0337\3\2\2\2\u0358\u0338\3\2"+
		"\2\2\u0358\u0339\3\2\2\2\u0359\u008b\3\2\2\2\u035a\u035b\7p\2\2\u035b"+
		"\u035c\7]\2\2\u035c\u0366\5\u008aF\2\u035d\u035e\7\30\2\2\u035e\u035f"+
		"\5\60\31\2\u035f\u0360\7]\2\2\u0360\u0361\5\u008aF\2\u0361\u0366\3\2\2"+
		"\2\u0362\u0363\7\34\2\2\u0363\u0364\7]\2\2\u0364\u0366\5\u008aF\2\u0365"+
		"\u035a\3\2\2\2\u0365\u035d\3\2\2\2\u0365\u0362\3\2\2\2\u0366\u008d\3\2"+
		"\2\2\u0367\u0369\7F\2\2\u0368\u036a\5\u0090I\2\u0369\u0368\3\2\2\2\u0369"+
		"\u036a\3\2\2\2\u036a\u036b\3\2\2\2\u036b\u036c\7G\2\2\u036c\u008f\3\2"+
		"\2\2\u036d\u036f\5\u0092J\2\u036e\u036d\3\2\2\2\u036f\u0370\3\2\2\2\u0370"+
		"\u036e\3\2\2\2\u0370\u0371\3\2\2\2\u0371\u0091\3\2\2\2\u0372\u0375\5\u008a"+
		"F\2\u0373\u0375\5\62\32\2\u0374\u0372\3\2\2\2\u0374\u0373\3\2\2\2\u0375"+
		"\u0093\3\2\2\2\u0376\u0378\5.\30\2\u0377\u0376\3\2\2\2\u0377\u0378\3\2"+
		"\2\2\u0378\u0379\3\2\2\2\u0379\u037a\7^\2\2\u037a\u0095\3\2\2\2\u037b"+
		"\u037c\7%\2\2\u037c\u037d\7B\2\2\u037d\u037e\5.\30\2\u037e\u037f\7C\2"+
		"\2\u037f\u0382\5\u008aF\2\u0380\u0381\7\37\2\2\u0381\u0383\5\u008aF\2"+
		"\u0382\u0380\3\2\2\2\u0382\u0383\3\2\2\2\u0383\u038b\3\2\2\2\u0384\u0385"+
		"\7\61\2\2\u0385\u0386\7B\2\2\u0386\u0387\5.\30\2\u0387\u0388\7C\2\2\u0388"+
		"\u0389\5\u008aF\2\u0389\u038b\3\2\2\2\u038a\u037b\3\2\2\2\u038a\u0384"+
		"\3\2\2\2\u038b\u0097\3\2\2\2\u038c\u038d\7\67\2\2\u038d\u038e\7B\2\2\u038e"+
		"\u038f\5.\30\2\u038f\u0390\7C\2\2\u0390\u0391\5\u008aF\2\u0391\u03a1\3"+
		"\2\2\2\u0392\u0393\7\35\2\2\u0393\u0394\5\u008aF\2\u0394\u0395\7\67\2"+
		"\2\u0395\u0396\7B\2\2\u0396\u0397\5.\30\2\u0397\u0398\7C\2\2\u0398\u0399"+
		"\7^\2\2\u0399\u03a1\3\2\2\2\u039a\u039b\7#\2\2\u039b\u039c\7B\2\2\u039c"+
		"\u039d\5\u009aN\2\u039d\u039e\7C\2\2\u039e\u039f\5\u008aF\2\u039f\u03a1"+
		"\3\2\2\2\u03a0\u038c\3\2\2\2\u03a0\u0392\3\2\2\2\u03a0\u039a\3\2\2\2\u03a1"+
		"\u0099\3\2\2\2\u03a2\u03a7\5\u009cO\2\u03a3\u03a5\5.\30\2\u03a4\u03a3"+
		"\3\2\2\2\u03a4\u03a5\3\2\2\2\u03a5\u03a7\3\2\2\2\u03a6\u03a2\3\2\2\2\u03a6"+
		"\u03a4\3\2\2\2\u03a7\u03a8\3\2\2\2\u03a8\u03aa\7^\2\2\u03a9\u03ab\5\u009e"+
		"P\2\u03aa\u03a9\3\2\2\2\u03aa\u03ab\3\2\2\2\u03ab\u03ac\3\2\2\2\u03ac"+
		"\u03ae\7^\2\2\u03ad\u03af\5\u009eP\2\u03ae\u03ad\3\2\2\2\u03ae\u03af\3"+
		"\2\2\2\u03af\u009b\3\2\2\2\u03b0\u03b2\5:\36\2\u03b1\u03b0\3\2\2\2\u03b2"+
		"\u03b3\3\2\2\2\u03b3\u03b1\3\2\2\2\u03b3\u03b4\3\2\2\2\u03b4\u03b6\3\2"+
		"\2\2\u03b5\u03b7\5\64\33\2\u03b6\u03b5\3\2\2\2\u03b6\u03b7\3\2\2\2\u03b7"+
		"\u009d\3\2\2\2\u03b8\u03bd\5*\26\2\u03b9\u03ba\7_\2\2\u03ba\u03bc\5*\26"+
		"\2\u03bb\u03b9\3\2\2\2\u03bc\u03bf\3\2\2\2\u03bd\u03bb\3\2\2\2\u03bd\u03be"+
		"\3\2\2\2\u03be\u009f\3\2\2\2\u03bf\u03bd\3\2\2\2\u03c0\u03c1\7$\2\2\u03c1"+
		"\u03ca\7p\2\2\u03c2\u03ca\t\31\2\2\u03c3\u03c5\7+\2\2\u03c4\u03c6\5.\30"+
		"\2\u03c5\u03c4\3\2\2\2\u03c5\u03c6\3\2\2\2\u03c6\u03ca\3\2\2\2\u03c7\u03c8"+
		"\7$\2\2\u03c8\u03ca\5\16\b\2\u03c9\u03c0\3\2\2\2\u03c9\u03c2\3\2\2\2\u03c9"+
		"\u03c3\3\2\2\2\u03c9\u03c7\3\2\2\2\u03ca\u03cb\3\2\2\2\u03cb\u03cc\7^"+
		"\2\2\u03cc\u00a1\3\2\2\2\u03cd\u03cf\5\u00a4S\2\u03ce\u03cd\3\2\2\2\u03cf"+
		"\u03d0\3\2\2\2\u03d0\u03d1\3\2\2\2\u03d0\u03ce\3\2\2\2\u03d1\u03d2\3\2"+
		"\2\2\u03d2\u03d3\7\2\2\3\u03d3\u00a3\3\2\2\2\u03d4\u03d8\5\u00a6T\2\u03d5"+
		"\u03d8\5\62\32\2\u03d6\u03d8\7^\2\2\u03d7\u03d4\3\2\2\2\u03d7\u03d5\3"+
		"\2\2\2\u03d7\u03d6\3\2\2\2\u03d8\u00a5\3\2\2\2\u03d9\u03db\5:\36\2\u03da"+
		"\u03d9\3\2\2\2\u03db\u03dc\3\2\2\2\u03dc\u03dd\3\2\2\2\u03dc\u03da\3\2"+
		"\2\2\u03dd\u03de\3\2\2\2\u03de\u03e0\5Z.\2\u03df\u03e1\5\u00a8U\2\u03e0"+
		"\u03df\3\2\2\2\u03e0\u03e1\3\2\2\2\u03e1\u03e2\3\2\2\2\u03e2\u03e3\5\u008e"+
		"H\2\u03e3\u00a7\3\2\2\2\u03e4\u03e6\5\62\32\2\u03e5\u03e4\3\2\2\2\u03e6"+
		"\u03e7\3\2\2\2\u03e7\u03e5\3\2\2\2\u03e7\u03e8\3\2\2\2\u03e8\u00a9\3\2"+
		"\2\2z\u00af\u00b7\u00cb\u00d9\u00de\u00e5\u00ed\u00f1\u00f9\u00ff\u0101"+
		"\u0109\u010f\u011d\u0122\u012b\u0132\u013a\u0142\u014a\u0152\u015a\u0162"+
		"\u016a\u0172\u017a\u0183\u018b\u0194\u01a2\u01b9\u01bd\u01c6\u01cd\u01d7"+
		"\u01db\u01de\u01e5\u01ea\u01ee\u01f2\u01f7\u01fd\u0204\u020a\u021b\u0221"+
		"\u0226\u022c\u0238\u023c\u0246\u024a\u024e\u0254\u0257\u025e\u0260\u0265"+
		"\u0269\u026e\u0273\u027a\u0280\u0287\u028a\u028c\u0293\u0298\u029c\u02a2"+
		"\u02a5\u02ae\u02b3\u02b6\u02bc\u02cc\u02d2\u02d5\u02da\u02dd\u02e4\u02f7"+
		"\u02fd\u0300\u0302\u030a\u030f\u0314\u031d\u0325\u032e\u0341\u0344\u034c"+
		"\u034f\u0353\u0358\u0365\u0369\u0370\u0374\u0377\u0382\u038a\u03a0\u03a4"+
		"\u03a6\u03aa\u03ae\u03b3\u03b6\u03bd\u03c5\u03c9\u03d0\u03d7\u03dc\u03e0"+
		"\u03e7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}