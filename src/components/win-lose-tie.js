import React from "react";

export default function WinLoseTie(props) {
  const playerChose = props.playerChose;
  const cpuChose = props.cpuChose;

  if (cpuChose === playerChose) {
    return (
      <div>
        <p>
          You TIED! You chose <span>{playerChose}</span>!
        </p>
      </div>
    );
  } else if (
    (cpuChose === "rock" && playerChose === "scissors") ||
    (cpuChose === "paper" && playerChose === "rock") ||
    (cpuChose === "scissors" && playerChose === "paper")
  ) {
    return (
      <div>
        <p>
          You LOSE! You chose <span>{playerChose}</span>!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          You WIN! You chose <span>{playerChose}</span>!
        </p>
      </div>
    );
  }
}
