import { ZERO_DECIMAL } from '../interpreter/constants'
import {
  isArithmeticType,
  isArrayType,
  isCompatiblePointerType,
  isIntegerType,
  isPointerType,
  isScalarType,
  isVoidType
} from '../types'
import { DEBUG_PRINT_ANALYSIS } from '../utils/debug'
import { DecimalType } from '../utils/decimal'
import { AnalysisError, NotImplementedError } from '../utils/errors'
import {
  ArrayTypeSpecifier,
  AstNode,
  PointerTypeSpecifier,
  Statement,
  TypeSpecifier
} from './ast-types'

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

interface LocalState {
  typeSpecifier?: TypeSpecifier
  value?: DecimalType
}

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

    case 'Literal':
      return { typeSpecifier: node.typeSpecifier, value: node.value }

    case 'Identifier':
      if (!(node.identifier in globalState.variables)) {
        throw new AnalysisError(`Use of undeclared identifier '${node.identifier}'`)
      }
      return { typeSpecifier: globalState.variables[node.identifier] }

    case 'StraySemicolon':
    case 'Break':
      break

    case 'UnaryExpression': {
      const operand = analyseNode(node.operand, globalState)
      if (!operand.typeSpecifier) {
        throw new AnalysisError('Undefined type for operand of unary expression')
      }
      switch (node.operator) {
        case '-':
        case '+':
          if (!isArithmeticType(operand.typeSpecifier)) {
            throw new AnalysisError(
              `invalid argument type ${operand.typeSpecifier} to unary expression`
            )
          }
          // TODO: the type should be the promoted type of the operand
          return { typeSpecifier: operand.typeSpecifier }

        case '*':
          if (!isPointerType(operand.typeSpecifier)) {
            throw new AnalysisError(
              `indirection requires pointer operand ('${operand.typeSpecifier}' invalid)`
            )
          }
          return { typeSpecifier: (operand.typeSpecifier as PointerTypeSpecifier).ptrTo }

        case '&':
          // TODO: ensure that only lvalues can be taken
          return { typeSpecifier: { ptrTo: operand.typeSpecifier } }
      }
      return { typeSpecifier: operand.typeSpecifier }
    }

    case 'AssignmentExpression': {
      const value = analyseNode(node.value, globalState)
      const assignee = analyseNode(node.assignee, globalState)
      if (!value.typeSpecifier || !assignee.typeSpecifier) {
        throw new AnalysisError(
          `Undefined type for ${JSON.stringify(node.value)} or ${JSON.stringify(
            node.assignee
          )} of assignment expression`
        )
      }

      switch (node.operator) {
        case '=':
          if (
            !(isArithmeticType(value.typeSpecifier) && isArithmeticType(assignee.typeSpecifier)) &&
            !isCompatiblePointerType(value.typeSpecifier, assignee.typeSpecifier) &&
            !(isPointerType(assignee.typeSpecifier) && value.value === ZERO_DECIMAL) &&
            !(assignee.typeSpecifier === '_Bool' && isPointerType(value.typeSpecifier))
          ) {
            throw new AnalysisError(
              `Assigning to '${assignee.typeSpecifier}' from incompatible type '${value.typeSpecifier}`
            )
          }
          break

        case '+=':
        case '-=':
          if (
            !(isPointerType(assignee.typeSpecifier) && isIntegerType(value.typeSpecifier)) &&
            !(isArithmeticType(assignee.typeSpecifier) && isArithmeticType(value.typeSpecifier))
          ) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                assignee.typeSpecifier
              )}' and '${JSON.stringify(value.typeSpecifier)}')`
            )
          }
          break

        case '*=':
        case '/=':
          if (
            !(isArithmeticType(assignee.typeSpecifier) && isArithmeticType(value.typeSpecifier))
          ) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                assignee.typeSpecifier
              )}' and '${JSON.stringify(value.typeSpecifier)}')`
            )
          }
          break

        case '%=':
        case '&=':
        case '|=':
        case '^=':
        case '<<=':
        case '>>=':
          if (!(isIntegerType(assignee.typeSpecifier) && isIntegerType(value.typeSpecifier))) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                assignee.typeSpecifier
              )}' and '${JSON.stringify(value.typeSpecifier)}')`
            )
          }
          break
      }
      return { typeSpecifier: assignee.typeSpecifier }
    }

    case 'BinaryExpression': {
      const lhs = analyseNode(node.left, globalState)
      const rhs = analyseNode(node.right, globalState)
      if (!lhs.typeSpecifier || !rhs.typeSpecifier) {
        throw new NotImplementedError(`Undefined types for ${node.left.type} or ${node.right.type}`)
      }
      switch (node.operator) {
        case '+':
          if (
            !(isArithmeticType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier)) &&
            !(isArithmeticType(lhs.typeSpecifier) && isPointerType(rhs.typeSpecifier)) &&
            !(isPointerType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier)) &&
            !(isArrayType(lhs.typeSpecifier) && isIntegerType(rhs.typeSpecifier)) &&
            !(isArrayType(rhs.typeSpecifier) && isIntegerType(lhs.typeSpecifier))
          ) {
            throw new AnalysisError(
              `invalid operands to binary expression '+' ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          let typeSpecifier = lhs.typeSpecifier
          if (isArrayType(lhs.typeSpecifier)) {
            typeSpecifier = { ptrTo: (lhs.typeSpecifier as ArrayTypeSpecifier).arrOf }
          } else if (isArrayType(rhs.typeSpecifier)) {
            typeSpecifier = { ptrTo: (rhs.typeSpecifier as ArrayTypeSpecifier).arrOf }
          }
          return { typeSpecifier }

        case '-':
          if (
            !(isArithmeticType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier)) &&
            !isCompatiblePointerType(lhs.typeSpecifier, rhs.typeSpecifier) &&
            !(isPointerType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier))
          ) {
            throw new AnalysisError(
              `invalid operands to binary expression '-' ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          return { typeSpecifier: lhs.typeSpecifier }

        // TODO: remove duplicated code for assignment and binary expressions
        case '*':
        case '/':
          if (!(isArithmeticType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier))) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          break

        case '%':
        case '&':
        case '|':
        case '^':
        case '<<':
        case '>>':
          if (!(isIntegerType(lhs.typeSpecifier) && isIntegerType(rhs.typeSpecifier))) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          return { typeSpecifier: 'int' }

        case '==':
        case '!=':
          if (
            !(isArithmeticType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier)) &&
            !isCompatiblePointerType(lhs.typeSpecifier, rhs.typeSpecifier) &&
            !(isPointerType(lhs.typeSpecifier) && rhs.value === ZERO_DECIMAL) &&
            !(isPointerType(rhs.typeSpecifier) && rhs.value === ZERO_DECIMAL)
          ) {
            throw new AnalysisError(
              `comparison between ('${lhs.typeSpecifier}' and '${rhs.typeSpecifier}')`
            )
          }
          return { typeSpecifier: 'int' }

        case '||':
        case '&&':
          if (!(isScalarType(lhs.typeSpecifier) && isScalarType(rhs.typeSpecifier))) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          return { typeSpecifier: 'int' }

        case '<':
        case '>':
        case '<=':
        case '>=':
          if (
            !isCompatiblePointerType(lhs.typeSpecifier, rhs.typeSpecifier) &&
            !(isArithmeticType(lhs.typeSpecifier) && isArithmeticType(rhs.typeSpecifier))
          ) {
            throw new AnalysisError(
              `Invalid operands to binary expression ${node.operator} ('${JSON.stringify(
                lhs.typeSpecifier
              )}' and '${JSON.stringify(rhs.typeSpecifier)}')`
            )
          }
          return { typeSpecifier: 'int' }

        default:
          throw new NotImplementedError(`Binary operator ${JSON.stringify(node)} not implemented`)
      }

      return { typeSpecifier: lhs.typeSpecifier }
    }

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
        throw new AnalysisError(`variable ${node.identifier} has incomplete type 'void'`)
      }
      return { typeSpecifier: node.typeSpecifier }

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
      {
        globalState.functions[node.identifier] = {
          arity: node.functionDefinition.parameterList?.parameters.length ?? 0,
          expectedReturnType: node.functionDefinition.returnType,
          returns: false,
          returnsAValue: false
        }

        // Create a new current function state
        const originalVariables = globalState.variables
        const originalScope = globalState.currentFunction
        globalState.currentFunction = node.identifier
        globalState.variables = { ...originalVariables }
        for (const parameter of node.functionDefinition.parameterList?.parameters ?? []) {
          globalState.variables[parameter.identifier] = parameter.typeSpecifier
        }

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
      }
      break

    case 'FunctionApplication': {
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
      return { typeSpecifier: globalState.functions[node.identifier].expectedReturnType }
    }

    case 'Return':
      if (node.expression) {
        analyseNode(node.expression, globalState)
        globalState.functions[globalState.currentFunction].returnsAValue = true
      }
      globalState.functions[globalState.currentFunction].returns = true
      // TODO: compare types
      // Currently, all types can be coerced to each other, so we don't do anything here
      // const expectedReturnType =
      //   analysisState.functions[analysisState.currentFunction].expectedReturnType
      // const returnType = staticType(node.expression, analysisState)
      break

    case 'CastExpression': {
      const operand = analyseNode(node.operand, globalState)
      if (!operand.typeSpecifier) {
        throw new AnalysisError('Cannot cast an expression with unknown type')
      }
      if (!isScalarType(operand.typeSpecifier) && !isArrayType(operand.typeSpecifier)) {
        throw new AnalysisError(
          `Operand of type ${JSON.stringify(
            operand.typeSpecifier
          )} where arithmetic or pointer type is required`
        )
      }
      return { typeSpecifier: node.typeSpecifier }
    }

    case 'ConditionalExpression': {
      const predicate = analyseNode(node.predicate, globalState)
      const consequent = analyseNode(node.consequent, globalState)
      const alternative = analyseNode(node.alternative, globalState)
      if (!predicate.typeSpecifier || !consequent.typeSpecifier || !alternative.typeSpecifier) {
        throw new AnalysisError('Cannot perform conditional expression on unknown types')
      }
      if (!isScalarType(predicate.typeSpecifier)) {
        throw new AnalysisError(
          `Used type '${JSON.stringify(
            predicate.typeSpecifier
          )}' where arithmetic or pointer type is required`
        )
      }
      if (
        !(
          isArithmeticType(consequent.typeSpecifier) && isArithmeticType(alternative.typeSpecifier)
        ) &&
        !(isVoidType(consequent.typeSpecifier) && isVoidType(alternative.typeSpecifier)) &&
        !isCompatiblePointerType(consequent.typeSpecifier, alternative.typeSpecifier) &&
        !(isPointerType(consequent.typeSpecifier) && alternative.value === ZERO_DECIMAL) &&
        !(isPointerType(alternative.typeSpecifier) && consequent.value === ZERO_DECIMAL)
      ) {
        throw new AnalysisError(
          `Used type '${JSON.stringify(
            consequent.typeSpecifier
          )}' where arithmetic or pointer type is required`
        )
      }
      return { typeSpecifier: consequent.typeSpecifier }
    }

    default:
      break
  }

  return {}
}
