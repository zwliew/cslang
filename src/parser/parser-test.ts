import { CharStreams, CommonTokenStream } from 'antlr4ts'

import { CLexer } from '../lang/CLexer'
import { CParser } from '../lang/CParser'
import { CGenerator } from './c-parser'
import { Program } from './cslang-ast-types'
import programs from './cslang-programs'

function generateAstFromParseTree(source: string): Program {
  const inputStream = CharStreams.fromString(source)
  const lexer = new CLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new CParser(tokenStream)
  parser.buildParseTree = true

  const tree = parser.compilationUnit()
  const generator = new CGenerator()
  // Template REPL requires body to be iterable
  return {
    type: 'Program',
    sourceType: 'script',
    body: [tree.accept(generator)]
  }
}

let programString = programs.singleDeclaration
if (process.argv.length > 2) {
  if (!programs[process.argv[2]]) {
    console.log('Invalid program name provided. Defaulting to singleDeclaration')
  } else {
    programString = programs[process.argv[2]]
  }
}
// Extract the body from the program
const ast = generateAstFromParseTree(programString)?.body[0]
console.log('AST:')
console.dir(ast, { depth: null })
