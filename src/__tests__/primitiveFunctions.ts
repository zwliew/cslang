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
    int *arr = malloc(3 * sizeof(int));
    arr[2] = 100;
    return arr[2];
  }
  `,
  100
]

const mallocReuseAddress = [
  `
  int main() {
    double *x = malloc(sizeof(double));
    double *y = malloc(sizeof(double));

    free(x);

    double *z = malloc(sizeof(double));
    return x == z && x != (double *) 0;
  }
  `,
  1
]

const mallocMergeAddress = [
  `
  int main() {
    double *x = malloc(sizeof(double));
    double *y = malloc(sizeof(double));

    free(y);

    // This should reuse y's address
    int *z = malloc(sizeof(int));

    free(z);

    // Since z is deallocated, it should have merged back
    double *u = malloc(sizeof(double));

    return y == (double *) z && y == u && y != (double *) 0;
  },
  `,
  1
]

const mallocOnlyMergeBuddies = [
  `
  int main() {
    int *x = malloc(sizeof(int));
    int *y = malloc(sizeof(int));
    int *z = malloc(sizeof(int));
    int *u = malloc(sizeof(int));

    free(x);
    free(z);

    double *p = malloc(sizeof(double));

    return (double *) x != p;
  }
  `,
  1
]

const mallocUnevenSize = [
  `
  int main() {
    char *arr1 = malloc(60 * sizeof(char));
    char *arr2 = malloc(30 * sizeof(char));

    free(arr2);
    char *arr3 = malloc(60 * sizeof(char));
    
    return arr2 == arr3;
  }
  `,
  1
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
  mallocReuseAddress,
  mallocMergeAddress,
  mallocOnlyMergeBuddies,
  mallocUnevenSize,
  printStackBasic
}

runTests(primitiveFunctionsTests)
