const inputNumber = document.getElementById("inputnumber");
const getError = document.getElementById("error");
const getResult = document.getElementById("result");

let errorTime;
let resultTime;

function updateResults() {
  if (inputNumber.value <= 0 || isNaN(inputNumber.value)) {
    getError.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      getError.innerText = "";
      inputNumber.value = "";
    }, 2000);
  } else {
    getResult.innerText = (+inputNumber.value / 0.454).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      getResult.innerText = "";
      inputNumber.value = "";
    }, 10000);
  }
}

inputNumber.addEventListener("input", updateResults);
