import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import CPUChoice from "./components/cpu-choice"
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

        <div>
<CPUChoice />
        </div>
      </div>

      
    );
  }
}

export default App;
