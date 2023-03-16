import { runTests } from '../utils/jest-utils'

const trueConditional = [
  `
main() {
  if (2) {
    return 1;
  } else {
    return 0;
  }
}`,
  1
]

const falseConditional = [
  `
main() {
  if (0) {
    return 1;
  } else {
    return 0;
  }
}`,
  0
]

// Should evaluate to 7
const switchCase = [
  `
main() {
  switch (1) {
    case 0:
      return 0;
    case 1:
      return 7;
    default:
      -1;
  }
  return -2;
}`,
  7
]

const switchCaseSimple = [
  `
main() {
  switch (1) {
    case 1:
      return 1;
  }
  return 0;
}`,
  1
]

const ternaryOperator = [
  `
main() {
  return 0 ? 2 : 1;
}`,
  1
]

runTests({ trueConditional, falseConditional, switchCase, switchCaseSimple, ternaryOperator })
