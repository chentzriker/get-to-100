import { useState } from "react";

// dont forget to change the turn number after
//  executing the changaNumber function!

function Game(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [numSteps, setNumSteps] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [scores, setScores] = useState("");

  let isTurn = props.turn === props.index;
  function arrayOfScoresToString() {
    let text = "";
    props.player.scores.map((item) => (text += item.toString() + ","));
    setScores(text);
  }

  function changeNumber(action) {
    let num = number;
    if (action === "-") {
      num = number - 1;
      setNumber((prev) => prev - 1);
    }
    if (action === "+") {
      num = number + 1;
      setNumber((prev) => prev + 1);
    }
    if (action === "*") {
      num = number * 2;
      setNumber((prev) => prev * 2);
    }
    if (action === "/") {
      num = Math.floor(number / 2);
      setNumber((prev) => Math.floor(prev / 2));
    }
    setNumSteps((prev) => prev + 1);
    props.moveTurn();
    if (num === 100) {
      console.log("hi");
      setHasWon(true);
    }
  }

  const divEndGame = (
    <div>
      <button onClick = {()=> props.quitGame(props.index)}>quit</button>
      <button>start new game</button>
    </div>
  );
  const buttons = (
    <div>
      <button onClick={() => changeNumber("+")} disabled={!isTurn}>
        +1
      </button>
      <button onClick={() => changeNumber("-")} disabled={!isTurn}>
        -1
      </button>
      <button onClick={() => changeNumber("*")} disabled={!isTurn}>
        *2
      </button>
      <button onClick={() => changeNumber("/")} disabled={!isTurn}>
        /2
      </button>
    </div>
  );
  return (
    <div className="gameArea">
      <h3>player : {props.player.name}</h3>
      <h4>number: {number}</h4>
      <h4>steps: {numSteps}</h4>
      {hasWon ? divEndGame : buttons}
      <h4>scores: {scores}</h4>
    </div>
  );
}
export default Game;
