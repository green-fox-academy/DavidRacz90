const animal = document.querySelector('.animals');
const otherClasses = document.querySelectorAll('p');
otherClasses.forEach(e => {
  e.innerHTML = animal.innerHTML;
})
