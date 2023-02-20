import { cslangRunner } from './runner'

// Runs a line of code
const sourceCode = process.argv[2]
console.log('Starting runner with program:')
console.log(sourceCode)
console.log(cslangRunner(sourceCode))
console.log('Ended runner')
