### text-tree
###

parseTemplate = (require 'grammar-parser').parse

TextTree = Polymer
  is: 'text-tree'

  properties:
    treeModel: Object

  navigate: (path, useNumericPath) ->
    @walk path,
      endFn: (x) -> x
      useNumericPath: useNumericPath

  getNthChild: (index) ->
    branchNode =
      Polymer.dom(this.root).querySelector('.branch')
    holes =
      Polymer.dom(branchNode)
        .childNodes
        .filter (elm) -> elm.classList?.contains 'hole'

    if holes?
    then holes[index]?.querySelector 'text-tree'
    else null

  getChild: (id) ->
    branchNode = Polymer.dom(@root).querySelector '.branch'
    for child in Polymer.dom(branchNode).children
      if child.classList.contains 'hole'
        if child.holeId is id
          return child.querySelector 'text-tree'

  # TODO: abort fold procedures if child does not exist?
  walk: (path, options) ->
    [hd, tl...] = path

    nextChild = do =>
      if options.useNumericPath
      then @getNthChild hd
      else @getChild hd

    # Return `null` if no element at that path.
    if not nextChild?
      return null

    if options.fold?.proc?
      options.fold.acc =
        options.fold.proc options.fold.acc, nextChild

    if tl.length is 0
      if options.endFn?
      then options.endFn nextChild
      else nextChild
    else
      nextChild.walk tl, options


  _isEqual: (a, b) -> a is b

  _createBranchElements: (model) ->
    console.log model
    numericPath =
      if model.numericPath?
      then model.numericPath
      else []
    idPath =
      if model.idPath?
      then model.idPath
      else []
    if model.type is 'empty'
      [{
        type: 'empty'
        numericPath: numericPath
        idPath: idPath
      }]
    else if model.type is 'branch'
      children = if model.children? then model.children else []

      template = parseTemplate model.template

      result = []
      holeCount = 0
      template.forEach (elm, idx) ->
        switch elm.type
          when 'hole'
            myNumericPath = [numericPath..., holeCount]
            myIdPath = [idPath..., elm.identifier]

            elm.value = children[holeCount]
            elm.numericPath = myNumericPath
            elm.idPath = myIdPath
            elm.value.numericPath = myNumericPath
            elm.value.idPath = myIdPath
            result.push elm
            holeCount++
          when 'variadic'
            # eat ALL the children
            for i in [holeCount...children.length]
              subhole =
                type: 'hole'
                identifier: "#{elm.identifier}-#{i}"
                index: elm.index + (i - holeCount)
                holeIndex: holeCount
              myNumericPath = [numericPath..., i]
              myIdPath = [idPath..., subhole.identifier]
              subhole.value = children[i]
              subhole.numericPath = myNumericPath
              subhole.idPath = myIdPath
              subhole.value.numericPath = myNumericPath
              subhole.value.idPath = myIdPath
              result.push subhole
              holeCount++
          else
            result.push elm

      return result

      # holes = template.filter (elm) -> elm.type is 'hole' or elm.type is 'variadic'

      # while children.length < holes.length
      #   children.push {type: 'empty'}

      # holes.forEach (elm, idx) ->
      #   myNumericPath = [numericPath..., idx]
      #   myIdPath = [idPath..., elm.identifier]

      #   elm.value = children[idx]
      #   elm.numericPath = myNumericPath
      #   elm.idPath = myIdPath
      #   elm.value.numericPath = myNumericPath
      #   elm.value.idPath = myIdPath

      # return template
    else
      console.log 'Unrecognized node model type: ', model.type

  _touchDownHole: (evt, detail) ->
    # HACK: for to stop extraneous mousedown trigger
    # (I believe that the extraneous event is being somehow caused by
    #   importing polymer-gestures separately in the non-Polymer portion
    #   of the app.)
    # if evt.type is 'down'
    #   # stop propagation so that only the deepest node responds
    #   evt.stopPropagation()

    #   nodeModel = evt.model.item
    #   @fire 'request-fill',
    #     idPath: nodeModel.idPath
    #     numericPath: nodeModel.numericPath
    #     nodeModel: nodeModel
    #     sender: this

  _requestFill: (evt, detail) ->
    # stop propagation so that only the deepest node responds
    evt.stopPropagation()

    nodeModel = evt.model.item
    @fire 'request-fill',
      idPath: nodeModel.idPath
      numericPath: nodeModel.numericPath
      nodeModel: nodeModel
      sender: this