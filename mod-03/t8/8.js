'use strict'

const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
}

const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const operatorSelect = document.getElementById('operation')
const calculateButton = document.getElementById('start')
const output = document.getElementById('result')

calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(input1.value)
  const num2 = parseFloat(input2.value)
  const operation = operatorSelect.value
  const result = operations[operation](num1, num2)
  output.innerText = `Result: ${result}`
});