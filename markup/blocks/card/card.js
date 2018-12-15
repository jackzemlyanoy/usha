//change HTML content via checkbox, jQuery version

$(function () {
	var checkboxes = $('.card__sizes input[type=checkbox]');
	var submenuToggle = document.querySelector('.submenu_toggle');
	checkboxes.change(function () {
		var checkboxesChecked = $('.card__sizes input[type=checkbox]:checked');
		if (checkboxesChecked.length > 0) {
			submenuToggle.innerHTML = '<div class="card__row card__row_item"><span class="card__city">Шоурум Москва</span><span class="card__amount card__amount_last">последний размер</span></div>\<div class="card__row card__row_item"><span class="card__city">Шоурум Санкт-Петербург</span><span class="card__amount card__amount_few">в наличии мало</span></div><div class="card__row card__row_item"><span class="card__city">Шоурум Екатеринбург</span><span class="card__amount card__amount_none">в наличии нет</span></div><div class="card__row card__row_item"><span class="card__city">Шоурум Сочи</span><span class="card__amount card__amount_available">есть в наличии</span></div>';
		}
		else {
			submenuToggle.innerHTML = '<p class="section__text_small">Чтобы проверить наличие в шоурумах, выберите Ваш размер</p><a class="btn btn_brown btn_margined align-self-start" href="#"><span class="btn__text">Выбрать размер</span></a>';
		}
	});
});

//change HTML content via checkbox, pure js version 1
//you need to put Check() function into ckeckbox property like onclick="Check()"

