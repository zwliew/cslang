import { runTests } from '../utils/jest-utils'

const trueConditional = [
  `{
  if (2) {
    1;
  } else {
    0;
  }
}`,
  1
]

const falseConditional = [
  `{
  if (0) {
    1;
  } else {
    0;
  }
}`,
  0
]

// Should evaluate to 7
const switchCase = [
  `{
  switch (1) {
    case 0:
      0;
      break;
    case 1:
      7;
      break;
    default:
      -1;
      break;
  }
}`,
  7
]

const switchCaseSimple = [
  `{
  switch (1) {
    case 1:
      1;
      break;
  }
}`,
  1
]

const ternaryOperator = [
  `{
  0 ? 2 : 1;
}`,
  1
]

runTests({ trueConditional, falseConditional, switchCase, switchCaseSimple, ternaryOperator })
