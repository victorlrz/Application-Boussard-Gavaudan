const iconMenu = document.querySelectorAll(".link");
let isMenuOpen = false;

const closeMenu = (elem) => {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("isActive");
    elem[i].classList.add("notActive");
  }
};

const isOpen = (elem) => {
  isMenuOpen = false;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("isActive")) {
      isMenuOpen = true;
    }
  }
};

function addClass(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      const current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current !== elem[i]) {
          elem[i].classList.remove("isActive");
          elem[i].classList.add("notActive");
        } else if (
          current == elem[i] &&
          current.classList.contains("isActive")
        ) {
          current.classList.replace("isActive", "notActive");
          // console.log(i);
        } else {
          current.classList.add("isActive");
          current.classList.remove("notActive");
        }
      }
      if (elem[0].classList.contains("isActive")) {
        window.location.replace("https://cryptic-harbor-77074.herokuapp.com"); //Prod
      }
      isOpen(iconMenu);
      e.preventDefault();
      e.stopPropagation();
    });
  }
}

window.addEventListener("click", (e) => {
  if (isMenuOpen) {
    closeMenu(iconMenu);
  }
});

addClass(iconMenu);
