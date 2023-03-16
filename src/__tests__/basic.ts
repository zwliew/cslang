import { FAIL_RESULT, runTests } from '../utils/jest-utils'

const singleDeclaration = [`main() {int i = 0; return i;}`, 0]

const multipleDeclaration = [
  `
main() {
int j = 1;
int k = 2;
return k;
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

const topLevelDeclarationWithExpression = [`int x = 3 + 3; main() {}`, FAIL_RESULT]

// TODO: fix console.error from showing during yarn test
// Causes errors to be logged while testing
// const topLevelExpression = [`3 + 3;`, FAIL_RESULT]

const longFunction = [
  `
int ret() {
  1;
  2;
  3;
  4;
  5;
  return 6;
}
main() {
  ret();
  return 0;
}
`,
  0
]

export const basicTests = {
  singleDeclaration,
  multipleDeclaration,
  semicolon,
  helloWorld,
  topLevelDeclarationWithExpression,
  longFunction
  // topLevelExpression
}
runTests(basicTests)
