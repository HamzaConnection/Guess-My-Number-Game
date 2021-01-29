"use strict";

const correctAnswer = (() => {
  return Math.floor(Math.random() * 20) + 1;
})();

let getGuess = () => {
  return Number(document.querySelector(".guess").value);
};

document.querySelector(".check").addEventListener("click", () => {
  if (youWon()) {
    won();
  } else {
    youMissed(getGuess());
    if (youLost()) {
      lost();
    }
  }
});

// YOU MISSED
let youMissed = (guess) => {
  let wrongAnswerMessage = "Wrong Answer Try again";
  lossPoints();
  if (guess > correctAnswer) {
    setMessage("Try a lower number ⬇️");
  } else if (guess < correctAnswer) {
    setMessage("Try a higher number ⬆️");
  }
};

// YOU WON
let youWon = () => {
  return getGuess() === correctAnswer;
};

let won = () => {
  let winingMessage = "CONGRATULATION YOU WON!🎉";
  setBackGroundColor("#60b347");
  setHighscore(getScore());
  showCorrectAnswer();
  setMessage(winingMessage);
  disableGuessing();
};

// YOU LOST

let youLost = () => {
  return getScore() === 0;
};
let lost = () => {
  let lossingMessage = "YOU LOST!😞";
  setBackGroundColor("#DC143C");
  setMessage(lossingMessage);
  disableGuessing();
};

// SHOW/HIDE CORRECT ANSWER
let showCorrectAnswer = () => {
  document.querySelector(".number").textContent = correctAnswer;
};

let hideCorrectAnswer = () => {
  document.querySelector(".number").textContent = "?";
};

// TRY AGAIN
document.querySelector(".again").addEventListener("click", () => {
  tryAgain();
});

let tryAgain = () => {
  setHighscore(getHighscore());
  resetScore(20);
  hideCorrectAnswer();
  setMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
  enableGuessing();
};

// SET HighScore
let setHighscore = (currentScore) => {
  document.querySelector(".highscore").textContent = currentScore;
};

let getHighscore = (currentScore) => {
  return Number(document.querySelector(".highscore").textContent);
};

let getScore = () => {
  return Number(document.querySelector(".score").textContent);
};

let resetScore = (value) => {
  document.querySelector(".score").textContent = 20;
};

let lossPoints = () => {
  return (document.querySelector(".score").textContent = getScore() - 2);
};

// GET SET MESSAGE
let getMessage = () => {
  return document.querySelector(".message").textContent;
};

let setMessage = (value) => {
  document.querySelector(".message").textContent = value;
};

// ENABLE/ DISABLE GUESSING

let disableGuessing = () => {
  document.querySelector(".check").disabled = true;
};

let enableGuessing = () => {
  document.querySelector(".check").disabled = false;
};

// SET BG COLOR
let setBackGroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
