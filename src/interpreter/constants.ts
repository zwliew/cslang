import { Literal } from '../parser/ast-types'
import { iBreak, iCase, iPop, iSwitchDefault } from './interpreter-types'

export const POP_INSTRUCTION: iPop = {
  type: 'pop_i'
}

export const UNDEFINED_LITERAL: Literal = {
  type: 'Literal',
  typeSpecifier: 'void',
  value: 0
}

export const BREAK_INSTRUCTION: iBreak = { type: 'break_i' }

export const CASE_INSTRUCTION: iCase = { type: 'case_i' }

export const SWITCH_DEFAULT_INSTRUCTION: iSwitchDefault = { type: 'switch_default_i' }
