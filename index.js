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

const bodyColumnButtons = document.querySelectorAll(" .bodyColumn__button");
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

if (window.innerWidth < 600) {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.getElementById("pinned");

  const containerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => "+=" + container.scrollWidth,
      scrub: 1.6,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
  const flex = document.getElementById("flexsection");
  window.addEventListener("scroll", () => {
    const horizontalScroll = window.scrollY;
    flex.scrollLeft = horizontalScroll;
  });
  // const lastLabel = bodyColumnButtons[bodyColumnButtons.length - 1];
  // const getScrollEnd = () => {
  //   const containerRect = container.getBoundingClientRect();
  //   const labelRect = lastLabel.getBoundingClientRect();

  //   return containerRect.width - labelRect.right;
  // };

  // bodyColumnButtons.forEach((label, index) => {
  //   ScrollTrigger.create({
  //     trigger: label,
  //     start: "left center",
  //     end: () => `+=${getScrollEnd()}px`,
  //     horizontal: true,
  //     toggleClass: { targets: label, className: "red" },
  //     scrub: 1.6,
  //     invalidateOnRefresh: true,
  //   });
  // });
}
