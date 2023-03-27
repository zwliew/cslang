import { WORD_SIZE } from './interpreter/classes/memory'
import {
  ArrayTypeSpecifier,
  PrimitiveTypeSpecifier,
  RawTypeSpecifier,
  TypeSpecifier
} from './parser/ast-types'
import { NotImplementedError } from './utils/errors'

// Size of types in bytes

const sizeOfTypes = {
  _Bool: 1,
  char: 1,
  'unsigned char': 1,
  short: 2,
  'unsigned short': 2,
  int: 4,
  'unsigned int': 4,
  long: 4,
  'unsigned long': 4,
  float: 4,
  'long long': 8,
  'unsigned long long': 8,
  double: 8,
  'long double': 16
}

export function sizeOfType(type: TypeSpecifier): number {
  if (isPrimitiveType(type)) {
    // This is a primitive type.
    const size = sizeOfTypes[type as PrimitiveTypeSpecifier]
    if (size === undefined) {
      throw new NotImplementedError(`Size of type specifier '${type}' is not implemented.`)
    }
    return size
  } else if (isPointerType(type)) {
    // This is a pointer to another type.
    return WORD_SIZE
  } else {
    // This is an array type.
    return sizeOfType((type as ArrayTypeSpecifier).arrOf) * (type as ArrayTypeSpecifier).size
  }
}

export const hierarchy: TypeSpecifier[] = [
  '_Bool',
  'char',
  'short',
  'int',
  'unsigned int',
  'long',
  'long long',
  'float',
  'double',
  'long double'
]
export const rank = (type: TypeSpecifier) => hierarchy.indexOf(type)

const rawTypes: Array<string> = [
  'void',
  'char',
  'short',
  'int',
  'signed',
  'unsigned',
  'long',
  'float',
  'double',
  '_Bool',
  'signed char',
  'unsigned char',
  'short int',
  'signed short int',
  'unsigned short',
  'unsigned short int',
  'signed int',
  'unsigned int',
  'long int',
  'signed long',
  'signed long int',
  'unsigned long',
  'unsigned long int',
  'long long',
  'long long int',
  'signed long long',
  'signed long long int',
  'unsigned long long',
  'unsigned long long int',
  'long double'
]

export function isValidRawTypeSpecifier(parsedString: string): parsedString is RawTypeSpecifier {
  return rawTypes.includes(parsedString)
}

export function multiwordTypeToTypeSpecifier(multiwordType: RawTypeSpecifier): TypeSpecifier {
  switch (multiwordType) {
    case 'void':
    case 'float':
    case 'double':
    case '_Bool':
      return multiwordType as TypeSpecifier

    case 'char':
    case 'signed char':
      return 'char'

    case 'unsigned char':
      return 'unsigned char'

    case 'short':
    case 'short int':
    case 'signed short int':
      return 'short'

    case 'unsigned short':
    case 'unsigned short int':
      return 'unsigned short'

    case 'int':
    case 'signed':
    case 'signed int':
      return 'int'

    case 'unsigned':
    case 'unsigned int':
      return 'unsigned int'

    case 'long':
    case 'long int':
    case 'signed long':
    case 'signed long int':
      return 'long'

    case 'unsigned long':
    case 'unsigned long int':
      return 'unsigned long'

    case 'long long':
    case 'long long int':
    case 'signed long long':
    case 'signed long long int':
      return 'long long'

    case 'unsigned long long':
    case 'unsigned long long int':
      return 'unsigned long long'

    case 'long double':
      return 'long double'
  }
}

export function isPrimitiveType(typeSpecifier: TypeSpecifier): boolean {
  return typeof typeSpecifier === 'string'
}

export function isPointerType(typeSpecifier: TypeSpecifier): boolean {
  return typeof typeSpecifier === 'object' && 'ptrTo' in typeSpecifier
}

export function isArrayType(typeSpecifier: TypeSpecifier): boolean {
  return typeof typeSpecifier === 'object' && 'arrOf' in typeSpecifier
}
