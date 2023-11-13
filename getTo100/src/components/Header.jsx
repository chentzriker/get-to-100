import { useState } from "react";
import StartGame from "./StartGame";

function Header(props) {
  const [playerName, setPlayerName] = useState("");
  localStorage.setItem("users", JSON.stringify([]));

  function addAndIdentify(playerName) {
    const users = JSON.parse(localStorage.getItem("users"));
    for (let user of users) {
      if (user.name === playerName) {
        user.isWon = false;
        user.moves = 0;
        props.addPlayerToGame(user);
      }
    }
    let newUser = {
      name: playerName,
      gameCount: 0,
      scores: [],
      isWon: false,
      moves: 0,
    };
    users.push(newUser);
    props.addPlayerToGame(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  let isStarted = false;

  if (isStarted) {
    return (
      <>
        <h1>Get To 100 (game in progress) </h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Get To 100 (game in progress) </h1>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
          <button onClick={() => addAndIdentify(playerName)}>add player</button>
        </div>

        <button>start games</button>
      </>
    );
  }
}

export default Header;
