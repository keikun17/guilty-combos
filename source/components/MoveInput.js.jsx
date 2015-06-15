var MoveInput = React.createClass({

  render: function () {

    var separator;
    if(this.props.combo_complete === true) {
      separator = <Plus />;
    }

    return (
        <div className="MoveInputWrapper">
          <div className="MoveInput">
            {this.props.input}
          </div>
          {separator}
        </div>
      );
  }
});
