const dailyFt = document.querySelector(".daily-ft");
const dailyFtTitle = document.querySelector(".name-daily-ft");

const rubyDatas = dailyFt.dataset.daily;
const dailyDatas = rubyDatas.split(/"[\]]|[\[]"|", "/);

let tabAfterSplice = [];
let dailyObjectFt = [];

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

//@Fonction pour créer l'objet contenant tous les titres de la journée.
const createDailyFtObj = (tab) => {
  let compt = 0;
  for (let i = 0; i < tab.length / 3; i++) {
    addDailyObj(tab[compt], tab[compt + 1], tab[compt + 2]);
    compt += 3;
  }
};

//@Fonction pour assigner le titre de l'index i
//@Fonction pour Assigner un autre index en fonction du clic
//@Fonction pour assigner un autre index en fonction du temps
//Attention aux conditions si vide.
const main = () => {
  tabAfterSplice = [];
  dailyObjectFt = [];
  spliceEmptyIndex(dailyDatas, tabAfterSplice);
  createDailyFtObj(tabAfterSplice);
  console.log(dailyObjectFt); //A ce niveau JSON des articles du jour
};

main();
