"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll("li");

const toggleNav = () => {
  headerEl.classList.toggle("nav-open");
  overlay.classList.toggle("hidden");
};

btnNavEl.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

const closeNav = () => {
  headerEl.classList.remove("nav-open");
  overlay.classList.add("hidden");
};

window.addEventListener("resize", closeNav);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (headerEl.classList.contains("nav-open")) {
      closeNav();
    }
  });
});
