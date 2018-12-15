if ($('.section_demo').length) {
    $(window).resize(function () {
        $('.section_demo').css('height', function () {
            return $(window).height() - 120;
        });
    });

    $('.section_demo').css('height', function () {
        return $(window).height() - 120;
    });
}

if ($('html').hasClass('ie9') && $('.section_height-ie').length) {
    $(window).resize(function () {
        $('.section_height-ie').css('height', function () {
            return $(this).height();
        });
    });

    $('.section_height-ie').css('height', function () {
        return $(this).height();
    });
}



