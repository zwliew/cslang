import Decimal from 'decimal.js'

import { AstNode } from '../parser/ast-types'

export const singleDeclarationTree: AstNode = {
  type: 'ValueDeclaration',
  typeSpecifier: 'int',
  identifier: 'i',
  value: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(0) }
}

export const switchCaseTree: AstNode = {
  type: 'Block',
  statements: [
    {
      type: 'Switch',
      expression: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(0) },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(0) }
            }
          },
          { type: 'Break' },
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(7) }
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
                operand: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) }
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
      expression: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) },
      block: {
        type: 'Block',
        statements: [
          {
            type: 'SwitchCaseBranch',
            case: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) },
            consequent: {
              type: 'ExpressionStatement',
              expression: { type: 'Literal', typeSpecifier: 'int', value: new Decimal(1) }
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

export const fnDeclarationWithArgumentsTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'FunctionDeclaration',
      identifier: 'plusThree',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: {
          type: 'Block',
          statements: [
            {
              type: 'Return',
              expression: {
                type: 'BinaryExpression',
                operator: '+',
                left: { type: 'Identifier', identifier: 'x' },
                right: { type: 'Literal', typeSpecifier: 'int', value: 3 }
              }
            }
          ]
        },
        parameters: {
          type: 'ParameterList',
          parameters: [
            {
              type: 'ParameterDeclaration',
              typeSpecifier: 'int',
              name: { type: 'Declarator', name: 'x', pointerDepth: 0 }
            }
          ]
        }
      }
    }
  ]
}

export const fnDeclarationTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'FunctionDeclaration',
      identifier: 'main',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: {
          type: 'Block',
          statements: [
            {
              type: 'Return',
              expression: { type: 'Literal', typeSpecifier: 'int', value: 7 }
            }
          ]
        }
      }
    }
  ]
}

export const fnApplicationWithArgumentsTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'FunctionDeclaration',
      identifier: 'plusThree',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: {
          type: 'Block',
          statements: [
            {
              type: 'Return',
              expression: {
                type: 'BinaryExpression',
                operator: '+',
                left: { type: 'Identifier', identifier: 'x' },
                right: { type: 'Literal', typeSpecifier: 'int', value: 3 }
              }
            }
          ]
        },
        parameterList: {
          type: 'ParameterList',
          parameters: [
            {
              type: 'ParameterDeclaration',
              typeSpecifier: 'int',
              name: { type: 'Declarator', name: 'x', pointerDepth: 0 }
            }
          ]
        }
      }
    },
    {
      type: 'FunctionDeclaration',
      identifier: 'main',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: {
          type: 'Block',
          statements: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'FunctionApplication',
                identifier: 'plusThree',
                arguments: [{ type: 'Literal', typeSpecifier: 'int', value: 4 }]
              }
            }
          ]
        }
      }
    }
  ]
}

export const globalDeclarationTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'ValueDeclaration',
      typeSpecifier: 'int',
      identifier: 'x',
      value: { type: 'Literal', typeSpecifier: 'int', value: 7 }
    },
    {
      type: 'FunctionDeclaration',
      identifier: 'main',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: {
          type: 'Block',
          statements: [
            {
              type: 'Return',
              expression: { type: 'Identifier', identifier: 'x' }
            }
          ]
        }
      }
    }
  ]
}

export const allDeclarationsTree = {
  type: 'CompilationUnit',
  declarations: [
    {
      type: 'FunctionDeclaration',
      identifier: 'main',
      functionDefinition: {
        type: 'FunctionDefinition',
        returnType: 'int',
        body: [
          {
            type: 'ValueDeclaration',
            typeSpecifier: 'int',
            identifier: 'i',
            value: { type: 'Literal', typeSpecifier: 'int', value: 1 }
          },
          {
            type: 'ValueDeclaration',
            typeSpecifier: 'float',
            identifier: 'f',
            value: { type: 'Literal', typeSpecifier: 'float', value: 2.2 }
          },
          {
            type: 'ExpressionStatement',
            expression: { type: 'Identifier', identifier: 'f' }
          }
        ]
      }
    }
  ]
}
