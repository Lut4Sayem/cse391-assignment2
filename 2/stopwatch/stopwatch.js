let display = document.getElementById("display");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let currentTime = 0;
let intervalId = null;

startBtn.addEventListener("click", function () {
  if (intervalId !== null) return;
  if (currentTime >= 30) return;

  intervalId = setInterval(function () {
    currentTime += 3;
    display.textContent = currentTime;

    if (currentTime >= 30) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  currentTime = 0;
  display.textContent = 0;
});
