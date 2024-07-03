const sliderImages = document.querySelectorAll(".slider__slide"),
  sliderLine = document.querySelector(".slider__line"),
  sliderDots = document.querySelectorAll(".slider__dot"),
  sliderBtnNext = document.querySelector(".slider__btn-next"),
  sliderBtnPrev = document.querySelector(".slider__btn-prev");

// Переменные
let sliderCount = 0,
  sliderWidth;

// Адаптивность слайдера
window.addEventListener("resize", showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  if (window.innerWidth < 700) {
    sliderWidth = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + "px";
    sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  } else {
    sliderImages.forEach((item) => (item.style.width = null));
    sliderLine.style.width = null;
  }

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length - 1) {
    sliderCount = sliderImages.length - 1;
    sliderBtnNext.disabled = true;
  } else {
    sliderBtnPrev.disabled = false;
  }

  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount <= 0) {
    sliderCount = 0;
    sliderBtnPrev.disabled = true;
  } else {
    sliderBtnNext.disabled = false;
  }

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  if (window.innerWidth < 700) {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  } else {
    sliderLine.style.transform = null;
  }
}

// Указывает как слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");
}
