import Decimal from 'decimal.js'

import { Literal, StraySemicolon } from '../parser/ast-types'
import { iBreak, iCase, iPop, iSwitchDefault } from './interpreter-types'

export const DECIMAL_ZERO = new Decimal(0)
export const DECIMAL_ONE = new Decimal(1)

export const POP_INSTRUCTION: iPop = {
  type: 'pop_i'
}

export const UNDEFINED_LITERAL: Literal = {
  type: 'Literal',
  typeSpecifier: 'void',
  value: new Decimal(0)
}

export const ZERO: Literal = {
  type: 'Literal',
  typeSpecifier: 'int',
  value: new Decimal(0)
}

export const ONE: Literal = {
  type: 'Literal',
  typeSpecifier: 'int',
  value: new Decimal(1)
}

export const INFINITY: Literal = {
  type: 'Literal',
  typeSpecifier: 'float',
  value: new Decimal(Infinity)
}

export const BREAK_INSTRUCTION: iBreak = { type: 'break_i' }

export const CASE_INSTRUCTION: iCase = { type: 'case_i' }

export const SWITCH_DEFAULT_INSTRUCTION: iSwitchDefault = { type: 'switch_default_i' }

export const STRAY_SEMICOLON: StraySemicolon = { type: 'StraySemicolon' }
