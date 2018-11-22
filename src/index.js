import React from "react";
import ReactDOM from "react-dom";

import Display from "./components/display/Display";
import ButtonWrapper from "./components/button/ButtonWrapper";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = buttonName => {
    console.log(buttonName);
  };

  render() {
    let result = this.state.next || this.state.total || "0";
    return (
      <div className="App">
        <h1>Hello React calculator</h1>
        <Display result={result} />
        <ButtonWrapper onButtonClick={this.handleClick} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
