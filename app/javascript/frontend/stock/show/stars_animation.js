//ANIMATION DE L ETOILE
const likeButton = document.querySelectorAll(".action--like");
const buttonStockShow = document.querySelectorAll(".li-box");

likeButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    animationItem();
    e.stopPropagation();
  });
});

// Create Shape Animation
const colorClasses = ["blue", "purple", "orange", "pink", "green", "yellow"];

const getRange = (x) => {
  const val = Math.floor(Math.random() * x);
  return val;
};

const animationItem = () => {
  const newContainer = document.createElement("div");
  const randomRotate = getRange(360);
  newContainer.classList = "animation";
  newContainer.style.transform = `translate(-50%,-50%) scale(1.5) rotate(${randomRotate}deg)`;

  // Random positioning of each shape
  function randomPos(a) {
    a.style.top = `${getRange(100)}%`;
    a.style.right = `${getRange(100)}%`;
    a.style.left = `${getRange(100)}%`;
    a.style.bottom = `${getRange(100)}%`;
  }

  // Random number of shapes generated
  const maxNumberOfItems = 20;
  const minNumberOfItems = 10;
  const randomNumberOfItems = Math.floor(
    Math.random() * maxNumberOfItems + minNumberOfItems
  );

  for (var i = 0; randomNumberOfItems > i; i++) {
    // Random 0 - 4, generate circle, triangle, square, heart, star
    let randomShapeNumber = getRange(4);
    let randomClassNumber = getRange(6);
    const newItem = document.createElement("div");
    newItem.classList = "animation__item";
    randomPos(newItem);
    if (randomShapeNumber == 0) {
      newItem.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--${colorClasses[randomClassNumber]})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="10"></circle>
				</svg>`;
    } else if (randomShapeNumber == 1) {
      newItem.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--${colorClasses[randomClassNumber]})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>`;
    } else if (randomShapeNumber == 2) {
      newItem.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--${colorClasses[randomClassNumber]})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
				</svg>`;
    } else if (randomShapeNumber == 3) {
      newItem.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--${colorClasses[randomClassNumber]})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
			</svg>
			`;
    } else {
      newItem.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--${colorClasses[randomClassNumber]})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
				</svg>`;
    }
    newContainer.appendChild(newItem);
  }

  document.body.appendChild(newContainer);
  setTimeout(() => {
    newContainer.remove();
  }, 1100);
};
