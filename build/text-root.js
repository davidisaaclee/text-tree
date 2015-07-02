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
    return this.fire('requested-fill', {
      path: detail.path,
      tree: this
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwidGV4dC1yb290LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNsaWNlID0gW10uc2xpY2U7XG5cblBvbHltZXIoe1xuICBpczogJ3RleHQtcm9vdCcsXG4gIGxpc3RlbmVyczoge1xuICAgICdyZXF1ZXN0LWZpbGwnOiAnX2ZpbGxSZXF1ZXN0ZWQnXG4gIH0sXG4gIHJvb3ROb2RlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kWydyb290J10ucXVlcnlTZWxlY3RvcignLm5vZGUnKTtcbiAgfSxcbiAgbmF2aWdhdGVUbzogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBoZWxwZXI7XG4gICAgaGVscGVyID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oY3VycmVudEhvbGUsIGFyZykge1xuICAgICAgICB2YXIgaGQsIGlubmVyVHJlZSwgbm9kZSwgdGw7XG4gICAgICAgIGhkID0gYXJnWzBdLCB0bCA9IDIgPD0gYXJnLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJnLCAxKSA6IFtdO1xuICAgICAgICBpZiAoKGhkID09PSB2b2lkIDApIHx8IChjdXJyZW50SG9sZSA9PT0gdm9pZCAwKSkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50SG9sZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbm5lclRyZWUgPSBjdXJyZW50SG9sZS5xdWVyeVNlbGVjdG9yKCd0ZXh0LXRyZWUnKTtcbiAgICAgICAgICBub2RlID0gaW5uZXJUcmVlLnF1ZXJ5U2VsZWN0b3IoJy5ub2RlJyk7XG4gICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wdHkgbm9kZSEnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5jaCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVscGVyKFBvbHltZXIuZG9tKG5vZGUpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob2xlJylbaGRdLCB0bCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygndW5yZWNvZ25pemVkIG5vZGUga2luZCAnLCBub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIGhlbHBlcih0aGlzLCBwYXRoKTtcbiAgfSxcbiAgZmlsbEhvbGU6IGZ1bmN0aW9uKGhvbGVQYXRoLCB0cmVlTW9kZWwpIHtcbiAgICB2YXIgaG9sZSwgaW5uZXJUcmVlLCBuZXdJbm5lclRyZWU7XG4gICAgaG9sZSA9IHRoaXMubmF2aWdhdGVUbyhob2xlUGF0aCk7XG4gICAgaW5uZXJUcmVlID0gUG9seW1lci5kb20oaG9sZSkucXVlcnlTZWxlY3RvcigndGV4dC10cmVlJyk7XG4gICAgbmV3SW5uZXJUcmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC10cmVlJyk7XG4gICAgdHJlZU1vZGVsWydwYXRoJ10gPSBob2xlUGF0aDtcbiAgICBuZXdJbm5lclRyZWUudHJlZU1vZGVsID0gdHJlZU1vZGVsO1xuICAgIFBvbHltZXIuZG9tKGhvbGUpLnJlbW92ZUNoaWxkKGlubmVyVHJlZSk7XG4gICAgcmV0dXJuIFBvbHltZXIuZG9tKGhvbGUpLmFwcGVuZENoaWxkKG5ld0lubmVyVHJlZSk7XG4gIH0sXG4gIF9maWxsUmVxdWVzdGVkOiBmdW5jdGlvbihldmVudCwgZGV0YWlsKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZSgncmVxdWVzdGVkLWZpbGwnLCB7XG4gICAgICBwYXRoOiBkZXRhaWwucGF0aCxcbiAgICAgIHRyZWU6IHRoaXNcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=
