console.log("Script Attached");

let difficulty = document.querySelector("#difficulty");
let promptP = document.querySelector("#prompt");
let question = document.querySelector("#question");
let answer = document.querySelector("#answer");
let submitBtn = document.querySelector("#submitBtn");
let form = document.querySelector("form");
let x;
let y;
let correct; // 2 by default
let questionStr;

// Difficulty Dictionary
let levels = {
  easy: 10,
  medium: 100,
  hard: 10000,
};

updateQuestion();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  evaluateAnswer();
});

function evaluateAnswer() {
  // Disable form submissions until next question
  answer.disabled = true;
  submitBtn.disabled = true;

  // Check the input.value against the question answer
  // Give feedback
  if (answer.value == correct) {
    promptP.textContent = "Correct!";
  } else {
    promptP.textContent = `Incorrect. ${questionStr} = ${correct}...`;
  }

  // Generate new question
  // Update DOM
  setTimeout(updateQuestion, 3000);
}

function updateQuestion() {
  answer.value = "";
  answer.disabled = false;
  answer.focus();
  submitBtn.disabled = false;
  promptP.textContent = "What is sum of:";

  x = Math.round(Math.random() * levels[difficulty.value]);
  y = Math.round(Math.random() * levels[difficulty.value]);
  correct = x + y;
  questionStr = `${x} + ${y}`;
  question.textContent = questionStr;
}
