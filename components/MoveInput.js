// require('styles/MoveInput.sass');

var MoveInput = React.createClass({displayName: "MoveInput",

  render: function () {

    var separator;
    if(this.props.combo_complete === true) {
      separator = React.createElement(Plus, null);
    }

    return (
        React.createElement("div", {className: "MoveInputWrapper"}, 
          React.createElement("div", {className: "MoveInput"}, 
            this.props.input
          ), 
          separator
        )
      );
  }
});
