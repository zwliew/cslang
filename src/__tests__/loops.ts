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
}
`,
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
}
`,
  3
]

const whileLoopContinue = [
  `
main() {
  int x = 0;
  int i = 0;
  while (i <= 5) {
    i += 1;
    if (i == 3)
      continue;
    x += i;
  }
  return x;
}
`,
  18
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

const doWhileLoopBreak = [
  `
main() {
  int x = 0;
  int y = 0;
  do {
    x = x + 1;
    if (x >= 0)
      break;
    y = 5;
  } while (x < 0);
  return x + y;
}
`,
  1
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

const forLoopContinue = [
  `
main() {
  int x = 0;
  for (int i = 1; i <= 5; i += 1) {
    if (i == 3)
      continue;
    x += i;
  }
  return x;
}
`,
  12
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

export const loopTests = {
  whileLoop,
  whileLoopBreak,
  whileLoopContinue,
  doWhileLoop,
  doWhileLoopBreak,
  forLoop,
  forLoopContinue,
  forLoopBreak
}

runTests(loopTests)
