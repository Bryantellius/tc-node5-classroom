console.log("Script Attached");

let bestScore = 0;

const compareBest = (score) => {
  if (bestScore == 0) {
    bestScore = score;
  } else {
    if (score < bestScore) {
      bestScore = score;
      return true;
    } else {
      return false;
    }
  }
};

const startGame = (range) => {
  let limit = range;
  let number = Math.floor(Math.random() * limit) + 1; // 1-100
  let guess;
  let isPlaying = true;
  let score = 0;

  const compare = (num, guess) => {
    if (num > guess) {
      return `${guess} is too low`;
    } else if (num < guess) {
      return `${guess} is too high`;
    } else {
      isPlaying = false;
      return `Congrats! ${guess} was correct.`;
    }
  };

  const playTurn = () => {
    guess = prompt(
      `Guess a number between 1 and ${limit}:\n(Type 'quit' to leave)`
    );
    if (guess.toLowerCase() == "quit") {
      isPlaying = false;
      alert("See ya later!");
    } else if (isNaN(parseInt(guess))) {
      alert(`${guess} is not a valid guess. Try again.`);
    } else {
      alert(compare(number, guess));
    }
    score++;
    if (isPlaying) playTurn();
  };

  alert("Welcome to my number guessing game! Click 'OK' to start:");

  playTurn();

  let isBest = compareBest(score);

  if (isBest) {
    alert(`You beat your previous high score with ${bestScore}.`);
  } else {
    alert(`You scored ${score}. \nTry again to beat your best!`);
  }

  let playAgain = prompt(
    "Would you like to play again?:\n(Type 'yes' to proceed)"
  );

  if (playAgain.toLowerCase() == "yes") {
    startGame();
  }
};

startGame(100);
