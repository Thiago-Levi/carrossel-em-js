const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const previousButton = document.querySelector(
  '[data-js="carousel__button--prev"]'
);
const slides = document.querySelectorAll('[data-js="carousel__item"]');

let currentSlideIndex = 0;

nextButton.addEventListener("click", () => {
  currentSlideIndex === slides.length - 1
    ? (currentSlideIndex = 0)
    : currentSlideIndex++;

  slides.forEach((slide) => {
    slide.classList.remove("carousel__item--visible");
  });

  slides[currentSlideIndex].classList.add("carousel__item--visible");
});

previousButton.addEventListener("click", () => {
  currentSlideIndex === 0
    ? (currentSlideIndex = slides.length - 1)
    : currentSlideIndex--;

  slides.forEach((slide) => {
    slide.classList.remove("carousel__item--visible");
  });

  slides[currentSlideIndex].classList.add("carousel__item--visible");
});
