window.document.addEventListener('keyup', (event) => {
  document.querySelector('h1').textContent =  `The last pressed key's code is: ${event.keyCode}`;
})