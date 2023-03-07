import { DEBUG_PRINT_ANALYSIS } from '../utils/debugFlags'
import { AnalysisError } from '../utils/errors'
import { AstNode, Expression, TypeSpecifier } from './ast-types'

interface AnalysisState {
  functions: {
    [functionName: string]: {
      arity: number
      expectedReturnType: TypeSpecifier
      returns: boolean
    }
  }
  variables: {
    [variableName: string]: TypeSpecifier
  }
  currentFunction: string
}

// export const analyse

export const defaultAnalysisState = { functions: {}, variables: {}, currentFunction: 'global' }
// Traverses a given AST and builds information about it in analysisState
export const traverse = (node: AstNode, analysisState: AnalysisState) => {
  if (DEBUG_PRINT_ANALYSIS) {
    console.log(`At node ${node.type}. Analysis state:`)
    console.dir(analysisState, { depth: null })
    console.log('\n')
  }

  switch (node.type) {
    case 'CompilationUnit':
      for (const declaration of node.declarations) {
        traverse(declaration, analysisState)
      }
      break

    case 'StraySemicolon':
    case 'Literal':
    case 'Identifier':
    case 'Break':
    case 'UnaryExpression':
      break

    case 'AssignmentExpression':
      traverse(node.value, analysisState)
      break

    case 'BinaryExpression':
      traverse(node.left, analysisState)
      traverse(node.right, analysisState)
      break

    case 'Block':
      for (const statement of node.statements) {
        traverse(statement, analysisState)
      }
      break

    case 'ValueDeclaration':
      analysisState.variables[node.identifier] = node.typeSpecifier
      if (node.value) {
        traverse(node.value, analysisState)
      }
      break

    case 'ExpressionStatement':
      traverse(node.expression, analysisState)
      break

    case 'If':
      traverse(node.consequent, analysisState)
      traverse(node.predicate, analysisState)
      if (node.alternative) {
        traverse(node.alternative, analysisState)
      }
      break

    case 'WhileStatement':
    case 'DoWhileStatement':
      traverse(node.pred, analysisState)
      traverse(node.body, analysisState)
      break

    case 'Switch':
      traverse(node.block, analysisState)
      break

    case 'SwitchCaseDefault':
      traverse(node.consequent, analysisState)
      break

    case 'FunctionDeclaration':
      analysisState.functions[node.identifier] = {
        arity: node.functionDefinition.parameterList?.parameters.length ?? 0,
        expectedReturnType: node.functionDefinition.returnType,
        returns: false
      }
      const originalVariables = analysisState.variables
      const originalScope = analysisState.currentFunction
      analysisState.currentFunction = node.identifier
      for (const statement of node.functionDefinition.body) {
        traverse(statement, analysisState)
      }
      if (!analysisState.functions[node.identifier].returns) {
        throw new AnalysisError(`Function ${node.identifier} does not return any value`)
      }
      analysisState.currentFunction = originalScope
      analysisState.variables = originalVariables
      break

    case 'FunctionApplication':
      const parameterCount = analysisState.functions[node.identifier].arity
      const argumentCount = node.arguments.length
      if (parameterCount !== argumentCount) {
        throw new AnalysisError(
          `Function ${node.identifier} expected ${parameterCount} arguments but got ${argumentCount} arguments instead`
        )
      }
      break

    case 'Return':
      analysisState.functions[analysisState.currentFunction].returns = true
      // TODO: compare types
      // Currently, all types can be coerced to each other, so we don't do anything here
      const expectedReturnType =
        analysisState.functions[analysisState.currentFunction].expectedReturnType
      const returnType = staticType(node.expression, analysisState)
      break

    default:
      break
  }
}

export const staticType = (
  node: Expression | undefined,
  analysisState: AnalysisState
): TypeSpecifier => {
  if (!node) {
    return 'void'
  }
  switch (node.type) {
    case 'AssignmentExpression':
      return analysisState.variables[node.identifier]
    case 'BinaryExpression':
      // No operations change the type of an expression
      return staticType(node.left, analysisState)
    case 'Literal':
      return node.typeSpecifier
    case 'FunctionApplication':
      return analysisState.functions[node.identifier].expectedReturnType
    case 'Identifier':
      return analysisState.variables[node.identifier]
  }
  throw new AnalysisError('Unable to find type of return expression')
}
