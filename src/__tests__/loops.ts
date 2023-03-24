import { runTests } from '../utils/jest-utils'

const whileLoop = [
  `
main() {
  int x = 0;
  while (x < 10) {
    x = x + 1;
  }
  return x;
}`,
  10
]

const doWhileLoop = [
  `
main() {
  int x = 0;
  int y = 0;
  do {
    x = x + 1;
    y = 5;
  } while (x < 0);
  return x + y;
}
`,
  6
]

// TODO: fix these tests
const forLoop = [
  `
main() {
  int x = 0;
  for (int i = 0; i < 7; ++i) {
    ++x;
  }
  return x;
}
`,
  7
]

export const loopTests = { whileLoop, doWhileLoop }

runTests(loopTests)
