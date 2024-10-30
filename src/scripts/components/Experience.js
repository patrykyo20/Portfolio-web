import { getElement, getElements } from "../extensions/getElements.js";
import { fetchData } from "../features/fetchData.js";

async function Experience() {
  const experienceContainer = getElement(".experience__container");
  const experienceProgress = getElement(".experience__stepper");

  const experienceData = await fetchData(
    "./src/scripts/data/experienceData.json"
  );

  const experienceTemplate = experienceData.map(
    (experience) =>
      `
        <article class="experience__article">
          <h4 class="title--section projects__container experience__title">
            ${experience.company.name} - ${experience.company.position}
          </h4>
          <p class="description experience__date">${experience.date}</p>
          <p class="description experience__description">
            ${experience.description}
          </p>
          <img
            src=${experience.image}
            alt="bighead-2"
            width="122"
            height="180"
            class="experience__image"
          />
        </article>
      `
  );

  const experienceStepsTemplate = experienceData.map(
    (experience, index) =>
      `
        <button
          class="experience__stepper--item ${
            index == 0 && "experience__stepper--active"
          }"
          data-before="${experience.company.name}"
          data-after="${experience.company.headline}"
        >
          ${index + 1}
        </button>
      `
  );

  experienceContainer.innerHTML = experienceTemplate[0];
  experienceProgress.innerHTML = experienceStepsTemplate;

  const experienceSteps = Array.from(experienceProgress.children);

  let currentIndex = 0;
  let changeStepsInterval;

  function startInterval() {
    changeStepsInterval = setInterval(() => {
      currentIndex++;
      const currentElementIndex = currentIndex % experienceSteps.length;
      changeSlide(currentElementIndex);
      addProgressClass(
        currentElementIndex,
        experienceSteps[currentElementIndex]
      );
    }, 10000);
  }

  startInterval();

  experienceSteps.forEach((step, index) => {
    step.onClick(mainStep);

    function mainStep() {
      clearInterval(changeStepsInterval);
      addProgressClass(index, step);
      changeSlide(index);
    }
  });

  function addProgressClass(index, step) {
    for (let i = 1; i <= 3; i++) {
      experienceProgress.classRemove(`experience__stepper--progress-${i}`);
    }

    for (let i = 0; i < experienceSteps.length; i++) {
      if (index == experienceSteps.length - 1) {
        break;
      }
      experienceSteps[i].classRemove(`experience__stepper--active`);
      experienceSteps[i].classRemove(`experience__stepper--target`);
    }

    for (let i = 0; i <= index; i++) {
      experienceSteps[i].classAdd(`experience__stepper--active`);
    }

    experienceSteps[experienceSteps.length - 2].classRemove(
      "experience__stepper--target"
    );

    experienceProgress.classAdd(`experience__stepper--progress-${index}`);
    step.classRemove("experience__stepper--active");
    step.classAdd("experience__stepper--target");
  }

  function changeSlide(index) {
    if (!experienceContainer) {
      console.error("The experienceContainer element was not found.");
      return;
    }

    experienceContainer.innerHTML = experienceTemplate[index];
  }
}

export default Experience;
