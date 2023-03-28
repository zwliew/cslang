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
main() {
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
  voidWithNoReturnValue
}
runTests(analyserTests)
