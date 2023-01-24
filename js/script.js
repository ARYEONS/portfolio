var swiper = new Swiper(".work_swiper", {
  slidesPerView: 2.5,
  spaceBetween: 50,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});