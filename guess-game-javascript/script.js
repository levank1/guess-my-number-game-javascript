'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = document.querySelector('.message');
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage = 'No number';

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage.textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = +highscore;
    }
    // when guess is wrong
  } else if (guess > 20) {
    displayMessage.textContent = 'choose number between 1-20';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage.textContent =
        guess > secretNumber
          ? 'too high'
          : (displayMessage.textContent = 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage.textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
