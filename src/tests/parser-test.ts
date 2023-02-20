// Runs the parser on an input. Usage: `node parser-test.ts programName` for pre written programs in test-programs.ts
// `node parser-test.ts file/string fileName/stringName` to read strings from a file or from the command line respectively

import { CharStreams, CommonTokenStream } from 'antlr4ts'

import { CLexer } from '../lang/CLexer'
import { CParser } from '../lang/CParser'
import { CGenerator } from '../parser/parser'
import { determineProgramString } from './test-utils'

export function parserTest() {
  const programString = determineProgramString()

  const inputStream = CharStreams.fromString(programString)
  const lexer = new CLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new CParser(tokenStream)
  parser.buildParseTree = true

  const tree = parser.compilationUnit()
  const generator = new CGenerator()
  // Extract the body from the program
  const ast = tree.accept(generator)
  console.log('AST:')
  console.dir(ast, { depth: null })
  return ast
}

parserTest()
