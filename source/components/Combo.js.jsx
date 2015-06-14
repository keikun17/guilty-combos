//= require Plus
//= require Move


// require('styles/Combo.sass');

var Combo = React.createClass({

  translate_move_string: function(str) {
    return str.split(" ");
  },

  moves: function() {
    var move_inputs = [];
    var translate_move_string = this.translate_move_string;

    var move_inputs = this.props.move_string.map(function(move, index, move_string ){
      var move_inputs = translate_move_string(move);
      var combo_complete = ((index + 1) === move_string.length);
      // var combo_complete=false;

      return (
        <Move key={index} move_inputs={move_inputs} combo_complete={combo_complete} />
      )
    });

    return move_inputs
  },


  render: function () {
    moves = this.moves(this);

    return (
      <div className="Combo">
        <p>{this.props.name}</p>
        {moves}
      </div>
    );

  }

});



