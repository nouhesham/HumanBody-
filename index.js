"use strict";
AOS.init();

const bodyColumnButtons = document.querySelectorAll(".bodyColumn__button");
const circles = document.querySelectorAll(".circle");

const handleEvent = (event) => {
  bodyColumnButtons.forEach((button) => {
    if (button !== event.target) {
      button.classList.remove("Red");
    }
  });

  circles.forEach((circle) => {
    if (circle.id === event.target.dataset.id) {
      circle.classList.add("SpottedCircle");
    } else {
      circle.classList.remove("SpottedCircle");
    }
  });

  event.target.classList.add("Red");
};

const handleBodyEvent = (event) => {
  circles.forEach((circle) => {
    bodyColumnButtons.forEach((button) => {
      if (event.target.id === button.dataset.id) {
        event.target.classList.add("SpottedCircle");
        button.classList.add("Red");
      } else {
        button.classList.remove("Red");
      }

      if (circle !== event.target) {
        circle.classList.remove("SpottedCircle");
      }
    });
  });
};

bodyColumnButtons.forEach((button) => {
  button.addEventListener("click", handleEvent);
});

circles.forEach((circle) => {
  circle.addEventListener("click", handleBodyEvent);
});
