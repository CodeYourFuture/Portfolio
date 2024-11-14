"use strict";

// Project card tab component

const btnTabsContainer = document.querySelector(".projects-tabs__btns-container");
const cardsContent = document.querySelectorAll(".project-card");
const btnTabs = document.querySelectorAll(".projects-tabs__btn");

btnTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projects-tabs__btn");

  if (!clicked) return;
  btnTabs.forEach((btn) => btn.classList.remove("projects-tabs__btn--active"));
  cardsContent.forEach((card) => card.classList.remove("project-card--active"));

  clicked.classList.add("projects-tabs__btn--active");

  document
    .querySelector(`.project-card-${clicked.dataset.btn}`)
    .classList.add("project-card--active");
});
