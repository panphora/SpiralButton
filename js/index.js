TweenMax.set(".spiral-bg", {transformOrigin: "50% 50%"});

var tl = new TimelineMax({paused:true});

tl
.to(".spiral-bg", 1.8, {rotation: "-200", ease: Power0.easeNone})
.to(".spiral-bg", 1.8, {scale: 200, ease: Power1.easeIn}, "-=2")
.progress(1).progress(0);


function goSpiral () {
  TweenMax.set(".spiral-bg", {visibility: "visible"});

  tl
  .progress(0)
  .play();
}


$(".spiral-button-outer-container").on("click", function (event) {
  $(event.currentTarget).toggleClass("pressed");
  goSpiral();
});