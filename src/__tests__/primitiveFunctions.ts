import { runTests } from '../utils/jest-utils'

const putchar = [
  `main() {
    int x = putchar('A');
    return x;
  }`,
  65
]

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

const malloc = [
  `
  main() {
    int *arr = malloc(10 * sizeof(int));
    return arr[-1];
  }
  `,
  40 // Read implementation of Memory::allocateHeap
]

const malloc2 = [
  `
  main() {
    int *arr = malloc(3 * sizeof(int));
    arr[2] = 100;
    return arr[2];
  }
  `,
  100
]

export const primitiveFunctionsTests = {
  putchar,
  multiplePutchar,
  malloc,
  malloc2
}

runTests(primitiveFunctionsTests)
