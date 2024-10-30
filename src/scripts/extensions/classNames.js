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

HTMLElement.prototype.classToggle = function (className) {
  if (typeof className == "string" && className) {
    this.classList.toggle(className);
  } else {
    console.warn("Unvalid parametr");
  }
};

HTMLElement.prototype.classIncludes = function (className) {
  if (typeof className == "string" && className) {
    Array.from(this.classList).includes(className);
  } else {
    console.warn("Unvalid parametr");
  }
};

