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
int gi = 9;
void foo(int *x) {
  char y = 31;
  {
    char y = 'a';
    char *py = &y;
    char **ppy = &py;
    char ac[15] = "Hello World!\n";
    char *pac = "Hello World!\n";
    int ai[15];
    char ac2[15] = "Hello World!\n";
    char *pac2 = "Hello World!\n";
    float f = 3.14;
    _Bool b = 0;
    int i = 91;
    printstack();
  }
  void *vp = malloc(gi);
  printstack();
}
float gf = 3;
main() {
  gf = 4;
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
