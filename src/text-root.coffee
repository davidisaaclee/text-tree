Polymer
  is: 'text-root'

  listeners: {
    'request-fill': '_fillRequested'
    # 'down': '_handleDown'
  }

  rootNode: () -> this.$['root'].querySelector '.node'

  navigateTo: (path) ->
    helper = (currentHole, [hd, tl...]) =>
      if (hd == undefined) or (currentHole == undefined)
        return currentHole
      else
        innerTree = currentHole.querySelector 'text-tree'
        node = innerTree.querySelector '.node'

        if node.classList.contains 'empty'
          console.log 'empty node!'
          return node

        else if node.classList.contains 'branch'
          return helper Polymer.dom(node).querySelectorAll('.hole')[hd], tl

        else
          console.log 'unrecognized node kind ', node

    helper this, path

  fillHole: (holePath, treeModel) ->
    hole = @navigateTo holePath
    innerTree = Polymer.dom(hole).querySelector 'text-tree'
    newInnerTree = document.createElement 'text-tree'
    treeModel['path'] = holePath
    newInnerTree.treeModel = treeModel

    Polymer.dom(hole).removeChild innerTree
    Polymer.dom(hole).appendChild newInnerTree

  _fillRequested: (event, detail) ->
    event.stopPropagation()

    console.log 'requested-fill', event

    @fire 'requested-fill',
      path: detail.path
      tree: this

  # _handleDown: (event, detail) -> console.log event.target