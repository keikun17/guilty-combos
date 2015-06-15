//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({displayName: "GuiltyCombosApp",
  render: function() {

    var combo_data = [
      {name:"Dust Loop", combo_string: ['→ P','.4', 'K', '.4','↓ HS', '.6' ,'↗ D', '.6','D', '.6','→→ ↗ D' ,'.6', 'D','.8','↗ D' ,'.6', 'D', '.6', '→→ ↗ S', '.4', 'D', '.3','↗ S', '.3', 'D', '.3', '→ ↓ ↘ HS', '.3','↓ ↙ ← K'] },
      {name:"Gunflame FRC Loop", combo_string: ['↓ ↘ → P', '.6', 'P K S', '.4', '↓ ↘ → K', '1','↓ ↘ → P', '.6', 'P K S',  '.4', '↓ ↘ → K'] }
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

