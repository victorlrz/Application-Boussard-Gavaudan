//About Valuation
const readMoreCtn = document.querySelector(".extend-about");
const readLessCtn = document.querySelector(".reduce-about");
const readMoreBtn = document.getElementById("read-more");
const readLessBtn = document.getElementById("read-less");

function readMore(event) {
  readMoreCtn.style.setProperty("display", "none");
  readLessCtn.style.setProperty("display", "block");
  event.stopPropagation();
}

function readLess(event) {
  readLessCtn.style.setProperty("display", "none");
  readMoreCtn.style.setProperty("display", "block");
  event.stopPropagation();
}

if (readMoreBtn && readMoreCtn && readLessCtn && readLessCtn) {
  readMoreBtn.addEventListener("click", readMore);
  readLessBtn.addEventListener("click", readLess);
}

//MorningStar display valuation

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
