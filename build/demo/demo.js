(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('WebComponentsReady', function() {
  var simpleTree, simplerTree, tree, treeSansWs;
  tree = {
    type: 'branch',
    template: "(prog \n\t_)",
    children: [
      {
        type: 'branch',
        template: "(if _ \n\t_ \n\t_)",
        children: [
          {
            type: 'branch',
            template: 'true'
          }, {
            type: 'branch',
            template: '(arith \n\t_ \n\t_ \n\t_)',
            children: [
              {
                type: 'branch',
                template: "(arith _ _ _)",
                children: [
                  {
                    type: 'branch',
                    template: '+'
                  }, {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }
                ]
              }, {
                type: 'branch',
                template: '1'
              }, {
                type: 'branch',
                template: '(arith _ _ _)',
                children: [
                  {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }
                ]
              }
            ]
          }, {
            type: 'branch',
            template: '(foo _ _)',
            children: [
              {
                type: 'branch',
                template: 'argument'
              }, {
                type: 'empty'
              }
            ]
          }
        ]
      }
    ]
  };
  treeSansWs = {
    type: 'branch',
    template: "(prog _)",
    children: [
      {
        type: 'branch',
        template: "(if _ _ _)",
        children: [
          {
            type: 'branch',
            template: 'true'
          }, {
            type: 'branch',
            template: '(arith _ _ _)',
            children: [
              {
                type: 'branch',
                template: "(arith _ _ _)",
                children: [
                  {
                    type: 'branch',
                    template: '+'
                  }, {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }
                ]
              }, {
                type: 'branch',
                template: '1'
              }, {
                type: 'branch',
                template: '(arith _ _ _)',
                children: [
                  {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }, {
                    type: 'empty'
                  }
                ]
              }
            ]
          }, {
            type: 'branch',
            template: '(foo _ _)',
            children: [
              {
                type: 'branch',
                template: 'argument'
              }, {
                type: 'empty'
              }
            ]
          }
        ]
      }
    ]
  };
  simpleTree = {
    type: 'branch',
    template: '(branch _)',
    children: [
      {
        type: 'branch',
        template: "i'm leaf"
      }
    ]
  };
  simplerTree = {
    type: 'branch',
    template: "i'm leaf"
  };
  document.querySelector('#tree').treeModel = treeSansWs;
  document.querySelector('#tree').addEventListener('requested-fill', function(evt) {
    return evt.detail.tree.fillHole(evt.detail.path, simplerTree);
  });
  return setTimeout(function() {
    return document.querySelector('#tree').select([0, 1, 1]);
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGZ1bmN0aW9uKCkge1xuICB2YXIgc2ltcGxlVHJlZSwgc2ltcGxlclRyZWUsIHRyZWUsIHRyZWVTYW5zV3M7XG4gIHRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6IFwiKHByb2cgXFxuXFx0XylcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgdGVtcGxhdGU6IFwiKGlmIF8gXFxuXFx0XyBcXG5cXHRfKVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0cnVlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXFxuXFx0XyBcXG5cXHRfIFxcblxcdF8pJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCIoYXJpdGggXyBfIF8pXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKydcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcxJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcoZm9vIF8gXyknLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnYXJndW1lbnQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHRyZWVTYW5zV3MgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6IFwiKHByb2cgXylcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgdGVtcGxhdGU6IFwiKGlmIF8gXyBfKVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0cnVlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCIoYXJpdGggXyBfIF8pXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKydcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcxJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcoZm9vIF8gXyknLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnYXJndW1lbnQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHNpbXBsZVRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6ICcoYnJhbmNoIF8pJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgdGVtcGxhdGU6IFwiaSdtIGxlYWZcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgc2ltcGxlclRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6IFwiaSdtIGxlYWZcIlxuICB9O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZScpLnRyZWVNb2RlbCA9IHRyZWVTYW5zV3M7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykuYWRkRXZlbnRMaXN0ZW5lcigncmVxdWVzdGVkLWZpbGwnLCBmdW5jdGlvbihldnQpIHtcbiAgICByZXR1cm4gZXZ0LmRldGFpbC50cmVlLmZpbGxIb2xlKGV2dC5kZXRhaWwucGF0aCwgc2ltcGxlclRyZWUpO1xuICB9KTtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykuc2VsZWN0KFswLCAxLCAxXSk7XG4gIH0pO1xufSk7XG4iXX0=
