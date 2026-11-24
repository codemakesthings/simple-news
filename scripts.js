const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}


function displayNews(articles) {
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = article.title;
    articleDiv.appendChild(title);

    const synopsis = document.createElement('p');
    synopsis.textContent = article.description;
    articleDiv.appendChild(synopsis);

    const author = document.createElement('h5');
    author.textContent = article.author;
    articleDiv.appendChild(author);

    const articleLink = document.createElement('a');
    articleLink.href = article.url;
    articleLink.target = "_blank";
    articleLink.textContent = "Read Article";
    articleLink.classList.add('btn-solid');
    articleLink.classList.add("theme-primary");
    articleDiv.appendChild(articleLink);



    newsDiv.appendChild(articleDiv);
  }
}


fetchNews();
