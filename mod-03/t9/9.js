'use strict'

const operators = ['+', '-', '*', '/'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
}

function parseCalculation(calcStr) {
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const operatorIndex = calcStr.indexOf(operator);
    if (operatorIndex !== -1) {
      const leftOperand = parseFloat(calcStr.slice(0, operatorIndex).trim());
      const rightOperand = parseFloat(calcStr.slice(operatorIndex + 1).trim());
      return {
        leftOperand,
        operator,
        rightOperand,
      };
    }
  }
}

function calculate(calcStr) {
  const parsed = parseCalculation(calcStr);
  if (!parsed) {
    return 'Error: Invalid calculation string';
  }

  const { leftOperand, operator, rightOperand } = parsed;
  if (isNaN(leftOperand) || isNaN(rightOperand) || !operations[operator]) {
    return 'Error: Invalid calculation string';
  }
  return operations[operator](leftOperand, rightOperand);
}

const calcInput = document.getElementById('calculation');
const calcButton = document.getElementById('start');
const resultOutput = document.getElementById('result');

calcButton.addEventListener('click', () => {
  const calcStr = calcInput.value;
  const result = calculate(calcStr);
  resultOutput.innerText = `Result: ${result}`;
});

