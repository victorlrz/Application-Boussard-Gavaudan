//COMMENTS OPEN/CLOSE ici MENU = BOUTON BLANC
const buttonStockShow = document.querySelectorAll(".li-box");
const headerContainer = document.querySelector(".stock-show-about-section");
const contentWindow = document.querySelectorAll(".content-window");
const separator = document.querySelector(".separator");

let isMenuOpen = false;
let isArticleOpen = false;

const closeMenu = (elem) => {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("m_button-active");
    elem[i].classList.add("m_button");
  }
};

const closeArticle = (elem1, elem2) => {
  for (let i = 0; i < elem1.length; i++) {
    elem1[i].classList.remove("show-content");
    elem1[i].classList.add("no-display");
    elem1[i].style.setProperty("height", 0);
    elem1[i].style.setProperty("min-height", 0);
  }
  elem2.classList.remove("no-display");
  separator.classList.remove("sep-active");
};

const isOpenMenu = (elem) => {
  isMenuOpen = false;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("m_button-active")) {
      isMenuOpen = true;
    }
  }
};

const isOpenArticle = (elem) => {
  isArticleOpen = false;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("show-content")) {
      isArticleOpen = true;
    }
  }
};
//On écoute le clique sur chaque li contenant un comment,
//A chaque clique on ajoute ou enlève les != animations
//Si l'article est ouvert, on enlève le header + sep
//Si clique sur le body est article ouvert on le close + annulation des no-displays ..

function addElem(elem) {
  let height =
    elem.length % 2 == 0 ? elem.length / 2 : Math.round(elem.length / 2);
  height = height * 150;
  height =
    window.innerHeight > height ? window.innerHeight + "px" : height + "px";
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      const current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current !== elem[i]) {
          elem[i].classList.remove("m_button-active");
          elem[i].classList.add("m_button");
          contentWindow[i].classList.add("no-display");
        } else {
          current.classList.remove("m_button");
          contentWindow[i].classList.remove("no-display");
          current.classList.add("m_button-active");
          contentWindow[i].classList.add("show-content");
          contentWindow[i].style.setProperty("min-height", height);
          //Non affichage de sep + header
          headerContainer.classList.add("no-display");
          separator.classList.add("sep-active");
        }
      }
      isOpenMenu(buttonStockShow);
      isOpenArticle(contentWindow);
      e.preventDefault();
      e.stopPropagation();
    });
  }
}

window.addEventListener("click", (e) => {
  if (isMenuOpen) {
    closeMenu(buttonStockShow);
  }
  if (isArticleOpen) {
    closeArticle(contentWindow, headerContainer);
  }
});

addElem(buttonStockShow);
