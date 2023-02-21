import { execute } from '../interpreter/interpreter'
import * as trees from './test-trees'

// Runs a line of code

function interpreterTest() {
  let programTree = trees.singleDeclarationTree
  if (process.argv.length === 3 && trees[process.argv[2]]) {
    programTree = trees[process.argv[2]]
  } else {
    console.log('Invalid program type/name provided. Defaulting to singleDeclarationTree')
  }
  // console.log(execute(programTree))
  // Edited by Shawn: Need to remove this after making major typing changes
  throw 'NotImplementedError'
}

interpreterTest()
