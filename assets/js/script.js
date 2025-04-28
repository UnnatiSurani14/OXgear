// toggle
let toggle = document.getElementById('toggle')
let nav = document.getElementById('navbar')

toggle.addEventListener('click', function () {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block'
  } else {
    nav.style.display = 'none'
  }
})

// search
document.addEventListener('DOMContentLoaded', function () {
  let search = document.getElementById('search')
  let searchbar = document.getElementById('searchbar')

  search.addEventListener('click', function () {
    if (searchbar.style.display === 'none' || searchbar.style.display === '') {
      searchbar.style.display = 'block'
    } else {
      searchbar.style.display = 'none'
    }
  })
})

// category-slider
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

// category-slider
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.seller-swiper', {
    loop: true,
    navigation: {
      nextEl: '.seller-prev.swiper-button-next',
      prevEl: '.seller-next.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  })
})

// Custom-slider
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.custom-swiper', {
    loop: true,
    slidesPerView: 3,
    pagination: {
      el: '.custome-pagintion.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
    },
    autoplay: {
      delay: 3000,
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

// Testimonials-slider
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
