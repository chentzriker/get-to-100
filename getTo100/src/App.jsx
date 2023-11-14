import { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen"
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [turn, setTurn] = useState(-1);

  function addPlayerToGame(user) {
    setPlayers((prev) => [...prev, user]);
  }

  function quitGame(index) {
    setPlayers((prev) => { let clone = [...prev]; return clone.filter(!index) })
  }

  function moveTurn() {
    if (turn === players.length - 1) {
      setTurn(0)
      return;
    }
    setTurn((prev) => prev + 1)
  }


  return (
    <>
      <Header addPlayerToGame={addPlayerToGame} moveTurn={moveTurn} />
      <Screen players={players} turn={turn} moveTurn={moveTurn} quitGame={quitGame} />
    </>
  );
}

export default App;
