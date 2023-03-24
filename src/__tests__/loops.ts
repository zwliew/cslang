import { runTests } from '../utils/jest-utils'

const whileLoop = [
  `{
  while (0) {}
}`,
  0
]

const doWhileLoop = [
  `{
  do {} while (0);
}`,
  0
]

// TODO: fix these tests
const forLoop = [
  `main() {
    for (int i = 0; i < 10; ++i);
  }`,
  0
]

runTests({ whileLoop, doWhileLoop })
