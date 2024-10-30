const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progressBar = document.querySelector(".progress-bar-front");
const stepProgress = document.querySelectorAll(".step");

let currentChecked = 1;

nextBtn.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepProgress.length) {
    currentChecked = stepProgress.length;
  }
  updateStepProgress();
});

prevBtn.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepProgress.forEach((stepProgress, idx) => {
    if (idx < currentChecked) {
      stepProgress.classList.add("checked");
      stepProgress.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === stepProgress.length - 1
          ? "Final"
          : "Step " + idx
        }</small>
      `;
    } else {
      stepProgress.classList.remove("checked");
      stepProgress.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressBar.style.width =
    (checkedNumber.length - 1) / (stepProgress.length - 1) * 100 + "%";

  if (currentChecked === 1) {
    prevBtn.disabled = true;
  } else if (currentChecked === stepProgress.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
