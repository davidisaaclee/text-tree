(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Polymer({
  is: 'text-root',
  listeners: {
    'request-fill': '_fillRequested'
  },
  selected: null,
  rootNode: function() {
    return this.$['root'].querySelector('.node');
  },
  select: function(path, useNumericPath) {
    var selectedElm;
    if (this.selected != null) {
      this.unselect.apply(this, this.selected);
    }
    selectedElm = this.$.root.walk(path, {
      endFn: function(elm) {
        Polymer.dom(elm).classList.add('selected');
        return elm;
      },
      useNumericPath: useNumericPath
    });
    if (selectedElm != null) {
      this.selected = arguments;
    }
    return selectedElm;
  },
  unselect: function(path, useNumericPath) {
    return this.$.root.walk(path, {
      endFn: function(elm) {
        return Polymer.dom(elm).classList.remove('selected');
      },
      fold: {
        proc: function(acc, elm) {
          return Polymer.dom(elm).classList.remove('selected');
        }
      },
      useNumericPath: useNumericPath
    });
  },
  navigate: function(path, useNumericPath) {
    return this.$.root.navigate(path, useNumericPath);
  },
  _fillRequested: function(event, detail) {
    event.stopPropagation();
    console.log('text-root::_fillRequested', event);
    return this.fire('requested-fill', {
      idPath: detail.idPath,
      numericPath: detail.numericPath,
      nodeModel: detail.nodeModel,
      tree: this
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwidGV4dC1yb290LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJQb2x5bWVyKHtcbiAgaXM6ICd0ZXh0LXJvb3QnLFxuICBsaXN0ZW5lcnM6IHtcbiAgICAncmVxdWVzdC1maWxsJzogJ19maWxsUmVxdWVzdGVkJ1xuICB9LFxuICBzZWxlY3RlZDogbnVsbCxcbiAgcm9vdE5vZGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRbJ3Jvb3QnXS5xdWVyeVNlbGVjdG9yKCcubm9kZScpO1xuICB9LFxuICBzZWxlY3Q6IGZ1bmN0aW9uKHBhdGgsIHVzZU51bWVyaWNQYXRoKSB7XG4gICAgdmFyIHNlbGVjdGVkRWxtO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIHRoaXMudW5zZWxlY3QuYXBwbHkodGhpcywgdGhpcy5zZWxlY3RlZCk7XG4gICAgfVxuICAgIHNlbGVjdGVkRWxtID0gdGhpcy4kLnJvb3Qud2FsayhwYXRoLCB7XG4gICAgICBlbmRGbjogZnVuY3Rpb24oZWxtKSB7XG4gICAgICAgIFBvbHltZXIuZG9tKGVsbSkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgcmV0dXJuIGVsbTtcbiAgICAgIH0sXG4gICAgICB1c2VOdW1lcmljUGF0aDogdXNlTnVtZXJpY1BhdGhcbiAgICB9KTtcbiAgICBpZiAoc2VsZWN0ZWRFbG0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGFyZ3VtZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkRWxtO1xuICB9LFxuICB1bnNlbGVjdDogZnVuY3Rpb24ocGF0aCwgdXNlTnVtZXJpY1BhdGgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnJvb3Qud2FsayhwYXRoLCB7XG4gICAgICBlbmRGbjogZnVuY3Rpb24oZWxtKSB7XG4gICAgICAgIHJldHVybiBQb2x5bWVyLmRvbShlbG0pLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICB9LFxuICAgICAgZm9sZDoge1xuICAgICAgICBwcm9jOiBmdW5jdGlvbihhY2MsIGVsbSkge1xuICAgICAgICAgIHJldHVybiBQb2x5bWVyLmRvbShlbG0pLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1c2VOdW1lcmljUGF0aDogdXNlTnVtZXJpY1BhdGhcbiAgICB9KTtcbiAgfSxcbiAgbmF2aWdhdGU6IGZ1bmN0aW9uKHBhdGgsIHVzZU51bWVyaWNQYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5yb290Lm5hdmlnYXRlKHBhdGgsIHVzZU51bWVyaWNQYXRoKTtcbiAgfSxcbiAgX2ZpbGxSZXF1ZXN0ZWQ6IGZ1bmN0aW9uKGV2ZW50LCBkZXRhaWwpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZygndGV4dC1yb290OjpfZmlsbFJlcXVlc3RlZCcsIGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcy5maXJlKCdyZXF1ZXN0ZWQtZmlsbCcsIHtcbiAgICAgIGlkUGF0aDogZGV0YWlsLmlkUGF0aCxcbiAgICAgIG51bWVyaWNQYXRoOiBkZXRhaWwubnVtZXJpY1BhdGgsXG4gICAgICBub2RlTW9kZWw6IGRldGFpbC5ub2RlTW9kZWwsXG4gICAgICB0cmVlOiB0aGlzXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19
