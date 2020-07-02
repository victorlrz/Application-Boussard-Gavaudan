const lightMode = document.querySelector(".dark-light-mode");

function lightDarkMode(elem) {
  elem.addEventListener("click", function (e) {
    if (elem.classList.contains("notActive")) {
      elem.classList.remove("notActive");
      elem.classList.add("isActive");
      window.sessionStorage.mode = "isActive";
      //   console.log(mode); //   Debug;
      //FUNCTION ACTIVATE DARK MODE
    } else if (elem.classList.contains("isActive")) {
      elem.classList.remove("isActive");
      elem.classList.add("notActive");
      window.sessionStorage.mode = "notActive";
      //FUNCTION DESACTIVATE DARKMODE
    } else {
      elem.classList.remove("notActive");
      elem.classList.add("isActive");
      window.sessionStorage.mode = "isActive";
      //FUNCTION ACTIVATE DARK MODE
    }
    //   console.log(mode); //   Debug;
    e.preventDefault();
    e.stopPropagation();
  });
}

lightDarkMode(lightMode);

window.addEventListener("load", (event) => {
  if (window.sessionStorage.mode == "notActive") {
    lightMode.classList.remove("isActive");
    lightMode.classList.add("notActive");
    //FUNCTION DESACTIVATE DARK MODE
  } else if (window.sessionStorage.mode == "isActive") {
    lightMode.classList.remove("notActive");
    lightMode.classList.add("isActive");
    //FUNCTION ACTIVATE DARK MODE
  }
});
