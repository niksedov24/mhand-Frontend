export function slider() {
    new Swiper(".productGallerySlider", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
}

new Swiper(".bannSlider", {
  slidesPerView: 1.7,
  spaceBetween: 21,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});