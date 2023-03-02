import { runTests } from './utils'

const inclusiveOrExpression = [
  `{
  2 | 4;
}`,
  6
]

const andExpression = [
  `{
  7 & 14;
}`,
  6
]

const exclusiveOrExpression = [
  `{
  5 ^ 3;
}`,
  6
]

const leftShiftExpression = [
  `{
    3 << 2;
  }`,
  12
]

const rightShiftExpression = [
  `{
    73 >> 4;
  }`,
  4
]

const trueEqualExpression = [
  `{
    3 == 3;
  }`,
  1
]

const falseEqualExpression = [
  `{
    3 == 4;
  }`,
  0
]

const trueNotEqualExpression = [
  `{
    4 != 3;
  }`,
  1
]

const falseNotEqualExpression = [
  `{
    3 != 3;
  }`,
  0
]

const trueGreaterThanExpression = [
  `{
    3 > 2;
  }`,
  1
]

const falseGreaterThanExpression = [
  `{
    7 > 26;
  }`,
  0
]

const trueLessThanExpression = [
  `{
    2 < 3;
  }`,
  1
]

const falseLessThanExpression = [
  `{
    93 < 26;
  }`,
  0
]

const trueLessThanOrEqualExpression = [
  `{
    3 <= 3;
  }`,
  1
]

const falseLessThanOrEqualExpression = [
  `{
    3 <= 2;
  }`,
  0
]

const trueGreaterThanOrEqualExpression = [
  `{
    3 >= 3;
  }`,
  1
]

const falseGreaterThanOrEqualExpression = [
  `{
    2 >= 3;
  }`,
  0
]

runTests([
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
])
