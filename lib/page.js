var buttonElementsArray = Array.prototype.slice.call(document.querySelectorAll(".spiral-button"));
var colorSchemes = ["default","gold","pinkAndBlue","fruity","oceanWave","green","rainbow","brightRainbow","red","woodCabin","watermelon","cyan","wildColors","oceanGrass"];
var currentSetTimeout;
var stopAnimation = false;


// Create spiral buttons

var spiralButtons = buttonElementsArray.map(function (buttonElement, index) {
  return SpiralButton({
    buttonElement: buttonElement,
    colorScheme: colorSchemes[index]
  });
});


// Animate spiral buttons

doToEach(spiralButtons, simulateClick, 700, true);


// Stop button animations if user clicks on page

document.body.addEventListener("click", function (event) {
  clearTimeout(currentSetTimeout);
  stopAnimation = true;
});


// Utilities

function simulateClick (spiralButton) {spiralButton.triggerClick();}

function doToEach (arr, func, delay, repeat, index) {
  if (stopAnimation) {
    return;
  }

  var index = index || 0;
  var lastItemIndex = arr.length - 1;

  if (index <= lastItemIndex) {
    currentSetTimeout = setTimeout(function () {
      func(arr[index]);
      index += 1;

      requestAnimationFrame(function () {
        doToEach(arr, func, delay, repeat, index);
      });
    }, delay);
  } else if (repeat) {
    index = 0;

    currentSetTimeout = setTimeout(function () {
      requestAnimationFrame(function () {
        doToEach(arr, func, delay, repeat, index);
      });
    }, delay);
  }
}








