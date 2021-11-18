import { formatTime } from "../utils/clock";
import Button from "./common/Button";
import GameForm from "./GameForm";
import { useState } from "react";

const Game = (props) => {
  let correctNum = null;
  let history = [];
  let timer = null;
  let secs = null;

  // state = {
  //   score: 0,
  //   feedback: "Guess as number between 1 and 100:",
  //   isPlaying: false,
  //   time: "00:00:00",
  // };

  let [score, setScore] = useState(0);
  let [feedback, setFeedback] = useState("Guess a number between 1 and 100:");
  let [isPlaying, setIsPlaying] = useState(false);
  let [time, setTime] = useState("00:00:00");

  function startGame() {
    secs = 0;
    timer = setInterval(() => setTime(formatTime(++secs)), 1000);
    correctNum = Math.floor(Math.random() * 100) + 1;
    history = [];
    setScore(0);
    setIsPlaying(true);
    setFeedback("Guess a number between 1 and 100:");
  }

  function evaluateGuess(e) {
    e.preventDefault();

    let guess = document.querySelector("#guess");
    let feedback;
    let newScore = score;

    if (history.includes(guess.value)) {
      feedback = `You already guessed ${guess.value}! Maybe try something else..`;
    } else {
      if (guess.value > correctNum) {
        feedback = "Too high..";
      } else if (guess.value < correctNum) {
        feedback = "Too low..";
      } else {
        feedback = `Correct! You scored ${newScore}.`;
        endGame();
      }
      history.push(guess.value);
      newScore++;
    }

    guess.value = "";
    setFeedback(feedback);
    setScore(newScore);
  }

  function endGame() {
    clearInterval(timer);
    setIsPlaying(false);
  }

  return (
    <div className="game-container">
      <p id="time">{time}</p>
      <p id="feedback">{feedback}</p>
      {isPlaying ? (
        <GameForm evaluateGuess={evaluateGuess} />
      ) : (
        <Button id="start" onClick={startGame}>
          Start
        </Button>
      )}
    </div>
  );
};

export default Game;
