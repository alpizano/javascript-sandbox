"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

btnsOpenModal.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(element.textContent);

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
