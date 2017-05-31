var tl = new TimelineMax({visibility: "hidden", paused:true});

tl
.to(".spiral-bg", .2, {transformOrigin: "50% 50%", visibility: "visible"})
.to(".spiral-bg", 1.8, {rotation: "-200", ease: Power0.easeNone})
.to(".spiral-bg", 1.8, {scale: 140, ease: Power1.easeIn}, "-=2")
.to(".spiral-bg", 0, {visibility: "hidden"})
.progress(1).progress(0);


function goSpiral () {
  tl
  .progress(0)
  .play();
}


$(".spiral-button-outer-container").on("click", function (event) {
  $(event.currentTarget).toggleClass("pressed");
  goSpiral();
});