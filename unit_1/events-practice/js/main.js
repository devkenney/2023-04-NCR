const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  const li = document.createElement('li');
  const input = document.querySelector('input');

  li.textContent = input.value;

  document.querySelector('ul').appendChild(li);

  input.value = null
});

document.querySelector('ul').addEventListener('click', (event) => {
  event.target.style.color = 'green'
})