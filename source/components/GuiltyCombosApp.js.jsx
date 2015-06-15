//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({
  render: function() {

    var combo_data = [
      {name:"Dust Loop", combo_string: ['P', 'K', 'S', 'HS', 'P K S', '↓ ↘ →'] },
      {name:"Gunflame FRC", combo_string: ['↓ ↘ → P', 'P K S'] }
    ];


    var combos = combo_data.map(function(combo , index){
      return <Combo name={combo.name} combo_string={combo.combo_string} key={index} />
    })

    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          {combos}
        </ReactTransitionGroup>
      </div>
    );
  }
});

