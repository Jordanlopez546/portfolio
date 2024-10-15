const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

const navLinks = document.querySelectorAll(".navlist a");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    link.classList.add("active");
  });
});


window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  sections.forEach((section, index) => {
    if (
      scrollPosition >= section.offsetTop - header.offsetHeight &&
      scrollPosition <
      section.offsetTop + section.offsetHeight - header.offsetHeight
    ) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      navLinks[index].classList.add("active");
    }
  });
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text, .about-img, .box, .contact-text", {
  origin: "left",
});

sr.reveal(".about-text, .contact-form", {
  origin: "right",
});

sr.reveal(".row", {
  origin: "bottom",
});

sr.reveal(".footer-text", {
  origin: "top",
});
