import { runTests } from '../utils/jest-utils'

const putchar = [
  `main() {
    int x = putchar('A');
    return x;
  }`,
  65
]

// Not tested until repeated function calls are fixed
const multiplePutchar = [
  `main() {
    putchar('H');
    putchar('e');
    putchar('l');
    putchar('l');
    putchar('o');
    putchar(' ');
    putchar('w');
    putchar('o');
    putchar('r');
    putchar('l');
    int x = putchar('d');
    return x;
  }`,
  100
]

export const primitiveFunctionsTest = {
  putchar
}

runTests(primitiveFunctionsTest)
