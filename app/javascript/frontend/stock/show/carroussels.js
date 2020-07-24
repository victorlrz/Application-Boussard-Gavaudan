const arrowTop = document.querySelector(".fas.fa-angle-up");
const arrowDown = document.querySelector(".fas.fa-angle-down");
const transformY = document.getElementById("vertical-carroussel");
const length = 100 / (document.querySelectorAll(".banner-newsflow").length - 1);
const nbrClick = document.querySelectorAll(".banner-newsflow").length - 4;
//-4 car 3 éléments dans la div + 1 élément caché en relative

if (arrowTop && arrowDown && transformY && length) {
  let compt = 0;
  let click = 0;
  arrowTop.addEventListener("click", (event) => {
    click -= 1;
    arrowDown.style.setProperty("visibility", "visible");
    if (compt !== 0) {
      compt += length;
      transformY.style.setProperty("transform", `translateY(${compt}%)`);
    }
    if (click == 0) {
      arrowTop.style.setProperty("visibility", "hidden");
    }
  });

  arrowDown.addEventListener("click", (event) => {
    click += 1;
    arrowTop.style.setProperty("visibility", "visible");
    if (compt > -length * nbrClick) {
      compt -= length;
      transformY.style.setProperty("transform", `translateY(${compt}%)`);
    }
    if (click >= nbrClick) {
      arrowDown.style.setProperty("visibility", "hidden");
    }
  });
}
