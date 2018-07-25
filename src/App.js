import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import CPUChoice from "./components/cpu-choice";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOver: false,
      playerChose: "",
      cpuChose: ''
    };
  }

  playerPick(e) {
    this.setState({
      gameOver: true,
      playerChose: e.target.id
    });
  }

  choice() {
    let cpuChoice;
    const random = Math.floor(Math.random() * 3 + 1);

    if (random === 1) {
      cpuChoice = "rock";
    } else if (random === 2) {
      cpuChoice = "paper";
    } else if (random === 3) {
      cpuChoice = "scissors";
    }
    this.setState({
      cpuChose: cpuChoice
    });
  }

  choice()

  render() {
    console.log(this.state);
    if (this.state.gameOver === true) {
      return (
        <div>
          <CPUChoice choice={() => this.cpuChose()} />
        </div>
      );
    }
    return (
      <div className="App">
        <Button onClick={e => this.playerPick(e)} label="rock" />
        <Button onClick={e => this.playerPick(e)} label="paper" />
        <Button onClick={e => this.playerPick(e)} label="scissors" />
      </div>
    );
  }
}

export default App;
