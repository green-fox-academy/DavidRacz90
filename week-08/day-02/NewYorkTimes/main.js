const xhr = new XMLHttpRequest();
var API_BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=901dbc4f7cf54542a732d16a5a14aecb&q=moon&landing&by&apollo&11&begin_date=19690616&end_date=19690624";


xhr.open('GET', `${API_BASE_URL}`);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const myResponse = JSON.parse(xhr.responseText);
      for (let i = 0; i < myResponse.response.docs.length; i++) {
        console.log(myResponse)
        let headline = myResponse.response.docs[i].headline.main;
        let snippet = myResponse.response.docs[i].snippet;
        let pubDate = myResponse.response.docs[i].pub_date;

        let article = document.querySelector('.articles');
        let link = document.createElement('a');
        link.setAttribute('href', myResponse.response.docs[i].web_url);
        let articleHeadline = document.createElement('h2');
        let articleSnippet = document.createElement('p');
        let articlePub_Date = document.createElement('p');
        
        link.innerText = headline;
        articleSnippet.innerText = snippet;
        articlePub_Date.innerText = pubDate;
        
        articleHeadline.appendChild(link);
        article.appendChild(articleHeadline);
        article.appendChild(articleSnippet);
        article.appendChild(articlePub_Date)

      }
    }
  }
}         