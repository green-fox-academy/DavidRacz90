let urlOfTheImage = document.querySelector('img');
console.log(urlOfTheImage.getAttribute('src'));

let newImage = document.querySelector('img');
newImage.setAttribute('src','http://www.animalslook.com/media/an-adoarble-place-racoon-house-10-pictures-2-videos/an-adoarble-place-racoon-house-10-pictures-2-videos-10.jpg');

let newURL = document.querySelector('a');
newURL.setAttribute('href', 'https://www.greenfoxacademy.com/');

let secondButton = document.querySelector('.this-one');
secondButton.disabled = true;
secondButton.textContent = 'Don\'t click me!';