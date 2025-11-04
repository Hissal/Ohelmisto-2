'use strict'

function rollDice(sideCount) {
  return Math.floor(Math.random() * sideCount) + 1;
}

function promptSideCount() {
  let sideCount = parseInt(prompt('Enter the number of sides for the dice: '));
  while (isNaN(sideCount) || sideCount <= 0) {
    alert('Please enter a valid positive integer for the number of sides.');
    sideCount = parseInt(prompt('Enter the number of sides for the dice: '));
  }
  return sideCount;
}

const sideCount = promptSideCount();
const ulElement = document.getElementById('roll-results');

while (true) {
  const roll = rollDice(sideCount);

  const newLiElement = document.createElement('li');
  newLiElement.innerText = roll;
  ulElement.appendChild(newLiElement);

  if (roll === sideCount)
    break;
}