import { analyserTests } from '../__tests__/analyser'
import { arrayTests } from '../__tests__/arrays'
import { basicTests } from '../__tests__/basic'
import { conditionalTests } from '../__tests__/conditionals'
import { environmentTests } from '../__tests__/environment'
import { functionTests } from '../__tests__/functions'
import { generalTests } from '../__tests__/general'
import { loopTests } from '../__tests__/loops'
import { operatorTests } from '../__tests__/operators'
import { pointerTests } from '../__tests__/pointers'
import { primitiveFunctionsTests } from '../__tests__/primitiveFunctions'
import { stringTests } from '../__tests__/strings'
import { typeTests } from '../__tests__/types'

export default {
  ...arrayTests,
  ...analyserTests,
  ...basicTests,
  ...conditionalTests,
  ...functionTests,
  ...generalTests,
  ...loopTests,
  ...operatorTests,
  ...pointerTests,
  ...primitiveFunctionsTests,
  ...typeTests,
  ...stringTests,
  ...environmentTests
}
