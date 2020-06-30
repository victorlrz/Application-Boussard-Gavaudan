const priceSales = document.querySelector(".price-sales-newsflow");
const priceEarnings = document.querySelector(".price-earnings-newsflow");
const priceCashflow = document.querySelector(".price-cashflow-newsflow");
const priceBook = document.querySelector(".price-book-newsflow");
const priceForwardEarnings = document.querySelector(
  ".price-forward-earnings-newsflow"
);
const earningsYield = document.querySelector(".earning-yield-newsflow");
const enterpriseValue = document.querySelector(".enterprise-value-newsflow");
const enterpriseValueEbit = document.querySelector(
  ".enterprise-value-ebit-newsflow"
);

function getDataMg() {
  let morningStarTab = null;
  if (
    priceSales !== null &&
    priceEarnings !== null &&
    priceCashflow !== null &&
    priceBook !== null &&
    priceForwardEarnings !== null &&
    earningsYield !== null &&
    enterpriseValue !== null &&
    enterpriseValueEbit !== null
  ) {
    const dataSales = priceSales.dataset.value;
    const dataEarnings = priceEarnings.dataset.value;
    const dataCashflow = priceCashflow.dataset.value;
    const dataBook = priceBook.dataset.value;
    const dataForwardEarnings = priceForwardEarnings.dataset.value;
    const dataYield = earningsYield.dataset.value;
    const dataValue = enterpriseValue.dataset.value;
    const dataValueEbit = enterpriseValueEbit.dataset.value;

    morningStarTab = [
      {
        data: "priceSales",
        value: dataSales,
        positive: true,
        initialize: true,
      },
      {
        data: "priceEarnings",
        value: dataEarnings,
        positive: true,
        initialize: true,
      },
      {
        data: "priceCashflow",
        value: dataCashflow,
        positive: true,
        initialize: true,
      },
      { data: "priceBook", value: dataBook, positive: true, initialize: true },
      {
        data: "priceForwardEarnings",
        value: dataForwardEarnings,
        positive: true,
        initialize: true,
      },
      {
        data: "earningsYield",
        value: dataYield,
        positive: true,
        initialize: true,
      },
      {
        data: "enterpriseValue",
        value: dataValue,
        positive: true,
        initialize: true,
      },
      {
        data: "enterpriseValueEbit",
        value: dataValueEbit,
        positive: true,
        initialize: true,
      },
    ];

    for (let i = 0; i < morningStarTab.length; i++) {
      if (morningStarTab[i].value < 0) {
        morningStarTab[i].positive = false;
        morningStarTab[i].value = -morningStarTab[i].value;
      }
      if (morningStarTab[i].value == "—") {
        morningStarTab[i].value = 0;
        morningStarTab[i].initialize = false;
      }
    }

    morningStarTab.sort(function (a, b) {
      return a.value - b.value;
    });
  }
  return morningStarTab;
}

function findWithAttr(array, attr, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

let numberOfStep = 100;

let id = [];
function stonk(elem, value, sign, init, time) {
  let compteur = 0;
  const idInterval = setInterval(frame, time);
  id.push(idInterval);
  function frame() {
    if (init == false) {
      elem.innerHTML = "—";
    } else if (compteur >= value && sign == true) {
      elem.innerHTML = value;
      clearInterval(idInterval);
    } else if (compteur >= value && sign == false) {
      elem.innerHTML = "- " + value;
      clearInterval(idInterval);
    } else if (compteur < value && sign == true) {
      compteur += value / numberOfStep;
      elem.innerHTML = Math.round(compteur * 100) / 100;
    } else if (compteur < value && sign == false) {
      compteur += value / numberOfStep;
      elem.innerHTML = "- " + Math.round(compteur * 100) / 100;
    }
  }
}

const morningStarTabs = document.querySelectorAll(".accordion-item");

const tabs = document.querySelectorAll(".accordion-tab");

function launch() {
  morningStarTabs.forEach(function (morning) {
    if (
      morning.classList.contains("accordion-active") &&
      morning.dataset.actabId == "3"
    ) {
      const morningStarData = getDataMg();
      if (morningStarData !== null) {
        //priceEarnings
        const id = findWithAttr(morningStarData, "data", "priceEarnings");

        stonk(
          priceEarnings,
          morningStarData[id].value,
          morningStarData[id].positive,
          morningStarData[id].initialize,
          20
        );
        //priceBook
        const id1 = findWithAttr(morningStarData, "data", "priceBook");

        stonk(
          priceBook,
          morningStarData[id1].value,
          morningStarData[id1].positive,
          morningStarData[id1].initialize,
          20
        );
        //priceSales
        const id2 = findWithAttr(morningStarData, "data", "priceSales");

        stonk(
          priceSales,
          morningStarData[id2].value,
          morningStarData[id2].positive,
          morningStarData[id2].initialize,
          20
        );
        //priceCashflow
        const id3 = findWithAttr(morningStarData, "data", "priceCashflow");

        stonk(
          priceCashflow,
          morningStarData[id3].value,
          morningStarData[id3].positive,
          morningStarData[id3].initialize,
          20
        );
        //priceForwardEarnings
        const id4 = findWithAttr(
          morningStarData,
          "data",
          "priceForwardEarnings"
        );

        stonk(
          priceForwardEarnings,
          morningStarData[id4].value,
          morningStarData[id4].positive,
          morningStarData[id4].initialize,
          20
        );
        //earningsYield
        const id5 = findWithAttr(morningStarData, "data", "earningsYield");

        stonk(
          earningsYield,
          morningStarData[id5].value,
          morningStarData[id5].positive,
          morningStarData[id5].initialize,
          20
        );
        //enterpriseValue
        const id6 = findWithAttr(morningStarData, "data", "enterpriseValue");

        stonk(
          enterpriseValue,
          morningStarData[id6].value,
          morningStarData[id6].positive,
          morningStarData[id6].initialize,
          20
        );
        //enterpriseValueEbit
        const id7 = findWithAttr(
          morningStarData,
          "data",
          "enterpriseValueEbit"
        );

        stonk(
          enterpriseValueEbit,
          morningStarData[id7].value,
          morningStarData[id7].positive,
          morningStarData[id7].initialize,
          20
        );
      }
    } else {
      for (let i = 0; i < id.length; i++) {
        clearInterval(i); //Clear timer tabs
      }
      id = []; //Reset
    }
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", launch);
});
