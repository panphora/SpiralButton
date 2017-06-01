

// initialize elements
var spiralButtonElem = document.querySelector(".spiral-button");
var formElement = document.querySelector("form");
// spiral grow calculation
var spiralBgElem = document.querySelector(".spiral-bg");
var spiralButtonFaceContainerElem = document.querySelector(".spiral-button-face-container");
var spiralButtonFaceOuterWidth = spiralButtonFaceContainerElem.offsetWidth;
// desiredTunnelExitWidth will range from 100px to about 400px
var desiredTunnelExitWidth = spiralButtonFaceOuterWidth + 28;
var initialSpiralBgWidth = (desiredTunnelExitWidth * (20/3)) / 150;

// set initial width of spiral so it adapts to text size
spiralBgElem.style.width = initialSpiralBgWidth + "px";
spiralBgElem.style.height = initialSpiralBgWidth + "px";

spiralBgElem.onCSSAnimationEnd(function () {
  spiralButtonElem.classList.remove("pressed");
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  spiralButtonElem.classList.add("pressed");
});