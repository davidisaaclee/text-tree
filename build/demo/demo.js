(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('WebComponentsReady', function() {
  var simpleTree, simplerTree, tree, treeSansWs;
  tree = {
    type: 'branch',
    template: "(prog \n\t`program`)",
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
            template: '(foo `a` `b`)',
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
    template: '(branch `arg`)',
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
  document.querySelector('#tree').treeModel = tree;
  document.querySelector('#tree').addEventListener('requested-fill', function(evt) {
    return evt.detail.tree.select(evt.detail.path, true);
  });
  return setTimeout(function() {
    console.log('selecting');
    return console.log(document.querySelector('#tree').navigate(['program', 'cond'], true));
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignV2ViQ29tcG9uZW50c1JlYWR5JywgZnVuY3Rpb24oKSB7XG4gIHZhciBzaW1wbGVUcmVlLCBzaW1wbGVyVHJlZSwgdHJlZSwgdHJlZVNhbnNXcztcbiAgdHJlZSA9IHtcbiAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICB0ZW1wbGF0ZTogXCIocHJvZyBcXG5cXHRgcHJvZ3JhbWApXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgIHRlbXBsYXRlOiBcIihpZiBgY29uZGAgXFxuXFx0YHRoZW5gIFxcblxcdGBlbHNlYClcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndHJ1ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIFxcblxcdGByYXRvcmAgXFxuXFx0YHJhbmRsYCBcXG5cXHRgcmFuZHJgKScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiKGFyaXRoIGByYXRvcmAgYHJhbmRsYCBgcmFuZHJgKVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJysnXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnMSdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnKGFyaXRoIGByYXRvcmAgYHJhbmRsYCBgcmFuZHJgKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnKGZvbyBgYWAgYGJgKScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdhcmd1bWVudCdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgdHJlZVNhbnNXcyA9IHtcbiAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICB0ZW1wbGF0ZTogXCIocHJvZyBfKVwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICB0ZW1wbGF0ZTogXCIoaWYgXyBfIF8pXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RydWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJyhhcml0aCBfIF8gXyknLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdicmFuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIihhcml0aCBfIF8gXylcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcrJ1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzEnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJyhhcml0aCBfIF8gXyknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5J1xuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJyhmb28gXyBfKScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdhcmd1bWVudCdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgc2ltcGxlVHJlZSA9IHtcbiAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICB0ZW1wbGF0ZTogJyhicmFuY2ggYGFyZ2ApJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnJhbmNoJyxcbiAgICAgICAgdGVtcGxhdGU6IFwiaSdtIGxlYWZcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgc2ltcGxlclRyZWUgPSB7XG4gICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgdGVtcGxhdGU6IFwiaSdtIGxlYWZcIlxuICB9O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZScpLnRyZWVNb2RlbCA9IHRyZWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlJykuYWRkRXZlbnRMaXN0ZW5lcigncmVxdWVzdGVkLWZpbGwnLCBmdW5jdGlvbihldnQpIHtcbiAgICByZXR1cm4gZXZ0LmRldGFpbC50cmVlLnNlbGVjdChldnQuZGV0YWlsLnBhdGgsIHRydWUpO1xuICB9KTtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGluZycpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZScpLm5hdmlnYXRlKFsncHJvZ3JhbScsICdjb25kJ10sIHRydWUpKTtcbiAgfSk7XG59KTtcbiJdfQ==
