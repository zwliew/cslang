import { runTests } from '../utils/jest-utils'

const basicPointer = [
  `
main() {
  int *x = 3;
  x += 2;
  return x;
}`,
  5
]

const pointerDeref = [
  `
main() {
  int x = 1;
  int *px = &x;
  int y = 7;
  int *py = &y;
  x += 1;
  y /= 2;
  x = *py * *px;
  return *px;
}
`,
  6
]

export const pointerTests = {
  basicPointer,
  pointerDeref
}
runTests(pointerTests)
