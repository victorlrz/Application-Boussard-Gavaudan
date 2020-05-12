const express = require("express");
const app = express();
const port = 8080;

const bodyParser = require("body-parser");

const scrapers = require("../scrapers/scrapingstar.js");

const url = "https://www.morningstar.com/stocks/grey/cgpvf/valuation";

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get(/morningstar/, async (req, res) => {
  const test = await scrapers.getDataFromUrl(url);
  console.log(req.originalUrl);
  res.send(test);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
