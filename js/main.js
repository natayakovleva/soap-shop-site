const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header__menu');
// const menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


// menuItem.forEach (function(menuItem) {
//   menuItem.addEventListener('click',function(){
//           menuBtn.classList.toggle('active');
//           menu.classList.toggle('active');
//   })
// })

