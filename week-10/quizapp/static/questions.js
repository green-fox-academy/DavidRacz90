const xhr = new XMLHttpRequest();

xhr.open('GET', '/api/questions');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  const res = JSON.parse(xhr.responseText)
  res.forEach(e => {
    const question = document.createElement('p');
      question.innerText = e.question;
      document.body.appendChild(question);
  });
}
xhr.send();