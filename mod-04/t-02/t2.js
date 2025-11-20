'use strict'

const form = document.querySelector('form')
const input = document.getElementById('query')

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const q = input.value.trim();
  if (!q) {
    console.log('Please enter a valid query');
    return;
  }

  const url = form.action + '?q=' + encodeURIComponent(q);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status);
    }
    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
});