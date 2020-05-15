//---------------------------------------------------------FINANCIAL-TIMES-API---------------------------------------------------------

const secretKey = process.env.FT_KEY;


const titleContainerElement = document.querySelector(".stock_newsflow");

//@getParams() : Define API parameters
const getParams = () => {
  if (titleContainerElement) {
    const today = new Date();
    let rollingWindow = new Date();
    rollingWindow.setTime(today.getTime() - 31622400000);
    rollingWindow = rollingWindow
      .toISOString()
      .toString()
      .slice(0, 10);

    const stockName = titleContainerElement.dataset.name; //Get @deal.acquirer.name || @Stock.acquirer
    const stockId = titleContainerElement.dataset.identifier; //Get @deal.acquirer.identifier || @Stock.identifier
    const queryContextParam = `(title:"${stockName}" OR title:"${stockId}" OR "${stockName}" OR "${stockId}") AND (lastPublishDateTime:>${rollingWindow}T00:00:00Z)`;

    //We set parameters
    const searchParam = {
      queryString: queryContextParam,
      queryContext: {
        curations: ["ARTICLES"], //We'r just looking for ARTICLES
      },
      resultContext: {
        aspects: ["title", "lifecycle"], //Response include title and lifecyle of an article
        maxResults: 20,
      },
    };
    return searchParam;
  }
};

//@createTitleElement : Create DOM elements for each title
const createTitleElement = (title) => {
  const div = document.createElement("div");
  div.innerHTML = `<a href="https://www.ft.com/content/${title.id}" target="_blank">${title.date} : ${title.text}</a>`;
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
  const url = 'http://serv-bgam.herokuapp.com/financialtime';

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

      displayHeadlines(dataAPI);

      //Si la requête donne un résulat, on ajoute les éléments et on l'affiche dans le DOM
      if (dataAPI.results[0].results) {
        // i varie de 0 à maxResults des paramètres OU i varie de 0 au nombre de titres retournés depuis la date définie dans les paramètres.
        for (let i = 0; i < dataAPI.results[0].results.length; i++) {
          let date = new Date(
            dataAPI.results[0].results[i].lifecycle.lastPublishDateTime
          );
          addHeadline(
            dataAPI.results[0].results[i].title.title,
            date.toLocaleDateString(),
            dataAPI.results[0].results[i].id
          );
        }
        displayHeadlines();
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
