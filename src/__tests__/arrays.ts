import { runTests } from '../utils/jest-utils'

const arraySubscript = [
  `
main() {
  int arr = 3;
  int x = 4;
  int y = 5;
  (&arr)[2] += 4;
  return (&arr)[0] * (&arr)[1] + (&arr)[2];
}
`,
  21
] // Note: this is technically undefined behaviour as we're accessing out of bounds

const arrayDeclaration = [
  `
int arr[3];
main() {
  arr[1] = 3;
  arr[0] = 17;
  arr[2] = arr[0] - 31;
  arr[1] += arr[2];
  return arr[0] + arr[1] * arr[2];
}
  `,
  171
]

export const arrayTests = {
  arraySubscript,
  arrayDeclaration
}
runTests(arrayTests)
