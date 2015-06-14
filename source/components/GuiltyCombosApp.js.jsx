//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var GuiltyCombosApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Combo name="Dust Loop" move_string={['P', 'K', 'S', 'HS', 'P K S', '↓ ↘ →']} />
          <Combo name="Gunflame FRC" move_string={['↓ ↘ → P', 'P K S']} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

