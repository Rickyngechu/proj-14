"use strict";
const btnCont = document.querySelector(".tabbed-btns");
const btnsTab = document.querySelectorAll(".tabbed_btn");
const tabItems = document.querySelectorAll(".tabbed__item");

/**Implementing a simple bookmark tabs */

btnCont.addEventListener("click", function (e) {
  const target = e.target.closest(".tabbed_btn");
  console.log(target);

  // Remove the class list
  btnsTab.forEach(btn => btn.classList.remove("selected-btn"));
  tabItems.forEach(item => item.classList.remove("showtab-item"));

  target.classList.add("selected-btn");

  //   Activating the content area
  document
    .querySelector(`.tabbed__item--${target.dataset.tab}`)
    .classList.add("showtab-item");
});
