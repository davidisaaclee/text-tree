### text-tree
###

_ = require 'lodash'
parseTemplate = (require 'grammar-parser').parse

TextTree = Polymer
  is: 'text-tree'

  properties:
    ###
    TreeModel ::= HoleModel
                | LiteralModel

    HoleModel ::=
      type: 'hole'
      id: String
      placeholder: String
      isFilled: Boolean
      value: [TextTreeModel]

    LiteralModel ::=
      type: 'literal'
      value: String
    ###
    treeModel:
      type: Object
      observer: '_treeModelChanged'
      value: null
    placeholder: String

  navigate: (path, useNumericPath) ->
    @walk path,
      endFn: _.identity
      useNumericPath: useNumericPath

  # TODO: abort fold procedures if child does not exist?
  ###
  path - a path to the desired node
  options ::=
    endFn: (text-tree) -> ()
    fold:
      proc:
      acc:
  ###
  walk: (path, options) ->
    do helper = (current = this, path_ = path) ->
      if path_.length is 0
        if options.endFn?
        then options.endFn current
        else end
      else
        [hd, tl...] = path_
        nextChild = current.holeElements[hd]
        console.log 'walking from', current, 'to', nextChild, 'via', hd, this

        # Return `null` if no element at that path.
        if not nextChild?
          return null

        if options.fold?.proc?
          options.fold.acc =
            options.fold.proc options.fold.acc, nextChild

        helper nextChild, tl

  _requestFill: (evt, detail) ->
    do evt.stopPropagation # want only the deepest node to respond
    nodeModel = evt.model.piece
    @fire 'request-fill',
      idPath: nodeModel.__idPath
      numericPath: nodeModel.__numericPath
      nodeModel: nodeModel
      sender: this

  _calculatePaths: (model, idx) ->
    if not model.__parentPath?
      model.__parentPath =
        idPath: []
        numericPath: []
    model.__idPath = [model.__parentPath.idPath..., model.id]
    model.__numericPath = [model.__parentPath.numericPath..., idx] # TODO: ??

    model.value?.forEach (child) ->
      child.__parentPath =
        idPath: model.__idPath
        numericPath: model.__numericPath

  _treeModelChanged: (model) ->
    _.filter model, type: 'hole'
      .forEach @_calculatePaths

    getHoleElm = (id) =>
      _.find (Polymer.dom(@root).querySelectorAll '.node'), (elm) ->
        elm.dataset.holeId is id
    makeChildInfo = (elm) ->
      id: elm.dataset?.holeId
      isFilled: elm.classList.contains 'filled'
      container: elm
      node: Polymer.dom(elm).querySelector 'text-tree'
    # wait for elements to be created
    @async () =>
      @holeElements = _.chain model
        .filter type: 'hole'
        .map 'id'
        .reduce ((ac, id) -> ac[id] = getHoleElm id; return ac), {}
        .value()

  ## Computed properties helpers ##

  _isEqual: (a, b) -> a is b

  _isTruthy: (x) -> if x then true else false

  _isFilled: ({isFilled}) -> isFilled

  _idOfHole: ({__idPath}) -> _.last __idPath

  _getClassesFromModel: (model, extraClasses...) ->
    result = if model.classes? then model.classes else []
    if not _.isArray result
      result = [result]
    result.push extraClasses...
    return result.join ' '