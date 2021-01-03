"use strict";

// put scores to 0
// make dice dissapear

const score = document.querySelectorAll(".score");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");

const current0Score = document.getElementById("current--0");
const current1Score = document.getElementById("current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

console.log("loading....");

score.forEach((scores) => (scores.textContent = 0));

// use hidden class instead of manually setting CSS
//dice.style.display = "none";
diceElement.classList.add("hidden");

let scoresArr = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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

    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    currentScore = 0;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;

    // switch player
    console.log(`${activePlayer} === 1 = ${activePlayer === 1}`);
    activePlayer = activePlayer === 1 ? 0 : 1;

    if (!activePlayer) {
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
    } else {
      player1.classList.remove("player--active");
      player0.classList.add("player--active");
    }

    // if (player0.classList.contains("player--active")) {
    //   player0.classList.remove("player--active");
    //   player1.classList.add("player--active");
    // } else {
    //   player1.classList.remove("player--active");
    //   player0.classList.add("player--active");
    // }
  }
});

// Hold button functionality
btnHold.addEventListener("click", function () {
  player0.classList.contains("player--active")
    ? (current0Score.textContent = currentScore)
    : (current1Score.textContent = currentScore);
});
