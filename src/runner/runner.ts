import { interprete } from '../interpreter/interpreter'
import { AstNode } from '../parser/cslang-ast-types'
import { parse } from '../parser/parser'

export function cslangRunner(code: string) {
  const program: AstNode = parse(code)
  interprete(program)
}
