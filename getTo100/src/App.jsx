import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Screen from "./components/Screen";

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayerToGame(user) {
    setPlayers((prev) => [...prev, user]);
  }

  return (
    <>
      <Header addPlayerToGame={addPlayerToGame} />
      <Screen players={players} />
    </>
  );
}

export default App;
