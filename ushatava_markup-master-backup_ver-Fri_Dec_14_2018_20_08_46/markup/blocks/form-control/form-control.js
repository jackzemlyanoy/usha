$('.form-control.error').on('focus', function (e) {
	e.preventDefault();
	$('.form-error').show().not($(this).next('.form-error')).hide();
});
