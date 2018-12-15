if ($('.menu_anchor').length && $(window).width() > 767) {
    const fixedTop = $('.menu_anchor');
    const bottomBlock = $('.banner');
    let checkPoint = 0;
    let lastPoint = bottomBlock.offset().top - fixedTop.height() - 80;

    if ($(window).width() > 767 && $(window).width() < 992) {
        checkPoint = 170;
    } else if ($(window).width() > 991 && $(window).width() < 1200) {
        checkPoint = 175;
    } else {
        checkPoint = 340;
    }

    $(window).resize(function () {
        if ($(window).width() > 767 && $(window).width() < 992) {
            checkPoint = 170;
        } else if ($(window).width() > 991 && $(window).width() < 1200) {
            checkPoint = 175;
        } else {
            checkPoint = 340;
        }

        lastPoint = bottomBlock.offset().top - fixedTop.height() - 80;
    });

    let currentPoint = $('html').scrollTop();

    if (currentPoint < lastPoint && currentPoint > checkPoint) {
        fixedTop.removeClass('menu_absolute');
        fixedTop.addClass('menu_fixed');
    } else if (currentPoint < lastPoint && currentPoint < checkPoint) {
        fixedTop.removeClass('menu_absolute');
        fixedTop.removeClass('menu_fixed');
    } else if (currentPoint > lastPoint && currentPoint > checkPoint) {
        fixedTop.removeClass('menu_fixed');
        fixedTop.addClass('menu_absolute');
    }

    $(window).scroll(function () {
        currentPoint = $(this).scrollTop();

        if (currentPoint < lastPoint && currentPoint > checkPoint) {
            fixedTop.removeClass('menu_absolute');
            fixedTop.addClass('menu_fixed');
        } else if (currentPoint < lastPoint && currentPoint < checkPoint) {
            fixedTop.removeClass('menu_absolute');
            fixedTop.removeClass('menu_fixed');
        } else if (currentPoint > lastPoint && currentPoint > checkPoint) {
            fixedTop.removeClass('menu_fixed');
            fixedTop.addClass('menu_absolute');
        }
    });
}

