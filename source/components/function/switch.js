import srchAddr from './searchAddress.js';
import srchCar from './searchCar';

export default function switdh() {
	$(() => {
		srchAddr();
		let el = $('#search_query');
		$('.button-switch').on('click', () => {
			if(el.hasClass('address')){
				el.removeClass('address');
				el.addClass('object');
				if($(window).width() <= 575){
					el.attr('placeholder', 'Поиск по б/н');
				} else {
					el.attr('placeholder', 'Поиск по бортовому номеру');
				}
				srchCar();
			} else {
				el.removeClass('object');
				el.addClass('address');
				el.attr('placeholder', 'Поиск по адресу');
				srchAddr();
			}
		});
		$('form').submit(() => {
			return false;
		});
	});
}