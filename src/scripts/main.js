import Project from "./components/Project.js";
import "./extensions/handlers.js";
import { openHamburger } from "./features/hamburger.js";

function main() {
  Project();
  openHamburger();
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});