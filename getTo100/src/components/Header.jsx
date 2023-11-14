import { useState } from "react";
import AddAndIdentify from "./AddAndIdentify";

function Header(props) {
  const [playerName, setPlayerName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

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
          <button
            onClick={() => (
              AddAndIdentify (playerName, props.addPlayerToGame, props.players)
            )
            }
          >
            add player
          </button>
        </div>

        <button
          onClick={() => {
            setIsStarted(true);
            return props.moveTurn();
          }}
        >
          start games
        </button>
      </>
    );
  }
}

export default Header;
