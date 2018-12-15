$('.accordion').each(function () {
    const $items = $(this).find('.accordion__item');
    const $titles = $(this).find('.accordion__title');
    const $contents = $(this).find('.accordion__submenu');
    const speed = 300;
    $items.each(function () {
        const findActive = false;
        if (!findActive) {
            if ($(this).hasClass('accordion__item_active')) {
                $(this).children('.accordion__submenu').show().css("display","flex");
                return false;
            }
        } else {
            $(this).removeClass('accordion__item_active');
        }
    });

    $titles.click(function (event) {
        event.preventDefault();
        const $item = $(this).parent();

        if (!$item.hasClass('accordion__item_active')) {
	        $items.removeClass('accordion__item_active');
	        $item.addClass('accordion__item_active');
	        $contents.slideUp(speed);
	        $item.children('.accordion__submenu').slideDown(speed).css("display","flex");
        } else {
            $item.children('.accordion__submenu').slideUp(speed).css("display","flex");
            $item.removeClass('accordion__item_active');
        }
    });
});


