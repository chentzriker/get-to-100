function Screen(props) {
  return (
    <div>
      {props.players.map((player, index) => (
        <Game key={index} player={player} />
      ))}
    </div>
  );
}
