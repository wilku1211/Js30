const checkBoxes = document.querySelectorAll(".inbox input");

let lastChecked = false;

function handleCheck(e) {
  let isBetween = false;

  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkBox) => {
      if (checkBox === this || checkBox === lastChecked) {
        isBetween = !isBetween;
      }

      if (isBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkBoxes.forEach((checkBox) =>
  checkBox.addEventListener("click", handleCheck)
);
