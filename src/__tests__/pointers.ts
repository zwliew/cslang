import { runTests } from '../utils/jest-utils'

const basicPointer = [
  `
main() {
  int *x = 3;
  x += 2;
  return x;
}`,
  11
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

const pointerDerefAssmtSimple = [
  `
main() {
  int x = 6;
  int *px = &x;
  *px = 5;
  return x;
}
`,
  5
]

const pointerDerefAssmtArithmetic = [
  `
main() {
  int x = 6;
  int y = 2;
  int *px = &x;
  *(px + 1) = 5;
  return y;
}
`,
  5
]

const pointerParamInFunction = [
  `
void set(int *x) {
  *x = 1337;
}
main() {
  int x = -31173;
  set(&x);
  return x;
}
`,
  1337
]

export const pointerTests = {
  basicPointer,
  pointerDeref,
  pointerDerefAssmtSimple,
  pointerDerefAssmtArithmetic,
  pointerParamInFunction
}
runTests(pointerTests)
