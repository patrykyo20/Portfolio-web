HTMLElement.prototype.onClick = function (callback) {
  if (typeof callback == 'function') {
    this.addEventListener('click', callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.input = function (callback) {
  if (typeof callback == 'function') {
    this.addEventListener('input', callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.dragStart = function (callback) {
  if (typeof callback == 'function') {
    this.addEventListener('dragstart', callback);
  } else {
    console.warn("Callback isn't function")
  }
}

HTMLElement.prototype.touchStart = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("touchstart", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.touchEnd = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("touchend", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.touchMove = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("touchmove", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.mouseDown = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("mousedown", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.mouseUp = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("mouseup", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.mouseLeave = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("mouseleave", callback);
  } else {
    console.warn("Callback isn't function");
  }
};

HTMLElement.prototype.mouseMove = function (callback) {
  if (typeof callback == "function") {
    this.addEventListener("mousemove", callback);
  } else {
    console.warn("Callback isn't function");
  }
};