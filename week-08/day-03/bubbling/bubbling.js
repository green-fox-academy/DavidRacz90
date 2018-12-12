const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
let x = 0;
let y = 0;
let size = 200;

buttons.addEventListener('click', e => {
  if (e.target.dataset.direction === "in") {
    size += 10;
    image.style.backgroundSize = `${size}%`;
  }
  if (e.target.dataset.direction === "out" && size > 100) {
    size -= 10;
    image.style.backgroundSize = `${size}%`;
  }
  if (e.target.dataset.direction === "left" && x > 0) {
    x -= 10;
    image.style.backgroundPosition = `${x}% ${y}%`;
  }
  if (e.target.dataset.direction === "right" && x < 100) {
    x += 10;
    image.style.backgroundPosition = `${x}% ${y}%`;
  }
  if (e.target.dataset.direction === "up" && y > 0) {
    y -= 10;
    image.style.backgroundPosition = `${x}% ${y}%`;
  }
  if (e.target.dataset.direction === "down" && y < 100) {
    y += 10;
    image.style.backgroundPosition = `${x}% ${y}%`;
  }
});