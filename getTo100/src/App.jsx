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
<<<<<<< HEAD
      <Header />
      <Screen players={players} />
=======
    <Header addPlayerToGame ={addPlayerToGame}/>
      {/* {players.map((player, index) => (
        <Game key={index} player={player} />
      ))} */}
>>>>>>> dbb6a981be8185e05d599ff5ee2356736936e942
    </>
  );
}

export default App;
