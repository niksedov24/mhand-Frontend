export function slider() {
    new Swiper(".productGallerySlider", {
        pagination: {
          el: ".productGallerySlider .swiper-pagination",
        },
      });
}

new Swiper(".bannSlider", {
  slidesPerView: 1.7,
  spaceBetween: 21,
  navigation: {
    nextEl: ".advantages-section__info-block__bann .button.next",
    prevEl: ".advantages-section__info-block__bann .button.prev",
  },
});