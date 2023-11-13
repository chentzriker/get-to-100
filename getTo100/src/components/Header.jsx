function Header() {
  isStarted = false;
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
          <input type="text" />
          <button onClick={addAndIdentify}>add player</button>
        </div>

        <button></button>
      </>
    );
  }
}
