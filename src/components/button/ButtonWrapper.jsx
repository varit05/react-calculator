import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

import "./ButtonWrapper.css";

class ButtonWrapper extends React.Component {
  handleClick = buttonName => {
    this.props.onButtonClick(buttonName);
  };

  render() {
    return (
      <div class="button-wrapper">
        <div>
          <Button name="AC" onButtonClick={this.handleClick} />
          <Button name="+-" onButtonClick={this.handleClick} />
          <Button name="%" onButtonClick={this.handleClick} />
          <Button name="/" onButtonClick={this.handleClick} />
        </div>
        <div>
          <Button name="9" onButtonClick={this.handleClick} />
          <Button name="8" onButtonClick={this.handleClick} />
          <Button name="7" onButtonClick={this.handleClick} />
          <Button name="x" onButtonClick={this.handleClick} />
        </div>
        <div>
          <Button name="6" onButtonClick={this.handleClick} />
          <Button name="5" onButtonClick={this.handleClick} />
          <Button name="4" onButtonClick={this.handleClick} />
          <Button name="-" onButtonClick={this.handleClick} />
        </div>
        <div>
          <Button name="3" onButtonClick={this.handleClick} />
          <Button name="2" onButtonClick={this.handleClick} />
          <Button name="1" onButtonClick={this.handleClick} />
          <Button name="+" onButtonClick={this.handleClick} />
        </div>
        <div>
          <Button name="0" onButtonClick={this.handleClick} />
          <Button name="." onButtonClick={this.handleClick} />
          <Button name="=" onButtonClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonWrapper.propTypes = {
  onButtonClick: PropTypes.func
};

export default ButtonWrapper;
