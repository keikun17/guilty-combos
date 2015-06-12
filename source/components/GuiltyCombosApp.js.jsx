//= require Combo

// require('normalize.css');
// require('../styles/main.css');
// require('../styles/all.sass');

var imageURL = require('../images/yeoman.png');

var GuiltyCombosApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Combo name="Dust Loop" move_inputs={['P', 'K', 'S', 'HS', '↓', '↘', '→']} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

