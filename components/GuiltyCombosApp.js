//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({displayName: "GuiltyCombosApp",
  render: function() {

    var combo_data = [
      {name:"Dust Loop", combo_string: ['P', 'K', 'S', 'HS', 'P K S', '↓ ↘ →'] },
      {name:"Gunflame FRC", combo_string: ['↓ ↘ → P', 'P K S'] }
    ];

    var combos = combo_data.map(function(combo , index){
      return React.createElement(Combo, {name: combo.name, combo_string: combo.combo_string, key: index})
    })

    return (
      React.createElement("div", {className: "main"}, 
        combos
      )
    );
  }
});

