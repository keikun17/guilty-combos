// require('styles/MoveInput.sass');

var Move = React.createClass({

  render: function () {

    var separator;
    if(this.props.combo_complete !== true) {
      separator = <Plus />;
    }

    var move_inputs = this.props.move_inputs.map(function(input, index, move_inputs ){
      console.log("input is");
      console.log(input);
      return <MoveInput key={index} input={input} combo_complete={combo_complete} />
    });

    return (
        <div className="Move">
          {move_inputs}
          {separator}
        </div>
      );
  }
});
