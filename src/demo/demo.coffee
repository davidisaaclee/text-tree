window.addEventListener 'WebComponentsReady', () ->
  tree =
    type: 'branch'
    template: "(prog \n\t`program`)"
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
        template: '(foo `a` `b`)'
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
    template: '(branch `arg`)'
    children: [
      type: 'branch'
      template: "i'm leaf"
    ]

  simplerTree =
    type: 'branch'
    template: "i'm leaf"

  document
    .querySelector '#tree'
    .treeModel = tree

  document
    .querySelector '#tree'
    .addEventListener 'requested-fill', (evt) ->
      evt.detail.tree.select evt.detail.path, true


  setTimeout () ->
    console.log 'selecting'
    console.log document.querySelector('#tree').navigate ['program', 'cond'], true