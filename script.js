let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

document.querySelector(
  ".slider--width"
).style.width = `calc(220px* ${totalSlides})`;

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }

  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 3000);
