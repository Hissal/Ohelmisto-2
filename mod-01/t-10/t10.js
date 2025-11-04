'use strict'

const DICE_SIDE_COUNT = 6;
const SIM_ITERATIONS = 10000;

const diceCount = parseInt(prompt('diceCount'));
const desiredSum = parseInt(prompt('desiredSum'));

const simulatedProbability = simulateDiceRolls(diceCount, desiredSum) * 100;
const calculatedProbability = calculateProbability(diceCount, desiredSum) * 100;

document.querySelector('#output1').innerText = `Simulated Probability of rolling a sum of ${desiredSum} with ${diceCount} dice: ${simulatedProbability.toFixed(2)}%`
document.querySelector('#output2').innerText = `Calculated Probability of rolling a sum of ${desiredSum} with ${diceCount} dice: ${calculatedProbability.toFixed(2)}%`

function simulateDiceRolls(diceCount, desiredSum) {
  const rolls = [];
  for (let i = 0; i < SIM_ITERATIONS; i++) {
    let sum = 0;
    for (let j = 0; j < diceCount; j++) {
      sum += Math.floor(Math.random() * DICE_SIDE_COUNT) + 1;
    }
    if (sum === desiredSum) {
      rolls.push(true);
    }
  }
  return rolls.length / SIM_ITERATIONS;
}

// Turns out I didn't read the task properly and implemented a calculation instead of simulations first.
function calculateProbability(diceCount, desiredSum) {
  const totalOutcomes = Math.pow(DICE_SIDE_COUNT, diceCount);
  let successfulOutcomes = 0;

  function rollDice(remainingDice, currentSum) {
    if (remainingDice === 0) {
      if (currentSum === desiredSum) {
        successfulOutcomes++;
      }
      return;
    }

    for (let i = 1; i <= DICE_SIDE_COUNT; i++) {
      rollDice(remainingDice - 1, currentSum + i);
    }
  }

  rollDice(diceCount, 0);

  return successfulOutcomes / totalOutcomes;
}