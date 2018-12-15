$('.colorbox-trigger-zoom').colorbox({
	title: false,
	inline: true,
	href: "#zoom",
	fixed: true,
	width: '100%',
	height: '100%',
	current: false,
	previous: false,
	next: false,
	close: '<span class="colorbox__close"></span>',
	onOpen: function () {
		$('body').addClass('page_overflow');
	},
	onClosed: function () {
		$('body').removeClass('page_overflow');
	},
	onComplete: function (event) {
		let mainImage = document.querySelector(".colorbox__img");
		let $thumbImages = $(".colorbox__thumbnails > img");
		$thumbImages.on("mouseover", (e) => {
			let $mainImage = $(".colorbox__img");
			let $imgSrc = $(e.target).attr('src');
			$mainImage.css('background-image', 'url(' + $imgSrc + ')');
		});
		mainImage.addEventListener("mousemove", (e) => {
			mainImage.style.backgroundPositionY = -e.offsetY + "px";
		});
	}
});
$('.colorbox-trigger-inline').each(function() {
	$(this).colorbox({
		title: false,
		inline: true,
		href: $(this).attr("href"),
		fixed: true,
		maxWidth: '95%',
		current: false,
		previous: false,
		next: false,
		close: '<span class="colorbox__close colorbox__close_gray"></span>',
		onOpen: function () {
			$('body').addClass('page_overflow');
		},
		onClosed: function () {
			$('body').removeClass('page_overflow');
		},
	});
});

// $(".colorbox__close").click(function() {
// 	jQuery('#cboxClose').click();
// });