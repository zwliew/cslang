import { AstNode } from '../parser/ast-types'

export const singleDeclarationTree: AstNode = {
  type: 'ValueDeclaration',
  typeSpecifier: 'int',
  identifier: 'i',
  value: { type: 'Literal', typeSpecifier: 'int', value: 0 }
}

export const switchCaseTree: AstNode = {
  type: 'Block',
  statements: [
    {
      type: 'Switch',
      expression: { type: 'Literal', typeSpecifier: 'int', value: 1 },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: 0 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: 0 }
            }
          },
          { type: 'Break' },
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: 1 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: 7 }
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
                operand: { type: 'Literal', typeSpecifier: 'int', value: 1 }
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
      expression: { type: 'Literal', typeSpecifier: 'int', value: 1 },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: 1 },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: 1 }
            }
          },
          { type: 'Break' }
        ]
      }
    }
  ]
}

export const simpleFunctionTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'FunctionDeclaration',
      identifier: 'one',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: { type: 'Block', statements: [] }
      }
    }
  ]
}
