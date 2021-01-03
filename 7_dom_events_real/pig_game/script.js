"use strict";

// dice image
const diceElement = document.querySelector(".dice");

// player total scores
const playerScore0 = document.querySelector("#score--0");
const playerScore1 = document.getElementById("score--1");

// holds both player scores
const scores = document.querySelectorAll(".score");

// current scores
const current0Score = document.getElementById("current--0");
const current1Score = document.getElementById("current--1");

// active player identifier
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// click event listener buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scoresArr = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// When game starts; bootstrap
const resetPlayerScores = (scoreArr) => {
  scoreArr.forEach((scores) => (scores.textContent = 0));
};

const switchPlayers = () => {
  let oldPlayer = activePlayer;
  activePlayer = activePlayer === 1 ? 0 : 1;

  if (!activePlayer) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  } else {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
  return oldPlayer;
};

// use hidden class instead of manually setting CSS
//dice.style.display = "none";
diceElement.classList.add("hidden");
resetPlayerScores(scores);

// Roll dice functionality

// 1. generate random number
// 2. display dice img
// 3. check for rolled 1
btnRoll.addEventListener("click", function () {
  const number = Math.floor(Math.random() * 6) + 1;
  //console.log(`${number}`);
  console.log(`active player: ${activePlayer}`);

  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${number}.png`;

  if (number !== 1) {
    currentScore += number;

    // player0.classList.contains("player--active")
    //   ? (current0Score.textContent = currentScore)
    //   : (current1Score.textContent = currentScore);

    // set current score per player dynamically
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    currentScore = 0;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;

    // toggle players
    switchPlayers();
  }
});

// Hold button functionality
// set current score to 0
// add to total score 0

btnHold.addEventListener("click", function () {
  console.log(scoresArr);
  let oldPlayer = switchPlayers();
  scoresArr[`${oldPlayer}`] += currentScore;
  console.log(scoresArr);
  // set current player score to 0
  currentScore = 0;
  document.querySelector(`#current--${oldPlayer}`).textContent = currentScore;

  document.getElementById(`score--${oldPlayer}`).textContent =
    scoresArr[`${oldPlayer}`];
  console.log(`active player: ${activePlayer}`);
});

// New game functionality

// 1. set player scores to 0
// 2. hide dice

btnNew.addEventListener("click", function () {
  resetPlayerScores(scores);
  diceElement.classList.add("hidden");
  scoresArr = [0, 0];
});
