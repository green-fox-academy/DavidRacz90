const king = document.querySelector('#b325');
console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
  console.log(e.innerHTML);
})

const selector = document.querySelector('section');
const conceitedKing = selector.querySelectorAll('div');
for(i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].textContent);
}


const noBusiness = document.querySelectorAll('div'); 
  noBusiness.forEach(e => {
    console.log(e.textContent);
  });
