const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.rate || "";

  const { name, value } = this;
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
