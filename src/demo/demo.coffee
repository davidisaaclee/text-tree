tree =
  type: 'branch'
  template: "(prog \n\t_)"
  children: [
    type: 'branch'
    template: "(if _ \n\t_ \n\t_)"
    children: [
      type: 'branch'
      template: 'true'
     ,
      type: 'branch'
      template: '(arith \n\t_ \n\t_ \n\t_)'
      children: [
        type: 'branch'
        template: "(arith _ _ _)"
        children: [
          type: 'branch'
          template: '+'
         ,
          type: 'empty'
         ,
          type: 'empty'
        ]
       ,
        type: 'branch'
        template: '1'
       ,
        type: 'branch'
        template: '(arith _ _ _)'
        children: [
          type: 'empty'
         ,
          type: 'empty'
         ,
          type: 'empty'
        ]
      ]
     ,
      type: 'branch'
      template: '(foo _ _)'
      children: [
        type: 'branch'
        template: 'argument'
       ,
        type: 'empty'
      ]
    ]
  ]

treeSansWs =
  type: 'branch'
  template: "(prog _)"
  children: [
    type: 'branch'
    template: "(if _ _ _)"
    children: [
      type: 'branch'
      template: 'true'
     ,
      type: 'branch'
      template: '(arith _ _ _)'
      children: [
        type: 'branch'
        template: "(arith _ _ _)"
        children: [
          type: 'branch'
          template: '+'
         ,
          type: 'empty'
         ,
          type: 'empty'
        ]
       ,
        type: 'branch'
        template: '1'
       ,
        type: 'branch'
        template: '(arith _ _ _)'
        children: [
          type: 'empty'
         ,
          type: 'empty'
         ,
          type: 'empty'
        ]
      ]
     ,
      type: 'branch'
      template: '(foo _ _)'
      children: [
        type: 'branch'
        template: 'argument'
       ,
        type: 'empty'
      ]
    ]
  ]

simpleTree =
  type: 'branch'
  template: '(branch _)'
  children: [
    type: 'branch'
    template: "i'm leaf"
  ]

simplerTree =
  type: 'branch'
  template: "i'm leaf"

document
  .querySelector '#tree'
  .treeModel = treeSansWs

document
  .querySelector '#tree'
  .addEventListener 'requested-fill', (evt) ->
    console.log 'requested-fill'
    evt.detail.tree.fillHole evt.detail.path, simplerTree