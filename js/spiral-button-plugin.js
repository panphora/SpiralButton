function SpiralButton (options) {
  var buttonElement = options.buttonElement;
  var buttonText = options.buttonText;
  var onComplete = options.onComplete;
  var onStart = options.onStart;
  var colorScheme = options.colorScheme;
  var rotateAnimationDuration = options.rotateAnimationDuration;
  var scaleAnimationDuration = options.scaleAnimationDuration;
  var returnObjectMethods = {};


  // Create inner HTML for button

  var buttonHtmlString = '<div class=spiral-button-outer-container><div class=spiral-button-bottom></div><div class=leg-container><svg class="leg leg-top-right"viewBox="0 0 8.8 10.2"xmlns=http://www.w3.org/2000/svg x=0px y=0px><g class=contents><path class=leg-top-right-bg d="M.4 1v8.8h7.4"/><path class=leg-top-right-line d="M7.8 9.2L1 1"/></g></svg> <svg class="leg leg-bottom-right"viewBox="0 0 8.8 8.8"xmlns=http://www.w3.org/2000/svg x=0px y=0px><path class="contents leg-bottom-right-line"d="M1 1l6.8 6.8"/></svg> <svg class="leg leg-bottom-left"viewBox="0 0 10.2 8.8"xmlns=http://www.w3.org/2000/svg x=0px y=0px><g class=contents><path class=leg-bottom-left-bg d="M10.2 7.8L1 .4h9.2"/><path class=leg-bottom-left-line d="M1 1l8.2 6.8"/></g></svg></div><div class=spiral-button-face-container><div class=spiral-button-face-background-container><svg class=spiral-bg viewBox="0 0 786.5 786.5"xmlns=http://www.w3.org/2000/svg><path class="spiral-arm four"d="M759.6 500.7c-4.5-32.3-21.7-86.7-36.8-115.9-15-29.2-45.5-74.9-67.7-95.4-22.2-20.5-62.5-48.9-96.6-62.3s-65.4-15.7-89.9-16.7-55.3 7.3-72 12.9c-16.8 5.5-41.2 19.4-57.9 37-16.8 17.6-27.4 30.8-34.2 47.3-6.9 16.5-10.1 34.9-9.9 51.3.2 16.4 5.2 37.8 9.2 44.6 4 6.9 10.6 16.6 16.1 23 5.5 6.4 11.8 10.9 18 14.5 6.2 3.7 12.7 7.6 20.9 9.5 8.1 1.9 14.9 3.1 23.4 1.9 1.8-.3 3.6-.6 5.3-.9-18.1-1.8-33.8-11.7-43.3-26.1-1.4-1.2-2.8-2.4-4.3-3.8-6.3-6-9.3-12-12.9-19.5-3.6-7.5-4.5-15.2-5.4-22.3-1-7.1-1.6-14.7 0-23s5.1-19.6 7.9-27c2.9-7.4 16.6-24.4 29.2-34.8 12.7-10.4 29.1-18.8 46.3-23.8 17.2-4.9 33.9-4.8 58-2.7 24.2 2.1 49.4 12.8 64.1 22.4 14.8 9.7 40.6 28.3 55.1 48.1s32.2 45.5 42.9 80.5 13.1 83.4 10.8 113.5c-2.2 30.1-17.2 82.6-30.7 112.6s-45.3 77.3-67.7 101c-5.8 6.1-12.1 12.7-18.8 19.1 113.2-38.1 203.3-126.5 244-238.4-.9-9.2-1.9-18.3-3.1-26.6z"/><path class="spiral-arm three"d="M728.6 188.1c-7.9-5.2-15.6-10.2-23-14.5-28.1-16.6-81.3-37.2-113.5-43.6-32.2-6.4-86.7-9.3-116.6-4.8s-76.4 17.6-108.3 35.8c-31.8 18.2-53 41.3-69 59.7-16 18.5-28.5 47.8-34.6 64.3-6.1 16.6-10.9 43.4-7.6 67.4s6.9 40.4 15.5 56c8.6 15.7 20.5 29.8 33.5 39.8 12.9 10 32.6 20.3 40.4 21.4 7.9 1.2 19.6 2.3 28.1 2 8.5-.3 15.7-2.5 22.4-5 6.7-2.5 14.7-5.3 21.2-10.5s11.8-9.5 16.2-17c1.3-2.2 2.5-4.4 3.5-6.7-10.7 11.8-26.2 19.2-43.4 19.2-2 0-3.9-.1-5.8-.3-1.7.4-3.5.7-5.4.9-8.6 1.2-15.2-.2-23.3-2.1-8.1-1.9-14.7-6-20.9-9.7-6.2-3.7-12.5-7.9-18-14.3s-12.1-16.2-16.1-23c-4-6.9-8.8-28.2-9-44.6-.2-16.4 3.4-34.5 10.3-51s17.4-29.5 34.1-47.1c16.8-17.6 40.8-30.6 57.5-36.2 16.8-5.5 47.5-14.1 71.8-13.1 24.5 1 55.7 3.2 89.7 16.7s73.3 41.9 95.5 62.3c22.2 20.6 53.9 64.9 68.9 94.1 15 29.2 32.2 83.6 36.7 115.9 1.2 8.5 2.4 17.7 3.2 27.1 15.3-42 23.5-87.5 23.5-134.8.1-74.4-21-144.5-57.5-204.3z"/><path class="spiral-arm two"d="M443 3.3c-9.2 2.9-18.1 6-26.2 9.1-30.5 11.6-80 40.2-105.1 61.4-25.1 21.2-61.5 62-76.6 88.2-15.1 26.2-34.1 70.9-39.7 107.2-5.6 36.3-.8 67.1 3.7 91.1 4.5 24.1 19.6 52.2 28.7 67.3 9.1 15.1 27.3 35.9 48.2 48.3s35.9 19.8 53.5 22.8 36.5 2.3 52.4-1.6c15.9-3.8 35.6-13.3 41.4-18.8 5.8-5.4 13.8-14.1 18.9-21 5-6.8 7.8-13.9 10-20.7s4.8-14.1 4.8-22.5 0-15.1-3.1-23.2c-.7-1.9-1.4-3.6-2.2-5.3.3 2.4.5 4.8.5 7.3 0 15.4-5.9 29.3-15.6 39.8-1 2.1-2.1 4.1-3.3 6.2-4.4 7.5-9.6 11.7-16.2 16.9-6.5 5.2-13.9 7.7-20.6 10.3-6.7 2.5-13.9 4.8-22.4 5.1-8.5.3-20.2-.6-28.1-1.7-7.9-1.2-27.5-10.7-40.4-20.8-12.9-10-24.8-24.2-33.5-39.8-8.6-15.7-12.2-32-15.5-56-3.3-24.1 1.5-51 7.6-67.4 6.1-16.5 18.6-45.9 34.6-64.3s37.2-41.5 69-59.7c31.8-18.2 78.4-31.3 108.3-35.8 29.9-4.5 84.4-1.6 116.6 4.8 32.2 6.4 85.4 27.1 113.5 43.6 7.2 4.3 14.8 9.3 22.5 14.4C667.8 89.2 564 18.6 443 3.3z"/><path class="spiral-arm one"d="M478.8 423.3c-.6-7.9-2.4-19.6-4.5-27.8-2.2-8.2-6.2-15.4-10.2-21.4-4-6-8.1-12.5-14.6-17.8-6.5-5.2-12-9.4-20.3-12-1.8-.6-3.8-1.1-5.6-1.5 15.2 9.3 26 25.4 28 44 .6 1.4 1.2 2.8 1.7 4.3 3.1 8.1 3.1 14.8 3.1 23.2s-2.6 15.7-4.8 22.5c-2.2 6.8-4.9 13.9-10 20.7-5 6.8-13.1 15.4-18.9 20.9-5.8 5.4-25.5 14.8-41.4 18.7-15.9 3.8-34.4 4.3-52 1.3s-32.6-10.4-53.5-22.8-38.9-32.9-48.1-48.1c-9.1-15.1-24.3-43.2-28.7-67.1s-9.3-55-3.7-91.1c5.6-36.3 24.5-80.8 39.6-107 15.1-26.2 51.4-67 76.4-88.1 25.1-21.1 74.4-50.1 104.9-61.6 8.3-3.1 17.3-6.2 26.6-9.2-16.3-2.1-33-3.1-49.8-3.1C286.4.2 189.6 42.9 118.8 112c-3.4 8.9-6.5 17.7-9.1 25.9-10 31.1-18.1 87.5-17.2 120.4.9 32.8 10.2 86.6 21.3 114.7s34.2 70.6 58.9 97.6c24.8 27 52 42.5 73.5 54 21.6 11.5 53 17.2 70.4 19.4 17.5 2.3 44.9 1.2 67.6-7.4 22.8-8.6 37.8-15.5 51.2-27.4 13.4-11.9 24.6-26.5 31.5-41.3 7.1-14.9 12.5-36.6 11.9-44.6z"/><path class="spiral-arm seven"d="M509.8 432.4c-1-17.9-5.6-35.7-12.9-50.4-7.3-14.6-20.5-32.2-27.1-36.6-6.6-4.5-16.8-10.4-24.5-13.8-7.8-3.4-15.5-4.9-22.6-5.5s-15.1-1.4-23.2.4c-8.1 1.8-14.9 3.4-22.1 8.2-1.4 1-3 1.9-4.3 2.9 6.2-2.3 13.2-3.2 20.1-3.2 11.6 0 22.5 3.4 31.6 9.2 1.4.4 2.9.8 4.3 1.3 8.3 2.6 13.6 6.8 20.1 12s10.6 11.8 14.6 17.8 7.8 12.5 10 20.7 3.9 19.8 4.5 27.8c.6 7.9-4.3 29.2-11.2 44-6.9 14.8-18 29.6-31.4 41.5-13.3 11.9-28.4 19-51.2 27.6-22.8 8.6-50 9.9-67.4 7.6s-48.9-7.9-70.4-19.4c-21.6-11.5-48.8-27-73.5-54-24.8-27-48-69.5-58.9-97.6s-20.4-82-21.3-114.7 7.3-89.3 17.2-120.4c2.7-8.3 5.6-17.2 9.1-26.3C45.8 182.8.4 282.6.4 393.1c0 13.3.7 26.5 2 39.5 4.8 8.2 9.7 16 14.5 23.2 18.1 27.1 57.2 68.7 83.3 88.5 26.2 19.8 74.1 46.1 102.9 55 28.9 8.9 76.5 17.3 113.1 14.7s65.6-14.2 88-23.9c22.5-9.7 46.4-30.7 59-43 12.7-12.3 28.7-34.4 36.2-57.5 7.7-23.1 11.4-39.4 10.4-57.2z"/><path class="spiral-arm six"d="M556.8 434.4c-1.7-17.6-9-43.9-22.4-64.1s-23.7-33.4-38.3-43.8c-14.6-10.4-31.4-17.9-47.4-21.4-16-3.4-37.8-3.5-45.4-1.2-7.6 2.4-18.5 6.7-26 10.6-7.5 3.9-13 9.2-18 14.3-4.9 5.2-10.4 10.7-14.1 18.2-3.6 7.5-6.7 13.6-7.5 22.2-.2 1.9-.3 3.7-.3 5.4 5.7-17.3 19.1-31.1 36.2-37.1 1.2-.9 2.4-1.8 3.7-2.6 7.2-4.8 13.8-6.4 21.9-8.2 8.1-1.8 15.9-1.2 23-.5 7.1.6 14.7 1.9 22.4 5.3 7.7 3.4 17.9 9.3 24.5 13.7 6.6 4.5 20.1 21.6 27.4 36.2 7.3 14.6 11.9 32.5 12.9 50.4s-2.8 34.1-10.3 57.2c-7.5 23.1-23.4 45.3-36.2 57.5-12.7 12.3-36.7 33.3-59 43-22.5 9.7-51.5 21.3-88 23.9s-84.2-5.8-113.1-14.7c-28.9-8.9-76.7-35.2-102.9-55-26.2-19.8-64.6-61.3-82.7-88.5-4.9-7.3-9.9-15.4-14.9-23.9 12 122.9 79.8 229.5 178.6 292.8 8.8 1.2 18.1 2.4 26.1 3 32.5 2.8 90.1-1.9 121.8-10 31.8-8.2 82-29.4 106.9-46.4 25-17 61.2-49.2 82-79.4 20.8-30.2 29.5-60.6 36-84.1 6.5-23.3 4.9-55.2 3.1-72.8z"/><path class="spiral-arm five"d="M625.4 420.1c-10.7-35.1-27.4-61.8-41.9-81.5-14.5-19.8-40-38.6-54.8-48.3-14.8-9.7-41.1-21-65.4-23.2-24.3-2.2-41.7-1.1-58.8 3.9-17.2 4.9-33.6 13.4-46.3 23.8-12.7 10.4-26.1 27.7-28.9 35.1-2.9 7.4-6.4 19.2-7.9 27.5-1.6 8.3-1 15.9 0 23s1.8 14.8 5.4 22.3c3.6 7.5 6.9 13.6 13.2 19.5 1.4 1.3 2.9 2.5 4.3 3.7-6.2-9.3-9.9-20.5-9.9-32.6 0-6.8 1.2-13.2 3.3-19.3.1-1.3.1-2.7.3-4 .7-8.6 3.6-14.7 7.2-22.2s9.1-13 14.1-18.2c4.9-5.2 10.5-10.4 18-14.3 7.5-3.9 18.4-8.2 26-10.6 7.6-2.4 29.4-2.3 45.4 1.2 16 3.4 32.8 11 47.4 21.4s24.9 23.5 38.3 43.8c13.4 20.3 20.8 46.6 22.4 64.1 1.7 17.6 3.2 49.4-3.3 72.9-6.4 23.6-15.5 53.6-36.3 83.7-20.8 30.2-57.6 62.2-82.5 79.2-25 17-75.3 37.9-107.1 46.1-31.8 8.2-88.2 12.6-120.7 9.8-8.3-.7-17.3-1.7-26.4-3 61.2 39.6 134.3 62.4 212.6 62.4 44.4 0 86.9-7.3 126.7-20.9 6.4-6.1 12.5-12.2 18-18 22.4-23.7 54.3-71 67.7-101 13.5-30 28.4-82.4 30.7-112.6 2.3-30.3-.1-78.6-10.8-113.7z"/></svg></div><span class=spiral-button-main-text>' + buttonText + '</span></div></div>';
  

  // Button initialization

  buttonElement.classList.add("spiral-button");
  buttonElement.innerHTML = buttonHtmlString;


  // Grab elements

  var spiralBgElem = buttonElement.querySelector(".spiral-bg");
  var spiralButtonFaceContainerElem = buttonElement.querySelector(".spiral-button-face-container");


  // Apply color scheme

  if (!colorScheme) {
    colorScheme = "default";
  }

  if (typeof colorScheme === "string") {
    var colorSchemeLookup = {
      default: ["#B2FF74","#00CF92","#A26FFF","#FF6AB7","#FF655A","#FFD374","#F9FF6F"],
      gold: ["#FDC500","#FFD520","#FFE15B","#E87700","#F28D00","#F7A000","#FCB100"],
      pinkAndBlue: ["#F7E5A0","#E44FBA","#f98af3","#E7A2E1","#4FC3D0","#197FBE","#B0DBD8"],
      fruity: ["#64a526","#A7C933","#FB5A33","#F14D00","#FB6469","#DC5D6A","#FBAC00"],
      oceanWave: ["#9FD5E3","#C2DCEA","#D7E0E8","#F1F1F1","#1084B4", "#00ABD4","#4B9ED7"],
      green: ["#258B3A","#279B3D","#2FB447","#38C251","#4AD161","#63DA77","#88E996"],
      rainbow: ["#F7412D","#9D1BB2","#3E4EB8","#00A7F7","#009788","#89C540","#FFED18"],
      brightRainbow: ["#2FB447","#107AD9","#7040EC","#B036CC","#F33C37","#F96700","#F7A000"],
      red: ["#CB2823","#E22E29","#F33C37","#FD504D","#FF6A67","#FF8685","#FFA8A7"],
      woodCabin: ["#6B917F","#8FAB90","#B2C6A8","#E5DAC3","#96705C","#83574F","#60363E"],
      watermelon: ["#FA4953","#F29C97","#00a26e","#85BF71","#77B20B","#FA4953","#FA6A75"],
      cyan: ["#007286","#00859A","#0098AE","#00AAC1","#0BB8D1","#2FC9DD","#60D9E9"],
      wildColors: ["#355C98","#FD6438","#FFBB00","#3E6814","#56C8AB","#F38B9C","#44B3F8"],
      oceanGrass: ["#CDE284","#B0D47C","#76965A","#88B293","#A9CCAF","#C4DEC4","#AAC674"]
    };

    colorScheme = colorSchemeLookup[colorScheme];
  }

  var spiralArmNodeList = buttonElement.querySelectorAll(".spiral-arm");

  for (i = 0; i < spiralArmNodeList.length; i++) {
    spiralArmNodeList[i].style.fill = colorScheme[i];
  }


  // Calculations for spiral size and position

  var spiralButtonFaceOuterWidth = spiralButtonFaceContainerElem.offsetWidth;
  var spiralButtonFaceOuterHeight = spiralButtonFaceContainerElem.offsetHeight;
  var desiredTunnelExitWidth = spiralButtonFaceOuterWidth + 28; // should range from 100 to 400 if text is 1-5 words
  var initialSpiralBgSize = (desiredTunnelExitWidth * (20/3)); // should range from 5px to 17px


  // Get animation duration

  rotateAnimationDuration = getAnimationDurationString(rotateAnimationDuration);
  scaleAnimationDuration = getAnimationDurationString(scaleAnimationDuration);

  var durationString = "animation-duration: " + rotateAnimationDuration + ", " + scaleAnimationDuration + ";";
  var webkitDurationString = "-webkit-" + durationString;

  // Spiral size adapts to text size & spiral svg is centered over the button's face  

  var cssTextArr = [
    "width: " + initialSpiralBgSize + "px;",
    "height: " + initialSpiralBgSize + "px;",
    "left: " + (spiralButtonFaceOuterWidth/2 - initialSpiralBgSize/2) + "px;",
    "top: " + (spiralButtonFaceOuterHeight/2 - initialSpiralBgSize/2) + "px;",
    webkitDurationString,
    durationString
  ];

  spiralBgElem.style.cssText += cssTextArr.join(" ");


  // Start & End Events

  onCSSAnimationEnd(spiralBgElem, function (event) {
    if (event && event.animationName === "growSpiral") {
      buttonElement.classList.remove("pressed");

      if (onComplete) {
        onComplete(buttonElement);
      }

      if (returnObjectMethods.onComplete) {
        returnObjectMethods.onComplete(buttonElement);
      }
    }
  });

  buttonElement.addEventListener("click", function (event) {
    event.preventDefault();
    onButtonClick();
  });

  function onButtonClick () {
    buttonElement.classList.add("pressed");

    if (onStart) {
      onStart(buttonElement);
    }

    if (returnObjectMethods.onStart) {
      returnObjectMethods.onStart(buttonElement);
    }
  }


  // Utility functions -- todo move these outside of SpiralButton function

  function onCSSAnimationEnd (element, callback) {
    element.addEventListener('webkitAnimationEnd', callback);
    element.addEventListener('animationend', callback);
  }

  function getAnimationDurationString (durationItem) {
    if (!durationItem) {
      durationItem = "1500ms"; // default duration
    }

    if (typeof durationItem === "number") {
      return durationItem + "ms"
    }

    return durationItem;
  }


  // return value

  return {
    buttonElement: buttonElement,
    onComplete: function (onCompleteFromReturnObject) {
      returnObjectMethods.onComplete = onCompleteFromReturnObject;
    },
    onStart: function (onStartFromReturnObject) {
      returnObjectMethods.onStart = onStartFromReturnObject;
    },
    triggerClick: onButtonClick
  };
}






