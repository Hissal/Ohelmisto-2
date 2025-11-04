'use strict'

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const ulElement = document.getElementById('roll-results');

while (true) {
  const roll = rollDice();

  const newLiElement = document.createElement('li');
  newLiElement.innerText = roll;
  ulElement.appendChild(newLiElement);

  if (roll === 6)
    break;
}