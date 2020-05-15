//---------------------------------------------------------MORNING-STAR-API---------------------------------------------------------

const valuationContainerElement = document.querySelector(".stock_valuation");

//@displayValuation : Create DOM elements for scrapped data
const displayValuation = (valuation) => {
  valuationContainerElement.innerHTML = `
  <div>Price/Sales : ${valuation.currentPriceSales}</div>
  <div>Price/Earnings : ${valuation.currentPriceEarnings}</div>
  <div>Price/Cash Flow : ${valuation.currentPriceCashFlow}</div>
  <div>Price/Book : ${valuation.currentPriceBook}</div>
  <div>Price/Forward Earnings : ${valuation.currentPriceForwardEarnings}</div>
  <div>Earnings Yield : ${valuation.currentEarningYield}</div>
  <div>Enterprise Value (Bil): ${valuation.currentEnterpriseValue}</div>
  <div>Enterprise Value/EBIT : ${valuation.currentEnterpriseValueEbit}</div>
  <div>Enterprise Value/EBITDA : ${valuation.currentEnterpriseValueEbitda}</div>`;
  return valuationContainerElement;
};

//@morningStars : API POST -> PROXY -> Post MorningStar valuation for stocks
const morningStar = async () => {
  const id = { url: valuationContainerElement.dataset.mgstar };
  const json = JSON.stringify(id);

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
      displayValuation(dataAPI);
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

//@MAIN : If "stocks/show.html.erb"
if (valuationContainerElement) {
  morningStar();
}
