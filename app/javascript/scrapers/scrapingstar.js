const puppeteer = require("puppeteer");

//@scrapersMorningStar :  Scrap MorningStar with Puppeteer
const scrapersMorningStar = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor("body");
    await page.waitFor(2000); //Simulates human behaviour

    const results = page.evaluate(() => {
      let currentPriceSales = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(3) > td:nth-child(12) > span"
      ).innerText;
      let currentPriceEarnings = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(4) > td:nth-child(12) > span"
      ).innerText;
      let currentPriceCashFlow = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(5) > td:nth-child(12) > span"
      ).innerText;
      let currentPriceBook = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(6) > td:nth-child(12) > span"
      ).innerText;
      let currentPriceForwardEarnings = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(7) > td:nth-child(12) > span"
      ).innerText;
      let currentEarningYield = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(8) > td:nth-child(12) > span"
      ).innerText;
      let currentEnterpriseValue = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(9) > td:nth-child(12) > span"
      ).innerText;
      let currentEnterpriseValueEbit = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr.report-table-row.ng-scope.section-row > td:nth-child(12) > span"
      ).innerText;
      let currentEnterpriseValueEbitda = document.querySelector(
        "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1000 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(11) > td:nth-child(12) > span"
      ).innerText;

      return {
        currentPriceSales,
        currentPriceEarnings,
        currentPriceCashFlow,
        currentPriceBook,
        currentPriceForwardEarnings,
        currentEarningYield,
        currentEnterpriseValue,
        currentEnterpriseValueEbit,
        currentEnterpriseValueEbitda,
      };
    });
    const DataTest = await results;
    browser.close();
    return DataTest;
  } catch (e) {
    console.log(`error in scrapersMorningStar: ${e}`);
  }
};

//Exports response
module.exports = {
  scrapersMorningStar,
};
