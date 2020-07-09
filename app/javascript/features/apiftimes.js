//---------------------------------------------------------FINANCIAL-TIMES-API---------------------------------------------------------

const secretKey = process.env.FT_KEY;

const titleContainerElement = document.querySelector(".stock_newsflow");

//@getParams() : Define API parameters
const getParams = () => {
  if (titleContainerElement) {
    const today = new Date();
    let rollingWindow = new Date();
    rollingWindow.setTime(today.getTime() - 31622400000);
    rollingWindow = rollingWindow.toISOString().toString().slice(0, 10);

    const stockName = titleContainerElement.dataset.name; //Get @deal.acquirer.name || @Stock.acquirer
    const stockId = titleContainerElement.dataset.identifier; //Get @deal.acquirer.identifier || @Stock.identifier
    const queryContextParam = `(title:"${stockName}" OR title:"${stockId}" OR "${stockName}" OR "${stockId}") AND (lastPublishDateTime:>${rollingWindow}T00:00:00Z)`;
    console.log(stockId);
    //We set parameters
    const searchParam = {
      queryString: queryContextParam,
      queryContext: {
        curations: ["ARTICLES"], //We'r just looking for ARTICLES
      },
      resultContext: {
        aspects: ["title", "lifecycle"], //Response include title and lifecyle of an article
        // maxResults: 20, Not needed -> Rolling Window
      },
    };
    return searchParam;
  }
};

//@createTitleElement : Create DOM elements for each title
const createTitleElement = (title) => {
  const div = document.createElement("div");
  div.innerHTML = `<a href="https://www.ft.com/content/${title.url}" target="_blank">${title.date} : ${title.title}</a>`;
  return div;
};

//@displayHeadlines : Create and display on the DOM each title from Headlines (Response [tab])
const displayHeadlines = (headlines) => {
  const titleNode = headlines.map((title) => {
    return createTitleElement(title);
  });
  titleContainerElement.innerHTML = "";
  titleContainerElement.append(...titleNode);
};

//@financialTime : API POST -> PROXY -> Get FT news for stocks/deals
const financialTime = async () => {
  const json = JSON.stringify(getParams());
  const url = "http://localhost:5000/financialtime";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      console.log(dataAPI); //DEBUG
      if (dataAPI[0]) {
        displayHeadlines(dataAPI);
      } else {
        console.log("Pas de résultats, merci d'affiner votre recherche..");
        document.querySelector(".accordion").remove();
      }
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

//@MAIN :If "stocks/show.html.erb" or "deals/show.html.erb"
if (titleContainerElement) {
  financialTime();
}
