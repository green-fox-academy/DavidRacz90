const URL = 'http://api.icndb.com/jokes/random';

const button = document.createElement('button');
button.innerHTML = 'Gimme a joke';
document.body.appendChild(button)
button.addEventListener('click', (event) => {
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      const joke = response.value.joke;
      const paragraph = document.createElement('p');
      paragraph.innerText = joke;
      document.body.appendChild(paragraph);
    })
});