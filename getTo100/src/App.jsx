import { useState } from "react";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      {players.map((player, index) => (
        <Game key={index} player={player} />
      ))}
    </>
  );
}

export default App;
