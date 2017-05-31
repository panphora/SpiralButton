// initialize scale value
var spiralButtonFaceOuterWidth = $(".spiral-button-face-container").outerWidth();
var endOfTunnelWidth = Math.round(spiralButtonFaceOuterWidth) + 28;
var spiralScaleValue = Math.round(endOfTunnelWidth * (4/3));

var tl = new TimelineMax({
  visibility: "hidden", 
  paused: true,
  onComplete: function () {
    $(".spiral-button-outer-container").removeClass("pressed");

    tl
      .pause()
      .progress(0);
  }
});

tl
  .to(".spiral-bg", 0, {transformOrigin: "50% 50%", visibility: "visible"})
  .to(".spiral-bg", 1.5, {rotation: "-200", ease: Power0.easeNone})
  .to(".spiral-bg", 1.5, {scale: spiralScaleValue, ease: Power1.easeIn}, "-=1.5")
  .to(".spiral-bg", 0, {visibility: "hidden"})
  .progress(1).progress(0);


$(".spiral-button-outer-container").on("click", function (event) {
  $(event.currentTarget).addClass("pressed");
  tl.play();
});

$(".toggle-selected").on("click", function () {
  $(".spiral-button-outer-container").toggleClass("selected");
});



