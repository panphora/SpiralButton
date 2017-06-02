

// initialize elements
var spiralButtonElem = document.querySelector(".spiral-button");
var formElement = document.querySelector("form");


// SPIRAL GROW CALCULATION
var spiralBgElem = document.querySelector(".spiral-bg");
var spiralButtonFaceContainerElem = document.querySelector(".spiral-button-face-container");
var spiralButtonFaceOuterWidth = spiralButtonFaceContainerElem.offsetWidth;
var spiralButtonFaceOuterHeight = spiralButtonFaceContainerElem.offsetHeight;
// desiredTunnelExitWidth will probably range from 100px to about 400px
var desiredTunnelExitWidth = spiralButtonFaceOuterWidth + 28;
// initialSpiralBgSize will probably range from 4.4px to 17.8px
var initialSpiralBgSize = (desiredTunnelExitWidth * (20/3));

// set initial width of spiral to adapt to text size
var cssTextArr = [];
cssTextArr.push("width: " + initialSpiralBgSize + "px;");
cssTextArr.push("height: " + initialSpiralBgSize + "px;");
// center spiral over button face
cssTextArr.push("left: " + (spiralButtonFaceOuterWidth/2 - initialSpiralBgSize/2) + "px;");
cssTextArr.push("top: " + (spiralButtonFaceOuterHeight/2 - initialSpiralBgSize/2) + "px;");
spiralBgElem.style.cssText += cssTextArr.join(" ");


// EVENTS

spiralBgElem.onCSSAnimationEnd(function () {
  spiralButtonElem.classList.remove("pressed");
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  spiralButtonElem.classList.add("pressed");
});