"use strict";

class InvalidType extends Error {
  constructor(type, msg) {
    super(msg);
    this.type = type;
  }
}

console.log("Script Attached");

let elements = {
  difficulty: document.querySelector("#difficulty"),
  promptP: document.querySelector("#prompt"),
  question: document.querySelector("#question"),
  answer: document.querySelector("#answer"),
  submitBtn: document.querySelector("#submitBtn"),
  form: document.querySelector("form"),
};

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

const updateQuestion = function updateQuestion() {
  elements.answer.value = "";
  elements.answer.disabled = false;
  elements.answer.focus();
  elements.submitBtn.disabled = false;
  elements.promptP.textContent = "What is sum of:";

  x = Math.round(Math.random() * levels[difficulty.value]);
  y = Math.round(Math.random() * levels[difficulty.value]);
  correct = x + y;
  questionStr = `${x} + ${y}`;
  elements.question.textContent = questionStr;
};

updateQuestion();

const evaluateAnswer = function evaluateAnswer() {
  // Disable form submissions until next question
  elements.answer.disabled = true;
  elements.submitBtn.disabled = true;

  try {
    if (isNaN(elements.answer.value)) {
      throw new InvalidType(
        "number",
        "You failed to give me a number input..."
      );
    }
    // Check the input.value against the question answer
    // Give feedback
    if (elements.answer.value == correct) {
      elements.promptP.textContent = "Correct!";
    } else {
      elements.promptP.textContent = `Incorrect. ${questionStr} = ${correct}...`;
    }
  } catch (error) {
    if (error instanceof InvalidType) {
      elements.promptP.textContent = `${error.message}. Try again.`;
    } else {
      elements.promptP.textContent = "Something unexpected occurred :(";
    }
  }

  // Generate new question
  // Update DOM
  setTimeout(updateQuestion, 3000);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    evaluateAnswer();
  } catch (err) {
    alert("An error occurred while evaluating your answer");
  }
});
