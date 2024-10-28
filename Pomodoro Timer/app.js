const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 120;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      timeLeft = 120;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

btnStart.addEventListener("click", startTimer)
btnStop.addEventListener("click", stopTimer)
btnReset.addEventListener("click", resetTimer)
