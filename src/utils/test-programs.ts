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
export const trueConditional = `main() {
  if (2) {
    1;
  } else {
    0;
  }
  return 0;
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
export const switchCase = `main() {
  switch (1) {
    case 0:
      return 0;
    case 1:
      return 7;
    default:
      -1;
  }
  return 1;
}`

export const switchCaseSimpleNoReturn = `
main() {
  switch (0) {
  }
}`

export const switchLong = `
main() {
  switch (0) {
    case 1:
      1;
      2;
      3;
    default:
      4;
      5;
      6;
  }
  return 1;
}`
export const switchCaseAllReturn = `
main() {
  switch (0) {
    case 1:
      return 2;
    default:
      return 3;
  }
}`

export const switchCaseSomeReturnWithNoFinalReturn = `
main() {
  switch (0) {
    case 1:
      2;
      break;
    default:
      return 3;
  }
}`

export const switchCaseSomeReturnWithFinalReturn = `
main() {
  switch (1) {
    case 1:
      2;
      break;
    default:
      return 3;
  }
  return 4;
}`

export const switchCaseSimple = `
main() {
  switch (1) {
    case 1:
      return 1;
  }
  return 0;
}`

export const ternaryOperator = `main() {
  return 0 ? 2 : 1;
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

export const reassignment = `
main() {
  int x = 1;
  x = 2;
  return x;
}`

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

export const whileStatementShouldProduceNoValue = `
main() {
  int i = 0;
  while (i < 1) {
    1;
    i = i + 1;
  }
  return 0;
}`

export const numberDeclarations = `
main() {
  short s = 1;
  int i = 2;
  long l = 3;
  float f = 4.4;
  double d = 5.5;
  d + 6.6;
}
`

export const oneWordTypes = `
main() {
  unsigned long long ull = -1;
  return ull;
  long long ll = 9223372036854775808;
  return (ll + 1) == -9223372036854775807 && ll == -9223372036854775808;
}`

// `
// main() {
//   unsigned long long ull = -1;
//   return ull;
// }`

export const twoWordTypes = `
main() {
  signed char sc = 255;
  unsigned char uc = -1;
  short int si = -32767;
  signed short int ssi = 32768;
  unsigned short us = -2;
  unsigned short int usi = -3;
  signed int si2 = 32767;
  unsigned int ui = -5;
  long int li = 2147483647;
  signed long sl = -2147483647;
  signed long int sli = 2147483648;
  unsigned long ul = -6;
  unsigned long int uli = -7;
  long long ll = 9223372036854775807;
  long long int lli = -9223372036854775807;
  signed long long sll = 9223372036854775808;
  signed long long int slli = -9223372036854775808;
  unsigned long long ull = -8;
  unsigned long long int ulli = -9;
  return ulli;
}`

export const wrongReturnType = `
main() {
  float x = 1.0;
  return x;
}`

export const wrongNumberOfArguments = `int plusThree(int x) {
  return x+3;
}
int main() {
  plusThree(4,3);
}
`

export const blockWithIf = `{
  1;
  if (2) {
    3;
  }
  4;
}`

export const longFunction = `
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
`

export const elseIfConditional = `
main() {
  if (0) {
    return 1;
  } else if (2) {
    return 2;
  } else {
    return 0;
  }
}`

export const ifConsequentReturn = `
main() {
  if (0) {
    return 1;
  } else if (0) {
    return 2;
  } else {
    
  }
}`

export const ifAllReturn = `
main() {
  if (0) {
    return 1;
  } else if (0) {
    return 2;
  } else {
    return 3;
  }
}`
