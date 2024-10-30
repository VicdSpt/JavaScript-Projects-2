const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articlesTabs = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    articlesTabs.forEach(function (articlesTab){
        articlesTab.classList.remove("live")
    });
    const element = document.getElementById(id);
    element.classList.add("live")
  }
});
