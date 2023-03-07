import { Literal, TypeSpecifier } from '../parser/ast-types'
import { InvalidOperation } from './errors'

const hierarchy: TypeSpecifier[] = [
  '_Bool',
  'char',
  'short',
  'int',
  'unsigned int',
  'long',
  'long long',
  'float'
]
const rank = (type: TypeSpecifier) => hierarchy.indexOf(type)
const floatingPointRank = rank('float')

function promote(left: TypeSpecifier, right: TypeSpecifier): TypeSpecifier {
  return hierarchy[Math.max(rank(left), rank(right))]
}

/*************
 * Operations
 ************/

export function add(left: Literal, right: Literal): Literal {
  // Smaller integral types will be promoted, so we can literally just add the values
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value + right.value
  }
}

export function subtract(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value - right.value
  }
}

export function multiply(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value * right.value
  }
}

export function divide(left: Literal, right: Literal): Literal {
  const typeSpecifier = promote(left.typeSpecifier, right.typeSpecifier)

  if (rank(typeSpecifier) >= floatingPointRank) {
    return {
      type: 'Literal',
      typeSpecifier: typeSpecifier,
      value: left.value / right.value
    }
  } else {
    return {
      type: 'Literal',
      typeSpecifier: typeSpecifier,
      value: Math.trunc(left.value / right.value)
    }
  }
}

export function mod(left: Literal, right: Literal): Literal {
  const typeSpecifier = promote(left.typeSpecifier, right.typeSpecifier)

  if (rank(typeSpecifier) >= floatingPointRank) {
    throw new InvalidOperation(
      `Invalid operands for % operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  } else {
    return {
      type: 'Literal',
      typeSpecifier: typeSpecifier,
      value: left.value % right.value
    }
  }
}

export function equals(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value === right.value ? 1 : 0
  }
}

export function notEquals(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value !== right.value ? 1 : 0
  }
}

export function lessThan(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value < right.value ? 1 : 0
  }
}

export function greaterThan(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value > right.value ? 1 : 0
  }
}

export function greaterThanOrEqual(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value >= right.value ? 1 : 0
  }
}

export function lessThanOrEqual(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value <= right.value ? 1 : 0
  }
}

export function logicalAnd(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: 'int',
    value: left.value && right.value ? 1 : 0
  }
}

export function bitwiseOr(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value | right.value
  }
}

export function bitwiseAnd(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value & right.value
  }
}

export function bitwiseXor(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value ^ right.value
  }
}

export function leftShift(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value << right.value
  }
}

export function rightShift(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value >> right.value
  }
}
