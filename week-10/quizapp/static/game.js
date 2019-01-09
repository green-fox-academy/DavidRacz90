const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/game');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  if(xhr.status >= 200 && xhr.status < 400) {
    const res = JSON.parse(xhr.responseText);
    
  }
}
xhr.send();