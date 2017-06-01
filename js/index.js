

// initialize elements
var spiralButtonElem = document.querySelector(".spiral-button");
var spiralBgElem = document.querySelector(".spiral-bg");
var formElement = document.querySelector("form");
var spiralButtonFaceContainerElem = document.querySelector(".spiral-button-face-container");
// spiral grow init
var spiralButtonFaceOuterWidth = spiralButtonFaceContainerElem.offsetWidth;
var tunnelExitWidth = Math.round(spiralButtonFaceOuterWidth) + 28;
var spiralScaleValue = Math.round(tunnelExitWidth * (4/3));

spiralBgElem.onCSSAnimationEnd(function () {
  spiralButtonElem.classList.remove("pressed");
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  spiralButtonElem.classList.add("pressed");
});