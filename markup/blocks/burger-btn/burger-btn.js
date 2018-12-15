$('.burger-btn').click(function () {
	$(this).toggleClass('burger-btn_close');
	$('.subMenu-mobile').toggleClass('subMenu-mobile_open');
	$('.page').toggleClass('page_overflow');
	$('.subMenu-mobile__close').click(function () {
		$('.burger-btn').removeClass('burger-btn_close');
		$('.subMenu-mobile').removeClass('subMenu-mobile_open');
		$('.page').unbind().removeClass('page_overflow');
	});
	
});