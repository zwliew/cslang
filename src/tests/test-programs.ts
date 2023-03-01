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

export const topLevelDeclarationWithExpression = `int x = 3 + 3;`

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
