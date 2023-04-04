import { runTests } from '../utils/jest-utils'

const stringInterning = [
  `
  main() {
    char *str = "Hello world!";
    str[0] = 'B';

    char *str2 = "Hello world!";
    return str[0] == 'B' && str == str2;
  }`,
  1
]

const textSegment = [
  `
  main() {
    char *str = "Bye";
    char *str2 = "Hello!";
    return str[4] == str2[0];
  }
  `,
  1
]

const escapeSequenceLF = [
  String.raw`
  main() {
    char *str = "Hello\nW";
    return str[5] == 10 && str[6] == 'W';
  }`,
  1
]

const charArrayAssignment = [
  `
main() {
  char hello[3] = "hi";
  return hello[0] == 'h' && hello[1] == 'i' && hello[2] == 0;
}`,
  1
]

export const stringTests = {
  stringInterning,
  textSegment,
  escapeSequenceLF,
  charArrayAssignment
}

runTests(stringTests)
