export function slider() {
    new Swiper(".productGallerySlider", {
        pagination: {
          el: ".productGallerySlider .swiper-pagination",
        },
      });
}

new Swiper(".bannSlider", {
  slidesPerView: 1,
  spaceBetween: 21,
  navigation: {
    nextEl: ".advantages-section__info-block__bann .button.next",
    prevEl: ".advantages-section__info-block__bann .button.prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.7,
      spaceBetween: 21,
    }
  }
});

new Swiper(".brandsSlider", {
  slidesPerView: 5,
  spaceBetween: 21,
  loop:true,
  navigation: {
    nextEl: ".brands-section__slider .button.next",
    prevEl: ".brands-section__slider .button.prev",
  },
});

