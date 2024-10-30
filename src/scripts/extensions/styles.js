HTMLElement.prototype.styleBg = function (style) {
  if (typeof className == "string" && className) {
    this.style.background = style;
  } else {
    console.warn("Unvalid parametr");
  }
};
