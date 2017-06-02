var buttonElements = document.querySelectorAll(".spiral-button");
var colorSchemes = ["default","gold","pinkAndBlue","fruity","oceanWave","green","rainbow","brightRainbow","red","woodCabin","watermelon","cyan","wildColors","oceanGrass"];

buttonElements.forEach(function (buttonElement, index) {
  SpiralButton({
    buttonElement: buttonElement,
    buttonText: "Send",
    colorScheme: colorSchemes[index]
  });
});




function simulateClick (elem) {
  elem.click();
}

doToEach(buttonElements, simulateClick, 600, true);

function doToEach (arr, func, delay, repeat, index) {
  var index = index || 0;
  var lastItemIndex = arr.length - 1;

  if (index <= lastItemIndex) {
    setTimeout(function () {
      func(arr[index]);
      index += 1;

      requestAnimationFrame(function () {
        doToEach(arr, func, delay, repeat, index);
      });
    }, delay);
  } else if (repeat) {
    console.log(123);
    index = 0;
    requestAnimationFrame(function () {
      doToEach(arr, func, delay, repeat, index);
    });
  }
}








