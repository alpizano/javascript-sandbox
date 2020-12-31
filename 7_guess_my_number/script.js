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
document.querySelector('.check').addEventListener('click', () => {
  //console.log(document.querySelector('.guess').value);
  // returns a string
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = '🎉Correct number!';
  // string converted to number, if "" (empty string, no input) => 0 , which is falsy value

  if (!guess) {
    document.querySelector('.message').textContent =
      "⚠ you've entered no input!";
    document.querySelector('.score').textContent = --attempts;
  } else {
    if (guess < number) {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.score').textContent = --attempts;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Too high';
      document.querySelector('.score').textContent = --attempts;
    } else {
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('.number').textContent = number;

      if (highScore < attempts) {
        highScore = attempts;
        document.querySelector('.highscore').textContent = highScore;
      }
    }

    if (attempts < 0 && highScore < attempts) {
      highScore = attempts;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.floor(Math.random() * 20) + 1;
  attempts = 20;
  console.log(`Random number is: ${number}`);
  console.log(`Attempts are: ${attempts}`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
});

// Random generator
let number = Math.floor(Math.random() * 20) + 1;
console.log(`Random number is: ${number}`);

let attempts = document.querySelector('.score').textContent;
console.log(`Attempts are: ${attempts}`);

let highScore = document.querySelector('.highscore').textContent;
console.log(`Highscore is: ${highScore}`);
