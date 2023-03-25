import { CharStreams, CommonTokenStream } from 'antlr4ts'
import fs from 'fs'
import util from 'node:util'

import { CLexer } from '../lang/CLexer'
import { CParser } from '../lang/CParser'
import { createAnalysisState, traverse } from '../parser/analyser'
import { CGenerator } from '../parser/parser'
import { cslangRunner } from '../runner/runner'
import testCases from './testCases'

// Obtain the program string based on the parameters passed to the CLI
export function determineProgramString(): string {
  let programString = undefined
  if (process.argv.length === 3) {
    const testCaseName = process.argv[2]
    if (testCases[testCaseName]) {
      programString = testCases[testCaseName][0]
    } else {
      console.log('Invalid program name provided')
    }
  } else if (process.argv.length >= 4) {
    switch (process.argv[2]) {
      case 'file':
      case 'f':
        programString = fs.readFileSync(process.argv[3], 'utf-8')
        break
      case 'string':
      case 's':
        programString = process.argv[3]
        break
      default:
        console.log('Invalid program type/name provided')
    }
  }

  if (programString === undefined) {
    throw new Error('Invalid program name provided')
  }
  return programString
}

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
  console.log(util.inspect(ast, { depth: null, colors: true }))
  return ast
}

export function analyserTest() {
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
  const analysisState = createAnalysisState()
  traverse(ast, analysisState)
  console.log(`Final analysis state:`)
  console.dir(analysisState)
  return ast
}

export function runnerTest() {
  const programString = determineProgramString()
  const output = cslangRunner(programString)
  console.log(output)
}
