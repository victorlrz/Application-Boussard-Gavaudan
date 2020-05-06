require("dotenv").config();
const secretKey = process.env.FT_KEY;

const titleContainerElement = document.querySelector(".stock_newsflow");
const headlines = [];

const getParams = (value) => {
  if (titleContainerElement) {
    const stockName = titleContainerElement.dataset.name; //Récupère le paramètre @deal.acquirer.name || @Stock.acquirer
    const stockId = titleContainerElement.dataset.identifier; //Récupère le paramètre @deal.acquirer.identifier || @Stock.identifier
    let queryContextParam;
    switch (value) {
      case 1:
        queryContextParam = `(title:"${stockName}" OR title:"${stockId}")`;
        break;
      case 2:
        queryContextParam = `("${stockName}" OR "${stockId}")`;
        break;
    }
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

const searchHeadlines = async (searchParam) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
        searchHeadlines(getParams(2));
      }
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

if (titleContainerElement) {
  searchHeadlines(getParams(1));
}
