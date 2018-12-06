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

let img = document.createElement('img');

img.setAttribute('src', 'https://cdn.logfurnitureplace.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/w/i/wild-woods-166.jpg');
container.appendChild(img);
img.style.width = '300px';
img.style.height = '300px';
img.style.border = '2px solid black';
img.style.borderRadius = '25px';

