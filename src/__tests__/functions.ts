import { runTests } from './utils'

// Function declarations without type default to int
const fnDeclarationWithoutType = [
  `{
  notype() {
    return 0;
  }
}`,
  undefined
]

const simpleFunction = [`int one() {}`, undefined]

// Should return 7
const fnDeclaration = [
  `int main() {
  return 7;
}`,
  7
]

// Should return 7
const fnApplication = [
  `int seven() {
  return 7;
}
int main() {
  return seven();
}`,
  7
]

// Should return 7
const globalDeclaration = [
  `int x = 7;
int main() {
  return x;
}`,
  7
]

runTests([
  fnDeclarationWithoutType,
  simpleFunction,
  fnDeclaration,
  // fnApplication,
  globalDeclaration
])
