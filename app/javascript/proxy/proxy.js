const express = require("express");
const app = express();
const port = 8080;

const bodyParser = require("body-parser");

const scrapersMorning = require("../scrapers/scrapingstar.js");
const scrapersFinancial = require("../scrapers/scrapingft");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get(/financialtime/, async (req, res) => {
  const decodedURL = decodeURI(req.originalUrl.slice(15));
  const paramJSON = JSON.parse(decodedURL);
  const financialTimeData = await scrapersFinancial.scrapersFinancialTime(
    paramJSON
  );
  res.send(financialTimeData);
});

app.get(/morningstar/, async (req, res) => {
  const decodedURL = decodeURI(req.originalUrl.slice(13));
  console.log(decodedURL);
  const morningStarData = await scrapersMorning.scrapersMorningStar(decodedURL);
  res.send(morningStarData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
