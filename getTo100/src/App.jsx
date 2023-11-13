import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayerToGame(user){
    setPlayers((prev) => [...prev, user])
  }

  return (
    <>
    <Header addPlayerToGame ={addPlayerToGame}/>
      {/* {players.map((player, index) => (
        <Game key={index} player={player} />
      ))} */}
    </>
  );
}

export default App;
