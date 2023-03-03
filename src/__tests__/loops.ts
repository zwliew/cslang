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

runTests({ whileLoop, doWhileLoop })
