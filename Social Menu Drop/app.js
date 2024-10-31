const handleMenu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const socialList = document.querySelector(".social-lists");
const listElement = document.querySelectorAll(".social-lists li");

handleMenu.addEventListener("click", () => {
  socialList.classList.toggle("hide");
  handleMenu.classList.toggle("rotate");
});

listElement.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    menuText.innerHTML = listElement.innerHTML;
    socialList.classList.add("hide");
    handleMenu.classList.toggle("rotate");
  });
});
