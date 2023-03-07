import { FAIL_RESULT, runTests } from '../utils/jest-utils'

const wrongNumberOfArguments = [
  `
int plusThree(int x) {
  return x+3;
}
int main() {
  plusThree(4,3);
}
`,
  FAIL_RESULT
]

export const analyserTests = {
  wrongNumberOfArguments
}
runTests(analyserTests)
