const GameForm = (props) => {
  return (
    <form action="" onSubmit={props.evaluateGuess}>
      <input
        type="number"
        name="guess"
        id="guess"
        placeholder="1"
        min="1"
        max="100"
        required
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GameForm;
