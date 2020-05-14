const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bodyParser = require("body-parser");

const scrapersMorning = require("./javascript/scrapers/scrapingstar.js");
const scrapersFinancial = require("./javascript/scrapers/scrapingft");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/financialtime", async (req, res) => {
  const financialTimeData = await scrapersFinancial.scrapersFinancialTime(
    req.body
  );
  res.send(financialTimeData);
});

app.post("/morningstar", async (req, res) => {
  const morningStarData = await scrapersMorning.scrapersMorningStar(
    req.body.url
  );
  res.send(morningStarData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//
