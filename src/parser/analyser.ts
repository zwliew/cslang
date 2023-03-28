import { DEBUG_PRINT_ANALYSIS } from '../utils/debug'
import { AnalysisError } from '../utils/errors'
import { AstNode, Expression, Statement, TypeSpecifier } from './ast-types'

interface AnalysisState {
  functions: {
    [functionName: string]: {
      arity: number
      expectedReturnType: TypeSpecifier
      returns: boolean
      returnsAValue: boolean
    }
  }
  variables: {
    [variableName: string]: TypeSpecifier
  }
  currentFunction: string
}

const defaultAnalysisState: AnalysisState = {
  functions: {
    malloc: { arity: 1, expectedReturnType: { ptrTo: 'int' }, returns: true, returnsAValue: true },
    free: { arity: 1, expectedReturnType: 'void', returns: false, returnsAValue: true },
    putchar: { arity: 1, expectedReturnType: 'int', returns: true, returnsAValue: true }
  },
  variables: {},
  currentFunction: 'global'
}
export const createAnalysisState = () => JSON.parse(JSON.stringify(defaultAnalysisState))

// Traverses a given AST and builds information about it in analysisState
export const traverse = (node: AstNode, analysisState: AnalysisState) => {
  if (DEBUG_PRINT_ANALYSIS) {
    console.log(`At node ${node.type}. Analysis state:`)
    console.dir(analysisState, { depth: null })
    console.log('\n')
  }

  // Short circuit analysis if a return statement has been reached
  // TODO: we should still analyse the rest of the AST even when a return statement has been reached.
  if (
    analysisState.currentFunction &&
    analysisState.currentFunction in analysisState.functions &&
    analysisState.functions[analysisState.currentFunction].returns
  ) {
    return
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
      traverse(node.predicate, analysisState)
      const alternativeAnalysisState = JSON.parse(JSON.stringify(analysisState)) // structuredClone is not available in Jest
      traverse(node.consequent, analysisState)
      if (node.alternative) {
        traverse(node.alternative, alternativeAnalysisState)
        analysisState.functions[analysisState.currentFunction].returns =
          analysisState.functions[analysisState.currentFunction].returns &&
          alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returns
        analysisState.functions[analysisState.currentFunction].returnsAValue =
          analysisState.functions[analysisState.currentFunction].returnsAValue &&
          alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returnsAValue
      }
      break

    case 'WhileStatement':
    case 'DoWhileStatement':
      traverse(node.pred, analysisState)
      traverse(node.body, analysisState)
      break

    case 'Switch':
      // Break the block into separate blocks and traverse them with a copy of analysisState
      // Number of blocks = number of case/default statements, until a break statement is found
      const blocks: Array<Array<Statement>> = []
      let current_branch: Array<Statement> = []
      let inBranch: boolean = false
      // For each statement, check if it is a SwitchCaseBranch or SwitchCaseDefault, then
      for (const statement of node.block.statements) {
        // Ignore statements between break and case/default
        if (statement.type === 'SwitchCaseBranch' || statement.type === 'SwitchCaseDefault') {
          current_branch = []
          inBranch = true
        } else if (statement.type === 'Break' || statement.type === 'Return') {
          blocks.push(current_branch)
          inBranch = false
        } else if (!inBranch) {
          continue
        }

        current_branch.push(statement)
      }

      const blocksReturn = blocks.map(block => {
        const alternativeAnalysisState = JSON.parse(JSON.stringify(analysisState)) // structuredClone is not available in Jest
        traverse({ type: 'Block', statements: block }, alternativeAnalysisState)
        return {
          returns:
            alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returns,
          returnsAValue:
            alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction]
              .returnsAValue
        }
      })
      if (blocksReturn.length > 0) {
        analysisState.functions[analysisState.currentFunction].returns = blocksReturn.every(
          ret => ret.returns
        )
        analysisState.functions[analysisState.currentFunction].returnsAValue = blocksReturn.every(
          ret => ret.returnsAValue
        )
      }
      break

    case 'SwitchCaseBranch':
    case 'SwitchCaseDefault':
      break

    case 'FunctionDeclaration':
      analysisState.functions[node.identifier] = {
        arity: node.functionDefinition.parameterList?.parameters.length ?? 0,
        expectedReturnType: node.functionDefinition.returnType,
        returns: false,
        returnsAValue: false
      }
      const originalVariables = analysisState.variables
      const originalScope = analysisState.currentFunction
      analysisState.currentFunction = node.identifier
      for (const statement of node.functionDefinition.body) {
        traverse(statement, analysisState)
      }
      if (
        analysisState.functions[node.identifier].expectedReturnType !== 'void' &&
        !analysisState.functions[node.identifier].returnsAValue
      ) {
        // TODO: add an implicit return
        throw new AnalysisError(`Function ${node.identifier} does not return any value`)
      } else if (
        analysisState.functions[node.identifier].expectedReturnType === 'void' &&
        analysisState.functions[node.identifier].returnsAValue
      ) {
        throw new AnalysisError(
          `Function ${node.identifier} with void return type attempts to return a value`
        )
      }
      analysisState.currentFunction = originalScope
      analysisState.variables = originalVariables
      break

    case 'FunctionApplication':
      if (!(node.identifier in analysisState.functions)) {
        throw new AnalysisError(`Calling function ${node.identifier} before it is declared`)
      }
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
      if (node.expression) {
        analysisState.functions[analysisState.currentFunction].returnsAValue = true
      }
      // TODO: compare types
      // Currently, all types can be coerced to each other, so we don't do anything here
      // const expectedReturnType =
      //   analysisState.functions[analysisState.currentFunction].expectedReturnType
      // const returnType = staticType(node.expression, analysisState)
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
      return staticType(node.assignee, analysisState)
    case 'UnaryExpression':
      // No operations change the type of an expression
      return staticType(node.operand, analysisState)
    case 'BinaryExpression':
      // No operations change the type of an expression
      return staticType(node.left, analysisState)
    case 'Literal':
      return node.typeSpecifier
    case 'FunctionApplication':
      return analysisState.functions[node.identifier].expectedReturnType
    case 'Identifier':
      return analysisState.variables[node.identifier]
    case 'ConditionalExpression':
      const consequentType = staticType(node.consequent, analysisState)
      return consequentType
    case 'CastExpression':
      return node.typeSpecifier
  }
}
