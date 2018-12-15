// плавающее меню
$(function scrollingHeader () {
		let header = $('.header');
		let heightHeader = 100;
		let currentScroll = () => window.pageYOffset;
		if (header.hasClass('header_transparent')) {
			$(window).scroll(function () {
				if (currentScroll() >= heightHeader) {
					$('.header').addClass('header_scrolled');
					$('.header').removeClass('header_transparent');
				}
				else {
					$('.header').removeClass('header_scrolled');
					$('.header').addClass('header_transparent');
				}
			});
		}
		else if (header.hasClass('header_white')) {
			$(window).scroll(function () {
				if (currentScroll() >= heightHeader) {
					$('.header').addClass('header_scrolled');
					$('.header').removeClass('header_white');
				}
				else {
					$('.header').removeClass('header_scrolled');
					$('.header').addClass('header_white');
				}
			});
		}
});
//общее субменю на ховере
$('.menu_header-nav .menu__link').on('mouseover', function (event){
	let submenu = this.closest('.header__wrapper').nextElementSibling;
	submenu.classList.add("show");
});
// закрыть при клике на пункт или вне меню
window.onclick = function(event) {
	
	if (!event.target.matches('.menu_header-nav .menu__title')) {
  
	  let submenuOpened = document.querySelector('.header__submenu');
	  if (submenuOpened.classList.contains('show')) {
		submenuOpened.classList.remove('show');
	  }
	//   let i;
	//   for (i = 0; i < submenuOpened.length; i++) {
	// 	let openDropdown = dropdowns[i];
	// 	if (openDropdown.classList.contains('show')) {
	// 	  openDropdown.classList.remove('show');
	// 	}
	//   }
	}
  };