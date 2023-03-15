import Decimal from '../utils/decimal'

import { Literal, TypeSpecifier } from '../parser/ast-types'
import { hierarchy, rank } from '../types'
import { DECIMAL_ONE, DECIMAL_ZERO } from './constants'
import { InvalidOperation } from './errors'

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
    value: left.value.add(right.value)
  }
}

export function subtract(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value.sub(right.value)
  }
}

export function multiply(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value.mul(right.value)
  }
}

export function divide(left: Literal, right: Literal): Literal {
  const typeSpecifier = promote(left.typeSpecifier, right.typeSpecifier)

  if (rank(typeSpecifier) >= floatingPointRank) {
    return {
      type: 'Literal',
      typeSpecifier: typeSpecifier,
      value: left.value.div(right.value)
    }
  } else {
    return {
      type: 'Literal',
      typeSpecifier: typeSpecifier,
      value: left.value.div(right.value).floor()
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
      value: left.value.mod(right.value)
    }
  }
}

export function equals(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value.equals(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function notEquals(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: !left.value.equals(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function lessThan(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value.lessThan(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function greaterThan(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value.greaterThan(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function greaterThanOrEqual(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value.greaterThanOrEqualTo(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function lessThanOrEqual(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: '_Bool',
    value: left.value.lessThanOrEqualTo(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function logicalAnd(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: 'int',
    value: !left.value.equals(0) && !right.value.equals(0) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function bitwiseOr(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) | Number(right.value))
  }
}

export function bitwiseAnd(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) & Number(right.value))
  }
}

export function bitwiseXor(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) ^ Number(right.value))
  }
}

export function leftShift(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) << Number(right.value))
  }
}

export function rightShift(left: Literal, right: Literal): Literal {
  return {
    type: 'Literal',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) >> Number(right.value))
  }
}
