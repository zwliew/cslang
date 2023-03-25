import { runTests } from '../utils/jest-utils'

const fibonacci = [
  `
main() {
  int n = 12;
  long long fst = 0;
  long long snd = 1;
  for (int i = 2; i <= n; i += 1) {
      long long tmp = snd;
      snd += fst;
      fst = tmp;
  }
  return n ? snd : fst;
}
`,
  144
]

const primalityTest = [
  `
main() {
  int n = 1234567892;
  char result = 0;
  for (int d = 2; d * d <= n; d += 1) {
      if (n % d == 0) {
        result |= 1;
      }
  }
  n = 1618931;
  _Bool prime = 1;
  for (int d = 2; d * d <= n; d += 1) {
      if (n % d == 0) {
        prime = 0;
      }
  }
  if (prime) {
    result |= 2;
  }
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

export const generalTests = {
  fibonacci,
  primalityTest,
  binaryExponentiation
}

runTests(generalTests)
