const tabs = document.querySelectorAll(".accordion-tab");
const title = document.querySelector(".stock-show-title");

function displayTitle() {
  const target = this;
  const item = target.classList.contains("accordion-tab")
    ? target
    : target.parentElement;
  const name = item.dataset.name;
  const stock = item.dataset.stock;
  title.innerHTML = stock + " : " + name;
}

if (title) {
  tabs.forEach(function (tab) {
    tab.addEventListener("click", displayTitle);
  });
}
