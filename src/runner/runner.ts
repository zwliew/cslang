import { execute } from '../interpreter/interpreter'
import { AstNode } from '../parser/ast-types'
import { parse } from '../parser/parser'

export function cslangRunner(code: string) {
  const program: AstNode = parse(code)
  console.log(JSON.stringify(program))
  return execute(program)
}
