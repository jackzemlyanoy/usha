$(document).ready(function () {
	$('.slider_view').slick({
		infinite: true,
		arrows: true,
		prevArrow: $('.slider-view .slider__btn_prev'),
		nextArrow: $('.slider-view .slider__btn_next'),
		speed: 1000,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.slider_info-1').slick({
		infinite: true,
		arrows: true,
		prevArrow: $('.slider-info-1 .slider__btn_prev'),
		nextArrow: $('.slider-info-1 .slider__btn_next'),
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.slider_info-2').slick({
		infinite: true,
		arrows: true,
		prevArrow: $('.slider-info-2 .slider__btn_prev'),
		nextArrow: $('.slider-info-2 .slider__btn_next'),
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					// centerMode: true,
					// fade: true,
					slidesToShow: 1,
					slidesToScroll: 1
					
				}
			}
		]
	});

	
	//Кастомизация слайдера с боковыми миниатюрами START
	
	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		infinite: true,
		autoplay: false,
		//autoplaySpeed: 4000,
		useTransform: true,
		speed: 600,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});
	
	$('.slider-nav')
		.on('init', function(event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: false,
			dots: false,
			focusOnSelect: true,
			infinite: true,
			vertical: true,
			centerPadding:0,
			arrows: false
		});
	
	$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});
	
	$('.slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
		
		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});
	
	//Кастомизация слайдера с боковыми миниатюрами END
	
	
	
	
});

