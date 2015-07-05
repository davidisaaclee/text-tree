### text-tree
###

# parseTemplate = (require 'template-parser').parse
parseTemplate = (require 'grammar_parser').parse

TextTree = Polymer
  is: 'text-tree'

  properties:
    treeModel: Object

  navigate: (path, useNumericPath) ->
    @walk path,
      endFn: (x) -> x
      useNumericPath: useNumericPath

  getNthChild: (index) ->
    branchNode = Polymer.dom(this.root).querySelector('.branch')
    holes = Polymer.dom(branchNode)?.childNodes.filter (elm) -> elm.classList?.contains 'hole'
    return if holes? then holes[index]?.querySelector 'text-tree' else null

  getChild: (id) ->
    branchNode = Polymer.dom(this.root).querySelector('.branch')
    holes =
      Polymer.dom(branchNode)
        .children
        .filter ((elm) -> (elm.getAttribute 'holeId') is id)
    return if holes? then holes[0]?.querySelector 'text-tree' else null

  # TODO: abort fold procedures if child does not exist?
  walk: (path, options) ->
    [hd, tl...] = path

    nextChild = do =>
      if options.useNumericPath
      then @getNthChild hd
      else @getChild hd

    console.log 'taking step ', hd, 'from ', @, ' to ', nextChild

    # Return `null` if no element at that path.
    if not nextChild?
      return null

    if options.fold?.proc?
      options.fold.acc = options.fold.proc options.fold.acc, nextChild

    if tl.length is 0
      if options.endFn?
      then options.endFn nextChild
      else nextChild
    else
      nextChild.walk tl, options


  _isEqual: (a, b) -> a is b

  _createBranchElements: (model) ->
    if model.type is 'empty'
      [{type: 'empty', path: if model.path? then model.path else []}]
    else
      template = model.template
      path = if model.path? then model.path else []
      children = if model.children? then model.children else []

      result = parseTemplate template
      holes = result.filter (elm) -> elm.type is 'hole'

      while children.length < holes.length
        children.push {type: 'empty'}

      holes.forEach (elm, idx) ->
        elm.value = children[idx]
        elm.path = [path..., idx]
        elm.value.path = [path..., idx]

      return result

  _touchDownHole: (evt, detail) ->
    # quick-fixing this to stop extraneous mousedown trigger
    if evt.type is 'down'
      evt.stopPropagation()

      path = evt.model.item.path
      @fire 'request-fill',
        path: path
        sender: this