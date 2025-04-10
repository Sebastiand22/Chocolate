function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}

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
