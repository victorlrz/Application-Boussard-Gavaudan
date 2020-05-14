//---------------------------------------------------------MORNING-STAR-API---------------------------------------------------------

const valuationContainerElement = document.querySelector(".stock_valuation");

//@createValuationElement : Create DOM elements for scrapped data
const createValuationElement = (valuation) => {
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

//@displayValuation : Display valuation data on the DOM (response {object})
const displayValuation = (valuation) => {
  valuationContainerElement.append(createValuationElement(valuation));
};

//@morningStars : API GET -> PROXY -> Get MorningStar valuation for stocks
const morningStar = async () => {
  const encoded = encodeURI(valuationContainerElement.dataset.mgstar);
  const url = `http://localhost:8080/morningstar/${encoded}`;
  try {
    const response = await fetch(url, {
      method: "GET",
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
