//= require MoveInput
//= require Plus


// require('styles/Combo.sass');

var Combo = React.createClass({displayName: "Combo",

  something: function(){
    return "kek";
  },

  render: function () {
    var move_inputs = this.props.move_inputs.map(function(input, index, move_inputs){
      console.log(move_inputs.length);
      var combo_complete = ((index + 1) !== move_inputs.length);
      return React.createElement(MoveInput, {key: index, input: input, combo_complete: combo_complete});
    });

    return (
      React.createElement("div", {className: "Combo"}, 
        React.createElement("p", null, this.props.name), 
        move_inputs
      )
    );

  }

});



