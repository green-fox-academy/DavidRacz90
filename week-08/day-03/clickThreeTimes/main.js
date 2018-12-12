const button = document.querySelector('button');
let clicks = 0;



button.onclick = () => {
  clicks +=1;
  console.log(clicks);
}


clickCounter = (e) => {
  if(e.timeStamp < 5000){
    
    button.removeEventListener('click', clickCounter);
  }
  else if(clicks === 3){
    document.querySelector('body').innerText = 'Cucc';
  }
}

button.addEventListener('click', clickCounter);

