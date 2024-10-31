const textBoxArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textBoxArea.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounter.innerText = textBoxArea.value.length;
  remainingCounter.innerText =
    textBoxArea.getAttribute("maxLength") - textBoxArea.value.length;
}
