import { getElement, getElements } from "../extensions/getElements.js";
import { fetchData } from "../features/fetchData.js";

async function Skills() {
  const modal = getElement(".modal__container");
  const buttons = Array.from(getElements(".button--technology"));
  const technologies = getElement("#technologies");
  const skillsArticle = getElement(".skills__article");
  let isModalOpen = false;
  let technology = null;

  const skillsData = await fetchData("./src/scripts/data/skillsData.json");

  function technologiesRender(data = skillsData) {
    if (!technology) {
      technology = data[0];
    }

    const technologiesTemplate = data.map(
      (technology) =>
        `
          <img
            alt="${technology.name}"
            width="100"
            height="100"
            src="${technology.image}"
            class="modal__image"
            value="${technology.name}"
          />
      `
    );

    technologies.innerHTML = technologiesTemplate;

    Array.from(technologies.children).forEach((technology) => {
      technology.onClick(() => setSelectedTechnology(technology));
    });
  }

  function skillRender() {
    const skillTemplate = `
      <h3 class="title--section skills__container skills__subtitle">
        ${technology.name}
      </h3>
      <p class="description skills__description">
        ${technology.experience}
      </p>
      <img
        src="${technology.image}"
        alt="${technology.name}-icon"
        width="120"
        height="120"
        class="skills__logo"
      />
    `;

    skillsArticle.innerHTML = skillTemplate;
  }

  technologiesRender();

  function setSelectedTechnology(technology) {
    if (technology) {
      setTechnology(technology);
      setModalOpen(true);
    }
  }

  buttons.forEach(function (button) {
    button.onClick((e) => setTechnologies(button, e));
  });

  function setTechnologies(button, e = document) {
    const filteredData = skillsData.filter(
      (skill) => skill.technology == button.textContent.trim().toLowerCase()
    );

    buttons.forEach((btn) => {
      btn.classRemove("button--active");
    });

    button.classAdd("button--active");

    technologiesRender(filteredData);

    if (!isModalOpen) {
      setModalOpen(false);
      openModal(e);
    }
  }

  modal.onClick(openModal);

  function openModal(e) {
    const clickedOutside = e.target === modal;
    const clickedToTechnology = e.target.alt;
    if ((isModalOpen && clickedOutside) || clickedToTechnology) {
      modal.classRemove("modal--active");
      setModalOpen(false);
    } else if (!isModalOpen) {
      modal.classAdd("modal--active");
      setModalOpen(true);
    }
  }

  function setModalOpen(open = false) {
    isModalOpen = open;
  }

  function setTechnology(selectedTechnology) {
    technology = skillsData.filter(
      (skill) => skill.name == selectedTechnology.alt
    )[0];
    skillRender();
  }

  skillRender();
}

export default Skills;
