const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const full = player.querySelector(".fullscreen__button");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function toggleScreen() {
  video.requestFullscreen();
  console.log({ video });
}
function updatePlayButton() {
  const icon = this.paused ? "play" : "pause";
  toggle.textContent = icon;
}
function skip() {
  const skippingTime = parseFloat(this.dataset.skip);
  video.currentTime += skippingTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
full.addEventListener("click", toggleScreen);

skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let isMouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mouseup", () => (isMouseDown = false));
progress.addEventListener("mousedown", () => (isMouseDown = true));
progress.addEventListener("mousemove", (e) => isMouseDown && scrub(e));
