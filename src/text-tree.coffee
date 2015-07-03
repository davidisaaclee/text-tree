### text-tree
###

parseTemplate = (require 'template-parser').parse

TextTree = Polymer
  is: 'text-tree'

  properties:
    treeModel: Object

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

    console.log 'firing _touchDownHole', evt

    path = evt.model.item.path

    @fire 'request-fill',
      path: path
      sender: this