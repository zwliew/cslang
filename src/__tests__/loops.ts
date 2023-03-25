import { runTests } from '../utils/jest-utils'

const whileLoop = [
  `
main() {
  int x = 0;
  int y = 3;
  while (x < 10) {
    x = x + 1;
    y += 8;
  }
  return x * y;
}`,
  830
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
  for (int i = 0; i < 3; i += 1) {
    x += 2;
  }
  return x;
}
`,
  6
]

export const loopTests = { whileLoop, doWhileLoop, forLoop }

runTests(loopTests)
