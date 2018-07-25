import React from "react";

export default function CpuChoice(props) {
  
  let cpuChoice;

  const random = Math.floor((Math.random() *3) +1);

  function choice (cpuChoice) {

    if (random ===1) {
      cpuChoice = 'rock';
    }
    else if (random ===2){
      cpuChoice = 'paper';
    }
    else if (random ===3){
      cpuChoice = 'scissors';
    }
    return cpuChoice;
  }
  
  return (
     <div>
      <span>{choice(random)}</span>
    </div>
  );
}
