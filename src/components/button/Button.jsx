import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  handleClick = () => {
    this.props.onButtonClick(this.props.name);
  };

  render() {
    return (
      <div className="calculator-display">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
