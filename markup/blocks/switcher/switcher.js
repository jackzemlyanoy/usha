$(window).on('load', function () {
	$('.switcher').find('input').click(function(e) {
		var $switcher = this.parentElement;
		var $input = $switcher.previousElementSibling;
		if ($($switcher).hasClass('height')) {
			if ($(this).is(':checked'))
				$($input).addClass('height_inch').removeClass('height_sm');
			else
				$($input).addClass('height_sm').removeClass('height_inch');
		}
		if ($($switcher).hasClass('weight')) {
			if ($(this).is(':checked'))
				$($input).addClass('weight_lbs').removeClass('weight_kg');
			else
				$($input).addClass('weight_kg').removeClass('weight_lbs');
		}
		
	});
});