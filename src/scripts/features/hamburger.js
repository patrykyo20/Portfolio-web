import { getElement } from "../extensions/getElements.js";

export function openHamburger() {
  const hamburger = getElement(".hamburger");

  hamburger.onClick(openMenu);
}

function openMenu() {
  const menu = getElement(".menu");
  if (this) {
    this.classList.toggle("hamburger--is-active");
    menu.classList.toggle("menu--is-active");
  }
}
