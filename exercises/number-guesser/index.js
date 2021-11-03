console.log("Script Attached");

let bestScore = 0;

// ELEMENT COLLECTIONS
const elements = {
  feedback: document.querySelector("#feedback"),
  score: document.querySelector("#score"),
  bestScore: document.querySelector("#bestScore"),
  guess: document.querySelector("#guess"),
  guessBtn: document.querySelector("#guessBtn"),
  form: document.querySelector("form"),
  restartBtn: document.querySelector("#restartBtn"),
  prevGuesses: document.querySelector("#prevGuesses"),
};

// GAME VALUES
let limit;
let number;
let guess;
let isPlaying = false;
let score = 0;

// GAME ACTIONS
elements.form.addEventListener("submit", function (event) {
  event.preventDefault();
  startGame();
});

// GAME FUNCTIONS
function startGame() {
  // Change 'Start' prompt to 'Guess' to reuse btn
  elements.guessBtn.textContent = "Guess";

  // Enable inputs
  elements.guess.disabled = false;

  // Swap btn click handlers from 'startGame' to 'evalGuess'
  elements.form.removeEventListener("submit", startGame);
  elements.form.addEventListener("submit", evalGuess);

  number = Math.floor(Math.random() * 100) + 1;
  isPlaying = true;
}

function evalGuess() {
  // Test the guess.value against generated number
  updateDOM("feedback", compare(number, elements.guess.value));
}

// UTILITIES

function updateDOM(ele, msg) {
  elements[ele].textContent = msg;
}

function compare(num, guess) {
  if (num > guess) {
    return `${guess} is too low`;
  } else if (num < guess) {
    return `${guess} is too high`;
  } else {
    isPlaying = false;
    return `Congrats! ${guess} was correct.`;
  }
}
