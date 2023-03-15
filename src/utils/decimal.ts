import _Decimal from 'decimal.js'
import util from 'node:util'

export default class Decimal extends _Decimal {
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return this.toString()
  }
}
