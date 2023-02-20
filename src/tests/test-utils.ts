import fs from 'fs'

import * as programs from './test-programs'

// Obtain the program string based on the parameters passed to the CLI
export function determineProgramString(): string {
  let programString = programs.singleDeclaration
  if (process.argv.length === 3) {
    if (programs[process.argv[2]]) {
      programString = programs[process.argv[2]]
    } else {
      console.log('Invalid program type/name provided. Defaulting to singleDeclaration')
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
        console.log('Invalid program type/name provided. Defaulting to singleDeclaration')
    }
  }

  return programString
}
