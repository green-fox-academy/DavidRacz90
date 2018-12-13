const form = document.querySelector('form');
const button = document.querySelectorAll('button');

form.addEventListener('click', (e) => {
  if(e.target.id === 'pet1' || e.target.id === 'pet2') {
    document.querySelector('#signup').removeAttribute('disabled');
  } else {
    document.querySelector('#signup').disabled = true;
  }
})

form.addEventListener('click', (e) => {
  if(e.target.id === 'yes') {
    document.querySelector('#ilc').removeAttribute('disabled');
  }
})


button.forEach(e => {
  e.addEventListener('click', () => {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  })
});

form.addEventListener('click', (e) => {
  if(e.target.id === 'pet3' && e.target.id === 'no') {
    document.querySelector('#signup').removeAttribute('disabled');
  }
})


