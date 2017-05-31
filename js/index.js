// initialize elements
var $spiralButtonFaceContainer = $(".spiral-button-face-container");
var $spiralButtonOuterCountainer = $(".spiral-button-outer-container");
var spiralButtonOuterCountainerElem = $spiralButtonOuterCountainer.get(0);
var $spiralBg = $(".spiral-bg");
var spiralBgElem = $spiralBg.get(0);

// initialize scale value
var spiralButtonFaceOuterWidth = $spiralButtonFaceContainer.outerWidth();
var endOfTunnelWidth = Math.round(spiralButtonFaceOuterWidth) + 28;
var spiralScaleValue = Math.round(endOfTunnelWidth * (4/3));

var tl = new TimelineMax({
  visibility: "hidden", 
  paused: true,
  onComplete: function () {
    $spiralButtonOuterCountainer.removeClass("pressed");
    $spiralBg.css("visibility", "hidden");

    tl
      .pause()
      .progress(0);
  }
});

tl
  .to(spiralButtonOuterCountainerElem, 0, {className: "-=pressed"})
  .to(spiralBgElem, 0, {visibility: "hidden"})
  .to(spiralBgElem, 0, {transformOrigin: "50% 50%", visibility: "visible"})
  .to(spiralButtonOuterCountainerElem, 0, {className: "+=pressed"})
  .to(spiralBgElem, 1.5, {rotation: "-200", ease: Power0.easeNone})
  .to(spiralBgElem, 1.5, {scale: spiralScaleValue, ease: Power1.easeIn}, "-=1.5")
  .to(spiralBgElem, 0, {visibility: "hidden"})
  .progress(1).progress(0);


$spiralButtonOuterCountainer.on("click", function (event) {
  tl.play();
});

$("form").on("submit", function (event) {
  event.preventDefault();
  tl.play();
});




