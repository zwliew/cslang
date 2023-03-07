import { execute } from '../interpreter/interpreter'
import { defaultAnalysisState, traverse } from '../parser/analyser'
import { AstNode } from '../parser/ast-types'
import { parse } from '../parser/parser'

export function cslangRunner(code: string) {
  const program: AstNode = parse(code)
  // console.dir(program, { depth: null })
  traverse(program, defaultAnalysisState)
  return execute(program)
}
