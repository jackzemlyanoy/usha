$('.js-form-search-btn').click(function () {
	let searchInput = $('.js-form-search-input').val();

	if (!searchInput.length) {
		$(this).parents('.form-search').toggleClass('form-search_open');
		$(".subMenu-mobile__close").toggleClass('switch');
		$(".subMenu-mobile__accordion").toggleClass('disable')
		$(this).parents('.form-search').find('.form-control_search').focus();
		return false
	}

	alert("Настройте отправку запроса в блоке form-search")
});

/*$(document).click(function (e) {
	if (!$(e.target).closest('.search').length) {
		$('.form-search').removeClass('form-search_open').fadeOut(300);
	}
	e.stopPropagation();
});*/
