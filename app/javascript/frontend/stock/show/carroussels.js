//Vertical Carroussels

const arrowTop = document.querySelector(".fas.fa-angle-up");
const arrowDown = document.querySelector(".fas.fa-angle-down");
const transformY = document.getElementById("vertical-carroussel");
const lengthY =
  100 / (document.querySelectorAll(".banner-newsflow").length - 1);
const nbrClickY = document.querySelectorAll(".banner-newsflow").length - 4;
//-4 car 3 éléments dans la div + 1 élément caché en relative

if (arrowTop && arrowDown && transformY && lengthY && nbrClickY) {
  let compt = 0;
  let click = 0;
  arrowTop.addEventListener("click", (event) => {
    click -= 1;
    arrowDown.style.setProperty("visibility", "visible");
    if (compt !== 0) {
      compt += lengthY;
      transformY.style.setProperty("transform", `translateY(${compt}%)`);
    }
    if (click == 0) {
      arrowTop.style.setProperty("visibility", "hidden");
    }
    event.stopPropagation();
  });

  arrowDown.addEventListener("click", (event) => {
    click += 1;
    arrowTop.style.setProperty("visibility", "visible");
    if (compt > -lengthY * nbrClickY) {
      compt -= lengthY;
      transformY.style.setProperty("transform", `translateY(${compt}%)`);
    }
    if (click >= nbrClickY) {
      arrowDown.style.setProperty("visibility", "hidden");
    }
    event.stopPropagation();
  });
}

//Horizontal Carroussel

const arrowLeft = document.getElementById("angle-left");
const arrowRight = document.getElementById("angle-right");
const transformX = document.getElementById("horizontal-carroussel");
const lengthX = 100 / (document.querySelectorAll(".comments-card").length - 1);
const nbrClickX = document.querySelectorAll(".comments-card").length - 5;
//-5 car 4 éléments dans la div + 1 élément caché en relative

if (arrowLeft && arrowRight && transformX && lengthX && nbrClickX) {
  let compt = 0;
  let click = 0;
  arrowLeft.addEventListener("click", (event) => {
    click -= 1;
    arrowRight.style.setProperty("visibility", "visible");
    if (compt !== 0) {
      compt += lengthX;
      transformX.style.setProperty("transform", `translateX(${compt}%)`);
    }
    if (click == 0) {
      arrowLeft.style.setProperty("visibility", "hidden");
    }
    event.stopPropagation();
  });

  arrowRight.addEventListener("click", (event) => {
    click += 1;
    arrowLeft.style.setProperty("visibility", "visible");
    if (compt > -lengthX * nbrClickX) {
      compt -= lengthX;
      transformX.style.setProperty("transform", `translateX(${compt}%)`);
    }
    if (click >= nbrClickX) {
      arrowRight.style.setProperty("visibility", "hidden");
    }
    event.stopPropagation();
  });
}
