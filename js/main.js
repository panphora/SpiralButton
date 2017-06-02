SpiralButton({
  buttonElement: document.querySelector("button"),
  buttonText: "Send",
  onComplete: function (buttonElement) {
    console.log("button animation complete", buttonElement);
  }, 
  onStart: function (buttonElement) {
    console.log("button animation started", buttonElement);
  }
});