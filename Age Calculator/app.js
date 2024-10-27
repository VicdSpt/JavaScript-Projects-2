const btnCalculate = document.getElementById("btnCalcul");
const birthdayDate = document.getElementById("birthday");
const getResult = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayDate.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday 😊");
  } else {
    const age = getAge(birthdayValue);
    getResult.innerText = `Your age is ${age} ${
      age > 1 ? "year" : "years"
    } old 🔥`;
  }
}

function getAge(birthdayvalue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayvalue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnCalculate.addEventListener("click", calculateAge);
