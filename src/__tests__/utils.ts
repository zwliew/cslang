import { cslangRunner } from '../runner/runner'

// Ideally, we'd use a tuple [string, any] type here but type inference doesn't work.
export function runTests(testCases: (string | any)[][]) {
  for (const [input, expected] of testCases) {
    test(input, () => {
      expect(cslangRunner(input)).toEqual(expected)
    })
  }
}
