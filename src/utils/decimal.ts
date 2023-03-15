import _Decimal from 'decimal.js'

const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom')

export default class Decimal extends _Decimal {
  [customInspectSymbol](_depth: number, _inspectOptions: any, _inspect: any) {
    return this.toString()
  }
}

export type DecimalType = Decimal | _Decimal