const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");
const displayTabs = document.querySelectorAll(".stock-show-tab");
const toggleMenu = document.querySelector(".stock-show-button");
const containerMenu = document.querySelector(".stock-show-nav-container");
const backgrounds = document.querySelectorAll(".bg");
const closeMenu = document.body;

function toggleShow() {
  const target = this;
  const item = target.classList.contains("accordion-tab")
    ? target
    : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;

  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add("accordion-active");
      } else {
        tab.classList.remove("accordion-active");
      }
    }
  });

  labels.forEach(function (label) {
    const tabItem = label.parentElement;

    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add("accordion-active");
      } else {
        tabItem.classList.remove("accordion-active");
      }
    }
  });

  displayTabs.forEach(function (display) {
    const tabItem = display.parentElement;
    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        // display.classList.remove("no-display");
        display.classList.add("min-height");
      } else {
        // display.classList.add("no-display");
        display.classList.remove("min-height");
      }
    }
  });

  backgrounds.forEach(function (background) {
    const tabItem = background.parentElement;
    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        background.classList.add("min-height");
      } else {
        background.classList.remove("min-height");
      }
    }
  });
}
if (toggleMenu) {
  toggleMenu.addEventListener("click", function (e) {
    if (containerMenu.classList.contains("active-sidebar")) {
      containerMenu.classList.remove(
        "active-sidebar",
        "active-bg",
        "active-logo-top",
        "active-logo-middle",
        "active-logo-bottom",
        "cancel-event",
        "active-cursor"
      );
    } else {
      containerMenu.classList.add(
        "active-sidebar",
        "active-bg",
        "active-logo-top",
        "active-logo-middle",
        "active-logo-bottom",
        "cancel-event",
        "active-cursor"
      );
    }
    e.preventDefault();
    e.stopPropagation();
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", function (e) {
    if (containerMenu && containerMenu.classList.contains("active-sidebar")) {
      containerMenu.classList.remove(
        "active-sidebar",
        "active-bg",
        "active-logo-top",
        "active-logo-middle",
        "active-logo-bottom",
        "cancel-event",
        "active-cursor"
      );
    }
  });
}

labels.forEach(function (label) {
  label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", toggleShow);
});
