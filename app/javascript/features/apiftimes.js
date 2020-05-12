const titleContainerElement = document.querySelector(".stock_newsflow");

//Fonction qui permet de définir les paramètres de l'API
//Prend en paramètre un entier, qui détermine quels paramètres seront utilisés
const getParams = () => {
  if (titleContainerElement) {
    const today = new Date();
    let rollingWindow = new Date();
    rollingWindow.setTime(today.getTime() - 31622400000);
    rollingWindow = rollingWindow
      .toISOString()
      .toString()
      .slice(0, 10);
    const stockName = titleContainerElement.dataset.name; //Récupère le paramètre @deal.acquirer.name || @Stock.acquirer
    const stockId = titleContainerElement.dataset.identifier; //Récupère le paramètre @deal.acquirer.identifier || @Stock.identifier
    let queryContextParam;
    queryContextParam = `(title:"${stockName}" OR title:"${stockId}" OR "${stockName}" OR "${stockId}") AND (lastPublishDateTime:>${rollingWindow}T00:00:00Z)`; //Cas 1, on cherche le nom du Stock ou l'Identifier dans le titre

    //Assignation des paramètre à searchParam, ils seront injectés dans la fonction searchHeadlines.
    const searchParam = {
      queryString: queryContextParam,
      queryContext: {
        curations: ["ARTICLES"], //On ne cherche que des articles
      },
      resultContext: {
        aspects: ["title", "lifecycle"], //Titre des articles et dates des publications/modifications
        maxResults: 20,
      },
    };
    return searchParam; //On retourne les paramètres de la recherche
  }
};

//Fonction qui permet de créer un élément du DOM HTML pour chaque titre
//Chaque titre sera contenu dans une balise <a> pour rediriger vers le lien de l'article
//La balise <a> est contenue dans une balise <p> pour avoir un élément de type "block" sur le DOM
//"target = _blank" permet d'ouvrir les pages dans de nouveaux onglets.
const createTitleElement = (title) => {
  const div = document.createElement("div");
  div.innerHTML = `<a href="https://www.ft.com/content/${title.id}" target="_blank">${title.date} : ${title.text}</a>`;
  return div;
};

//Fonction qui permet d'afficher chaque article dans le DOM
//On itère sur le tableau "headlines" avec la fonction map
//Pour chaque titre de headlines, on crée un élément sur le DOM avec "createTitleElement"
//La fonction map retourne un nouveau tableau "titleNode" contenant les éléments à positionner sur le DOM
//Enfin on ajoute tous les éléments à notre DOM avec titleContaineElement.append(...titleNode)
//titleContainerElement fait référence à la ".classe" des div de deals/show.html.erb et stocks/show.html.erb
const displayHeadlines = (headlines) => {
  const titleNode = headlines.map((title) => {
    return createTitleElement(title);
  });
  titleContainerElement.innerHTML = "";
  titleContainerElement.append(...titleNode);
};

const financialTime = async () => {
  //   console.log(JSON.stringify(getParams()));
  const encoded = encodeURI(JSON.stringify(getParams()));
  const url = `http://localhost:8080/financialtime/${encoded}`;
  //   console.log(url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      console.log(dataAPI);
      displayHeadlines(dataAPI);
    }
  } catch (e) {
    //Si try échoue, retourne l'erreur catchée
    console.error("e : ", e);
  }
};

///MAIN///
//Si nous sommes sur une page du DOM contenant les classes du "titleContainerElement" à savoir ".stock_newsflow"
//Alors on éxécute la recherche avec les paramètres sélectionnés.

if (titleContainerElement) {
  financialTime();
}
