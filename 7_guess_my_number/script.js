'use strict';

// DOM MANIPULATION
// Selecting class
//console.log(document.querySelector('.message'));

// Get text from dom element
//console.log(document.querySelector('.message').textContent);

// Setting content of dom element
//document.querySelector('.message').textContent = 'Correct number!🎉';

// Selecting # id; returns null because doesn't exist
//console.log(document.querySelector('#message'));

// select secret number (?)
//document.querySelector('.number').textContent = '!';

// select score
//document.querySelector('.score').textContent = 69;

// For input field, use "value" to get data
//document.querySelector('.guess').value = 69;
//console.log(document.querySelector('.guess').value);

// EVENT LISTENERS
// onClick event listener

const checkGuess = (guess, number) => {
  if (attempts > 1) {
    document.querySelector('.message').textContent = `${
      guess < number ? '📉Too low' : '📈Too high'
    }`;
    document.querySelector('.score').textContent = --attempts;
  } else {
    document.querySelector('.message').textContent = '💥You lost the game!';
    updateHighScore(highScore, attempts);
  }
};

const updateHighScore = (highScore, attempts) => {
  if (highScore < attempts) {
    highScore = attempts;
    document.querySelector('.highscore').textContent = highScore;
  }
};

document.querySelector('.check').addEventListener('click', () => {
  // Returns a string. String converted to number, if "" (empty string, no input) => 0 , which is falsy value
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      "⚠ you've entered no input!";
  } else {
    if (guess !== number) {
      checkGuess(guess, number);
    } else {
      // Body is element NOT class, so no . CSS uses camelcase, not background-color
      document.querySelector('body').style.backgroundColor = 'green';
      //document.body.style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('.number').textContent = number;
      updateHighScore(highScore, attempts);
    }
  }
});

// Reset game to play again
document.querySelector('.again').addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = Math.floor(Math.random() * 20) + 1;
  attempts = 20;
  document.querySelector('.score').textContent = attempts;
  console.log(`Random number is: ${number}`);
  console.log(`Attempts are: ${attempts}`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

// Random generator
let number = Math.floor(Math.random() * 20) + 1;
console.log(`Random number is: ${number}`);

let attempts = document.querySelector('.score').textContent;
console.log(`Attempts are: ${attempts}`);

let highScore = document.querySelector('.highscore').textContent;
console.log(`Highscore is: ${highScore}`);
