import { useState } from "react";
import StartGame from "./StartGame";

function Header(props) {
  const [playerName, setPlayerName] = useState("");
  localStorage.setItem("users", JSON.stringify([]));

  function addAndIdentify(playerName) {
    const users = JSON.parse(localStorage.getItem("users"));
    for (let user of users) {
      if (user.name === playerName) {
        props.addPlayerToGame(user);
        
      }
    }
    const newUser = {
      name: playerName,
      gameCount: 0,
      scores: [],
     
    };
    users.push(newUser);
    props.addPlayerToGame(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  
  const [isStarted, setIsStarted]= useState(false) 

  if (isStarted) {
    return (
      <>
        <h1>Get To 100 (game in progress) </h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Get To 100 </h1>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
          <br />
          <button onClick={() => {return addAndIdentify(playerName)}}>add player</button>
        </div>

        <button onClick={() => { setIsStarted(true); return props.moveTurn() }}>start games</button>
      </>
    );
  }
}

export default Header;
