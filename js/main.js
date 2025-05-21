const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".header__menu");
// const menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// menuItem.forEach (function(menuItem) {
//   menuItem.addEventListener('click',function(){
//           menuBtn.classList.toggle('active');
//           menu.classList.toggle('active');
//   })
// })

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 4,
    },
  },
});
