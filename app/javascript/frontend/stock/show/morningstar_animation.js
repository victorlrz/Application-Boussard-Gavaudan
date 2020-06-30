const priceSales = document.querySelector(".price-sales");
const priceEarnings = document.querySelector(".price-earnings");
const priceCashflow = document.querySelector(".price-cashflow");
const priceBook = document.querySelector(".price-book");
const priceForwardEarnings = document.querySelector(".price-forward-earnings");
const earningsYield = document.querySelector(".earning-yield");
const enterpriseValue = document.querySelector(".enterprise-value");
const enterpriseValueEbit = document.querySelector(".enterprise-value-ebit");

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

const morningStarAnimationPriceSales = document.querySelector(
  ".col-mg-graph-price-sales"
);
const morningStarAnimationPriceEarnings = document.querySelector(
  ".col-mg-graph-price-earnings"
);
const morningStarAnimationPriceCashFlow = document.querySelector(
  ".col-mg-graph-price-cashflow"
);
const morningStarAnimationPriceBook = document.querySelector(
  ".col-mg-graph-price-book"
);
const morningStarAnimationPriceForwardEarnings = document.querySelector(
  ".col-mg-graph-price-forward-earnings"
);
const morningStarAnimationEarningYield = document.querySelector(
  ".col-mg-graph-earning-yield"
);
const morningStarAnimationEnterpriseValue = document.querySelector(
  ".col-mg-graph-enterprise-value"
);
const morningStarAnimationEnterpriseValueEbit = document.querySelector(
  ".col-mg-graph-enterprise-value-ebit"
);

const setSize = (id, anim, tab) => {
  const animation = "stonk 2s ease-in forwards";
  switch (id) {
    case 0:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "2.5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 1:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 2:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "7.5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 3:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "10vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 4:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "12.5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 5:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "15vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 6:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "17.5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 7:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "20vh");
        anim.style.setProperty("animation", animation);
      }
      break;
    case 8:
      if (tab[id].value == 0) {
        anim.style.setProperty("--h", "0vh");
      } else {
        anim.style.setProperty("--h", "22.5vh");
        anim.style.setProperty("animation", animation);
      }
      break;
  }
};

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
        setSize(id, morningStarAnimationPriceEarnings, morningStarData);
        stonk(
          priceEarnings,
          morningStarData[id].value,
          morningStarData[id].positive,
          morningStarData[id].initialize,
          20
        );
        //priceBook
        const id1 = findWithAttr(morningStarData, "data", "priceBook");
        setSize(id1, morningStarAnimationPriceBook, morningStarData);
        stonk(
          priceBook,
          morningStarData[id1].value,
          morningStarData[id1].positive,
          morningStarData[id1].initialize,
          20
        );
        //priceSales
        const id2 = findWithAttr(morningStarData, "data", "priceSales");
        setSize(id2, morningStarAnimationPriceSales, morningStarData);
        stonk(
          priceSales,
          morningStarData[id2].value,
          morningStarData[id2].positive,
          morningStarData[id2].initialize,
          20
        );
        //priceCashflow
        const id3 = findWithAttr(morningStarData, "data", "priceCashflow");
        setSize(id3, morningStarAnimationPriceCashFlow, morningStarData);
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
        setSize(id4, morningStarAnimationPriceForwardEarnings, morningStarData);
        stonk(
          priceForwardEarnings,
          morningStarData[id4].value,
          morningStarData[id4].positive,
          morningStarData[id4].initialize,
          20
        );
        //earningsYield
        const id5 = findWithAttr(morningStarData, "data", "earningsYield");
        setSize(id5, morningStarAnimationEarningYield, morningStarData);
        stonk(
          earningsYield,
          morningStarData[id5].value,
          morningStarData[id5].positive,
          morningStarData[id5].initialize,
          20
        );
        //enterpriseValue
        const id6 = findWithAttr(morningStarData, "data", "enterpriseValue");
        setSize(id6, morningStarAnimationEnterpriseValue, morningStarData);
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
        setSize(id7, morningStarAnimationEnterpriseValueEbit, morningStarData);
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
      if (
        morningStarAnimationPriceSales !== null &&
        morningStarAnimationPriceEarnings !== null &&
        morningStarAnimationPriceCashFlow !== null &&
        morningStarAnimationPriceBook !== null &&
        morningStarAnimationPriceForwardEarnings !== null &&
        morningStarAnimationEarningYield !== null &&
        morningStarAnimationEnterpriseValue !== null &&
        morningStarAnimationEnterpriseValueEbit !== null
      ) {
        morningStarAnimationPriceSales.style.removeProperty("animation");
        morningStarAnimationPriceEarnings.style.removeProperty("animation");
        morningStarAnimationPriceCashFlow.style.removeProperty("animation");
        morningStarAnimationPriceBook.style.removeProperty("animation");
        morningStarAnimationPriceForwardEarnings.style.removeProperty(
          "animation"
        );
        morningStarAnimationEarningYield.style.removeProperty("animation");
        morningStarAnimationEnterpriseValue.style.removeProperty("animation");
        morningStarAnimationEnterpriseValueEbit.style.removeProperty(
          "animation"
        );
      }
      id = []; //Reset
    }
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", launch);
});
