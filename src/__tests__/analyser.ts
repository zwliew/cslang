import { ANALYSIS_ERROR, FAIL_RESULT, runTests } from '../utils/jest-utils'

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

export const analyserTests = {
  wrongNumberOfArguments,
  switchCaseNoReturn,
  switchCaseSomeReturnWithNoFinalReturn,
  switchCaseSomeReturnWithFinalReturn,
  switchCaseAllReturn
}
runTests(analyserTests)
