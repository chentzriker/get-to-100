import { useState } from "react";

// dont forget to change the turn number after
//  executing the changaNumber function!

function Game(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [numSteps, setNumSteps] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [scores, setScores] = useState(props.player.scores);

  let isTurn = props.turn === props.index;
  function arrayOfScoresToString() {
    const usersData = JSON.parse(localStorage.getItem("users"));
    let text = "";
    const copyUsers = [...usersData].find(
      (user) => user.name === props.player.name
    ).scores;
    copyUsers.push(numSteps + 1);
    copyUsers.push(",");
    localStorage.setItem("users", JSON.stringify(usersData));
    props.player.scores.map((item) => (text += item.toString()));
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
    if (num === 100) {
      props.player.scores.push(numSteps + 1);
      props.player.scores.push(",");
      arrayOfScoresToString();
      setHasWon(true);
      return;
    }
    props.moveTurn();
  }

  const divEndGame = (
    <div>
      <button onClick={() => props.quitGame(props.index)}>quit</button>
      <button onClick={newGame}>start new game</button>
    </div>
  );
  function newGame() {
    setNumber(Math.floor(Math.random() * 100));
    setNumSteps(0);
    setHasWon(false);
  }
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
