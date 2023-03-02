import { FAIL_RESULT, runTests } from './utils'

const singleDeclaration = [`int i = 0;`, 0]

const multipleDeclaration = [
  `
int j = 1;
int k = 2;
`,
  1
]

const semicolon = [`;`, 0]

const helloWorld = [
  `
main()
{
  printf("Hello world!");
}
`,
  0
]

const topLevelDeclarationWithExpression = [`int x = 3 + 3;`, 6]

const topLevelExpression = [`3 + 3;`, FAIL_RESULT]

runTests([
  singleDeclaration,
  multipleDeclaration,
  semicolon,
  helloWorld,
  topLevelDeclarationWithExpression,
  topLevelExpression
])
