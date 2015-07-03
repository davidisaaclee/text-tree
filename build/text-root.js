(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var slice = [].slice;

Polymer({
  is: 'text-root',
  listeners: {
    'request-fill': '_fillRequested'
  },
  rootNode: function() {
    return this.$['root'].querySelector('.node');
  },
  navigateTo: function(path) {
    var helper;
    helper = (function(_this) {
      return function(currentHole, arg) {
        var hd, innerTree, node, tl;
        hd = arg[0], tl = 2 <= arg.length ? slice.call(arg, 1) : [];
        if ((hd === void 0) || (currentHole === void 0)) {
          return currentHole;
        } else {
          innerTree = currentHole.querySelector('text-tree');
          node = innerTree.querySelector('.node');
          if (node.classList.contains('empty')) {
            console.log('empty node!');
            return node;
          } else if (node.classList.contains('branch')) {
            return helper(Polymer.dom(node).querySelectorAll('.hole')[hd], tl);
          } else {
            return console.log('unrecognized node kind ', node);
          }
        }
      };
    })(this);
    return helper(this, path);
  },
  fillHole: function(holePath, treeModel) {
    var hole, innerTree, newInnerTree;
    hole = this.navigateTo(holePath);
    innerTree = Polymer.dom(hole).querySelector('text-tree');
    newInnerTree = document.createElement('text-tree');
    treeModel['path'] = holePath;
    newInnerTree.treeModel = treeModel;
    Polymer.dom(hole).removeChild(innerTree);
    return Polymer.dom(hole).appendChild(newInnerTree);
  },
  _fillRequested: function(event, detail) {
    event.stopPropagation();
    console.log('requested-fill', event);
    return this.fire('requested-fill', {
      path: detail.path,
      tree: this
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwidGV4dC1yb290LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuUG9seW1lcih7XG4gIGlzOiAndGV4dC1yb290JyxcbiAgbGlzdGVuZXJzOiB7XG4gICAgJ3JlcXVlc3QtZmlsbCc6ICdfZmlsbFJlcXVlc3RlZCdcbiAgfSxcbiAgcm9vdE5vZGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRbJ3Jvb3QnXS5xdWVyeVNlbGVjdG9yKCcubm9kZScpO1xuICB9LFxuICBuYXZpZ2F0ZVRvOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIGhlbHBlcjtcbiAgICBoZWxwZXIgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihjdXJyZW50SG9sZSwgYXJnKSB7XG4gICAgICAgIHZhciBoZCwgaW5uZXJUcmVlLCBub2RlLCB0bDtcbiAgICAgICAgaGQgPSBhcmdbMF0sIHRsID0gMiA8PSBhcmcubGVuZ3RoID8gc2xpY2UuY2FsbChhcmcsIDEpIDogW107XG4gICAgICAgIGlmICgoaGQgPT09IHZvaWQgMCkgfHwgKGN1cnJlbnRIb2xlID09PSB2b2lkIDApKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRIb2xlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVyVHJlZSA9IGN1cnJlbnRIb2xlLnF1ZXJ5U2VsZWN0b3IoJ3RleHQtdHJlZScpO1xuICAgICAgICAgIG5vZGUgPSBpbm5lclRyZWUucXVlcnlTZWxlY3RvcignLm5vZGUnKTtcbiAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbXB0eSBub2RlIScpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnYnJhbmNoJykpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWxwZXIoUG9seW1lci5kb20obm9kZSkucXVlcnlTZWxlY3RvckFsbCgnLmhvbGUnKVtoZF0sIHRsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd1bnJlY29nbml6ZWQgbm9kZSBraW5kICcsIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4gaGVscGVyKHRoaXMsIHBhdGgpO1xuICB9LFxuICBmaWxsSG9sZTogZnVuY3Rpb24oaG9sZVBhdGgsIHRyZWVNb2RlbCkge1xuICAgIHZhciBob2xlLCBpbm5lclRyZWUsIG5ld0lubmVyVHJlZTtcbiAgICBob2xlID0gdGhpcy5uYXZpZ2F0ZVRvKGhvbGVQYXRoKTtcbiAgICBpbm5lclRyZWUgPSBQb2x5bWVyLmRvbShob2xlKS5xdWVyeVNlbGVjdG9yKCd0ZXh0LXRyZWUnKTtcbiAgICBuZXdJbm5lclRyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXRyZWUnKTtcbiAgICB0cmVlTW9kZWxbJ3BhdGgnXSA9IGhvbGVQYXRoO1xuICAgIG5ld0lubmVyVHJlZS50cmVlTW9kZWwgPSB0cmVlTW9kZWw7XG4gICAgUG9seW1lci5kb20oaG9sZSkucmVtb3ZlQ2hpbGQoaW5uZXJUcmVlKTtcbiAgICByZXR1cm4gUG9seW1lci5kb20oaG9sZSkuYXBwZW5kQ2hpbGQobmV3SW5uZXJUcmVlKTtcbiAgfSxcbiAgX2ZpbGxSZXF1ZXN0ZWQ6IGZ1bmN0aW9uKGV2ZW50LCBkZXRhaWwpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZygncmVxdWVzdGVkLWZpbGwnLCBldmVudCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZSgncmVxdWVzdGVkLWZpbGwnLCB7XG4gICAgICBwYXRoOiBkZXRhaWwucGF0aCxcbiAgICAgIHRyZWU6IHRoaXNcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=
