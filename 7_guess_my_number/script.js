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

const genRandomNum = (lower, upper) => {
  return Math.floor(Math.random() * upper) + lower;
};

const checkGuess = (guess, number) => {
  if (attempts > 1) {
    setContent(
      'text',
      'message',
      `${guess < number ? '📉Too low' : '📈Too high'}`
    );
    setContent('text', 'score', --attempts);
  } else {
    setContent('text', 'message', '💥You lost the game!');
    checkHighScore(highScore, attempts);
  }
};

const checkHighScore = (highScore, attempts) => {
  if (highScore < attempts) {
    highScore = attempts;
    setContent('text', 'highscore', highScore);
  }
};

const setContent = (type, id, val) => {
  if (type === 'text') document.querySelector(`.${id}`).textContent = val;
  else document.querySelector(`.${id}`).value = val;
};

const setStyle = (id, prop, val) => {
  //document.querySelector('body').style.`${prop}` = 'green';
};

document.querySelector('.check').addEventListener('click', () => {
  // Returns a string. String converted to number, if "" (empty string, no input) => 0 , which is falsy value
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setContent('text', 'message', "⚠ you've entered no input!");
  } else {
    if (guess !== number) {
      checkGuess(guess, number);
    } else {
      // Body is element NOT class, so no . CSS uses camelcase, not background-color
      document.querySelector('body').style.backgroundColor = 'green';
      //document.body.style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      setContent('text', 'message', '🎉Correct number!');
      setContent('text', 'number', number);
      checkHighScore(highScore, attempts);
    }
  }
});

// Reset game to play again
document.querySelector('.again').addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = genRandomNum(1, 20);
  attempts = 20;
  console.log(`Random number is: ${number}`);
  console.log(`Attempts are: ${attempts}`);
  document.querySelector('.score').textContent = attempts;
  setContent('text', 'score', attempts);
  setContent('text', 'number', '?');
  setContent('text', 'message', 'Start guessing...');
  setContent('value', 'guess', '');
});

// Random generator
let number = genRandomNum(1, 20);
console.log(`Random number is: ${number}`);

let attempts = document.querySelector('.score').textContent;
console.log(`Attempts are: ${attempts}`);

let highScore = document.querySelector('.highscore').textContent;
console.log(`Highscore is: ${highScore}`);
