import { NumericLiteral, StraySemicolon } from '../parser/ast-types'
import Decimal from '../utils/decimal'
import { iBreak, iCase, iContinueMark, iPop, iSwitchDefault } from './interpreter-types'

export const DECIMAL_ZERO = new Decimal(0)
export const DECIMAL_ONE = new Decimal(1)

export const POP_INSTRUCTION: iPop = {
  type: 'pop_i'
}

export const UNDEFINED_LITERAL: NumericLiteral = {
  type: 'NumericLiteral',
  typeSpecifier: 'void',
  value: new Decimal(0)
}

export const ZERO: NumericLiteral = {
  type: 'NumericLiteral',
  typeSpecifier: 'int',
  value: new Decimal(0)
}

export const ONE: NumericLiteral = {
  type: 'NumericLiteral',
  typeSpecifier: 'int',
  value: new Decimal(1)
}

export const INFINITY: NumericLiteral = {
  type: 'NumericLiteral',
  typeSpecifier: 'float',
  value: new Decimal(Infinity)
}

export const BREAK_INSTRUCTION: iBreak = { type: 'break_i' }

export const CASE_INSTRUCTION: iCase = { type: 'case_i' }

export const SWITCH_DEFAULT_INSTRUCTION: iSwitchDefault = { type: 'switch_default_i' }

export const STRAY_SEMICOLON: StraySemicolon = { type: 'StraySemicolon' }

export const CONTINUE_MARK_INSTRUCTION: iContinueMark = { type: 'continue_mark_i' }
