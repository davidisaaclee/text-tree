### text-tree
###

parseTemplate = (require 'template-parser').parse

TextTree = Polymer
  is: 'text-tree'

  properties:
    treeModel: Object

  navigate: (path) -> @walk path, {endFn: (x) -> x}

  getChild: (index) ->
    branchNode = Polymer.dom(this.root).querySelector('.branch')
    holes = Polymer.dom(branchNode)?.childNodes.filter (elm) -> elm.classList?.contains 'hole'
    return if holes? then holes[index]?.querySelector 'text-tree' else null

  walk: (path, options) ->
    [hd, tl...] = path
    nextChild = @getChild hd

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
    template = model.template
    path = if model.path? then model.path else []
    children = if model.children? then model.children else []

    result = parseTemplate template
    holes = result.filter (elm) -> elm.type is 'hole'

    while children.length < holes.length
      children.push {type: 'empty'}

    holes.forEach (elm, idx) ->
        elm['value'] = children[idx]
        elm['path'] = [path..., idx]
        elm['value']['path'] = [path..., idx]
    return result

  _touchDownHole: (evt, detail) ->
    evt.stopPropagation()

    path = evt.model.item.path

    console.log 'firing _touchDownHole', evt
    @fire 'request-fill',
      path: path
      sender: this