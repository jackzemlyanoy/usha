'use strict';

import '../../blocks/header/header';
// import '../../blocks/menu/menu';
import '../../blocks/card/card';
import '../../blocks/burger-btn/burger-btn';
import '../../blocks/accordion/accordion';
import '../../blocks/anchor/anchor';
import '../../blocks/slider/slider';
import '../../blocks/select/select';
import '../../blocks/form-search/form-search';
import '../../blocks/colorbox/colorbox';
import '../../blocks/toper/toper';
import '../../blocks/switcher/switcher';

// хак для корерктной работы слайдера после загрузки всей страницы
$(window).on('load', function () {
    $(window).trigger('resize');
});
// $('.header__submenu').on('mouseleave', function (event) {
//     $(".header__submenu").remove('show');
// }); // закрыть при клике на пункт или вне меню

$('.header__submenu').on('mouseleave', function (event) {
    document.querySelector('.show').classList.remove('show');
}); // закрыть при клике на пункт или вне меню
