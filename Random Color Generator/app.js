const containerBox = document.querySelector(".container");
const randomizeButton = document.getElementById("randomize-color-btn"); 

for (let index = 0; index < 6; index++) {
  const colorGeneration = document.createElement("div");
  colorGeneration.classList.add("color-container");
  containerBox.appendChild(colorGeneration);
}

const colorGeneration = document.querySelectorAll(".color-container");

randomizeButton.addEventListener("click", generateColors);

function generateColors() {
  colorGeneration.forEach((colorGeneration) => {
    const newColorCode = randomColor();
    colorGeneration.style.backgroundColor = "#" + newColorCode;
    colorGeneration.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const characters = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    colorCode += characters.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
