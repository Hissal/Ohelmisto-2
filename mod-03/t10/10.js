'use strict'

const form = document.getElementById('source')

const inputs = form.querySelectorAll('input')

let firstNameInput = null
let lastNameInput = null
let submitButton = null

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i]
  if (input.name === 'firstname') {
    firstNameInput = input
  } else if (input.name === 'lastname') {
    lastNameInput = input
  } else if (input.type === 'submit') {
    submitButton = input
  }
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault()
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const output = document.getElementById('target')
  output.innerText = `Your name is ${firstName} ${lastName}`
});

