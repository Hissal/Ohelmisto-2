'use strict'

const target = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];
target.innerHTML = items.map(text => `<li>${text}</li>`).join('');
target.classList.add('my-list');