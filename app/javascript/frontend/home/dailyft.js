const dailyFt = document.querySelector(".daily-ft");
const dailyFtTitle = document.querySelector(".name-daily-ft");

const rubyDatas = dailyFt.dataset.daily;
const dailyDatas = rubyDatas.split(/"[\]]|[\[]"|", "/);

const tabAfterSplice = [];
const dailyObjectFt = [];

//@function pour ajouter les éléments au daily Object
const addDailyObj = (title, url, compagny) => {
  dailyObjectFt.push({
    title,
    url,
    compagny,
  });
};

//@ Fonction qui va ajouter à tabAfterSplice les éléments de dailyDatas sans les index vides.
const spliceEmptyIndex = (tab, tabToAdd) => {
  for (let i = 0; i < tab.length; i++) {
    if (i % 4 !== 0) {
      tabToAdd.push(tab[i]);
    }
  }
  return tabToAdd;
};

spliceEmptyIndex(dailyDatas, tabAfterSplice);

const createDailyFtObj = (sortTab) => {
  let compt = 0;
  for (let i = 0; i < tab.length / 3; i++) {
    addDailyObj(sortTab[compt], sortTab[compt + 1], sortTab[compt + 2]);
    compt += 3;
    console.log(compt);
  }
};

createDailyFtObj(tabAfterSplice);

const changeTitle = () => {
  dailyFt.innerHTML = dailyDatas[0];
};

changeTitle();
