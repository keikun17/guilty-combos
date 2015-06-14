//= require MoveInput
//= require Plus
//= require Move


// require('styles/Combo.sass');

var Combo = React.createClass({

  translate_move_string: function(str) {
    str.split(" ")
  },

  moves: function() {
    var move_inputs = [];
    var translate_move_string = this.translate_move_string

    var move_inputs = this.props.move_string.map(function(move, index, move_string ){
      console.log("move is");
      console.log(move);
      // console.log("index is");
      // console.log(index);
      // console.log("move string is");
      // console.log(move_string)

      // console.log("combo is complete?");
      var combo_complete = ((index + 1) !== move_string.length);
      // console.log(combo_complete);

      return (
        <Move key={index} move_inputs={move} combo_complete={combo_complete} />
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



