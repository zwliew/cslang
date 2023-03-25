import { basicTests } from '../__tests__/basic'
import { conditionalTests } from '../__tests__/conditionals'
import { functionTests } from '../__tests__/functions'
import { loopTests } from '../__tests__/loops'
import { operatorTests } from '../__tests__/operators'
import { pointerTests } from '../__tests__/pointers'
import { typeTests } from '../__tests__/types'

export default {
  ...basicTests,
  ...conditionalTests,
  ...functionTests,
  ...loopTests,
  ...operatorTests,
  ...pointerTests,
  ...typeTests
}
