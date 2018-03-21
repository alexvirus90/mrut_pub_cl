'use strict';

import '../../libs/easybutton/easy-button'
import '../../libs/easybutton/easy-button.css'
import './easyButton.sass'
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'
import {$this, Cookies} from '../../function/variable.js';
import setAttr from '../../function/add.js';
import Polygon from "../polygon/polygon";
import {map_M} from '../function/drawMapM';
import Update, {group1, group2, group3, group4, group7} from './update';

export default function easyButton() {

	let b1 = L.easyButton({
		id: 'icon1',
		states: [{
			stateName: 'icon',
			icon: '<img src="./images/connection.svg">',
			title: 'Выключение трекера',
			onClick: ()=> {
				let item = [];
				for (let k in group1) {
					if (typeof group1[k] === 'object') {
						item.push(
							[group1[k]['DeviceID'], group1[k]['NickName'], group1[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');
			}
		}]
	});
	let b2 = L.easyButton({
		id: 'icon2',
		states: [{
			stateName: 'icon',
			icon: 'far fa-clock red',
			title: 'Отключение трекера более чем на 1 час.',
			onClick: () =>{
				let item = [];
				for (let k in group2) {
					if (typeof group2[k] === 'object') {
						item.push(
							[group2[k]['DeviceID'], group2[k]['NickName'], group2[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');
			}
		}]
	});
	let b3 = L.easyButton({
		id: 'icon3',
		states: [{
			stateName: 'icon',
			icon: 'far fa-clock green',
			title: 'Нахождение трекера в одной точке более часа.',
			onClick: () =>{
				let item = [];
				for (let k in group3) {
					if (typeof group3[k] === 'object') {
						item.push(
							[group3[k]['DeviceID'], group3[k]['NickName'], group3[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');
			}
		}]
	});
	let b4 = L.easyButton({
		id: 'icon4',
		states: [{
			stateName: 'icon',
			icon: '<img src="./images/star.svg">',
			title: 'Совпадение траектории передвижения нескольких находящихся на связи трекеров в течение часа и более.',
			onClick: () =>{
				let item = [];
				for (let k in group4) {
					if (typeof group4[k] === 'object') {
						item.push(
							[group4[k]['DeviceID'], group4[k]['NickName'], group4[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');
			}
		}]
	});
	let b5 = L.easyButton({
		id: 'icon5',
		states: [{
			stateName: 'icon',
			icon: '<img src="./images/satellite.svg">',
			title: 'Потеря GPS-сигнала.',
			onClick: () =>{
				/*let item = [];
				for (let k in group5) {
					if (typeof group5[k] === 'object') {
						item.push(
							[group5[k]['DeviceID'], group5[k]['NickName'], group5[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');*/
			}
		}]
	});
	let b6 = L.easyButton({
		id: 'icon6',
		states: [{
			stateName: 'icon',
			icon: 'fas fa-battery-empty',
			title: 'Низкое питание трекера.',
			onClick: ()=> {
				/*let item = [];
				for (let k in group6) {
					if (typeof group6[k] === 'object') {
						item.push(
							[group6[k]['DeviceID'], group6[k]['NickName'], group6[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');*/
			}
		}]
	});
	let b7 = L.easyButton({
		id: 'icon7',
		states: [{
			stateName: 'icon',
			icon: 'fas fa-exclamation red size',
			title: 'Поступление тревожного вызова.',
			onClick: ()=> {
				let item = [];
				for (let k in group7) {
					if (typeof group7[k] === 'object') {
						item.push(
							[group7[k]['DeviceID'], group7[k]['NickName'], group7[k]['SliceTimeUnit']]
						);
					}
				}
				$('#list').DataTable({
					"bAutoWidth": false,
					"sScrollY": "500px",
					"bPaginate": false,
					destroy: true,
					bLengthChange: false,
					searching: false,
					ordering: false,
					data: item,
					"aoColumns" : [
						{ sWidth: '108px', title: "№:" },
						{ sWidth: '218px', title: "Номер устройства:" },
						{ sWidth: '260px', title: "Время:" },
					],
				});
				$('#trackerList').modal('show');
			}
		}]
	});
	let buttons = [b1, b2, b3, b4, b5, b6, b7];
	Update(b1, b2, b3, b4, b5, b6, b7);
	// L.easyBar(buttons, {
	// 	position: 'bottomleft'
	// }).addTo(map_M);
	L.easyButton({
		id: 'funBtnM',
		states: [{
			stateName: 'funBtnM',
			icon: 'far fa-play-circle',
			onClick: () =>{
				$('#easyButtonM').modal({
					backdrop: false,
					show: true,
					keyboard: false
				});
			}
		}],
		position: 'topright'
	}).addTo(map_M);
	L.easyButton({
		id: 'clean',
		states: [{
			stateName: 'clean',
			icon: 'fas fa-eraser',
			onClick: () => {
				$('#clean').css('display', 'none');
				crcl.clearLayers();
				$( "#dp1, #dp2" ).datepicker( "destroy" );
			}
		}],
		position: 'topright'
	}).addTo(map_M);
	$('#funBtnM').one('click', () =>{
		if ($(window).width() <= 575) {
			$('#mechfunc-list-tab').removeClass('active');
			$('.icon_system').addClass('active');
		}
		let textLM = [
			{tooltip: 'Погрузчики', value: 17},
			{tooltip: 'Самосвалы и МСК', value: 18},
			{tooltip: 'Мусоровозы', value: 19},
			{tooltip: 'Распределители твердых реагентов', value: 20},
			{tooltip: 'Распределители твердых реагентов с увлажнением', value: 21},
			{tooltip: 'Поливомоечное оборудование', value: 22},
			{tooltip: 'Подметально-уборочное оборудование (механическое)', value: 23},
			{tooltip: 'Вакуумное оборудование', value: 24},
			{tooltip: 'Щеточное оборудование (на автомобильном шасси)', value: 25},
			{tooltip: 'Плужное оборудование (на автомобильном шасси)', value: 26},
			{tooltip: 'Бульдозеры', value: 27},
			{tooltip: 'Распределители жидких реагентов', value: 28},
			{tooltip: 'Тягач (для уборочной техники)', value: 29},
			{tooltip: 'Контроль', value: 30},
			{tooltip: 'Ручная уборка', value: 31},
		];
		let listArrMechfunc = ['b1m', 'b2m', 'b3m', 'b4m', 'b5m', 'b6m', 'b7m', 'b8m', 'b9m', 'b10m', 'b11m', 'b12m', 'b13m', 'b14m', 'b15m'];
		let mechfuncList = $('div.mechfuncList');
		$.each(listArrMechfunc, (i)=> {
			let aList = document.createElement('a');
			setAttr(aList, {
				"id": "list-" + listArrMechfunc[i],
				"class": "list-group-item list-group-itemM list-group-item-action",
				"value": textLM[i].value,
				"data-toggle": "list",
				"href": "#list-" + listArrMechfunc[i],
				"role": "tab",
				"aria-controls": listArrMechfunc[i]
			});
			$(aList).text(textLM[i].tooltip);
			mechfuncList.append(aList);
		});
	});
	$(".noM").on('click', () =>{
		$('#easyButtonM').modal('hide');
	});
	$(".cleanM").on('click', () =>{
		Cookies.remove('value');
		let listItem = $('.list-group-itemM');
		if(listItem.hasClass('active')){
			listItem.removeClass('active');
		}
		$this.selectValue = -1;
		let layers = $this.layers;
		for (let k in layers) {
			map_M.removeLayer(layers[k]);
		}
	});
	$(document).on('click', '.list-group-itemM', (e)=> {
		$this.selectValue = e.target.attributes[2].value;
	});
	$('.yesM').on({
		click: () =>{
			if(!($this.selectValue === -1)){
				Cookies.set('value', $this.selectValue, {expires: 1});
				$('#easyButtonM').modal('hide');
				Polygon();
			}
		}
	});
}