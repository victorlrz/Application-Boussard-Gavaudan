const dailyFt = document.querySelector(".comment-content-ft");
const dailyFtStock = document.querySelector(".comment-info-ft");
const nbrDailyArticles = document.querySelector(".nbr-daily-articles");
const rightArrow = document.querySelector(".fas.fa-arrow-circle-right");
const leftArrow = document.querySelector(".fas.fa-arrow-circle-left");
var link = document.querySelector(".ft-article-a");

if (dailyFt) {
  const rubyDatas = dailyFt.dataset.daily;
  const dailyDatas = rubyDatas.split(/"[\]]|[\[]"|", "/);
};


let tabAfterSplice = [];
let dailyObjectFt = [];

//@function pour ajouter les éléments au daily Object
const addDailyObj = (title, url, company) => {
  dailyObjectFt.push({
    title,
    url,
    company,
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
const addTitleFront = (dailyTitles, id) => {
  dailyFt.innerHTML = dailyTitles[id].title;
};

//@Fonction pour assigner le stockName de l'index i
const addStockNameFront = (stockName, id) => {
  dailyFtStock.innerHTML = stockName[id].company;
};

const addLinkArticles = (dailyURL, id) => {
  link.setAttribute("href", `https://www.ft.com/content/${dailyURL[id].url}`);
};

//@Fonction pour assigner le numéro de l'article de l'index i
const addNumberArticles = (tab, compt) => {
  nbrDailyArticles.innerHTML = `${compt + 1}/${tab.length}`;
};

//@Fonction pour Assigner un autre index en fonction du clic
const displayTitles = (tab) => {
  let compt = 0;
  addTitleFront(tab, compt);
  addStockNameFront(tab, compt);
  addNumberArticles(tab, compt);
  addLinkArticles(tab, compt);
  rightArrow.addEventListener("click", (e) => {
    compt++;
    if (compt < tab.length) {
      addTitleFront(tab, compt);
      addStockNameFront(tab, compt);
      addNumberArticles(tab, compt);
      addLinkArticles(tab, compt);
    } else if (compt == tab.length) {
      compt = 0;
      addTitleFront(tab, compt);
      addStockNameFront(tab, compt);
      addLinkArticles(tab, compt);
      addNumberArticles(tab, compt);
    }
    // console.log(compt); //DEBUG
  });
  leftArrow.addEventListener("click", (e) => {
    if (compt > 0) {
      compt--;
      addTitleFront(tab, compt);
      addStockNameFront(tab, compt);
      addNumberArticles(tab, compt);
      addLinkArticles(tab, compt);
    } else if (compt == 0) {
      compt = tab.length - 1;
      addTitleFront(tab, compt);
      addStockNameFront(tab, compt);
      addNumberArticles(tab, compt);
      addLinkArticles(tab, compt);
    }
    // console.log(compt); //DEBUG
  });
};

//@Fonction pour assigner un autre index en fonction du temps
if (document.querySelector(".container-recent-ft")) {
rightArrow.onclick = function () {
  return false;
};
}

//@Main

const main = () => {
  if (document.querySelector(".container-recent-ft")) {
  tabAfterSplice = [];
  dailyObjectFt = [];
  spliceEmptyIndex(dailyDatas, tabAfterSplice);
  createDailyFtObj(tabAfterSplice);
  console.log(dailyObjectFt); //A ce niveau JSON des articles du jour
  if (dailyObjectFt.length !== 0) {
    displayTitles(dailyObjectFt);
  } else {
    dailyFt.innerHTML = "No daily articles published for the moment.";
  }
}
};



if (document.querySelector(".container-recent-ft")) {
main();
}
