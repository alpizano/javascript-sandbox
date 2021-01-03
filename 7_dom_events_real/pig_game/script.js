"use strict";

// dice image
const diceElement = document.querySelector(".dice");

// player total scores
const playerScore0 = document.querySelector("#score--0");
const playerScore1 = document.getElementById("score--1");

// holds ALL player total scores
const scores = document.querySelectorAll(".score");

// holds ALL player current scores
const currentScores = document.querySelectorAll(".current-score");

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

let scoresArr, currentScore, activePlayer, playing;

const init = () => {
  scoresArr = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  resetPlayerScores(scores);
  resetCurrentScores(currentScores);
  // use hidden class instead of manually setting CSS
  //dice.style.display = "none";
  diceElement.classList.add("hidden");

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
};

// When game starts; bootstrap
const resetPlayerScores = (scoresArr) => {
  scoresArr.forEach((score) => (score.textContent = 0));
};

const resetCurrentScores = (scoresArr) => {
  scoresArr.forEach((currScore) => {
    currScore.textContent = 0;
  });
};

const switchPlayers = () => {
  activePlayer = activePlayer === 1 ? 0 : 1;

  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");

  //   if (!activePlayer) {
  //     player0.classList.remove("player--active");
  //     player1.classList.add("player--active");
  //   } else {
  //     player1.classList.remove("player--active");
  //     player0.classList.add("player--active");
  //   }
};

const resetCurrentScore = (player) => {
  currentScore = 0;
  document.querySelector(`#current--${player}`).textContent = currentScore;
};

init();

// Roll dice functionality

// 1. generate random number
// 2. display dice img
// 3. check for rolled 1
btnRoll.addEventListener("click", function () {
  if (playing) {
    const number = Math.floor(Math.random() * 6) + 1;
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
      // currentScore = 0;
      // document.querySelector(
      //   `#current--${activePlayer}`
      // ).textContent = currentScore;
      resetCurrentScore(activePlayer);

      // toggle players
      switchPlayers();
    }
  }
});

// Hold button functionality
// set current score to 0
// add to total score 0

btnHold.addEventListener("click", function () {
  if (playing) {
    scoresArr[`${activePlayer}`] += currentScore;

    // set current player score to 0
    //   currentScore = 0;
    //   document.querySelector(`#current--${oldPlayer}`).textContent = currentScore;
    resetCurrentScore(activePlayer);

    // Set player total score
    document.getElementById(`score--${activePlayer}`).textContent =
      scoresArr[`${activePlayer}`];

    if (scoresArr[activePlayer] >= 20) {
      playing = false;
      diceElement.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayers();
    }
  }
});

// New game functionality

// 1. set player scores to 0
// 2. hide dice

btnNew.addEventListener("click", init);
