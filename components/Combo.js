//= require Plus
//= require Move
// require('styles/Combo.sass');

var Combo = React.createClass({displayName: "Combo",

  translate_combo_string: function(str) {
    return str.split(" ");
  },

  moves: function() {
    var move_inputs = [];
    var translate_combo_string = this.translate_combo_string;

    var delay = 0;
    var reg = /^\d+$/;

    function isDelay(move){
      return !isNaN(move);
    }

    var delay = 0;
    var move_inputs = this.props.combo_string.map(function(move, index, combo_string ){
      if(isDelay(move) === false){
        var move_inputs = translate_combo_string(move);
        var combo_complete = ((index + 1) === combo_string.length);
        // var combo_complete=false;

        console.log("move is");
        console.log(move);

        if(isDelay(combo_string[index-1]) === true){
          delay = delay + parseFloat(combo_string[index-1]);
        }else{
          delay = delay + 0.01;
        }

        console.log("delay is " + delay);

        return (
          React.createElement(Move, {delay: delay, key: index, move_inputs: move_inputs, combo_complete: combo_complete})
        )
      }

    });

    return move_inputs
  },


  render: function () {
    moves = this.moves(this);

    return (
      React.createElement("div", {className: "Combo"}, 
        React.createElement("p", null, this.props.name), 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "an-moves", component: "div", transitionAppear: true}, 
          moves
        )
      )
    );

  }

});



