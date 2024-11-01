const btnGenerate = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIconPassword = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-container");

btnGenerate.addEventListener("click", () => {
  createPassword();
});

copyIconPassword.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alert.classList.remove("active");
    setTimeout(() => {
      alert.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
  alert.innerText = password + " copied !";
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
}
