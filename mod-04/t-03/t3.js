'use strict'

const form = document.querySelector('form');
const input = document.getElementById('query');
const output = document.getElementById('result');

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
    displayResults(output, data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
});

function displayResults(section, dataArray) {
  section.innerHTML = '';

  dataArray.forEach(data => {
    const article = buildArticle(data);
    section.appendChild(article);
  });
}

function buildArticle(data) {
  const article = document.createElement('article');

  const title = document.createElement('h2');
  title.textContent = data.show.name;
  article.appendChild(title);

  const urlElement = document.createElement('a');
  urlElement.href = data.show.url;
  urlElement.textContent = data.show.url;
  urlElement.target = '_blank';
  article.appendChild(urlElement);

  const img = document.createElement('img');
  img.src = data.show.image?.medium;
  img.alt = data.show.name;
  article.appendChild(img);

  const summary = document.createElement('div');
  summary.innerHTML = data.show.summary;
  article.appendChild(summary);

  return article;
}