import { runTests } from '../utils/jest-utils'

const fibonacci = [
  `
int fib(int n) {
  long long res[2];
  res[0] = 0;
  res[1] = 1;
  for (int i = 2; i <= n; i += 1) {
      long long tmp = res[1];
      res[1] += res[0];
      res[0] = tmp;
  }
  return n ? res[1] : res[0];
}
main() {
  char n = 12;
  return fib(n);
}
`,
  144
]

const fibonacciRecursive = [
  `
int fib(int n) {
  if (n < 2) 
    return n;
  return fib(n - 1) + fib(n - 2);
}
main() {
  char n = 12;
  return fib(n);
}`,
  144
]

const primalityTest = [
  `
_Bool isPrime(int n) {
  for (int d = 2; d * d <= n; d += 1) {
      if (n % d == 0) {
        return 0;
      }
  }
  return 1;
}
main() {
  int n = 1234567892;
  char result = 0;
  if (!isPrime(n)) {
    result |= 1;
  }
  n = 1618931;
  result = isPrime(n) ? result ^ 2 : result;
  return result;
}
`,
  3
]

const binaryExponentiation = [
  `
main() {
  long long base = 37;
  long long exp = 1e9 + 9;
  long long res = 1;
  int mod = 1e9 + 7;
  while (exp) {
    if (exp & 1)
      res = (res * base) % mod;
    base = (base * base) % mod;
    exp >>= 1;
  }
  return res;
}
`,
  50653 // TODO: mod 2^8 = 256 for return values from main
]

const swap = [
  `
void swap(int *x, int *y) {
  int tmp = *x;
  *x = *y;
  *y = tmp;
}
main() {
  int x = 83;
  int y = 19245;
  swap(&x, &y);
  return x - y;
}
`,
  19162
]

const extendedEuclideanAlgorithm = [
  `
int egcd(int a, int b, int *s, int *t) {
  if (!b) {
    *s = 1;
    *t = 0;
    return a;
  }
  int d = egcd(b, a % b, s, t);
  int tmp = *s;
  *s = *t;
  *t = tmp - *t * (a / b);
  return d;
}
main() {
  int a = 3732738;
  int b = 198316554;
  int s;
  int t;
  int d = egcd(a, b, &s, &t);
  return s * a + t * b + d / 2;
}
`,
  9
]

const strlen = [
  `
int strlen(char *start) {
  char *end = start;
  while (*end)
    ++end;
  return end - start;
}
main() {
  char *s = "Hello, world!";
  return strlen(s);
}
`,
  13
]

export const generalTests = {
  fibonacci,
  fibonacciRecursive,
  primalityTest,
  binaryExponentiation,
  swap,
  extendedEuclideanAlgorithm,
  strlen
}

runTests(generalTests)
