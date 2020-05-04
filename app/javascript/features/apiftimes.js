require("dotenv").config();
const secretKey = process.env.FT_KEY;

const titleContainerElement = document.querySelector(".deal_newsflow");

const proxyurl = "https://cors-anywhere.herokuapp.com/";
// Params à modifier
const searchParam = {
  queryString: "banks",
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

const headlines = [];

const createTitleElement = (title) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${title.text}</p>`;
  return div;
};

const displayHeadlines = () => {
  const titleNode = headlines.map((title) => {
    return createTitleElement(title);
  });
  titleContainerElement.innerHTML = "";
  titleContainerElement.append(...titleNode);
};

const addHeadline = (text) => {
  headlines.push({
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
      for (let i = 0; i < searchParam.resultContext.maxResults; i++) {
        addHeadline(dataAPI.results[0].results[i].title.title);
      }
      displayHeadlines();
      // console.log(headline);
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

searchHeadlines();
