//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({displayName: "GuiltyCombosApp",
  render: function() {

    var combo_data = [
      {name:"Dust Loop", combo_string: ['P','.4', 'K', '.3','S', 'HS', '.7', 'P K S', '↓ ↘ →'] },
      {name:"Gunflame FRC", combo_string: ['↓ ↘ → P', '.6', 'P K S', '.2', '↓ ↘ → K', '↓ ↘ → P', '.6', 'P K S',  '.2', '↓ ↘ → K'] }
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

