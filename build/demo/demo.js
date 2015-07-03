(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc2ltcGxlVHJlZSwgc2ltcGxlclRyZWUsIHRyZWUsIHRyZWVTYW5zV3M7XG5cbnRyZWUgPSB7XG4gIHR5cGU6ICdicmFuY2gnLFxuICB0ZW1wbGF0ZTogXCIocHJvZyBcXG5cXHRfKVwiLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgdGVtcGxhdGU6IFwiKGlmIF8gXFxuXFx0XyBcXG5cXHRfKVwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAndHJ1ZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIFxcblxcdF8gXFxuXFx0XyBcXG5cXHRfKScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBcIihhcml0aCBfIF8gXylcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKydcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICcxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogJyhmb28gXyBfKScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAnYXJndW1lbnQnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG5cbnRyZWVTYW5zV3MgPSB7XG4gIHR5cGU6ICdicmFuY2gnLFxuICB0ZW1wbGF0ZTogXCIocHJvZyBfKVwiLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgdGVtcGxhdGU6IFwiKGlmIF8gXyBfKVwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAndHJ1ZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIF8gXyBfKScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBcIihhcml0aCBfIF8gXylcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKydcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICcxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogJyhmb28gXyBfKScsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAnYXJndW1lbnQnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG5cbnNpbXBsZVRyZWUgPSB7XG4gIHR5cGU6ICdicmFuY2gnLFxuICB0ZW1wbGF0ZTogJyhicmFuY2ggXyknLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgdGVtcGxhdGU6IFwiaSdtIGxlYWZcIlxuICAgIH1cbiAgXVxufTtcblxuc2ltcGxlclRyZWUgPSB7XG4gIHR5cGU6ICdicmFuY2gnLFxuICB0ZW1wbGF0ZTogXCJpJ20gbGVhZlwiXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZScpLnRyZWVNb2RlbCA9IHRyZWVTYW5zV3M7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykuYWRkRXZlbnRMaXN0ZW5lcigncmVxdWVzdGVkLWZpbGwnLCBmdW5jdGlvbihldnQpIHtcbiAgcmV0dXJuIGV2dC5kZXRhaWwudHJlZS5maWxsSG9sZShldnQuZGV0YWlsLnBhdGgsIHNpbXBsZXJUcmVlKTtcbn0pO1xuIl19
