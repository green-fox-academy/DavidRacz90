
const xhr = new XMLHttpRequest();
const API_BASE_URL = "http://api.giphy.com/v1/gifs/search?q=panda&api_key=dIiubt7shQcve3N1arpPMAmcdtnX8LJR&limit=16";

xhr.open('GET', `${API_BASE_URL}`, true);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      for (let i = 0; i < response.data.length; i++) {
        console.log(response);
        let gifStillURL = response.data[i].images.original_still.url;
        let gifMovingURL = response.data[i].images.original.url;
        let gifList = document.querySelector('.gifs');
        let gif = document.createElement('img');
        gifList.appendChild(gif);
        gif.setAttribute('src', gifStillURL);
        gif.onclick = () => {
          gif.setAttribute('src', gifMovingURL );
        }
      
      }
    }
  }
}



