// Get the modal
const modal = document.querySelectorAll(".modal");

// Get the button that opens the modal
const btns = document.querySelectorAll(".id-modal.comments-card");

// Get the <span> element that closes the modal
const closes = document.querySelectorAll(".close-modal");

function toggleShow(event) {
  const target = this;
  modal[target.dataset.id].style.setProperty("display", "block");
  event.stopPropagation();
}

function toggleClose(event) {
  const target = this;
  modal[target.dataset.id].style.setProperty("display", "none");
  event.stopPropagation();
}

if (modal && btns && closes) {
  btns.forEach(function (btn) {
    btn.addEventListener("click", toggleShow);
  });

  closes.forEach(function (btn) {
    btn.addEventListener("click", toggleClose);
  });
}
