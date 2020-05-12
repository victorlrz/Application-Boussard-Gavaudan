// console.log(require("dotenv").config()); //
require("dotenv").config();
const fetch = require("node-fetch");

const secretKey = process.env.FT_KEY;
let headlines = [];

//Fonciton qui permet d'ajouter un titre à l'objet "headlines = []"
//"headlines" sera composé d'un titre (text), d'une date (date) et de son id (id)
const addHeadline = (text, date, id) => {
  headlines.push({
    text,
    date,
    id,
  });
};

//Fonction qui effectue notre recherche, prend en seul paramètre les paramètres pour la requête API

const scrapersFinancialTime = async (searchParam) => {
  headlines = [];
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
  console.log(json);
  try {
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
      //Si la requête donne un résulat, on ajoute les éléments et on l'affiche dans le DOM
      if (dataAPI.results[0].results) {
        // i varie de 0 à maxResults des paramètres OU i varie de 0 au nombre de titres retournés depuis la date définie dans les paramètres.
        for (let i = 0; i < dataAPI.results[0].results.length; i++) {
          //   console.log(dataAPI.results[0].results[i].title.title);
          let date = new Date(
            dataAPI.results[0].results[i].lifecycle.lastPublishDateTime
          );
          addHeadline(
            dataAPI.results[0].results[i].title.title,
            date.toLocaleDateString(),
            dataAPI.results[0].results[i].id
          );
        }
      } else {
        console.log("Pas de résultats, merci d'affiner votre recherche..");
      }
      return headlines;
    }
  } catch (e) {
    //Si try échoue, retourne l'erreur catchée
    console.error("e : ", e);
  }
};

///MAIN///
//Si nous sommes sur une page du DOM contenant les classes du "titleContainerElement" à savoir ".stock_newsflow"
//Alors on éxécute la recherche avec les paramètres sélectionnés.
module.exports = {
  scrapersFinancialTime,
};
