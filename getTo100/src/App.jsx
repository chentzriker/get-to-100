import { useState } from "react";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <Header />
      <Screen players={players} />
    </>
  );
}

export default App;
