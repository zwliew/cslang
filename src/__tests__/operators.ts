import { runTests } from '../utils/jest-utils'

const inclusiveOrExpression = [
  `
main() {
  return 2 | 4;
}`,
  6
]

const andExpression = [
  `
main() {
  return 7 & 14;
}`,
  6
]

const exclusiveOrExpression = [
  `
main() {
  return 5 ^ 3;
}`,
  6
]

const leftShiftExpression = [
  `
main() {
  return 3 << 2;
}`,
  12
]

const rightShiftExpression = [
  `
main() {
  return 73 >> 4;
}`,
  4
]

const trueEqualExpression = [
  `
main() {
  return 3 == 3;
}`,
  1
]

const falseEqualExpression = [
  `
main() {
  return 3 == 4;
}`,
  0
]

const trueNotEqualExpression = [
  `
main() {
  return 4 != 3;
}`,
  1
]

const falseNotEqualExpression = [
  `
main() {
  return 3 != 3;
}`,
  0
]

const trueGreaterThanExpression = [
  `
main() {
  return 3 > 2;
}`,
  1
]

const falseGreaterThanExpression = [
  `
main() {
  return 7 > 26;
}`,
  0
]

const trueLessThanExpression = [
  `
main() {
  return 2 < 3;
}`,
  1
]

const falseLessThanExpression = [
  `
main() {
  return 93 < 26;
}`,
  0
]

const trueLessThanOrEqualExpression = [
  `
main() {
  return 3 <= 3;
}`,
  1
]

const falseLessThanOrEqualExpression = [
  `
main() {
  return 3 <= 2;
}`,
  0
]

const trueGreaterThanOrEqualExpression = [
  `
main() {
  return 3 >= 3;
}`,
  1
]

const falseGreaterThanOrEqualExpression = [
  `
main() {
  return 2 >= 3;
}`,
  0
]

runTests({
  inclusiveOrExpression,
  andExpression,
  exclusiveOrExpression,
  leftShiftExpression,
  rightShiftExpression,
  trueEqualExpression,
  falseEqualExpression,
  trueNotEqualExpression,
  falseNotEqualExpression,
  trueGreaterThanExpression,
  falseGreaterThanExpression,
  trueLessThanExpression,
  falseLessThanExpression,
  trueGreaterThanOrEqualExpression,
  falseGreaterThanOrEqualExpression,
  trueLessThanOrEqualExpression,
  falseLessThanOrEqualExpression
})
