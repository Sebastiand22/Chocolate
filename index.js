// NAV MENU
function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}

// Închide meniul când dai click pe un link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".navigation").classList.remove("active");
      document.querySelector(".menu").classList.remove("hide");
      document.querySelector(".close").classList.remove("show");
    });
  });
});

// PRODUCTS MODAL
const modal = document.getElementById("modalProduct");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close-modal-button")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function (event) {
  {
    modal.style.display = "none";
  }
};

// HOVER VIDEO

const video = document.querySelector(".hover-video");
video.addEventListener("mouseenter", () => {
  video.play();
});
video.addEventListener("mouseleave", () => {
  video.pause();
});

// Subscribe MODAL

const subscribeModal = document.getElementById("subscribeModal");
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeCloseButton = document.querySelector(".close-subscribe-button");

// Când utilizatorul apasă pe butonul de subscribe, deschide modalul
subscribeBtn.onclick = function () {
  
  subscribeModal.style.display = "flex";
};

// Când utilizatorul apasă pe X pentru a închide modalul
subscribeCloseButton.onclick = function () {
   console.log("Button clicked")
  subscribeModal.style.display = "none";
};

// Dacă utilizatorul dă click în afara modalului, acesta se va închide
window.onclick = function (event) {
  if (event.target === subscribeModal) {
    subscribeModal.style.display = "none";
  }
};