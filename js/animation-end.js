function onCSSAnimationEnd (element, callback) {
  element.addEventListener('webkitAnimationEnd', callback);
  element.addEventListener('animationend', callback);
}