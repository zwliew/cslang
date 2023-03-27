import { FAIL_RESULT, runTests } from '../utils/jest-utils'

const redeclareArguments = [
  `hasarg(int x) {
    int x = 1;
  }
  main() {
    hasarg(2);
  }`,
  FAIL_RESULT
]

const returnInterruptsFlow = [
  `
main() {
  int x = 1;
  return 2;
  int y = 3;
}
`,
  2
]

// Function declarations without type default to int
const fnDeclarationWithoutType = [
  `notype() {
    return 7;
  }
  main() {
    return notype();
  }`,
  7
]

const fnDeclaration = [
  `int main() {
  return 7;
}`,
  7
]

const fnApplication = [
  `int plusThree(int x) {
  return x + 3;
}
int main() {
  return plusThree(4);
}`,
  7
]

const globalDeclaration = [
  `int x = 7;
int main() {
  return x;
}`,
  7
]

const implicitReturnTypeCast = [
  `
  char foo() {
    int x = 200;
    return x; // This converts it to a char
  }
  main() {
    return sizeof foo();
  }`,
  1
]

export const functionTests = {
  redeclareArguments,
  returnInterruptsFlow,
  fnDeclarationWithoutType,
  fnDeclaration,
  fnApplication,
  globalDeclaration,
  implicitReturnTypeCast
}

runTests(functionTests)
