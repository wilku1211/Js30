const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${xWalk}px ${yWalk - 1}px 0 rgba(0,25,255,0.7),
  ${yWalk - 1}px ${xWalk}px 0 rgba(0,255,25,0.7),
  ${yWalk}px ${xWalk}px 0 rgba(100,150,150,0.7)
  `;

  console.log({ xWalk, yWalk });
}

hero.addEventListener("mousemove", shadow);
