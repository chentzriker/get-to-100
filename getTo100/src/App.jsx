import { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen"
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayerToGame(user){
    setPlayers((prev) => [...prev, user])
  }

  return (
    <>
    <Header addPlayerToGame ={addPlayerToGame}/>
      <Screen players={players} />
    </>
  );
}

export default App;
