document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.category-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 3 },
    },
  })
})

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.custom-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
    },
    spaceBetween: 50,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2 },
      1024: { slidesPerView: 2.5 },
      1280: { slidesPerView: 3 },
    },
  })
})

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.Testimonials-swiper', {
    loop: true,
    navigation: {
      nextEl: '.Testimonials-next.swiper-button-next',
      prevEl: '.Testimonials-prev.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
      1280: { slidesPerView: 1 },
    },
  })
})
