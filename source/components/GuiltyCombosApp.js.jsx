//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({
  render: function() {

    var combo_data = [
      {name:"Dust Loop", combo_string: ['→ P','.4', 'K', '.4','↓ HS', '.6' ,'↗ D', '.6','D', '.6','→→ ↗ D' ,'.6', 'D','.8','↗ D' ,'.6', 'D', '.6', '→→ ↗ S', '.4', 'D', '.3','↗ S', '.3', 'D', '.3', '→ ↓ ↘ HS', '.3','↓ ↙ ← K'] },
      {name:"Dust Loop -> Fafner", combo_string: ['→ P','.4', 'K', '.4','↓ HS', '.6' ,'↗ D', '.6','D', '.7','← ↙ ↓ ↘ → HS', '.4','→→ →P', '.3', '↓ HS', '.3', '↗ D', '.6', 'D'] },
      {name:"Gunflame FRC Loop", combo_string: ['↓ ↘ → P', '.6', 'P K S', '.4', '↓ ↘ → K', '1','↓ ↘ → P', '.6', 'P K S',  '.4', '↓ ↘ → K'] }
    ];

    var combos = combo_data.map(function(combo , index){
      return <Combo name={combo.name} combo_string={combo.combo_string} key={index} />
    })

    return (
      <div className='main'>
        {combos}
      </div>
    );
  }
});

