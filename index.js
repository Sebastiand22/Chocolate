// NAV MENU
function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}

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
video.addEventListener('mouseenter', () => {
  
  video.play();
});
video.addEventListener('mouseleave', () => {
  video.pause();
  
});
