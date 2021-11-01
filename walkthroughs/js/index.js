class Game {
  constructor() {
    this.number;
    this.startTime;
    this.endTime;
    this.player = "Guest";
    this.score = 0;
    this.guesses = [];
    this.isPlaying = false;
  }

  giveFeedback(message) {
    alert(message);
  }

  evaluateGuess() {
    let guess = prompt(
      "Guess a whole number between 1 and 100\n (Type 'quit' to exit):",
      0
    );
    if (!guess || guess.toLowerCase() == "quit") {
      this.isPlaying = false;
      this.giveFeedback("See you later!");
    } else {
      guess = parseInt(guess);

      if (isNaN(guess)) {
        this.giveFeedback(
          "You didn't guess a whole number between 1 and 100...\nTry again. (Type 'quit' to exit)"
        );
      } else {
        this.guesses.push(guess);
        if (guess > this.number) {
          this.giveFeedback(`${guess} is too high`);
        } else if (guess < this.number) {
          this.giveFeedback(`${guess} is too low`);
        } else {
          this.giveFeedback(`Congrats! ${guess} is correct!`);
          this.isPlaying = false;
        }
      }
    }
  }

  startGame() {
    let user = prompt("Hello There! Who are you?", "Player1");
    this.player = user || "Player1";
    this.giveFeedback(
      `Welcome, ${this.player}, to my game!\nClick okay to get started...`
    );
    this.number = Math.floor(Math.random() * 100) + 1;
    this.isPlaying = true;
    this.startTime = new Date().getTime();

    while (this.isPlaying) {
      this.playTurn();
    }

    this.endTime = new Date().getTime();

    this.showStats();

    this.resetGame();
  }

  playTurn() {
    this.evaluateGuess();
    this.score++;
  }

  showStats() {
    this.giveFeedback(
      `You guessed: ${this.guesses.join(" then ")} for a total of ${
        this.guesses.length
      } guesses.\nYou scored a ${(this.endTime - this.startTime) * this.score}!`
    );
  }

  resetGame() {
    let willReset = prompt(
      "Would you like to play again?\n Type 'yes' to proceed."
    );

    if (willReset.toLowerCase() == "yes") {
      this.startGame();
    } else this.giveFeedback("Thanks for playing!");
  }
}

new Game().startGame();
