//= require Plus
//= require Move
// require('styles/Combo.sass');

var Combo = React.createClass({

  translate_combo_string: function(str) {
    return str.split(" ");
  },

  moves: function() {
    var move_inputs = [];
    var translate_combo_string = this.translate_combo_string;

    var delay = 0;
    var move_inputs = this.props.combo_string.map(function(move, index, combo_string ){
      var move_inputs = translate_combo_string(move);
      var combo_complete = ((index + 1) === combo_string.length);
      // var combo_complete=false;

      console.log("index is");
      console.log(index);
      delay = 1 * (index + 1);

      return (
        <Move delay={delay} key={index} move_inputs={move_inputs} combo_complete={combo_complete} />
      )
    });

    return move_inputs
  },


  render: function () {
    moves = this.moves(this);

    return (
      <div className="Combo">
        <p>{this.props.name}</p>
        <ReactCSSTransitionGroup transitionName="an-moves" component="div" transitionAppear={true}>
          {moves}
        </ReactCSSTransitionGroup>
      </div>
    );

  }

});



