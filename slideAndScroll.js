function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((sliderimage) => {
    const slidetInAt =
      window.scrollY + window.innerHeight - sliderimage.height / 2;
    const imageBottom = sliderimage.offsetTop + sliderimage.height;
    const isHalfShaw = slidetInAt > sliderimage.offsetTop;
    const isNotScrollToPast = imageBottom > window.scrollY;

    isHalfShaw && isNotScrollToPast
      ? sliderimage.classList.add("active")
      : sliderimage.classList.remove("active");
  });
}

window.addEventListener("scroll", debounce(checkSlide));
