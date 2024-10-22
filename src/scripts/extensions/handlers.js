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
