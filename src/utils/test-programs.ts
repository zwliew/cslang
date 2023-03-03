export const singleDeclaration = `int i = 0;`

export const multipleDeclaration = `int j = 1;
int k = 2;`

export const semicolon = `;`

export const helloWorld = `
main()
{
  printf("Hello world!");
}
`

export const topLevelDeclarationWithExpression = `int x = 3 + 3; main() {}`

export const topLevelExpression = `3 + 3;`

// The first and last empty lines after the braces are also considered as statements/declarations in the parsing.
// Thus, there are 2 additional TerminalNodes, one at the beginning and one at the end, which are flattened away in the AST tree
export const block = `{
    int x = 3+3;
    x+2;
}`

// evaluates to 1
export const trueConditional = `{
  if (2) {
    1;
  } else {
    0;
  }
}`

// should evaluate to 1
export const falseConditional = `{
  if (0) {
    1;
  } else {
    0;
  }
}`

// Should evaluate to 7
export const switchCase = `{
  switch (1) {
    case 0:
      0;
      break;
    case 1:
      7;
      break;
    default:
      -1;
      break;
  }
}`

export const switchCaseSimple = `{
  switch (1) {
    case 1:
      1;
      break;
  }
}`

export const ternaryOperator = `{
  0 ? 2 : 1;
}`

// should evaluate to 6
export const bitwiseOr = `{
  2 | 4;
}`

// should evaluate to 6
export const bitwiseAnd = `{
  7 & 14;
}`

// should evaluate to 6
export const bitwiseXor = `{
  5 ^ 3;
}`

export const whileLoop = `{
  while (0) {}
}`

// Function declarations without type default to int
export const fnDeclarationWithoutType = `
  notype() {
    return 0;
  }
`

export const fnDeclarationWithArguments = `
  plusThree(int x) {
    return x+3;
  }
`

export const simpleFunction = `int one() {}`

// Should return 7
export const fnDeclaration = `int main() {
  return 7;
}`

// Should return 7
export const fnApplication = `int seven() {
  return 7;
}
int main() {
  seven();
}
`

// Should return 7
export const fnApplicationWithArguments = `int plusThree(int x) {
  return x+3;
}
int main() {
  plusThree(4);
}
`

// `int x = plusThree;`

// Should return 7
export const globalDeclaration = `int x = 7;
int main() {
  return x;
}
`

export const redeclareArguments = `hasarg(int x) {
  int x = 1;
}
main() {
  hasarg(2);
}`

export const returnInterruptsFlow = `
main() {
  int x = 1;
  return 2;
  int y = 3;
}
`

export const ifInFunction = `
other() {
  if (1 == 1) {
    return 2;
  }
  return 3;
}
main() {
  return other();
}`

export const breakInWhileFunction = `
other() {
  break;
}
main() {
  while (1) {
    other();
    break;
  }
  return 1;
}`
