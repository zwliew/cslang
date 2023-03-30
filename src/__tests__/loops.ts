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

const whileLoopBreak = [
  `
main() {
  int x = 0;
  while (x < 5) {
    x += 1;
    if (x == 3)
      break;
  }
  return x;
}`,
  3
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

const forLoopBreak = [
  `
main() {
  int x = 0;
  for (int i = 0; i < 10; i += 1) {
    x += 2;
    if (i == 4)
      break;
  }
  return x;
}
`,
  10
]

export const loopTests = { whileLoop, whileLoopBreak, doWhileLoop, forLoop, forLoopBreak }

runTests(loopTests)
