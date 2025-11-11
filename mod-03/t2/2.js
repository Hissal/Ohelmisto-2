'use strict';

const target = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];

for (let i = 0; i < items.length; i++) {
  const newElement = document.createElement('li');
  newElement.innerText = items[i];
  target.appendChild(newElement);

  if (i === 1) {
    newElement.classList.add('my-item');
  }
}