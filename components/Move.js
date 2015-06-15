//= require MoveInput
var Move = React.createClass({displayName: "Move",

  render: function () {

    var separator;
    if(this.props.combo_complete !== true) {
      separator = React.createElement(Plus, null);
    }


    var move_inputs = this.props.move_inputs.map(function(input, index, move_inputs ){
      return React.createElement(MoveInput, {key: index, input: input})
    });

    var divStyle = {
      WebkitTransitionDelay: this.props.delay + "s",
      msTransitionDelay: this.props.delay + "s",
    }

    return (
        React.createElement("div", {style: divStyle, className: "Move"}, 
          move_inputs, 
          separator
        )
      );
  }
});
