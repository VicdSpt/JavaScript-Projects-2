const list = document.querySelectorAll(".nav-list li");
const navBar = document.querySelector(".navigation");

list.forEach((item) => {
  item.addEventListener("click", function (event) {
    list.forEach((li) => li.classList.remove("active"));
    event.currentTarget.classList.add("active");
  });
});
