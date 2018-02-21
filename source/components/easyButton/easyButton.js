'use strict';

import 'bootstrap';
import '../libs/easybutton/easy-button.css'
import '../libs/easybutton/easy-button'
import './easyButton.sass'
import setAttr from '../../components/function/add.js';

import {map} from '../function/drawMap';

export default function easyButton() {
	let b1 =  L.easyButton({
		id: 'icon1',
		states:[{
			stateName: 'icon',
			icon: '<img src="./images/connection.svg">',
			title: 'Выключение трекера',
			onClick: function(control) {
				console.log('click!(1)' );
			}
		}]
	});
	let b2 =	L.easyButton({
		id: 'icon2',
		states:[{
			stateName: 'icon',
			icon: 'far fa-clock red',
			title: 'Отключение трекера более чем на 1 час.',
			onClick: function(control) {
				console.log('click!(2)' );
			}
		}]
	});
	let b3 =	L.easyButton({
		id: 'icon3',
		states:[{
			stateName: 'icon',
			icon: 'far fa-clock green',
			title: 'Нахождение трекера в одной точке более часа.',
			onClick: function(control) {
				console.log('click!(3)' );
			}
		}]
	});
	let b4 =	L.easyButton({
		id: 'icon4',
		states:[{
			stateName: 'icon',
			icon: '<img src="./images/star.svg">',
			title: 'Совпадение траектории передвижения нескольких находящихся на связи трекеров в течение часа и более.',
			onClick: function(control) {
				console.log('click!(4)' );
			}
		}]
	});
	let b5 =	L.easyButton({
		id: 'icon5',
		states:[{
			stateName: 'icon',
			icon: '<img src="./images/satellite.svg">',
			title: 'Потеря GPS-сигнала.',
			onClick: function(control) {
				console.log('click!(5)' );
			}
		}]
	});
	let b6 =	L.easyButton({
		id: 'icon6',
		states:[{
			stateName: 'icon',
			icon: 'fas fa-battery-empty',
			title: 'Низкое питание трекера.',
			onClick: function(control) {
				console.log('click!(6)' );
			}
		}]
	});
	let b7 =	L.easyButton({
		id: 'icon7',
		states:[{
			stateName: 'icon',
			icon: 'fas fa-exclamation red size',
			title: 'Поступление тревожного вызова.',
			onClick: function(control) {
				console.log('click!(7)' );
			}
		}]
	});
	let buttons = [b1,b2,b3,b4,b5,b6,b7];
	L.easyBar(buttons, {
		position: 'bottomleft'
	}).addTo(map);

	let funcB =	L.easyButton({
		id: 'funBtn',
		states:[{
			stateName: 'funBtn',
			icon: 'far fa-play-circle',
			onClick: function(control) {
				$('#easyButton').modal({
					backdrop: false,
					show: true,
					keyboard: false
				});
			}
		}],
		position: 'topright'
	}).addTo(map);

	$('#funBtn').one('click', function () {
		if ($(window).width() <= 575){
			$('#summer-list-tab').removeClass('active');
			$('.icon_system').addClass('active');
		}
		let textL = [
			'Подметание территорий 1 класса с усовершенствованным покрытием',
			'Подметание территорий 1 класса с неусовершенствованным покрытием',
			'Мойка территории 1 класса с усовершенствованным покрытием',
			'Очистка газонов от опавших листьев',
			'Погрузка и разгрузка веток, листьев, мусора от прополки',
			'Кошение газонов',
			'Механическая уборка комбинированными машинами'
		];
		let listArrSummer = ['b1s', 'b2s', 's', 'b4s', 'b5s', 'b6s', 'b7s'];
		let summerList = $('div.summerList');
		$.each(listArrSummer, function (i) {
			let aList = document.createElement('a');
			setAttr(aList, {
				"id": "list-"+ listArrSummer[i] +"-list",
				"class": "list-group-item list-group-item-action",
				"data-toggle":"list",
				"href": "#list-" + listArrSummer[i],
				"role":"tab",
				"aria-controls": listArrSummer[i]
			});
			$(aList).text(textL[i]);
			$(summerList).append(aList);
		});
	});
	$('.winter').one('click', function () {
		let textL = [
			'Вывоз снега ВС',
			'Механизированная уборка комбинированными машинами МУКМ',
			'Посыпка пескосоляной смесью ППС',
			'Зимняя уборка газонов от мусора ЗУГМ',
			'Очистка от мусора урн железобетонных с вкладышем и без вкладыша ОМУ',
			'Очистка территории 1 класса с усовершенствованным покрытием ОТ-У',
			'СС по территории 1 класса с неусовершенствованным покрытием СС-Н',
			'ПСС без предварительной обработки территории 1 класса с неусовершенствованным покрытием ПС-Н',
			'СС по территории 1 класса с усовершенствованным покрытием СС-У',
			'ПСС без предварительной обработки территории 1 класса с усовершенствованным покрытием ПС-У',
		];
		let listArrWinter = ['b1w', 'b2w', 'w', 'b4w', 'b5w', 'b6w', 'b7w', 'b8w', 'b9w', 'b10w'];
		let winterList = $('div.winterList');
		$.each(listArrWinter, function (i) {
			let aList = document.createElement('a');
			setAttr(aList, {
				"id": "list-" + listArrWinter[i] + "-list",
				"class": "list-group-item list-group-item-action",
				"data-toggle": "list",
				"href": "#list-" + listArrWinter[i],
				"role": "tab",
				"aria-controls": listArrWinter[i]
			});
			$(aList).text(textL[i]);
			$(winterList).append(aList);
		});
	});
	$(".yes").on('click', function () {
		$('#easyButton').modal('hide')
	});

}