const timeNodes = document.querySelectorAll("[data-time]");

const secounds = [...timeNodes]
  .map((timeNode) => timeNode.dataset.time)
  .map((timeCode) => {
    const [min, sec] = timeCode.split(":").map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((a, b) => a + b);

let secondLeft = secounds;

const hours = Math.floor(secondLeft / 3600);
secondLeft = secondLeft % 3600;

const min = Math.floor(secondLeft / 60);
secondLeft = secondLeft % 60;

console.log({ hours, min, secondLeft });
