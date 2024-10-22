import { getElement } from "../extensions/getElements.js";
import { fetchData } from "../features/fetchData.js";
import { slider } from "../features/slider.js";

async function Project() {
  const projectSlider = getElement(".projects__slider");
  const projectSignals = getElement(".projects__signals");

  const projectData = await fetchData("./src/scripts/data/projectData.json ");

  const projectTemplate = projectData.map(
    (project) => `
      <article class="projects__slide">
        <h4 class="title--section projects__container">${project.title}</h4>
        <p class="description projects__container projects__description">
          ${project.description}
        </p>
        <ul class="projects__subcontainer projects__technologies">
          ${project.technologies.map(
            (technology) =>
              ` <li class="projects__technologies--item">${technology}</li>`
          )}
        </ul>
        <ul class="projects__container projects__links">
          <li class="projects__links--item">
            <a href="${
              project.demo
            }" class="button button--primary button--link"
              >Demo</a
            >
          </li>
          <li class="projects__links--item">
            <a
              href="${project.github}"
              class="button button--primary button--link projects__links--github"
              ><img
                src="./src/assets/icons/github.svg"
                alt="github"
                width="28"
                height="28"
                class=""
            /></a>
          </li>
        </ul>
        <img
          src="${project.image}"
          alt="image"
          width="380"
          height="220"
          class="projects__image"
        />
      </article>`
  );

  const signalsTemplate = `<li>
      <img
        src="./src/assets/icons/arrow-left.svg"
        alt="arrow-left"
        width="14"
        height="14"
        id="left-arrow"
        class="projects__signals--button"
      />
    </li>
    ${projectData.map(
      (index) => {
        if (index == 0) {
          return `<li class="projects__signals--item signals__item--active"></li>`
        } else {
          return `<li class="projects__signals--item"></li>`
        }
      }
    )}
    <li>
      <img
        src="./src/assets/icons/arrow-right.svg"
        alt="arrow-right"
        width="14"
        height="14"
        id="right-arrow"
        class="projects__signals--button"
      />
    </li>`;

  projectSlider.innerHTML = projectTemplate;
  projectSignals.innerHTML = signalsTemplate;

  slider(
    ".projects__slider",
    "#left-arrow",
    "#right-arrow",
    ".projects__signals"
  );
}

export default Project;
