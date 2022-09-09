const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const allButtons = document.querySelectorAll(".timer button");
const formText = document.querySelector("#custom");

let countDown;

function timer(seconds) {
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  dispalySeconds(seconds);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    dispalySeconds(secondsLeft);
  }, 1000);

  console.log({ now, then });
}

function dispalySeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const display = `${minutes < 10 ? "0" + minutes : minutes}:${
    sec < 10 ? "0" : ""
  }${sec}`;
  document.title = display;
  timeLeft.textContent = display;
  console.log({ minutes, sec });
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const usHour = hour > 12 ? hour - 12 : hour;
  const justHour = `${usHour < 10 ? "0" : ""}${usHour}`;
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  const displayTime = `${justHour}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
  endTime.textContent = "end will by at " + displayTime;
  console.log({ hour, minutes, seconds });
}

function startTimer(e) {
  timer(parseInt(this.dataset.time));
}

function handleFormText(e) {
  e.preventDefault();
  const sec = parseInt(e.target.minutes.value) * 60;
  timer(sec);
  this.reset();
}

allButtons.forEach((button) => button.addEventListener("click", startTimer));
formText.addEventListener("submit", handleFormText);
