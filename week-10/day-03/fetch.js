const URL = 'http://api.icndb.com/jokes/random';

const button = document.createElement('button');
button.innerHTML = 'Gimme a joke';
document.body.appendChild(button)
button.addEventListener('click', () => {
  fetch(URL)
    .then(response => response.json())
    .then(response => { 
      const paragraph = document.createElement('p');
      paragraph.innerText = response.value.joke;
      document.body.appendChild(paragraph);
    })
});