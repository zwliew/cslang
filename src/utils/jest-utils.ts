import Decimal from './decimal'

import { cslangRunner } from '../runner/runner'
import { AnalysisError } from './errors'

export const FAIL_RESULT = '<jest-test-case> FAILURE'
export const ANALYSIS_ERROR = '<jest-test-case> ANALYSIS ERROR'
export type JestTestCase = [string, any]

export function runTests(testCases: any) {
  for (const testName in testCases) {
    test(testName, () => {
      if (testCases[testName][1] === FAIL_RESULT) {
        expect(() => {
          cslangRunner(testCases[testName][0])
        }).toThrow()
      } else if (testCases[testName][1] === ANALYSIS_ERROR) {
        expect(() => {
          cslangRunner(testCases[testName][0])
        }).toThrow(AnalysisError)
      } else if (testCases[testName][1] === undefined) {
        expect(cslangRunner(testCases[testName][0])).toEqual(testCases[testName][1])
      } else {
        expect(cslangRunner(testCases[testName][0])).toEqual(new Decimal(testCases[testName][1]))
      }
    })
    // test('parse ' + testName, () => {
    //   parse(testCases[testName][0])
    // })
  }
}
