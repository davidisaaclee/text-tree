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
    return this.fire('requested-fill', {
      path: detail.path,
      tree: this
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwidGV4dC1yb290LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG5Qb2x5bWVyKHtcbiAgaXM6ICd0ZXh0LXJvb3QnLFxuICBsaXN0ZW5lcnM6IHtcbiAgICAncmVxdWVzdC1maWxsJzogJ19maWxsUmVxdWVzdGVkJ1xuICB9LFxuICByb290Tm9kZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJFsncm9vdCddLnF1ZXJ5U2VsZWN0b3IoJy5ub2RlJyk7XG4gIH0sXG4gIG5hdmlnYXRlVG86IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgaGVscGVyO1xuICAgIGhlbHBlciA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN1cnJlbnRIb2xlLCBhcmcpIHtcbiAgICAgICAgdmFyIGhkLCBpbm5lclRyZWUsIG5vZGUsIHRsO1xuICAgICAgICBoZCA9IGFyZ1swXSwgdGwgPSAyIDw9IGFyZy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZywgMSkgOiBbXTtcbiAgICAgICAgaWYgKChoZCA9PT0gdm9pZCAwKSB8fCAoY3VycmVudEhvbGUgPT09IHZvaWQgMCkpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudEhvbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5uZXJUcmVlID0gY3VycmVudEhvbGUucXVlcnlTZWxlY3RvcigndGV4dC10cmVlJyk7XG4gICAgICAgICAgbm9kZSA9IGlubmVyVHJlZS5xdWVyeVNlbGVjdG9yKCcubm9kZScpO1xuICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtcHR5IG5vZGUhJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdicmFuY2gnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGhlbHBlcihQb2x5bWVyLmRvbShub2RlKS5xdWVyeVNlbGVjdG9yQWxsKCcuaG9sZScpW2hkXSwgdGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3VucmVjb2duaXplZCBub2RlIGtpbmQgJywgbm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiBoZWxwZXIodGhpcywgcGF0aCk7XG4gIH0sXG4gIGZpbGxIb2xlOiBmdW5jdGlvbihob2xlUGF0aCwgdHJlZU1vZGVsKSB7XG4gICAgdmFyIGhvbGUsIGlubmVyVHJlZSwgbmV3SW5uZXJUcmVlO1xuICAgIGhvbGUgPSB0aGlzLm5hdmlnYXRlVG8oaG9sZVBhdGgpO1xuICAgIGlubmVyVHJlZSA9IFBvbHltZXIuZG9tKGhvbGUpLnF1ZXJ5U2VsZWN0b3IoJ3RleHQtdHJlZScpO1xuICAgIG5ld0lubmVyVHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtdHJlZScpO1xuICAgIHRyZWVNb2RlbFsncGF0aCddID0gaG9sZVBhdGg7XG4gICAgbmV3SW5uZXJUcmVlLnRyZWVNb2RlbCA9IHRyZWVNb2RlbDtcbiAgICBQb2x5bWVyLmRvbShob2xlKS5yZW1vdmVDaGlsZChpbm5lclRyZWUpO1xuICAgIHJldHVybiBQb2x5bWVyLmRvbShob2xlKS5hcHBlbmRDaGlsZChuZXdJbm5lclRyZWUpO1xuICB9LFxuICBfZmlsbFJlcXVlc3RlZDogZnVuY3Rpb24oZXZlbnQsIGRldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmZpcmUoJ3JlcXVlc3RlZC1maWxsJywge1xuICAgICAgcGF0aDogZGV0YWlsLnBhdGgsXG4gICAgICB0cmVlOiB0aGlzXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19
