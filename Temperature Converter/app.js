const degreeCelsius = document.getElementById("celsius");
const degreeFahrenheit = document.getElementById("fahrenheit");
const degreeKelvin = document.getElementById("kelvin");

function calculateTemperature(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      degreeKelvin.value = (currentValue + 273.32).toFixed(2);
      degreeFahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      degreeCelsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      degreeKelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      degreeCelsius.value = (currentValue - 273.32).toFixed(2);
      degreeFahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
