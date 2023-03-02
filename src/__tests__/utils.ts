import { cslangRunner } from '../runner/runner'

export const FAIL_RESULT = '<jest-test-case> FAILURE'

// Ideally, we'd use a tuple [string, any] type here but type inference doesn't work.
export function runTests(testCases: (string | any)[][]) {
  for (const [input, expected] of testCases) {
    test(input, () => {
      if (expected === FAIL_RESULT) {
        expect(() => {
          cslangRunner(input)
        }).toThrow()
      } else {
        expect(cslangRunner(input)).toEqual(expected)
      }
    })
  }
}
