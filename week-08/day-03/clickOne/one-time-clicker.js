const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(Date.now());
  button.setAttribute('disabled', 'true');
})

const stopListener = () => {
  console.log(Date.now());
  button.removeEventListener('click', stopListener);
}

button.addEventListener('click', stopListener);