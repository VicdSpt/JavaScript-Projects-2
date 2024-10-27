const btnCalculate = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipvalue = tipInput.value;
  const totalValue = billValue * (1 + tipvalue / 100);
  total.innerText = totalValue.toFixed(2);
}

btnCalculate.addEventListener("click", calculateTotal);
