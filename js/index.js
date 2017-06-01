

// initialize elements
var spiralButtonElem = document.querySelector(".spiral-button");
var formElement = document.querySelector("form");
// spiral grow calculation
var spiralBgElem = document.querySelector(".spiral-bg");
var spiralButtonFaceContainerElem = document.querySelector(".spiral-button-face-container");
var spiralButtonFaceOuterWidth = spiralButtonFaceContainerElem.offsetWidth;
var tunnelExitWidth = Math.round(spiralButtonFaceOuterWidth) + 28;
var spiralScaleValue = Math.round(tunnelExitWidth * (4/3));

var animation = anime({
  autoplay: false,
  targets: spiralBgElem,
  scale: {
    value: spiralScaleValue,
    duration: 1500,
    easing: "easeInQuad"
  },
  rotate: {
    value: "-200deg",
    duration: 1500,
    easing: "linear"
  },
  begin: function () {
    spiralButtonElem.classList.add("pressed");
  },
  complete: function (anim) {
    spiralButtonElem.classList.remove("pressed");
  }
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  animation.restart();
});