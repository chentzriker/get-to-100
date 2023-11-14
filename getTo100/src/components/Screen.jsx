import Game from "./Game";
function Screen(props) {
  return (
    <div className="gamesContainer">
      {props.players.map((player, index) => (
        <Game key={index} index={index} player={player} turn={props.turn} moveTurn={props.moveTurn} quitGame={props.quitGame}/>
      ))}
    </div>
  );
}

export default Screen;
