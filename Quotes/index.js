console.clear();
const url = "https://api.quotable.io/random";

async function getRandomQuotes() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    const data = await response.json();
    console.log(data);
    quotes(data);
  } catch (error) {
    console.error("FETCH ERROR:", error);
  }
}

function quotes(data) {
  const quoteText = data.content; //I looked at the response in console log
  const author = data.author;

  //select the div from html using data-js
  const quoteContainer = document.createElement("div");
  //quoteContainer.innerHTML = ""; //This is to clear the previous quote
  //quoteContainer.style.backgroundColor = "bisque";
  quoteContainer.style.display = "grid";
  quoteContainer.style.justifyContent = "center";

  // create elements and append them
  const quote = document.createElement("p");
  quote.innerText = ` "${quoteText}" `;
  quote.style.color = "rgb(125, 180, 180)";

  const quoteAuthor = document.createElement("p");
  quoteAuthor.innerText = `by: ${author}`;
  quoteAuthor.style.color = "bisque";
  ////////////////////////////////////
  document.body.append(quoteContainer);
  quoteContainer.append(quote);
  quoteContainer.append(quoteAuthor);
}

getRandomQuotes();
