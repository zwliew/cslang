import { execute } from '../interpreter/interpreter'
import { analyseProgram } from '../parser/analyser'
import { AstNode } from '../parser/ast-types'
import { parse } from '../parser/parser'

export function cslangRunner(code: string) {
  let program: AstNode = parse(code)
  // console.dir(program, { depth: null })
  analyseProgram(program)
  return execute(program)
}
