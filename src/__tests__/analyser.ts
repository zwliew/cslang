import { ANALYSIS_ERROR, runTests } from '../utils/jest-utils'

const wrongNumberOfArguments = [
  `
int plusThree(int x) {
  return x+3;
}
int main() {
  plusThree(4,3);
}
`,
  ANALYSIS_ERROR
]

const ifNoReturn = [
  `
main() {
  if (0) {

  } else if (0) {

  } else {

  }
}`,
  ANALYSIS_ERROR
]

const ifConsequentReturn = [
  `
main() {
  if (0) {
    return 1;
  } else if (0) {
    return 2;
  } else {
    
  }
}`,
  ANALYSIS_ERROR
]

const ifAlternativeReturn = [
  `
noreturn() {
  if (0) {

  } else if (0) {
    return 2;
  } else {
    return 3;
  }
}`,
  ANALYSIS_ERROR
]

const ifAllReturn = [
  `
main() {
  if (0) {
    return 1;
  } else if (0) {
    return 2;
  } else {
    return 3;
  }
}`,
  3
]

const switchCaseNoReturn = [
  `
main() {
  switch (0) {
  }
}`,
  ANALYSIS_ERROR
]

const switchCaseSomeReturnWithNoFinalReturn = [
  `
main() {
  switch (0) {
    case 1:
      2;
      break;
    default:
      return 3;
  }
}`,
  ANALYSIS_ERROR
]

const switchCaseSomeReturnWithFinalReturn = [
  `
main() {
  switch (1) {
    case 1:
      2;
      break;
    default:
      return 3;
  }
  return 4;
}`,
  4
]

const switchCaseAllReturn = [
  `
main() {
  switch (0) {
    case 1:
      return 2;
    default:
      return 3;
  }
}`,
  3
]

const voidNoReturn = [
  `
void vfn() {
  1;
}
main() {
  vfn();
  return 0;
}`,
  0
]

const voidWithReturnValue = [
  `
void vfn() {
  return 1;
}
main() {
  vfn();
  return 0;
}
`,
  ANALYSIS_ERROR
]

const voidWithNoReturnValue = [
  `
void vfn() {
  1;
  return;
}
main() {
  vfn();
  return 0;
}
`,
  0
]

const voidVariableDeclaration = [
  `
main() {
  void v;
  return 0;
}
`,
  ANALYSIS_ERROR
]

const additionWithIncompatibleTypes = [
  `
main() {
  int *pi;
  char *pc;
  return pi + pc;
}
`,
  ANALYSIS_ERROR
]

const subtractionWithIncompatibleTypes = [
  `
main() {
  int *pi;
  return 1 - pi;
}
`,
  ANALYSIS_ERROR
]

const useUndefinedIdentifier = [
  `
main() {
  return x;
}
`,
  ANALYSIS_ERROR
]

const equalityWithIncompatibleTypes = [
  `
main() {
  char *pc;
  int i;
  return pc == i;
}
`,
  ANALYSIS_ERROR
]

const derefWithIncompatibleTypes = [
  `
main() {
  int i;
  return *i;
}
`,
  ANALYSIS_ERROR
]

const assignmentWithInvalidType = [
  `
main() {
  int i;
  &i = 3;
  return i;
}
`,
  ANALYSIS_ERROR
]

const shiftWithInvalidType = [
  `
main() {
  float f;
  f <<= 3;
  return f;
}
`,
  ANALYSIS_ERROR
]

export const analyserTests = {
  wrongNumberOfArguments,
  ifNoReturn,
  ifConsequentReturn,
  ifAlternativeReturn,
  ifAllReturn,
  switchCaseNoReturn,
  switchCaseSomeReturnWithNoFinalReturn,
  switchCaseSomeReturnWithFinalReturn,
  switchCaseAllReturn,
  voidNoReturn,
  voidWithReturnValue,
  voidWithNoReturnValue,
  voidVariableDeclaration,
  additionWithIncompatibleTypes,
  subtractionWithIncompatibleTypes,
  useUndefinedIdentifier,
  equalityWithIncompatibleTypes,
  derefWithIncompatibleTypes,
  assignmentWithInvalidType,
  shiftWithInvalidType
}
runTests(analyserTests)
