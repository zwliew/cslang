import { FAIL_RESULT, runTests } from './utils'

const singleDeclaration = [`{int i = 0;}`, 0]

const multipleDeclaration = [
  `
{
int j = 1;
int k = 2;
}
`,
  2
]

const semicolon = [`;`, undefined]

// Strings are not implemented
const helloWorld = [
  `
main()
{
  printf("Hello world!");
}
`,
  FAIL_RESULT
]

const topLevelDeclarationWithExpression = [`int x = 3 + 3; main() {}`, undefined]

const topLevelExpression = [`3 + 3;`, FAIL_RESULT]

runTests([
  singleDeclaration,
  multipleDeclaration,
  semicolon,
  helloWorld,
  topLevelDeclarationWithExpression,
  topLevelExpression
])
