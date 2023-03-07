// Some tests make use of escape characters, which TypeScript might convert to the appropriate character values
// Extra testing with text files might be required

import { FAIL_RESULT, runTests } from '../utils/jest-utils'

const numericTypes = [
  `
main() {
  short s = 1;
  int i = 2;
  long l = 3;
  float f = 4.4;
  double d = 5.5;
  signed s2 = 6;
  unsigned u = -7;
  return d + 8.8;
}`,
  14.3
]

const intOverUnderflow = [
  `
main() {
  int i = 2147483648;
  return ((i + 1) == -2147483647) && (i == -2147483648);
}`,
  1
]

const charOverUnderflow = [
  `
main() {
  char c = 128;
  return ((c + 1) == -127) && (c == -128);
}`,
  1
]

const shortOverUnderflow = [
  `
main() {
  short s = 32768;
  return ((s + 1) == -32767) && (s == -32768);
}`,
  1
]

const longOverUnderflow = [
  `
main() {
  long l = 2147483648;
  return ((l + 1) == -2147483647) && (l == -2147483648);
}`,
  1
]

const longLongOverUnderflow = [
  `
main() {
  long long ll = 9223372036854775808;
  return ((ll + 1) == -9223372036854775807) && (ll == -9223372036854775808);
}`,
  0
]

const floatPositiveInfinity = [
  `
main() {
  float f = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368;
  return f;
}`,
  Infinity
]

const floatNegativeInfinity = [
  `
main() {
  float f = -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368;
  return f;
}`,
  -Infinity
]

const doubleMaxValue = [
  `
main() {
  double d = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368;
  return d;
}`,
  179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.0
]

const charUnicodeHex = [
  `
main() {
  char c = '\u0010';
  return c;
}`,
  16
]

// \U strings not supported
const charLargeUnicodeHex = [
  `
main() {
  char c = '\U000000C0';
  return c;
}`,
  FAIL_RESULT
]

// Octal is not allowed in strict mode
// const charOctal = [
//   `
// main() {
//   char c = '\115';
//   return c;
// }`,
//   77
// ]

// all types except char default to signed. long double not implemented yet
const twoWordTypes = [
  `
main() {
  signed char sc = 255;
  unsigned char uc = -1;
  short int si = -32767;
  signed short int ssi = 32768;
  unsigned short us = -2;
  unsigned short int usi = -3;
  signed int si2 = 32767;
  unsigned int ui = -5;
  long int li = 2147483647;
  signed long sl = -2147483647;
  signed long int sli = 2147483648;
  unsigned long ul = -6;
  unsigned long int uli = -7;
  long long ll = 9223372036854775807;
  long long int lli = -9223372036854775807;
  signed long long sll = 9223372036854775808;
  signed long long int slli = -9223372036854775808;
  unsigned long long ull = -8;
  unsigned long long int ulli = -9;
  return uc;
}`,
  255
]

const negativeUnsignedCharBecomesPositive = [
  `
main() {
  unsigned char uc = -1;
  return uc;
}`,
  255
]

const negativeUnsignedShortBecomesPositive = [
  `
main() {
  unsigned short us = -1;
  return us;
}`,
  65535
]

const negativeUnsignedIntBecomesPositive = [
  `
main() {
  unsigned int ui = -1;
  return ui;
}`,
  4294967295
]

const negativeUnsignedLongBecomesPositive = [
  `
main() {
  unsigned long ul = -1;
  return ul;
}`,
  4294967295
]

const negativeUnsignedLongLongBecomesPositive = [
  `
main() {
  unsigned long long ull = -1;
  return ull;
}`,
  '18446744073709551615'
]

export const typeTests = {
  numericTypes,
  intOverUnderflow,
  shortOverUnderflow,
  longOverUnderflow,
  longLongOverUnderflow,
  doubleMaxValue,
  floatPositiveInfinity,
  floatNegativeInfinity,
  charUnicodeHex,
  charLargeUnicodeHex,
  charOverUnderflow,
  twoWordTypes,
  negativeUnsignedCharBecomesPositive,
  negativeUnsignedShortBecomesPositive,
  negativeUnsignedIntBecomesPositive,
  negativeUnsignedLongBecomesPositive,
  negativeUnsignedLongLongBecomesPositive
}

runTests(typeTests)
