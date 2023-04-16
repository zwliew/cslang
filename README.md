# CSlang

An interpreter for a subset of C. Based off the interpreter for the Calculator language modified from js-slang.

# Table of Contents

- [Setting Up](#setting-up)
- [Usage](#usage)
  - [Running the Interpreter with a Program String](#running-the-interpreter-with-a-program-string)
  - [Running the Interpreter with a Program File](#running-the-interpreter-with-a-program-file)
  - [Running the Interpreter with a Test Case](#running-the-interpreter-with-a-test-case)
- [Testing](#testing)
- [Development Workflow](#development-workflow)
  - [Local development](#local-development)
  - [Git workflow](#git-workflow)

# Setting Up
1. Install [Node.js](https://nodejs.org/).
2. Install the [Yarn](https://yarnpkg.com/) package manager.
3. Install the project dependencies by running `yarn` in the project root directory:

# Usage
The interpreter can be run by passing in a program string, a path to a program, or a name of an existing test case in the `/src/__tests__` directory.

First, ensure that you build the project by running `yarn build` in the project root directory.
```bash
$ yarn build
```

## Running the Interpreter with a Program String
Run the interpreter with a program string by passing `s` or `string` followed by the program string:
```bash
$ yarn start s <program-string-here>
```

### Example
For example, running the following command should result in a program that exits with a return code of `3`.
```bash
$ yarn start string 'main() { int x = 1; int y = 2; return x + y; }'
```

Indeed, the program outputs the following:
```bash
The program exited with return code 3.
```

## Running the Interpreter with a Program File
Run the interpreter with a program file by passing `f` or `file` followed by the path to the program file:
```bash
$ yarn start f <path-to-program-file-here>
```

### Example
For example, we have included a `presentation.c` file in the project root directory that should takes an integer `n` from stdin and prints out the `n`-th fibonacci number.
```bash
$ yarn start f presentation.c
10
```

Indeed, it prints out the following:
```bash
55
The program exited with return code 55.
```

## Running the Interpreter with a Test Case
We have an extensive test suite with over 100 test cases. You can also run them in individually in the interpreter by passing the name of the test case directly.
```bash
$ yarn start <test-case-name-here>
```

### Example
Our test cases are all stored in the `/src/__tests__` directory. As an example, we have a test case called `strlen` stored in the `/src/__tests__/general.ts`, which computes the length of the string "Hello, world!". We can run it like so:
```bash
$ yarn start strlen
```

Indeed, the program outputs the following:
```bash
The program exited with return code 13.
```
where `13` is the length of the string "Hello, world!".

# Testing

As mentioned in the [Usage](#usage) section, we have an extensive test suite. Test cases are stored in `/src/__tests__`, but some test utilities are stored in `/src/utils/`.

 Most test cases are unit tests that test the functionality of individual interpreter features. However, we also have some integration tests that test the general code that one might write in a typical code base; these are stored in `/src/__tests__/general.ts`.

You can run the entire test suite by running the following command:
```bash
$ yarn test
```

Some of the test cases might output to stdout, which is expected. However, if you want to suppress the output, you can run the following command instead:
```bash
$ yarn test --silent
```

# Development workflow

## Local Development
The typical dev workflow is:
1. Run `yarn dev` to start the watcher that auto-compiles any changes.
2. Code your changes in `src/` and add test cases in `src/__tests__/`.
3. Run `yarn <test utility> <test case name>` to test your changes.
 - `yarn parser-test` runs the parser and outputs the AST.
 - `yarn analyser-test` runs the parser and static analyser.
 - `yarn interpreter-test` takes as input an AST and runs the interpreter.
 - `yarn runner-test` tests the entire evaluator, including the parser, type checker, and interpreter.
4. Run `yarn test` to run the entire test suite and ensure that your changes did not break anything.
4. Repeat steps 2 and 3.


## Git Workflow

There are two main ways that we used to merge our changes into main:

### Simplest method
1. Before starting development, rebase your branch on top of `main` (to ensure that you have synced all the changes from main)
2. Code and create your commits
3. `git merge` your commits to `main` locally without the merge commit
4. `git push` the `main` branch

**Example workflow:**
1. `git checkout ownBranch` → `git fetch main` → `git rebase main`
3. `git checkout main` → `git merge ownBranch`

### Alternative method

Same as above, up until step 2.

3. `git push` your branch
4. On GitHub, create a PR from your branch to `main` and add change notes.
5. Merge the pull request *without* the merge commit.

