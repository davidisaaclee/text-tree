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

  navigate: (path, useNumericPath) ->
    @walk path,
      endFn: _.identity
      useNumericPath: useNumericPath

  getNthChild: (index) ->
    branchNode =
      Polymer.dom(this.root).querySelector('.branch')
    holes =
      Polymer.dom(branchNode)
        .childNodes
        .filter (elm) -> elm.classList?.contains 'hole'

    # using if-then-else because don't want to return `undefined`
    if holes?
    then holes[index]?.querySelector 'text-tree'
    else null

  getChild: (id) ->
    console.log 'DEPRECATED: getChild'
    debugger
    # r = _.find Polymer.dom(@root).querySelectorAll('.hole'), (node) ->
    #   console.log node, node.dataset.holeId
    #   node.dataset.holeId is id
    # ttNode = r.querySelector 'text-tree'
    # # HACK: from weird markup structre
    # result =
    #   if ttNode?
    #   then ttNode
    #   else r
    # console.log 'getChild', id, @, result

  # children: () ->
  #   _.chain @treeModel.value
  #     .filter type: 'hole'
  #     .map 'id'
  #     .reduce ((acc, id) => _.extend acc, "#{id}": @getChild id), {}
  #     .value()


  # TODO: abort fold procedures if child does not exist?
  walk: (path, options) ->
    start =
      isFilled: true
      node: this
    do helper = (current = start, path_ = path) ->
      if path_.length is 0
        end = if current.isFilled then current.node else current.container
        if options.endFn?
        then options.endFn current.node, current.container, current.id
        else end
      else
        if not current.isFilled
          # reached a dead end
          return null

        current = current.node

        [hd, tl...] = path_

        # nextChild = do =>
        #   if options.useNumericPath
        #   then current.getNthChild hd
        #   else current.holeElements[hd]
        nextChild = current.holeElements[hd]

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
      _ Polymer.dom(@root).querySelectorAll '.node'
        .find (elm) -> elm.dataset.holeId is id
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
        .map getHoleElm
        .map makeChildInfo
        .reduce ((ac, hole) -> _.extend ac, "#{hole.id}": hole), {}
        .value()

  ## Computed properties helpers ##

  _isEqual: (a, b) -> a is b

  _idOfHole: ({__idPath}) -> _.last __idPath

  _getClassesFromModel: (model, extraClasses...) ->
    result = if model.classes? then model.classes else []
    if not _.isArray result
      result = [result]
    result.push extraClasses...
    return result.join ' '