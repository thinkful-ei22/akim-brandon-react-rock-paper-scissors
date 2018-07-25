import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Button id="rock-button" label="rock" />
        <Button id="paper-button" label="paper" />
        <Button id="scissors-button" label="scissors" />
      </div>
    );
  }
}

export default App;
