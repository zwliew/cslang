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

export const generalTests = {
  fibonacci
}

runTests(generalTests)
