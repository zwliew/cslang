import { runTests } from './utils'

const bitwiseOr = [
  `{
  2 | 4;
}`,
  6
]

// should evaluate to 6
const bitwiseAnd = [
  `{
  7 & 14;
}`,
  6
]

// should evaluate to 6
const bitwiseXor = [
  `{
  5 ^ 3;
}`,
  6
]

runTests([bitwiseOr, bitwiseAnd, bitwiseXor])
