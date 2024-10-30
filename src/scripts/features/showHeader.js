import { getElement } from "../extensions/getElements.js";

export function showHeader() {
  const header = getElement("#header");
  let currentHeight = 0;

  document.addEventListener("scroll", () => checkScrollHeight());

  function checkScrollHeight() {
    if (currentHeight >= window.scrollY) {
      header.classAdd("header--moveout");
      header.classRemove("header--moveon");
    } else {
      header.classAdd("header--moveon");
      header.classRemove("header--moveout");
    }

    if (currentHeight <= 50) {
      header.classRemove("header--moveout");
      header.classRemove("header--moveon");
    }

    currentHeight = window.scrollY;
  }
}
