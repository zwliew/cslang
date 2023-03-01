import { AstNode } from '../parser/ast-types'

export const singleDeclarationTree: AstNode = {
  type: 'Declaration',
  typeSpecifier: 'int',
  identifier: 'i',
  value: { type: 'Literal', value: 0 }
}

export const switchCaseTree: AstNode = {
  type: 'Block',
  statements: [
    {
      type: 'Switch',
      expression: { type: 'Literal', value: 1 },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', value: 0 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', value: 0 }
            }
          },
          { type: 'Break' },
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', value: 1 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', value: 7 }
            }
          },
          { type: 'Break' },
          {
            type: 'SwitchCaseDefault',
            consequent: {
              type: 'ExpressionStatement',
              expression: {
                type: 'UnaryExpression',
                operator: '-',
                operand: { type: 'Literal', value: 1 }
              }
            }
          },
          { type: 'Break' }
        ]
      }
    }
  ]
}

export const switchCaseSimpleTree: AstNode = {
  type: 'Block',
  statements: [
    {
      type: 'Switch',
      expression: { type: 'Literal', value: 1 },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', value: 1 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', value: 1 }
            }
          },
          { type: 'Break' }
        ]
      }
    }
  ]
}
