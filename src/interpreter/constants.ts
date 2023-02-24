import { Literal } from '../parser/ast-types'
import { iPop } from './interpreter-types'

export const POP_INSTRUCTION: iPop = {
  type: 'pop_i'
}

export const UNDEFINED_LITERAL: Literal = {
  type: 'Literal',
  value: undefined
}
