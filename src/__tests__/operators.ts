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

const plusAssignment = [
  `
  main() {
    int x = 0;
    x += 1;
    return x;
  }
  `,
  1
]

const minusAssignment = [
  `
  main() {
    int x = 0;
    x -= 1;
    return x;
  }
  `,
  -1
]

const timesAssignment = [
  `
  main() {
    int x = 1;
    x *= 3;
    return x;
  }
  `,
  3
]

const divideAssignment = [
  `
  main() {
    int x = 6;
    x /= 2;
    return x;
  }
  `,
  3
]

const moduloAssignment = [
  `
  main() {
    int x = 5;
    x %= 2;
    return x;
  }
  `,
  1
]

const leftShiftAssignment = [
  `
  main() {
    int x = 1;
    x <<= 2;
    return x;
  }
  `,
  4
]

const rightShiftAssignment = [
  `
  main() {
    int x = 4;
    x >>= 1;
    return x;
  }
  `,
  2
]

const andAssignment = [
  `
  main() {
    int x = 3;
    x &= 2;
    return x;
  }
  `,
  2
]

const exclusiveOrAssignment = [
  `
  main() {
    int x = 3;
    x ^= 2;
    return x;
  }
  `,
  1
]

const inclusiveOrAssignment = [
  `
  main() {
    int x = 5;
    x |= 2;
    return x;
  }
  `,
  7
]

export const operatorTests = {
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
  falseLessThanOrEqualExpression,
  plusAssignment,
  minusAssignment,
  timesAssignment,
  divideAssignment,
  moduloAssignment,
  leftShiftAssignment,
  rightShiftAssignment,
  andAssignment,
  exclusiveOrAssignment,
  inclusiveOrAssignment
}

runTests(operatorTests)