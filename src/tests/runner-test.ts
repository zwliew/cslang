// Runs the parser and interpreter on an input. Usage: `node runner-test.ts programName` for pre written programs in test-programs.ts
// `node runner-test.ts file/string fileName/stringName` to read strings from a file or from the command line respectively

import { cslangRunner } from '../runner/runner'
import { determineProgramString } from './test-utils'

function runnerTest() {
  const programString = determineProgramString()
  cslangRunner(programString)
}

runnerTest()
