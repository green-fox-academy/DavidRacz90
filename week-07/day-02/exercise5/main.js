let pTags = document.querySelectorAll('p');

if(pTags[3].className === 'dolphin') {
  pTags[0].textContent = 'pear';
}

if(pTags[0].className === 'apple') {
  pTags[2].textContent = 'dog';
}

let apple = document.querySelector('.apple');
apple.classList.add('red');

let balloon = document.querySelector('.balloon');
balloon.style.borderRadius = '30px';