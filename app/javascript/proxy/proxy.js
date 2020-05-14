const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const scrapersMorning = require("./javascript/scrapers/scrapingstar.js");
const scrapersFinancial = require("./javascript/scrapers/scrapingft");

app.post("/financialtime", async (req, res) => {
  const financialTimeData = await scrapersFinancial.scrapersFinancialTime(
    req.body
  );
  res.send(financialTimeData);
});

app.post("/morningstar", async (req, res) => {
  console.log("hello");
  const morningStarData = await scrapersMorning.scrapersMorningStar(
    req.body.url
  );
  res.send(morningStarData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
