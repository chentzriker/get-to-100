import { useState } from "react";

function Game(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [numSteps, setNumSteps] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [scores, setScores] = useState("");

  function arrayOfScoresToString() {
    let text = "";
    props.player.scores.map((item, index) => (text += item.toString() + ","));
    setScores(text);
  }

  const a = number === 100;
  function changeNumber(action) {
    if (action === "-") {
      setNumber((prev) => prev - 1);
    }
    if (action === "+") {
      setNumber((prev) => prev + 1);
    }
    if (action === "*") {
      setNumber((prev) => prev * 2);
    }
    if (action === "/") {
      setNumber((prev) => Math.floor(prev / 2));
    }
    setNumSteps((prev) => prev + 1);
    afterChange();
  }
  function afterChange() {
    console.log(number);
    if (a) {
      // setHasWon(true);
      console.log("hi");
      props.player.scores.push(numSteps);
      arrayOfScoresToString();
    }
  }

  const divEndGame = (
    <div>
      <button>quit</button>
      <button>start new game</button>
    </div>
  );
  const buttons = (
    <div>
      <button onClick={() => changeNumber("+")}>+1</button>
      <button onClick={() => changeNumber("-")}>-1</button>
      <button onClick={() => changeNumber("*")}>*2</button>
      <button onClick={() => changeNumber("/")}>/2</button>
    </div>
  );
  return (
    <div>
      <h3>player : {props.player.name}</h3>
      <h4>number: {number}</h4>
      <h4>steps: {numSteps}</h4>
      {number === 100 ? divEndGame : buttons}
      <h4>scores: {scores}</h4>
    </div>
  );
}
export default Game;
