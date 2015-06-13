//= require MoveInput
//= require Plus


// require('styles/Combo.sass');

var Combo = React.createClass({

  something: function(){
    return "kek";
  },

  render: function () {
    var move_inputs = this.props.move_inputs.map(function(input, index, move_inputs){
      console.log(move_inputs.length);
      var combo_complete = ((index + 1) !== move_inputs.length);
      return <MoveInput key={index} input={input} combo_complete={combo_complete} />;
    });

    return (
      <div className="Combo">
        <p>{this.props.name}</p>
        {move_inputs}
      </div>
    );

  }

});



