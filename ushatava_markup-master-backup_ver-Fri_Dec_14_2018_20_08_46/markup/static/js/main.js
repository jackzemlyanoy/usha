'use strict';

import '../../blocks/header/header';
//import '../../blocks/menu/menu';
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
