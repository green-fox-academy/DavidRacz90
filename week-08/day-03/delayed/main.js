let button = document.querySelector('button');

button.addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('p').innerText = '2 seconds ellapsed';
  },2000);
});