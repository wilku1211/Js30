const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptios = voices
    .filter((voice) => voice.lang.includes("en"))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
  voicesDropdown.innerHTML = voiceOptios;
}

function setVoices() {
  msg.voice = voices.find((voices) => voices.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  startOver && speechSynthesis.speak(msg);
}
function setOption(e) {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoices);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
