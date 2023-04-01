import {
  ArrayTypeSpecifier,
  NumericLiteral,
  PointerTypeSpecifier,
  TypeSpecifier
} from '../parser/ast-types'
import { hierarchy, isArrayType, isPointerType, isPrimitiveType, rank, sizeOfType } from '../types'
import Decimal from '../utils/decimal'
import { IllegalArgumentError } from '../utils/errors'
import { DECIMAL_ONE, DECIMAL_ZERO } from './constants'
import { InvalidOperation } from './errors'

const floatingPointRank = rank('float')

function promote(left: TypeSpecifier, right: TypeSpecifier): TypeSpecifier {
  return hierarchy[Math.max(rank(left), rank(right))]
}

/*************
 * Operations
 ************/

function addPtr(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  if (!isPrimitiveType(right.typeSpecifier)) {
    throw new InvalidOperation(
      `Invalid operands for '+' operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  }
  return {
    type: 'NumericLiteral',
    typeSpecifier: left.typeSpecifier,
    value: left.value.add(
      right.value.mul(sizeOfType((left.typeSpecifier as PointerTypeSpecifier).ptrTo))
    )
  }
}

function addArray(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  if (!isPrimitiveType(right.typeSpecifier)) {
    throw new InvalidOperation(
      `Invalid operands for '+' operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  }
  if (left.address === undefined) {
    throw new IllegalArgumentError(
      'Cannot do pointer arithmetic on array with an undefined address.'
    )
  }
  return {
    type: 'NumericLiteral',
    typeSpecifier: { ptrTo: (left.typeSpecifier as ArrayTypeSpecifier).arrOf }, // convert to a pointer
    value: right.value
      .mul(sizeOfType((left.typeSpecifier as ArrayTypeSpecifier).arrOf))
      .add(left.address.location)
  }
}

export function add(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  // Handle pointer arithmetic on both raw pointers and arrays.
  if (isPointerType(left.typeSpecifier)) {
    return addPtr(left, right)
  }
  if (isPointerType(right.typeSpecifier)) {
    return addPtr(right, left)
  }
  if (isArrayType(left.typeSpecifier)) {
    return addArray(left, right)
  }
  if (isArrayType(right.typeSpecifier)) {
    return addArray(right, left)
  }

  // Smaller integral types will be promoted, so we can literally just add the values
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value.add(right.value)
  }
}

function subtractPtr(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  if (isPointerType(right.typeSpecifier)) {
    throw new InvalidOperation(
      `Invalid operands for + operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  }
  return {
    type: 'NumericLiteral',
    typeSpecifier: left.typeSpecifier,
    value: left.value.sub(
      right.value.mul(sizeOfType((left.typeSpecifier as PointerTypeSpecifier).ptrTo))
    )
  }
}

function subtractArray(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  if (!isPrimitiveType(right.typeSpecifier)) {
    throw new InvalidOperation(
      `Invalid operands for '-' operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  }
  if (left.address === undefined) {
    throw new IllegalArgumentError(
      'Cannot do pointer arithmetic on array with an undefined address.'
    )
  }
  return {
    type: 'NumericLiteral',
    typeSpecifier: { ptrTo: (left.typeSpecifier as ArrayTypeSpecifier).arrOf }, // convert to a pointer
    value: right.value
      .mul(-sizeOfType((left.typeSpecifier as ArrayTypeSpecifier).arrOf))
      .add(left.address.location)
  }
}

export function subtract(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  // Handle pointer arithmetic on both raw pointers and arrays.
  if (isPointerType(left.typeSpecifier)) {
    return subtractPtr(left, right)
  }
  if (isPointerType(right.typeSpecifier)) {
    return subtractPtr(right, left)
  }
  if (isArrayType(left.typeSpecifier)) {
    return subtractArray(left, right)
  }
  if (isArrayType(right.typeSpecifier)) {
    return subtractArray(right, left)
  }

  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value.sub(right.value)
  }
}

export function multiply(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: left.value.mul(right.value)
  }
}

export function divide(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  const typeSpecifier = promote(left.typeSpecifier, right.typeSpecifier)

  if (rank(typeSpecifier) >= floatingPointRank) {
    return {
      type: 'NumericLiteral',
      typeSpecifier: typeSpecifier,
      value: left.value.div(right.value)
    }
  } else {
    return {
      type: 'NumericLiteral',
      typeSpecifier: typeSpecifier,
      value: left.value.div(right.value).floor()
    }
  }
}

export function mod(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  const typeSpecifier = promote(left.typeSpecifier, right.typeSpecifier)

  if (rank(typeSpecifier) >= floatingPointRank) {
    throw new InvalidOperation(
      `Invalid operands for % operator: ${left.typeSpecifier}, ${right.typeSpecifier}`
    )
  } else {
    return {
      type: 'NumericLiteral',
      typeSpecifier: typeSpecifier,
      value: left.value.mod(right.value)
    }
  }
}

export function equals(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: left.value.equals(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function notEquals(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: !left.value.equals(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function lessThan(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: left.value.lessThan(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function greaterThan(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: left.value.greaterThan(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function greaterThanOrEqual(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: left.value.greaterThanOrEqualTo(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function lessThanOrEqual(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: '_Bool',
    value: left.value.lessThanOrEqualTo(right.value) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function logicalAnd(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: 'int',
    value: !left.value.equals(0) && !right.value.equals(0) ? DECIMAL_ONE : DECIMAL_ZERO
  }
}

export function bitwiseOr(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) | Number(right.value))
  }
}

export function bitwiseAnd(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) & Number(right.value))
  }
}

export function bitwiseXor(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) ^ Number(right.value))
  }
}

export function leftShift(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) << Number(right.value))
  }
}

export function rightShift(left: NumericLiteral, right: NumericLiteral): NumericLiteral {
  return {
    type: 'NumericLiteral',
    typeSpecifier: promote(left.typeSpecifier, right.typeSpecifier),
    value: new Decimal(Number(left.value) >> Number(right.value))
  }
}
