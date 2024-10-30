import "./extensions/handlers.js";
import "./extensions/classNames.js";
import Project from "./components/Project.js";
import Experience from "./components/Experience.js";
import Skills from "./components/Skills.js";
import { openHamburger } from "./features/hamburger.js";
import { showHeader } from "./features/showHeader.js";
import { Form } from "./features/form.js";

function main() {
  Project();
  Experience();
  Skills();

  openHamburger();
  showHeader();
  Form();
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
