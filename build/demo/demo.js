(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Polymer({
  is: 'tt-demo-element',
  ready: function() {
    return this.$.tree.treeModel = [
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
            type: 'action',
            display: 'action',
            onAction: function() {
              return alert('did action');
            }
          }, {
            type: 'literal',
            value: ')'
          }
        ]
      }
    ];
  }
});

window.addEventListener('WebComponentsReady', function() {
  var sampleTree;
  sampleTree = [
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
          type: 'action',
          display: 'action',
          onAction: function() {
            return alert('did action');
          }
        }, {
          type: 'literal',
          value: ')'
        }
      ]
    }
  ];
  document.querySelector('#tree').treeModel = sampleTree;
  return document.querySelector('#tree').addEventListener('requested-fill', function(evt) {
    console.log('requested-fill', arguments);
    return console.log(evt.detail.tree.select(evt.detail.idPath));
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlBvbHltZXIoe1xuICBpczogJ3R0LWRlbW8tZWxlbWVudCcsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnRyZWUudHJlZU1vZGVsID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaG9sZScsXG4gICAgICAgIGlkOiAnc3RhcnQnLFxuICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICB2YWx1ZTogJygrICdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnaG9sZScsXG4gICAgICAgICAgICBpZDogJ3JhbmRsOjowJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAncmFuZGwnLFxuICAgICAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnc3BlY2lhbC1ub2RlJyxcbiAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICc0MidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdob2xlJyxcbiAgICAgICAgICAgIGlkOiAncmFuZHI6OjAnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdyYW5kcicsXG4gICAgICAgICAgICBpc0ZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdhY3Rpb24nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2FjdGlvbicsXG4gICAgICAgICAgICBvbkFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhbGVydCgnZGlkIGFjdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgIHZhbHVlOiAnKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGZ1bmN0aW9uKCkge1xuICB2YXIgc2FtcGxlVHJlZTtcbiAgc2FtcGxlVHJlZSA9IFtcbiAgICB7XG4gICAgICB0eXBlOiAnaG9sZScsXG4gICAgICBpZDogJ3N0YXJ0JyxcbiAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgICAgdmFsdWU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaXRlcmFsJyxcbiAgICAgICAgICB2YWx1ZTogJygrICdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdob2xlJyxcbiAgICAgICAgICBpZDogJ3JhbmRsOjowJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ3JhbmRsJyxcbiAgICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICBjbGFzc2VzOiAnc3BlY2lhbC1ub2RlJyxcbiAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAnNDInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ2hvbGUnLFxuICAgICAgICAgIGlkOiAncmFuZHI6OjAnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAncmFuZHInLFxuICAgICAgICAgIGlzRmlsbGVkOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ2FjdGlvbicsXG4gICAgICAgICAgZGlzcGxheTogJ2FjdGlvbicsXG4gICAgICAgICAgb25BY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdkaWQgYWN0aW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgIHZhbHVlOiAnKSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUnKS50cmVlTW9kZWwgPSBzYW1wbGVUcmVlO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUnKS5hZGRFdmVudExpc3RlbmVyKCdyZXF1ZXN0ZWQtZmlsbCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0ZWQtZmlsbCcsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGV2dC5kZXRhaWwudHJlZS5zZWxlY3QoZXZ0LmRldGFpbC5pZFBhdGgpKTtcbiAgfSk7XG59KTtcbiJdfQ==
