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
  console.log('requested-fill');
  return evt.detail.tree.fillHole(evt.detail.path, simplerTree);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzaW1wbGVUcmVlLCBzaW1wbGVyVHJlZSwgdHJlZSwgdHJlZVNhbnNXcztcblxudHJlZSA9IHtcbiAgdHlwZTogJ2JyYW5jaCcsXG4gIHRlbXBsYXRlOiBcIihwcm9nIFxcblxcdF8pXCIsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICB0ZW1wbGF0ZTogXCIoaWYgXyBcXG5cXHRfIFxcblxcdF8pXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICd0cnVlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXFxuXFx0XyBcXG5cXHRfIFxcblxcdF8pJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiKGFyaXRoIF8gXyBfKVwiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcrJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogJyhhcml0aCBfIF8gXyknLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnKGZvbyBfIF8pJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICdhcmd1bWVudCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcblxudHJlZVNhbnNXcyA9IHtcbiAgdHlwZTogJ2JyYW5jaCcsXG4gIHRlbXBsYXRlOiBcIihwcm9nIF8pXCIsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICB0ZW1wbGF0ZTogXCIoaWYgXyBfIF8pXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICd0cnVlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggXyBfIF8pJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiKGFyaXRoIF8gXyBfKVwiLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcrJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogJyhhcml0aCBfIF8gXyknLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgIHRlbXBsYXRlOiAnKGZvbyBfIF8pJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6ICdhcmd1bWVudCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcblxuc2ltcGxlVHJlZSA9IHtcbiAgdHlwZTogJ2JyYW5jaCcsXG4gIHRlbXBsYXRlOiAnKGJyYW5jaCBfKScsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICB0ZW1wbGF0ZTogXCJpJ20gbGVhZlwiXG4gICAgfVxuICBdXG59O1xuXG5zaW1wbGVyVHJlZSA9IHtcbiAgdHlwZTogJ2JyYW5jaCcsXG4gIHRlbXBsYXRlOiBcImknbSBsZWFmXCJcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykudHJlZU1vZGVsID0gdHJlZVNhbnNXcztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUnKS5hZGRFdmVudExpc3RlbmVyKCdyZXF1ZXN0ZWQtZmlsbCcsIGZ1bmN0aW9uKGV2dCkge1xuICBjb25zb2xlLmxvZygncmVxdWVzdGVkLWZpbGwnKTtcbiAgcmV0dXJuIGV2dC5kZXRhaWwudHJlZS5maWxsSG9sZShldnQuZGV0YWlsLnBhdGgsIHNpbXBsZXJUcmVlKTtcbn0pO1xuIl19
