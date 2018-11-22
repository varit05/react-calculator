import React from "react";
import PropTypes from "prop-types";

function Display(props) {
  return (
    <div className="calculator-display">
      <p>{props.result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.Number
};

export default Display;
