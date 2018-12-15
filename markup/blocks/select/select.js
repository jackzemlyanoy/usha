$(document).ready(function(){
	
	$(".select__dropdown").click(function(){
		$(".select__menu").toggleClass("select__menu_show");
			$(".select__menu > li").click(function(){
				$(".select__dropdown > .select__color").html($(this).html());
					$(".select__menu").removeClass("select__menu_show");
		});
	});
	
});