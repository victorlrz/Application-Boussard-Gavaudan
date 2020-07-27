const mgValuation = document.querySelector(".grid-morningstar-valuation");
const btn = document.querySelector(".btn-ctn.display-mg");
const spanBtnContent = document.querySelector(".to-change-ct");

function hide() {
  spanBtnContent.innerHTML = "Display";
  mgValuation.style.setProperty("display", "none");
}

function display() {
  spanBtnContent.innerHTML = "Hide";
  mgValuation.style.setProperty("display", "grid");
}

function toggle(event) {
  spanBtnContent.innerHTML == "Display" ? display() : hide();
  event.stopPropagation();
}

if (btn && mgValuation && spanBtnContent) {
  btn.addEventListener("click", toggle);
}
