//  search button

var app = new Vue({
  el: "#app",
  data: { state: "close" },
});

//Dog running

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#loader").classList.add("loading-done");
  }, 3000);
});

// Responsive navbar

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// active navbar

let links = document.querySelectorAll("li a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
  if (link.dataset.active == bodyId) {
    link.classList.add("active");
  }
}

//effect scrolly

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// login and registration form

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const btnLogin = document.querySelector(".btn-login");
const btnRegistration = document.querySelector(".btn-registration");
const userEmail = document.getElementById("#user-email");
const userName = document.getElementById("#user-name");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

btnLogin.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  swal("Welcome Back!", "We are happy to see you again!", "success");
});

btnRegistration.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  swal("Congratulations", "We are happy to have you in our team!", "success");
});

// card home page

// faq

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content5");
let icons = document.getElementsByClassName("icon5");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#FFFFFF";
      icons[i].classList.remove("bi-plus");
      icons[i].classList.add("bi-dash");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#000000";
      icons[i].classList.remove("bi-dash");
      icons[i].classList.add("bi-plus");
    }
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#000000";
        icons[j].classList.remove("bi-dash");
        icons[j].classList.add("bi-plus");
      }
    }
  });
}

// registration form

const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

//scrolly animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isInteresting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelector(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
