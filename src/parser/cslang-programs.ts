export default {
  singleDeclaration: `int i = 0;`,
  multipleDeclaration: `int j = 1;
                        int k = 2;`,
  semicolon: `;`,
  helloWorld: `
                main()
                {
                    printf("Hello world!");
                }
                `,
  topLevelDeclarationWithExpression: `int x = 3 + 3;`,
  topLevelExpression: `3 + 3;`,
  // The first and last empty lines after the braces are also considered as statements/declarations in the parsing.
  // Thus, there are 2 additional TerminalNodes, one at the beginning and one at the end, which are flattened away in the AST tree
  block: `
        {
            int x = 3+3;
            x+2;
        }
        `
}
