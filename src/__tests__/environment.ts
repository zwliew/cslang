import { runTests } from '../utils/jest-utils'

const reinstateStackPointer = [
  `
  int main() {
    int *first;

    {
      int x;
      int y;
      int z;
      double q;
      char arr[13];

      first = &x;
    }

    int x;
    return &x == first;
  }
  `,
  1
]

const noOverrideGlobal = [
  `
  int global = 10;

  int foo() {
    return global;
  }

  int main() {
    int global = 20;
    return foo();
  }
  `,
  10
]

const envTest1 = [
  `
  int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }

  int main() {
    int x = 65;
    fib(10);
    int y = 66;
    return x;
  }
  `,
  65
]

export const environmentTests = {
  reinstateStackPointer,
  noOverrideGlobal,
  envTest1
}

runTests(environmentTests)
