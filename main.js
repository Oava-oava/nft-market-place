const openButton = document.querySelector(".open-btn");
const navbar = document.querySelector(".navbar__container");
const closeButton = document.querySelector(".close-btn");

openButton.onclick = () => {
  navbar.classList.toggle("opened");
};

closeButton.addEventListener("click", function () {
  navbar.classList.toggle("opened");
});
