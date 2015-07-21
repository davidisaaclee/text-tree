window.addEventListener 'WebComponentsReady', () ->
  tree =
    type: 'branch'
    template: "(prog `program`)"
    children: [
      type: 'branch'
      template: "(if `cond` \n\t`then` \n\t`else`)"
      children: [
        type: 'branch'
        template: 'true'
       ,
        type: 'branch'
        template: '(arith \n\t`rator` \n\t`randl` \n\t`randr`)'
        children: [
          type: 'branch'
          template: "(arith `rator` `randl` `randr`)"
          children: [
            type: 'branch'
            template: '+'
            classes: 'special-node'
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
          template: '(arith `rator` `randl` `randr`)'
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
        template: '(list `elm*`)'
        classes: 'special-node'
        children: [
          type: 'branch'
          template: 'argument'
         ,
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
    template: '(branch\n\t`arg`)'
    children: [
      type: 'branch'
      template: "leaf"
    ]

  simplerTree =
    type: 'branch'
    template: '(branch `arg`)'
    children: [
      type: 'branch'
      template: "i'm leaf"
    ]

  simplestTree =
    type: 'branch'
    template: "i'm leaf"

  newTreeFormat =
    type: 'hole'
    id: 'start'
    isFilled: true
    value: [
      type: 'literal'
      value: '(+ '
     ,
      type: 'hole'
      id: 'randl'
      isFilled: true
      classes: 'special-node'
      value: [
        type: 'literal'
        value: '42'
      ]
     ,
      type: 'hole'
      id: 'randr'
      isFilled: false
      value: null
     ,
      type: 'literal'
      value: ')'
    ]

  document
    .querySelector '#tree'
    .treeModel = newTreeFormat

  document
    .querySelector '#tree'
    .addEventListener 'requested-fill', (evt) ->
      console.log 'requested-fill', arguments
      console.log evt.detail.tree.select evt.detail.idPath