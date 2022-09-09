const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");
const start = document.querySelectorAll(".mole");

let lastHole;
let timeUp = false;
let records = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (lastHole === hole) {
    return randomHole(holes);
  }

  lastHole = hole;

  return hole;
}

function peep() {
  const hole = randomHole(holes);
  const time = randTime(200, 1000);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  //scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bunkMole(e) {
  if (!e.isTrusted) return;
  records++;
  this.classList.remove("up");
  scoreBoard.textContent = records;
  console.log({ records, scoreBoard });
}

moles.forEach((mole) => mole.addEventListener("click", bunkMole));
