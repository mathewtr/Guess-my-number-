'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const number = document.querySelector('.number');
const body = document.querySelector('body');
const scoreDOM = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const highScoreDOM = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +guessInput.value;

  //When there is no guess Number.
  if (!guess) {
    displayMessage('⛔️ No Number! Please insert a number');

    // When user guess correct Number
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreDOM.textContent = highScore;
    }

    // when guess different number
  } else if (guess !== secretNumber) {
    //check if the score is still higher than 1
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Too Low' : "📈 Too High'");
      score--;
      scoreDOM.textContent = score;
      // else the player loose
    } else {
      displayMessage('😵 You lost the game');
      scoreDOM.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreDOM.textContent = score;
  displayMessage('Start guessing...');
  number.textContent = '?';
  guessInput.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
