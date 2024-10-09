const button = document.getElementById("avatar-navbar");
const closeBUtton = document.querySelector(".close-button");
const navigationMenu = document.querySelector(".navigation-menu");

button.addEventListener("click", () => {
  navigationMenu.classList.remove("none");
  navigationMenu.classList.remove("hide");
});

closeBUtton.addEventListener("click", () => {
  navigationMenu.classList.add("hide");
});
