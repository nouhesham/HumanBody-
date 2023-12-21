"use strict";

if (window.innerWidth > 768) {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#animatedElement",
    duration: function () {
      return window.innerHeight;
    },
  })
    .setTween("#animatedElement2", { scale: 1.1, opacity: 0.5, y: 600 })
    .addTo(controller);
  //
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animatedElement",
    duration: function () {
      return window.innerHeight;
    },
  })
    .setTween("#animatedElement", { scale: 0.5, opacity: 0.5, y: 300 })
    .addTo(controller);
  //
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animatedElement",
    duration: function () {
      return window.innerHeight;
    },
  })
    .setTween("#animatedElement4", {
      y: 600,
      rotation: 360,
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animatedElement",
    duration: 500,
  })
    .setTween("#animatedElement3", {
      y: -100,
      rotation: 360,
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#animatedElement3",
    duration: function () {
      return window.innerHeight;
    },
  })
    .setTween("#animatedElement5", {
      x: "60%",
      rotation: 360,
      ease: Linear.easeNone,
    })
    .addTo(controller);
}
// function calculateTotalLabelsHeight() {
//   var totalHeight = 0;
//   var labels = document.querySelectorAll("#effector .bodyColumn__button");
//   labels.forEach(function (label) {
//     totalHeight += label.offsetHeight;
//   });
//   return totalHeight;
// }
let labelsHeight = calculateTotalLabelsHeight();
var scene = new ScrollMagic.Scene({
  triggerElement: "#pinned",
  duration: labelsHeight,
})
  .setPin("#pinned")
  .addIndicators({ name: "1 (duration: 300)" })
  .addTo(controller);

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

// Assuming you have included ScrollMagic library and initialized a controller

// Function to calculate the total height of labels
