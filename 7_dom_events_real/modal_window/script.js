"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const hide = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const show = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnsOpenModal.forEach((element) => {
  element.addEventListener("click", show);
});

btnCloseModal.addEventListener("click", hide);

overlay.addEventListener("click", hide);

document.addEventListener("keydown", function (event) {
  if (!modal.classList.contains("hidden") && event.key === "Escape") {
    hide();
  }
});
