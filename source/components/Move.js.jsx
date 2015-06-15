//= require MoveInput
var Move = React.createClass({

  render: function () {

    var separator;
    if(this.props.combo_complete !== true) {
      separator = <Plus />;
    }

    var move_inputs = this.props.move_inputs.map(function(input, index, move_inputs ){
      return <MoveInput key={index} input={input} />
    });

    return (
        <div className="Move">
          {move_inputs}
          {separator}
        </div>
      );
  }
});
