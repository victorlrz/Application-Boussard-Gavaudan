import anime from "animejs/lib/anime.es.js";
import animate from "animejs/lib/anime.es.js";

let tl = animate.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

tl.add({
  targets: "#logo",
  translateY: "-40%",
  duration: 4000,
});

tl.add(
  {
    targets: ".user-name",
    translateY: "-40%",
    duration: 4000,
  },
  "-=3500"
);

tl.add(
  {
    targets: ".color-user",
    translateY: "-40%",
    background: "rgba(215, 169, 107, 0.7)",
    duration: 4000,
  },
  "-=3500"
);

// let rotateMe = anime({
//   targets: ".container-home-welcome",
//   scaleY: "2",
//   scaleX: "2",
//   translateX: "40%",
//   rotate: "45deg",
//   duration: 5000,
//   autoplay: false,
// });

// document.querySelector(".h1-home").addEventListener("mouseover", () => {
//   rotateMe.play();
// });

// anime({
//   targets: ".h1-home",
//   translateX: 250,
//   rotate: "1turn",
//   backgroundColor: "#FFF",
//   duration: 800,
// });
