const triggers = document.querySelectorAll("a");

const hilight = document.createElement("span");
hilight.classList.add("highlight");
document.body.append(hilight);

function highlightLink() {
  const { width, height, left, top } = this.getBoundingClientRect();
  const cords = {
    width,
    height,
    left: left + window.scrollX,
    top: top + window.scrollY,
  };
  hilight.style.width = `${cords.width}px`;
  hilight.style.height = `${cords.height}px`;
  hilight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
  console.log(width);
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
