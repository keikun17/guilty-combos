//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({displayName: "GuiltyCombosApp",
  render: function() {
    return (
      React.createElement("div", {className: "main"}, 
        React.createElement(ReactTransitionGroup, {transitionName: "fade"}, 
          React.createElement(Combo, {name: "Dust Loop", move_inputs: ['P', 'K', 'S', 'HS', '↓', '↘', '→']})
        )
      )
    );
  }
});

