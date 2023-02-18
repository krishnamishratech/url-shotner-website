const form = document.querySelector('form');
const urlInput = document.getElementById('url');
const resultContainer = document.getElementById('result-container');
const shortenBtn = document.getElementById('shorten-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const longUrl = urlInput.value;
  shortenUrl(longUrl);
});

function shortenUrl(longUrl) {
  // Send longUrl to server to be shortened
  // In this example, we'll simulate the server response with a timeout and a random short URL
  resultContainer.innerHTML = '<p>Loading...</p>';
  resultContainer.style.display = 'block';

  setTimeout(() => {
    const shortUrl = `http://s.ml/${Math.random().toString(36).substring(2, 8)}`;
    resultContainer.innerHTML = `
      <p>Short URL:</p>
      <input type="text" value="${shortUrl}" readonly>
      <button id="copy-btn">Copy to Clipboard</button>
    `;

    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
      const shortUrlInput = resultContainer.querySelector('input');
      shortUrlInput.select();
      document.execCommand('copy');
      alert('Short URL copied to clipboard!');
    });
  }, 2000);
}
