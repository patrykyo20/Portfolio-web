HTMLElement.prototype.classAdd = function (className) {
  if (typeof className == "string" && className) {
    this.classList.add(className);
  } else {
    console.warn("Unvalid parametr");
  }
};

HTMLElement.prototype.classRemove = function (className) {
  if (typeof className == "string" && className) {
    this.classList.remove(className);
  } else {
    console.warn("Unvalid parametr");
  }
};
