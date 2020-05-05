require("dotenv").config();
const secretKey = process.env.FT_KEY;
const titleContainerElement = document.querySelector(".deal_newsflow");

const stockName = titleContainerElement.dataset.name; //Récupère le paramètre @deal.acquirer.name
const stockId = titleContainerElement.dataset.identifier; //Récupère le paramètre @deal.acquirer.identifier
console.log(stockName); //Debug -> Affiche le nom du stock
console.log(stockId); //Debug -> Affiche l'identifiant du stock

const proxyurl = "https://cors-anywhere.herokuapp.com/";

// Params à modifier avec les paramètres ci-dessus
const searchParam = {
  queryString: "Takeaway.com",
  queryContext: {
    curations: ["PAGES", "BLOGS", "ARTICLES"],
  },
  resultContext: {
    aspects: ["title", "lifecycle"],
    maxResults: 20,
    // offset: 21,
    // sortOrder: "ASC",
    // sortField: "title",
    // facets: { names: ["people"], maxElements: 20, minThreshold: 1 },
  },
};

// console.log(searchParam); //DEBUG

const headlines = [];

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
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
  try {
    // proxyurl +
    const response = await fetch(proxyurl + url, {
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
        for (let i = 0; i < searchParam.resultContext.maxResults; i++) {
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

searchHeadlines();
