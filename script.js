const countDownElement = document.getElementById("countDown");
const resetValueElememt = document.querySelector(".resetValue");

let startCount = 0;
let intervalId;

const startTimer = () => {
  intervalId = setInterval(() => {
    countDownElement.innerText = startCount++;
  }, 1000);
};

const stopTimer = () => {
  showStopTimer();
  clearInterval(intervalId);
};

const resetTimer = () => {
  startCount = 0;
  countDownElement.innerText = startCount;
  clearInterval(intervalId);
};

const showStopTimer = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop time is ${startCount - 1}`;
  resetValueElememt.append(newPara);
};

const clearTimeValue = () => {
  resetValueElememt.innerHTML = "";
};

document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".time_btn").addEventListener("click", showStopTimer);
document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
