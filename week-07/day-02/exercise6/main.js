let GreenFox = document.createElement('li');
GreenFox.textContent = 'The Green Fox'

let ul = document.querySelector('ul');
ul.appendChild(GreenFox);

let TheLamplighter = document.createElement('li');
TheLamplighter.textContent = 'The Lamplighter';

ul.appendChild(TheLamplighter);

let container = document.querySelector('.container');
let heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);

