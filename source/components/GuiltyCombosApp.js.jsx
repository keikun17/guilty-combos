//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Combo name="Dust Loop" combo_string={['P', 'K', 'S', 'HS', 'P K S', '↓ ↘ →']} />
          <Combo name="Gunflame FRC" combo_string={['↓ ↘ → P', 'P K S']} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

