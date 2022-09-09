const secondHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hour");
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrres = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrres}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrres = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrres}deg)`;

  const hour = now.getHour();
  const hourDegrres = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrres}deg)`;

  console.log(secondDegrres);
}
setInterval(setDate, 1000);
