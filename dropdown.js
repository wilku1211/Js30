const triggers = document.querySelectorAll(".cool > li");
const backgrund = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  backgrund.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCooeds = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCooeds.top,
    left: dropdownCoords.left - navCooeds.left,
  };

  backgrund.style.setProperty("width", `${coords.width}px`);
  backgrund.style.setProperty("height", `${coords.height}px`);
  backgrund.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
  console.log(coords);
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  backgrund.classList.remove("open");

  console.log("leave");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
console.log(triggers);
