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

// TODO: make jest swallow the output of printstack
const printStackBasic = [
  String.raw`
void foo(int *x) {
  char y = 1;
  {
    char y = 4;
    char *py = &y;
    char **ppy = &py;
    char ac[15] = "Hello World!\n";
    char *pac = "Hello World!\n";
    int ai[15];
    char ac2[15] = "Hello World!\n";
    char *pac2 = "Hello World!\n";
    printstack();
  }
}
main() {
  int x = 3;
  foo(&x);
  return x;
}
`,
  3
]

export const primitiveFunctionsTests = {
  putchar,
  multiplePutchar,
  malloc,
  malloc2,
  printStackBasic
}

runTests(primitiveFunctionsTests)
