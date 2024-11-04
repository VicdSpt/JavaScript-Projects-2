const countersNumber = document.querySelectorAll(".counter");

countersNumber.forEach((counterNumber) => {
  counterNumber.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNumber = +counterNumber.innerText;
    const dataCeil = counterNumber.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNumber = Math.ceil(currentNumber + increment);

    if (currentNumber < dataCeil) {
      counterNumber.innerText = currentNumber;
      setTimeout(incrementCounter, 50);
    } else {
      counterNumber.innerText = dataCeil;
    }
  }
});
