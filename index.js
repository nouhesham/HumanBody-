"use strict";

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//   triggerElement: "#scrolled", // element to trigger the pin
//   duration: 300, // duration of the pin (in px)
// })
//   .setPin("#scrolled") // element to pin
//   .addTo(controller);

const bodyColumnButtons = document.querySelectorAll(".bodyColumn__button");
const Circle = document.querySelectorAll(".circle");

console.log(bodyColumnButtons);
console.log(Circle);

const HandleEvent = (event) => {
  bodyColumnButtons.forEach((button) => {
    if (button !== event.target) {
      button.classList.remove("Red");
    }
    Circle.forEach((circle) => {
      if (circle !== event.target) {
        circle.classList.remove("SpottedCircle");
      }
      if (circle.id === event.target.dataset.id) {
        circle.classList.add("SpottedCircle");
      }
    });
  });
  event.target.classList.add("Red");
};
const HandleBodyEvent = (event) => {
  Circle.forEach((circle) => {});
};

bodyColumnButtons.forEach((button) =>
  button.addEventListener("click", HandleEvent)
);
Circle.forEach((circle) => {
  circle.addEventListener("click", HandleBodyEvent);
});
