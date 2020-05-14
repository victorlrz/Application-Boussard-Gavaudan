// console.log(require("dotenv").config()); //Useful debug

const fetch = require("node-fetch");
const secretKey = process.env.FT_KEY;

let headlines = [];

//@addHealine : add a title to headlines array.
const addHeadline = (text, date, id) => {
  headlines.push({
    text,
    date,
    id,
  });
};

//@scapersFinancialTime : API Post PROXY -> FT
const scrapersFinancialTime = async (searchParam) => {
  headlines = [];
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
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
      if (dataAPI.results[0].results) {
        // i varies from 0 to maxResults of the parameters OR i varies from 0 to the number of titles returned since the date defined in the parameters.
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
      } else {
        console.log("Pas de résultats, merci d'affiner votre recherche..");
      }
      return headlines;
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

//Exports response
module.exports = {
  scrapersFinancialTime,
};
