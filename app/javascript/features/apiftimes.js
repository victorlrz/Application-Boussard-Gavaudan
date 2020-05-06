require("dotenv").config();
const secretKey = process.env.FT_KEY;

const titleContainerElement = document.querySelector(".stock_newsflow");
const headlines = [];

const searchParams = () => {
  if (titleContainerElement) {
    const stockName = titleContainerElement.dataset.name; //Récupère le paramètre @deal.acquirer.name
    const stockId = titleContainerElement.dataset.identifier; //Récupère le paramètre @deal.acquirer.identifier
    const queryContextParam = `("${stockName}" OR "${stockId}")`;

    const searchParam = {
      queryString: queryContextParam,
      queryContext: {
        curations: ["ARTICLES"],
      },
      resultContext: {
        aspects: ["title", "lifecycle"],
        maxResults: 20,
      },
    };
    return searchParam;
  }
};

const createTitleElement = (title) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${title.date} : ${title.text}</p>`;
  return div;
};

const displayHeadlines = () => {
  const titleNode = headlines.map((title) => {
    return createTitleElement(title);
  });
  titleContainerElement.innerHTML = "";
  titleContainerElement.append(...titleNode);
};

const addHeadline = (text, date) => {
  headlines.push({
    date,
    text,
  });
};

const searchHeadlines = async () => {
  const searchParam = searchParams();
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
  try {
    // proxyurl +
    const response = await fetch(url, {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": secretKey,
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      if (dataAPI.results[0].results) {
        for (let i = 0; i < dataAPI.results[0].results.length; i++) {
          let date = new Date(
            dataAPI.results[0].results[i].lifecycle.lastPublishDateTime
          );
          addHeadline(
            dataAPI.results[0].results[i].title.title,
            date.toLocaleDateString()
          );
        }
        displayHeadlines();
      } else {
        console.log(
          "Pas de titres associés à cette recherche, affinez vos paramètres .."
        );
      }
    }
  } catch (e) {
    console.error("e : ", e);
  }
};
console.log(secretKey);
if (titleContainerElement) {
  searchHeadlines();
}
