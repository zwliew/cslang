import { cslangRunner } from '../runner/runner'
import { runTests } from './utils'

const singleDeclaration = [`int i = 0;`, undefined]

const multipleDeclaration = [
  `
int j = 1;
int k = 2;
`,
  undefined
]

const semicolon = [`;`, undefined]

const helloWorld = [
  `
main()
{
  printf("Hello world!");
}
`,
  undefined
]

const topLevelDeclarationWithExpression = [`int x = 3 + 3;`, undefined]

const topLevelExpression = [`3 + 3;`, undefined]

runTests([
  singleDeclaration,
  multipleDeclaration,
  semicolon,
  helloWorld,
  topLevelDeclarationWithExpression,
  topLevelExpression
])
