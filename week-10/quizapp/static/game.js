const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/game');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  if(xhr.status >= 200 && xhr.status < 400) {
    const res = JSON.parse(xhr.responseText);
    console.log(res);
    const question = document.createElement('h3');
    question.innerText = res[0].question;
    document.body.appendChild(question);
    let score = 0;
    const scoreBoard = document.createElement('p');
    scoreBoard.innerText = `Score: ${score}`;
    document.body.appendChild(scoreBoard)
    res.forEach(e => {
      const answer = document.createElement('button');
      answer.innerText = e.answer;
      document.body.appendChild(answer);
      answer.addEventListener('click', () => {
        if(e.is_correct === 1) {
          score++;
          console.log('yay');
        } else {
          console.log('nay');
        }
      })
    });
  }
}
xhr.send();