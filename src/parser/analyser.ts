import { DEBUG_PRINT_ANALYSIS } from '../utils/debug'
import { AnalysisError } from '../utils/errors'
import { AstNode, Expression, Statement, TypeSpecifier } from './ast-types'

interface GlobalState {
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

interface LocalState {}

const defaultGlobalState: GlobalState = {
  functions: {
    malloc: { arity: 1, expectedReturnType: { ptrTo: 'int' }, returns: true, returnsAValue: true },
    free: { arity: 1, expectedReturnType: 'void', returns: false, returnsAValue: true },
    putchar: { arity: 1, expectedReturnType: 'int', returns: true, returnsAValue: true },
    getchar: { arity: 0, expectedReturnType: 'char', returns: true, returnsAValue: true }
  },
  variables: {},
  currentFunction: 'global'
}
export const createGlobalState = () => JSON.parse(JSON.stringify(defaultGlobalState))

export function analyseProgram(program: AstNode): AstNode {
  const globalState = createGlobalState()
  analyseNode(program, globalState)
  return program
}

// Traverses a given AST and builds information about it in analysisState
export function analyseNode(node: AstNode, globalState: GlobalState): LocalState {
  if (DEBUG_PRINT_ANALYSIS) {
    console.log(`At node ${node.type}. Analysis state:`)
    console.dir(globalState, { depth: null })
    console.log('\n')
  }

  // Short circuit analysis if a return statement has been reached
  // TODO: we should still analyse the rest of the AST even when a return statement has been reached.
  if (
    globalState.currentFunction &&
    globalState.currentFunction in globalState.functions &&
    globalState.functions[globalState.currentFunction].returns
  ) {
    return {}
  }

  switch (node.type) {
    case 'CompilationUnit':
      for (const declaration of node.declarations) {
        analyseNode(declaration, globalState)
      }
      break

    case 'StraySemicolon':
    case 'Literal':
    case 'Identifier':
    case 'Break':
    case 'UnaryExpression':
      break

    case 'AssignmentExpression':
      analyseNode(node.value, globalState)
      break

    case 'BinaryExpression':
      analyseNode(node.left, globalState)
      analyseNode(node.right, globalState)
      break

    case 'Block':
      for (const statement of node.statements) {
        analyseNode(statement, globalState)
      }
      break

    case 'ValueDeclaration':
      globalState.variables[node.identifier] = node.typeSpecifier
      if (node.value) {
        analyseNode(node.value, globalState)
      }
      if (node.typeSpecifier === 'void') {
        throw new AnalysisError(`variable or field ${node.identifier} declared void`)
      }
      break

    case 'ExpressionStatement':
      analyseNode(node.expression, globalState)
      break

    case 'If':
      analyseNode(node.predicate, globalState)
      const alternativeAnalysisState = JSON.parse(JSON.stringify(globalState)) // structuredClone is not available in Jest
      analyseNode(node.consequent, globalState)
      if (node.alternative) {
        analyseNode(node.alternative, alternativeAnalysisState)
        globalState.functions[globalState.currentFunction].returns =
          globalState.functions[globalState.currentFunction].returns &&
          alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returns
        globalState.functions[globalState.currentFunction].returnsAValue =
          globalState.functions[globalState.currentFunction].returnsAValue &&
          alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returnsAValue
      }
      break

    case 'WhileStatement':
    case 'DoWhileStatement':
      analyseNode(node.pred, globalState)
      analyseNode(node.body, globalState)
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
        const alternativeAnalysisState = JSON.parse(JSON.stringify(globalState)) // structuredClone is not available in Jest
        analyseNode({ type: 'Block', statements: block }, alternativeAnalysisState)
        return {
          returns:
            alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction].returns,
          returnsAValue:
            alternativeAnalysisState.functions[alternativeAnalysisState.currentFunction]
              .returnsAValue
        }
      })
      if (blocksReturn.length > 0) {
        globalState.functions[globalState.currentFunction].returns = blocksReturn.every(
          ret => ret.returns
        )
        globalState.functions[globalState.currentFunction].returnsAValue = blocksReturn.every(
          ret => ret.returnsAValue
        )
      }
      break

    case 'SwitchCaseBranch':
    case 'SwitchCaseDefault':
      break

    case 'FunctionDeclaration':
      globalState.functions[node.identifier] = {
        arity: node.functionDefinition.parameterList?.parameters.length ?? 0,
        expectedReturnType: node.functionDefinition.returnType,
        returns: false,
        returnsAValue: false
      }
      const originalVariables = globalState.variables
      const originalScope = globalState.currentFunction
      globalState.currentFunction = node.identifier
      for (const statement of node.functionDefinition.body) {
        analyseNode(statement, globalState)
      }
      if (
        globalState.functions[node.identifier].expectedReturnType !== 'void' &&
        !globalState.functions[node.identifier].returnsAValue
      ) {
        // TODO: add an implicit return
        throw new AnalysisError(`Function ${node.identifier} does not return any value`)
      } else if (
        globalState.functions[node.identifier].expectedReturnType === 'void' &&
        globalState.functions[node.identifier].returnsAValue
      ) {
        throw new AnalysisError(
          `Function ${node.identifier} with void return type attempts to return a value`
        )
      }
      globalState.currentFunction = originalScope
      globalState.variables = originalVariables
      break

    case 'FunctionApplication':
      if (!(node.identifier in globalState.functions)) {
        throw new AnalysisError(`Calling function ${node.identifier} before it is declared`)
      }
      const parameterCount = globalState.functions[node.identifier].arity
      const argumentCount = node.arguments.length
      if (parameterCount !== argumentCount) {
        throw new AnalysisError(
          `Function ${node.identifier} expected ${parameterCount} arguments but got ${argumentCount} arguments instead`
        )
      }
      break

    case 'Return':
      globalState.functions[globalState.currentFunction].returns = true
      if (node.expression) {
        globalState.functions[globalState.currentFunction].returnsAValue = true
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

  return {}
}

export const staticType = (
  node: Expression | undefined,
  analysisState: GlobalState
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
