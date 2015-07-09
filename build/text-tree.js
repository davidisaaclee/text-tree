(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = peg$FAILED,
        peg$c2 = /^[^`]/,
        peg$c3 = { type: "class", value: "[^`]", description: "[^`]" },
        peg$c4 = function(text) {
            return {
              type: "literal",
              text: text.join(""),
              index: nextIndex('piece'),
              literalIndex: nextIndex('literal')
            };
          },
        peg$c5 = "`",
        peg$c6 = { type: "literal", value: "`", description: "\"`\"" },
        peg$c7 = function(text) {
            return {
              type: "hole",
              identifier: text.join(""),
              index: nextIndex('piece'),
              holeIndex: nextIndex('hole')
            };
          },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0, s1;

      s0 = [];
      s1 = peg$parselit();
      if (s1 === peg$FAILED) {
        s1 = peg$parsevar();
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parselit();
        if (s1 === peg$FAILED) {
          s1 = peg$parsevar();
        }
      }

      return s0;
    }

    function peg$parselit() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c2.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c2.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c3); }
          }
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c4(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsevar() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 96) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c2.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c3); }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c2.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c3); }
            }
          }
        } else {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s3 = peg$c5;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c6); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c7(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }


      var indices = {};
      function nextIndex (kind) {
        if (indices[kind] == null) {
          indices[kind] = 0
        }
        return indices[kind]++
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();

},{}],2:[function(require,module,exports){

/* text-tree
 */
var TextTree, parseTemplate,
  slice = [].slice;

parseTemplate = (require('grammar_parser')).parse;

TextTree = Polymer({
  is: 'text-tree',
  properties: {
    treeModel: Object
  },
  navigate: function(path, useNumericPath) {
    return this.walk(path, {
      endFn: function(x) {
        return x;
      },
      useNumericPath: useNumericPath
    });
  },
  getNthChild: function(index) {
    var branchNode, holes, ref;
    branchNode = Polymer.dom(this.root).querySelector('.branch');
    holes = Polymer.dom(branchNode).childNodes.filter(function(elm) {
      var ref;
      return (ref = elm.classList) != null ? ref.contains('hole') : void 0;
    });
    if (holes != null) {
      return (ref = holes[index]) != null ? ref.querySelector('text-tree') : void 0;
    } else {
      return null;
    }
  },
  getChild: function(id) {
    var branchNode, child, i, len, ref;
    branchNode = Polymer.dom(this.root).querySelector('.branch');
    ref = Polymer.dom(branchNode).children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      if (child.classList.contains('hole')) {
        if (child.holeId === id) {
          return child.querySelector('text-tree');
        }
      }
    }
  },
  walk: function(path, options) {
    var hd, nextChild, ref, tl;
    hd = path[0], tl = 2 <= path.length ? slice.call(path, 1) : [];
    nextChild = (function(_this) {
      return function() {
        if (options.useNumericPath) {
          return _this.getNthChild(hd);
        } else {
          return _this.getChild(hd);
        }
      };
    })(this)();
    if (nextChild == null) {
      return null;
    }
    if (((ref = options.fold) != null ? ref.proc : void 0) != null) {
      options.fold.acc = options.fold.proc(options.fold.acc, nextChild);
    }
    if (tl.length === 0) {
      if (options.endFn != null) {
        return options.endFn(nextChild);
      } else {
        return nextChild;
      }
    } else {
      return nextChild.walk(tl, options);
    }
  },
  _isEqual: function(a, b) {
    return a === b;
  },
  _createBranchElements: function(model) {
    var children, holes, idPath, numericPath, result, template;
    numericPath = model.numericPath != null ? model.numericPath : [];
    idPath = model.idPath != null ? model.idPath : [];
    if (model.type === 'empty') {
      return [
        {
          type: 'empty',
          numericPath: numericPath,
          idPath: idPath
        }
      ];
    } else if (model.type === 'branch') {
      template = model.template;
      children = model.children != null ? model.children : [];
      result = parseTemplate(template);
      holes = result.filter(function(elm) {
        return elm.type === 'hole';
      });
      while (children.length < holes.length) {
        children.push({
          type: 'empty'
        });
      }
      holes.forEach(function(elm, idx) {
        var myIdPath, myNumericPath;
        myNumericPath = slice.call(numericPath).concat([idx]);
        myIdPath = slice.call(idPath).concat([elm.identifier]);
        elm.value = children[idx];
        elm.numericPath = myNumericPath;
        elm.idPath = myIdPath;
        elm.value.numericPath = myNumericPath;
        return elm.value.idPath = myIdPath;
      });
      return result;
    } else {
      return console.log('Unrecognized node model type: ', model.type);
    }
  },
  _touchDownHole: function(evt, detail) {},
  _requestFill: function(evt, detail) {
    var nodeModel;
    evt.stopPropagation();
    console.log('text-tree:_requestFill', evt);
    nodeModel = evt.model.item;
    return this.fire('request-fill', {
      idPath: nodeModel.idPath,
      numericPath: nodeModel.numericPath,
      nodeModel: nodeModel,
      sender: this
    });
  }
});

},{"grammar_parser":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZ3JhbW1hcl9wYXJzZXIuanMiLCJ0ZXh0LXRyZWUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8qXHJcbiAgICogR2VuZXJhdGVkIGJ5IFBFRy5qcyAwLjguMC5cclxuICAgKlxyXG4gICAqIGh0dHA6Ly9wZWdqcy5tYWpkYS5jei9cclxuICAgKi9cclxuXHJcbiAgZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcclxuICAgIGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfVxyXG4gICAgY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xyXG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgb2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcclxuICAgIHRoaXMubWVzc2FnZSAgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xyXG4gICAgdGhpcy5mb3VuZCAgICA9IGZvdW5kO1xyXG4gICAgdGhpcy5vZmZzZXQgICA9IG9mZnNldDtcclxuICAgIHRoaXMubGluZSAgICAgPSBsaW5lO1xyXG4gICAgdGhpcy5jb2x1bW4gICA9IGNvbHVtbjtcclxuXHJcbiAgICB0aGlzLm5hbWUgICAgID0gXCJTeW50YXhFcnJvclwiO1xyXG4gIH1cclxuXHJcbiAgcGVnJHN1YmNsYXNzKFN5bnRheEVycm9yLCBFcnJvcik7XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDoge30sXHJcblxyXG4gICAgICAgIHBlZyRGQUlMRUQgPSB7fSxcclxuXHJcbiAgICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9ucyA9IHsgc3RhcnQ6IHBlZyRwYXJzZXN0YXJ0IH0sXHJcbiAgICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uICA9IHBlZyRwYXJzZXN0YXJ0LFxyXG5cclxuICAgICAgICBwZWckYzAgPSBbXSxcclxuICAgICAgICBwZWckYzEgPSBwZWckRkFJTEVELFxyXG4gICAgICAgIHBlZyRjMiA9IC9eW15gXS8sXHJcbiAgICAgICAgcGVnJGMzID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlteYF1cIiwgZGVzY3JpcHRpb246IFwiW15gXVwiIH0sXHJcbiAgICAgICAgcGVnJGM0ID0gZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibGl0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IHRleHQuam9pbihcIlwiKSxcclxuICAgICAgICAgICAgICBpbmRleDogbmV4dEluZGV4KCdwaWVjZScpLFxyXG4gICAgICAgICAgICAgIGxpdGVyYWxJbmRleDogbmV4dEluZGV4KCdsaXRlcmFsJylcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgcGVnJGM1ID0gXCJgXCIsXHJcbiAgICAgICAgcGVnJGM2ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYFxcXCJcIiB9LFxyXG4gICAgICAgIHBlZyRjNyA9IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImhvbGVcIixcclxuICAgICAgICAgICAgICBpZGVudGlmaWVyOiB0ZXh0LmpvaW4oXCJcIiksXHJcbiAgICAgICAgICAgICAgaW5kZXg6IG5leHRJbmRleCgncGllY2UnKSxcclxuICAgICAgICAgICAgICBob2xlSW5kZXg6IG5leHRJbmRleCgnaG9sZScpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBwZWckY3VyclBvcyAgICAgICAgICA9IDAsXHJcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zICAgICAgPSAwLFxyXG4gICAgICAgIHBlZyRjYWNoZWRQb3MgICAgICAgID0gMCxcclxuICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH0sXHJcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgICAgICAgPSAwLFxyXG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgID0gW10sXHJcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzICAgICAgPSAwLFxyXG5cclxuICAgICAgICBwZWckcmVzdWx0O1xyXG5cclxuICAgIGlmIChcInN0YXJ0UnVsZVwiIGluIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKCEob3B0aW9ucy5zdGFydFJ1bGUgaW4gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9ucykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiA9IHBlZyRzdGFydFJ1bGVGdW5jdGlvbnNbb3B0aW9ucy5zdGFydFJ1bGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRleHQoKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHJlcG9ydGVkUG9zLCBwZWckY3VyclBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0KCkge1xyXG4gICAgICByZXR1cm4gcGVnJHJlcG9ydGVkUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpbmUoKSB7XHJcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5saW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbHVtbigpIHtcclxuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleHBlY3RlZChkZXNjcmlwdGlvbikge1xyXG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24oXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBbeyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9XSxcclxuICAgICAgICBwZWckcmVwb3J0ZWRQb3NcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBudWxsLCBwZWckcmVwb3J0ZWRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpIHtcclxuICAgICAgZnVuY3Rpb24gYWR2YW5jZShkZXRhaWxzLCBzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgdmFyIHAsIGNoO1xyXG5cclxuICAgICAgICBmb3IgKHAgPSBzdGFydFBvczsgcCA8IGVuZFBvczsgcCsrKSB7XHJcbiAgICAgICAgICBjaCA9IGlucHV0LmNoYXJBdChwKTtcclxuICAgICAgICAgIGlmIChjaCA9PT0gXCJcXG5cIikge1xyXG4gICAgICAgICAgICBpZiAoIWRldGFpbHMuc2VlbkNSKSB7IGRldGFpbHMubGluZSsrOyB9XHJcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcclxuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiXFxyXCIgfHwgY2ggPT09IFwiXFx1MjAyOFwiIHx8IGNoID09PSBcIlxcdTIwMjlcIikge1xyXG4gICAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcclxuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbisrO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgIT09IHBvcykge1xyXG4gICAgICAgIGlmIChwZWckY2FjaGVkUG9zID4gcG9zKSB7XHJcbiAgICAgICAgICBwZWckY2FjaGVkUG9zID0gMDtcclxuICAgICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWR2YW5jZShwZWckY2FjaGVkUG9zRGV0YWlscywgcGVnJGNhY2hlZFBvcywgcG9zKTtcclxuICAgICAgICBwZWckY2FjaGVkUG9zID0gcG9zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGVnJGNhY2hlZFBvc0RldGFpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGVnJGZhaWwoZXhwZWN0ZWQpIHtcclxuICAgICAgaWYgKHBlZyRjdXJyUG9zIDwgcGVnJG1heEZhaWxQb3MpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICBpZiAocGVnJGN1cnJQb3MgPiBwZWckbWF4RmFpbFBvcykge1xyXG4gICAgICAgIHBlZyRtYXhGYWlsUG9zID0gcGVnJGN1cnJQb3M7XHJcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwZWckbWF4RmFpbEV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBleHBlY3RlZCwgcG9zKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCkge1xyXG4gICAgICAgIHZhciBpID0gMTtcclxuXHJcbiAgICAgICAgZXhwZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICBpZiAoYS5kZXNjcmlwdGlvbiA8IGIuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhLmRlc2NyaXB0aW9uID4gYi5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGV4cGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKGV4cGVjdGVkW2kgLSAxXSA9PT0gZXhwZWN0ZWRbaV0pIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ0VzY2FwZShzKSB7XHJcbiAgICAgICAgICBmdW5jdGlvbiBoZXgoY2gpIHsgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gc1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCAgICdcXFxcXFxcXCcpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAgICAnXFxcXFwiJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA4L2csICdcXFxcYicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgICAnXFxcXHQnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICAgJ1xcXFxuJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcZi9nLCAgICdcXFxcZicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHIvZywgICAnXFxcXHInKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDAwLVxceDA3XFx4MEJcXHgwRVxceDBGXS9nLCBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx4MCcgKyBoZXgoY2gpOyB9KVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgnICArIGhleChjaCk7IH0pXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDE4MC1cXHUwRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUwJyArIGhleChjaCk7IH0pXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MTA4MC1cXHVGRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUnICArIGhleChjaCk7IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV4cGVjdGVkRGVzY3MgPSBuZXcgQXJyYXkoZXhwZWN0ZWQubGVuZ3RoKSxcclxuICAgICAgICAgICAgZXhwZWN0ZWREZXNjLCBmb3VuZERlc2MsIGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBleHBlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZXhwZWN0ZWREZXNjc1tpXSA9IGV4cGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwZWN0ZWREZXNjID0gZXhwZWN0ZWQubGVuZ3RoID4gMVxyXG4gICAgICAgICAgPyBleHBlY3RlZERlc2NzLnNsaWNlKDAsIC0xKS5qb2luKFwiLCBcIilcclxuICAgICAgICAgICAgICArIFwiIG9yIFwiXHJcbiAgICAgICAgICAgICAgKyBleHBlY3RlZERlc2NzW2V4cGVjdGVkLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICA6IGV4cGVjdGVkRGVzY3NbMF07XHJcblxyXG4gICAgICAgIGZvdW5kRGVzYyA9IGZvdW5kID8gXCJcXFwiXCIgKyBzdHJpbmdFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xyXG5cclxuICAgICAgICByZXR1cm4gXCJFeHBlY3RlZCBcIiArIGV4cGVjdGVkRGVzYyArIFwiIGJ1dCBcIiArIGZvdW5kRGVzYyArIFwiIGZvdW5kLlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcG9zRGV0YWlscyA9IHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpLFxyXG4gICAgICAgICAgZm91bmQgICAgICA9IHBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChwb3MpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChleHBlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3ludGF4RXJyb3IoXHJcbiAgICAgICAgbWVzc2FnZSAhPT0gbnVsbCA/IG1lc3NhZ2UgOiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSxcclxuICAgICAgICBleHBlY3RlZCxcclxuICAgICAgICBmb3VuZCxcclxuICAgICAgICBwb3MsXHJcbiAgICAgICAgcG9zRGV0YWlscy5saW5lLFxyXG4gICAgICAgIHBvc0RldGFpbHMuY29sdW1uXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc3RhcnQoKSB7XHJcbiAgICAgIHZhciBzMCwgczE7XHJcblxyXG4gICAgICBzMCA9IFtdO1xyXG4gICAgICBzMSA9IHBlZyRwYXJzZWxpdCgpO1xyXG4gICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcclxuICAgICAgICBzMSA9IHBlZyRwYXJzZXZhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlIChzMSAhPT0gcGVnJEZBSUxFRCkge1xyXG4gICAgICAgIHMwLnB1c2goczEpO1xyXG4gICAgICAgIHMxID0gcGVnJHBhcnNlbGl0KCk7XHJcbiAgICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XHJcbiAgICAgICAgICBzMSA9IHBlZyRwYXJzZXZhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHMwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWxpdCgpIHtcclxuICAgICAgdmFyIHMwLCBzMSwgczI7XHJcblxyXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xyXG4gICAgICBzMSA9IFtdO1xyXG4gICAgICBpZiAocGVnJGMyLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcclxuICAgICAgICBzMiA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XHJcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XHJcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzMpOyB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XHJcbiAgICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XHJcbiAgICAgICAgICBzMS5wdXNoKHMyKTtcclxuICAgICAgICAgIGlmIChwZWckYzIudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xyXG4gICAgICAgICAgICBzMiA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XHJcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XHJcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzKTsgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzMSA9IHBlZyRjMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcclxuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcclxuICAgICAgICBzMSA9IHBlZyRjNChzMSk7XHJcbiAgICAgIH1cclxuICAgICAgczAgPSBzMTtcclxuXHJcbiAgICAgIHJldHVybiBzMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwZWckcGFyc2V2YXIoKSB7XHJcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMztcclxuXHJcbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XHJcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gOTYpIHtcclxuICAgICAgICBzMSA9IHBlZyRjNTtcclxuICAgICAgICBwZWckY3VyclBvcysrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcclxuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNik7IH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcclxuICAgICAgICBzMiA9IFtdO1xyXG4gICAgICAgIGlmIChwZWckYzIudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xyXG4gICAgICAgICAgczMgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xyXG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xyXG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzMpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xyXG4gICAgICAgICAgd2hpbGUgKHMzICE9PSBwZWckRkFJTEVEKSB7XHJcbiAgICAgICAgICAgIHMyLnB1c2goczMpO1xyXG4gICAgICAgICAgICBpZiAocGVnJGMyLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcclxuICAgICAgICAgICAgICBzMyA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XHJcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XHJcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzMpOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgczIgPSBwZWckYzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xyXG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA5Nikge1xyXG4gICAgICAgICAgICBzMyA9IHBlZyRjNTtcclxuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcclxuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzYpOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcclxuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XHJcbiAgICAgICAgICAgIHMxID0gcGVnJGM3KHMyKTtcclxuICAgICAgICAgICAgczAgPSBzMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XHJcbiAgICAgICAgICAgIHMwID0gcGVnJGMxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xyXG4gICAgICAgICAgczAgPSBwZWckYzE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XHJcbiAgICAgICAgczAgPSBwZWckYzE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICB2YXIgaW5kaWNlcyA9IHt9O1xyXG4gICAgICBmdW5jdGlvbiBuZXh0SW5kZXggKGtpbmQpIHtcclxuICAgICAgICBpZiAoaW5kaWNlc1traW5kXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICBpbmRpY2VzW2tpbmRdID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kaWNlc1traW5kXSsrXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgcGVnJHJlc3VsdCA9IHBlZyRzdGFydFJ1bGVGdW5jdGlvbigpO1xyXG5cclxuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zID09PSBpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHBlZyRyZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA8IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgIHBlZyRmYWlsKHsgdHlwZTogXCJlbmRcIiwgZGVzY3JpcHRpb246IFwiZW5kIG9mIGlucHV0XCIgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihudWxsLCBwZWckbWF4RmFpbEV4cGVjdGVkLCBwZWckbWF4RmFpbFBvcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgU3ludGF4RXJyb3I6IFN5bnRheEVycm9yLFxyXG4gICAgcGFyc2U6ICAgICAgIHBhcnNlXHJcbiAgfTtcclxufSkoKTtcclxuIiwiXG4vKiB0ZXh0LXRyZWVcbiAqL1xudmFyIFRleHRUcmVlLCBwYXJzZVRlbXBsYXRlLFxuICBzbGljZSA9IFtdLnNsaWNlO1xuXG5wYXJzZVRlbXBsYXRlID0gKHJlcXVpcmUoJ2dyYW1tYXJfcGFyc2VyJykpLnBhcnNlO1xuXG5UZXh0VHJlZSA9IFBvbHltZXIoe1xuICBpczogJ3RleHQtdHJlZScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0cmVlTW9kZWw6IE9iamVjdFxuICB9LFxuICBuYXZpZ2F0ZTogZnVuY3Rpb24ocGF0aCwgdXNlTnVtZXJpY1BhdGgpIHtcbiAgICByZXR1cm4gdGhpcy53YWxrKHBhdGgsIHtcbiAgICAgIGVuZEZuOiBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSxcbiAgICAgIHVzZU51bWVyaWNQYXRoOiB1c2VOdW1lcmljUGF0aFxuICAgIH0pO1xuICB9LFxuICBnZXROdGhDaGlsZDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgYnJhbmNoTm9kZSwgaG9sZXMsIHJlZjtcbiAgICBicmFuY2hOb2RlID0gUG9seW1lci5kb20odGhpcy5yb290KS5xdWVyeVNlbGVjdG9yKCcuYnJhbmNoJyk7XG4gICAgaG9sZXMgPSBQb2x5bWVyLmRvbShicmFuY2hOb2RlKS5jaGlsZE5vZGVzLmZpbHRlcihmdW5jdGlvbihlbG0pIHtcbiAgICAgIHZhciByZWY7XG4gICAgICByZXR1cm4gKHJlZiA9IGVsbS5jbGFzc0xpc3QpICE9IG51bGwgPyByZWYuY29udGFpbnMoJ2hvbGUnKSA6IHZvaWQgMDtcbiAgICB9KTtcbiAgICBpZiAoaG9sZXMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIChyZWYgPSBob2xlc1tpbmRleF0pICE9IG51bGwgPyByZWYucXVlcnlTZWxlY3RvcigndGV4dC10cmVlJykgOiB2b2lkIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcbiAgZ2V0Q2hpbGQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGJyYW5jaE5vZGUsIGNoaWxkLCBpLCBsZW4sIHJlZjtcbiAgICBicmFuY2hOb2RlID0gUG9seW1lci5kb20odGhpcy5yb290KS5xdWVyeVNlbGVjdG9yKCcuYnJhbmNoJyk7XG4gICAgcmVmID0gUG9seW1lci5kb20oYnJhbmNoTm9kZSkuY2hpbGRyZW47XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbGUnKSkge1xuICAgICAgICBpZiAoY2hpbGQuaG9sZUlkID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5xdWVyeVNlbGVjdG9yKCd0ZXh0LXRyZWUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2FsazogZnVuY3Rpb24ocGF0aCwgb3B0aW9ucykge1xuICAgIHZhciBoZCwgbmV4dENoaWxkLCByZWYsIHRsO1xuICAgIGhkID0gcGF0aFswXSwgdGwgPSAyIDw9IHBhdGgubGVuZ3RoID8gc2xpY2UuY2FsbChwYXRoLCAxKSA6IFtdO1xuICAgIG5leHRDaGlsZCA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy51c2VOdW1lcmljUGF0aCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5nZXROdGhDaGlsZChoZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdldENoaWxkKGhkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSgpO1xuICAgIGlmIChuZXh0Q2hpbGQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICgoKHJlZiA9IG9wdGlvbnMuZm9sZCkgIT0gbnVsbCA/IHJlZi5wcm9jIDogdm9pZCAwKSAhPSBudWxsKSB7XG4gICAgICBvcHRpb25zLmZvbGQuYWNjID0gb3B0aW9ucy5mb2xkLnByb2Mob3B0aW9ucy5mb2xkLmFjYywgbmV4dENoaWxkKTtcbiAgICB9XG4gICAgaWYgKHRsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5kRm4gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5lbmRGbihuZXh0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5leHRDaGlsZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5leHRDaGlsZC53YWxrKHRsLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sXG4gIF9pc0VxdWFsOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH0sXG4gIF9jcmVhdGVCcmFuY2hFbGVtZW50czogZnVuY3Rpb24obW9kZWwpIHtcbiAgICB2YXIgY2hpbGRyZW4sIGhvbGVzLCBpZFBhdGgsIG51bWVyaWNQYXRoLCByZXN1bHQsIHRlbXBsYXRlO1xuICAgIG51bWVyaWNQYXRoID0gbW9kZWwubnVtZXJpY1BhdGggIT0gbnVsbCA/IG1vZGVsLm51bWVyaWNQYXRoIDogW107XG4gICAgaWRQYXRoID0gbW9kZWwuaWRQYXRoICE9IG51bGwgPyBtb2RlbC5pZFBhdGggOiBbXTtcbiAgICBpZiAobW9kZWwudHlwZSA9PT0gJ2VtcHR5Jykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdlbXB0eScsXG4gICAgICAgICAgbnVtZXJpY1BhdGg6IG51bWVyaWNQYXRoLFxuICAgICAgICAgIGlkUGF0aDogaWRQYXRoXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChtb2RlbC50eXBlID09PSAnYnJhbmNoJykge1xuICAgICAgdGVtcGxhdGUgPSBtb2RlbC50ZW1wbGF0ZTtcbiAgICAgIGNoaWxkcmVuID0gbW9kZWwuY2hpbGRyZW4gIT0gbnVsbCA/IG1vZGVsLmNoaWxkcmVuIDogW107XG4gICAgICByZXN1bHQgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICAgIGhvbGVzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihlbG0pIHtcbiAgICAgICAgcmV0dXJuIGVsbS50eXBlID09PSAnaG9sZSc7XG4gICAgICB9KTtcbiAgICAgIHdoaWxlIChjaGlsZHJlbi5sZW5ndGggPCBob2xlcy5sZW5ndGgpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhvbGVzLmZvckVhY2goZnVuY3Rpb24oZWxtLCBpZHgpIHtcbiAgICAgICAgdmFyIG15SWRQYXRoLCBteU51bWVyaWNQYXRoO1xuICAgICAgICBteU51bWVyaWNQYXRoID0gc2xpY2UuY2FsbChudW1lcmljUGF0aCkuY29uY2F0KFtpZHhdKTtcbiAgICAgICAgbXlJZFBhdGggPSBzbGljZS5jYWxsKGlkUGF0aCkuY29uY2F0KFtlbG0uaWRlbnRpZmllcl0pO1xuICAgICAgICBlbG0udmFsdWUgPSBjaGlsZHJlbltpZHhdO1xuICAgICAgICBlbG0ubnVtZXJpY1BhdGggPSBteU51bWVyaWNQYXRoO1xuICAgICAgICBlbG0uaWRQYXRoID0gbXlJZFBhdGg7XG4gICAgICAgIGVsbS52YWx1ZS5udW1lcmljUGF0aCA9IG15TnVtZXJpY1BhdGg7XG4gICAgICAgIHJldHVybiBlbG0udmFsdWUuaWRQYXRoID0gbXlJZFBhdGg7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnVW5yZWNvZ25pemVkIG5vZGUgbW9kZWwgdHlwZTogJywgbW9kZWwudHlwZSk7XG4gICAgfVxuICB9LFxuICBfdG91Y2hEb3duSG9sZTogZnVuY3Rpb24oZXZ0LCBkZXRhaWwpIHt9LFxuICBfcmVxdWVzdEZpbGw6IGZ1bmN0aW9uKGV2dCwgZGV0YWlsKSB7XG4gICAgdmFyIG5vZGVNb2RlbDtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc29sZS5sb2coJ3RleHQtdHJlZTpfcmVxdWVzdEZpbGwnLCBldnQpO1xuICAgIG5vZGVNb2RlbCA9IGV2dC5tb2RlbC5pdGVtO1xuICAgIHJldHVybiB0aGlzLmZpcmUoJ3JlcXVlc3QtZmlsbCcsIHtcbiAgICAgIGlkUGF0aDogbm9kZU1vZGVsLmlkUGF0aCxcbiAgICAgIG51bWVyaWNQYXRoOiBub2RlTW9kZWwubnVtZXJpY1BhdGgsXG4gICAgICBub2RlTW9kZWw6IG5vZGVNb2RlbCxcbiAgICAgIHNlbmRlcjogdGhpc1xuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==
