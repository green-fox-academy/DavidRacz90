// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

const generateCandy = document.querySelector('.create-candies');
const buyLollypop = document.querySelector('.buy-lollypops');
let candies = 0;


generateCandy.addEventListener('click', () => {
  candies++;
  document.querySelector('.candies').textContent = candies;
})

buyLollypop.addEventListener('click', () => {
  let lollypops = '🍭🍭🍭';
  if (candies >= 10) {
    candies -= 10;
    let lollipop = '🍭';
  } else {
    alert('Not enough Candies');
  }
  document.querySelector('.candies').textContent = candies;
  document.querySelector('.lollypops').textContent = `${lollipop}`;
})
