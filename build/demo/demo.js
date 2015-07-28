(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('WebComponentsReady', function() {
  var newTreeFormat, simpleTree, simplerTree, simplestTree, tree, treeSansWs;
  tree = {
    type: 'branch',
    template: "(prog `program`)",
    children: [
      {
        type: 'branch',
        template: "(if `cond` \n\t`then` \n\t`else`)",
        children: [
          {
            type: 'branch',
            template: 'true'
          }, {
            type: 'branch',
            template: '(arith \n\t`rator` \n\t`randl` \n\t`randr`)',
            children: [
              {
                type: 'branch',
                template: "(arith `rator` `randl` `randr`)",
                children: [
                  {
                    type: 'branch',
                    template: '+',
                    classes: 'special-node'
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
                template: '(arith `rator` `randl` `randr`)',
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
            template: '(list `elm*`)',
            classes: 'special-node',
            children: [
              {
                type: 'branch',
                template: 'argument'
              }, {
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
    template: '(branch\n\t`arg`)',
    children: [
      {
        type: 'branch',
        template: "leaf"
      }
    ]
  };
  simplerTree = {
    type: 'branch',
    template: '(branch `arg`)',
    children: [
      {
        type: 'branch',
        template: "i'm leaf"
      }
    ]
  };
  simplestTree = {
    type: 'branch',
    template: "i'm leaf"
  };
  newTreeFormat = [
    {
      type: 'hole',
      id: 'start',
      isFilled: true,
      value: [
        {
          type: 'literal',
          value: '(+ '
        }, {
          type: 'hole',
          id: 'randl::0',
          placeholder: 'randl',
          isFilled: true,
          classes: 'special-node',
          value: [
            {
              type: 'literal',
              value: '42'
            }
          ]
        }, {
          type: 'hole',
          id: 'randr::0',
          placeholder: 'randr',
          isFilled: false,
          value: null
        }, {
          type: 'literal',
          value: ')'
        }
      ]
    }
  ];
  document.querySelector('#tree').treeModel = newTreeFormat;
  return document.querySelector('#tree').addEventListener('requested-fill', function(evt) {
    console.log('requested-fill', arguments);
    return console.log(evt.detail.tree.select(evt.detail.idPath));
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBmdW5jdGlvbigpIHtcbiAgdmFyIG5ld1RyZWVGb3JtYXQsIHNpbXBsZVRyZWUsIHNpbXBsZXJUcmVlLCBzaW1wbGVzdFRyZWUsIHRyZWUsIHRyZWVTYW5zV3M7XG4gIHRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6IFwiKHByb2cgYHByb2dyYW1gKVwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICB0ZW1wbGF0ZTogXCIoaWYgYGNvbmRgIFxcblxcdGB0aGVuYCBcXG5cXHRgZWxzZWApXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RydWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJyhhcml0aCBcXG5cXHRgcmF0b3JgIFxcblxcdGByYW5kbGAgXFxuXFx0YHJhbmRyYCknLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIihhcml0aCBgcmF0b3JgIGByYW5kbGAgYHJhbmRyYClcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcrJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ3NwZWNpYWwtbm9kZSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcxJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcoYXJpdGggYHJhdG9yYCBgcmFuZGxgIGByYW5kcmApJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICcobGlzdCBgZWxtKmApJyxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdzcGVjaWFsLW5vZGUnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnYXJndW1lbnQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2FyZ3VtZW50J1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICB0cmVlU2Fuc1dzID0ge1xuICAgIHR5cGU6ICdicmFuY2gnLFxuICAgIHRlbXBsYXRlOiBcIihwcm9nIF8pXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgIHRlbXBsYXRlOiBcIihpZiBfIF8gXylcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndHJ1ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIF8gXyBfKScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiKGFyaXRoIF8gXyBfKVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJysnXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnMSdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIF8gXyBfKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnKGZvbyBfIF8pJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2FyZ3VtZW50J1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBzaW1wbGVUcmVlID0ge1xuICAgIHR5cGU6ICdicmFuY2gnLFxuICAgIHRlbXBsYXRlOiAnKGJyYW5jaFxcblxcdGBhcmdgKScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgIHRlbXBsYXRlOiBcImxlYWZcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgc2ltcGxlclRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6ICcoYnJhbmNoIGBhcmdgKScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgIHRlbXBsYXRlOiBcImknbSBsZWFmXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHNpbXBsZXN0VHJlZSA9IHtcbiAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICB0ZW1wbGF0ZTogXCJpJ20gbGVhZlwiXG4gIH07XG4gIG5ld1RyZWVGb3JtYXQgPSBbXG4gICAge1xuICAgICAgdHlwZTogJ2hvbGUnLFxuICAgICAgaWQ6ICdzdGFydCcsXG4gICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgdmFsdWU6ICcoKyAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnaG9sZScsXG4gICAgICAgICAgaWQ6ICdyYW5kbDo6MCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdyYW5kbCcsXG4gICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgICAgY2xhc3NlczogJ3NwZWNpYWwtbm9kZScsXG4gICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICB2YWx1ZTogJzQyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdob2xlJyxcbiAgICAgICAgICBpZDogJ3JhbmRyOjowJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ3JhbmRyJyxcbiAgICAgICAgICBpc0ZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdsaXRlcmFsJyxcbiAgICAgICAgICB2YWx1ZTogJyknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykudHJlZU1vZGVsID0gbmV3VHJlZUZvcm1hdDtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykuYWRkRXZlbnRMaXN0ZW5lcigncmVxdWVzdGVkLWZpbGwnLCBmdW5jdGlvbihldnQpIHtcbiAgICBjb25zb2xlLmxvZygncmVxdWVzdGVkLWZpbGwnLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhldnQuZGV0YWlsLnRyZWUuc2VsZWN0KGV2dC5kZXRhaWwuaWRQYXRoKSk7XG4gIH0pO1xufSk7XG4iXX0=
