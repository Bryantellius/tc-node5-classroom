import { Component } from "react";
import { formatTime } from "../utils/clock";
import GameForm from "./GameForm";

class Game extends Component {
  constructor() {
    super();

    this.correctNum = null;
    this.history = [];
    this.timer = null;
    this.secs = null;

    this.state = {
      score: 0,
      feedback: "Guess as number between 1 and 100:",
      isPlaying: false,
      time: "00:00:00",
    };

    this.evaluateGuess = this.evaluateGuess.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  startGame() {
    this.secs = 0;
    this.timer = setInterval(
      () => this.setState({ time: formatTime(++this.secs) }),
      1000
    );
    this.correctNum = Math.floor(Math.random() * 100) + 1;
    this.setState({
      score: 0,
      isPlaying: true,
      feedback: "Guess a number between 1 and 100:",
    });
  }

  evaluateGuess(e) {
    e.preventDefault();

    let guess = document.querySelector("#guess");
    let feedback;
    let score = this.state.score;

    if (this.history.includes(guess.value)) {
      feedback = `You already guessed ${guess.value}! Maybe try something else..`;
    } else {
      if (guess.value > this.correctNum) {
        feedback = "Too high..";
      } else if (guess.value < this.correctNum) {
        feedback = "Too low..";
      } else {
        feedback = `Correct! You scored ${this.state.score}.`;
        this.endGame();
      }
      this.history.push(guess.value);
      score++;
    }

    guess.value = "";
    this.setState({ feedback, score });
  }

  endGame() {
    clearInterval(this.timer);
    this.setState({ isPlaying: false });
  }

  render() {
    return (
      <div className="game-container">
        <p id="time">{this.state.time}</p>
        <p id="feedback">{this.state.feedback}</p>
        {this.state.isPlaying ? (
          <GameForm evaluateGuess={this.evaluateGuess} />
        ) : (
          <button id="start" onClick={this.startGame}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default Game;
