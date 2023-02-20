export const singleDeclarationTree = {
  type: 'Declaration',
  children: [
    { type: 'TypeSpecifier', value: 'int' },
    {
      type: 'InitDeclarator',
      children: [
        {
          type: 'DeclaratorContext',
          children: [{ type: 'DirectDeclarator', value: 'i' }]
        },
        { type: 'Literal', value: 0 }
      ]
    }
  ]
}
