const tabs = document.querySelectorAll(".accordion-tab");
const title = document.querySelector(".portfolio-index-title");

function displayID() {
  const target = this;
  const item = target.classList.contains("accordion-tab")
    ? target
    : target.parentElement;
  const name = item.dataset.name;
  const date = item.dataset.date;
  const weight = item.dataset.weight;
  const aum = item.dataset.aum;
  title.innerHTML =
    name +
    " - " +
    date +
    " - Investment level : " +
    weight +
    "% - AUM : " +
    aum +
    " EUR";
}

if (title) {
  tabs.forEach(function (tab) {
    tab.addEventListener("click", displayID);
  });
}
