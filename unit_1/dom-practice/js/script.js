const titleEl = document.getElementById('title');

titleEl.style.textAlign = 'center'
// titleEl.style.color = 'blue'

const commentEl = document.querySelector('.comment')
const allComments = document.querySelectorAll('.comment')

for (let comment of allComments) {
  comment.style.color = 'red'
}

const linkEl = document.querySelector('a');

linkEl.setAttribute('href', 'http://www.bing.com');

linkEl.textContent = 'Bing'

titleEl.classList.add('orange')