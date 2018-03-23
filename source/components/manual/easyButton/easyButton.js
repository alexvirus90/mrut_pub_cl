'use strict';

import '../../libs/easybutton/easy-button'
import '../../libs/easybutton/easy-button.css'
import './easyButton.sass'
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'
import {$this, Cookies} from '../../function/variable.js';
import setAttr from '../../function/add.js';
import {crcl} from '../tracker/tracker'
import Polygon from "../polygon/polygon";
import {map} from '../function/drawMap';
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
	// }).addTo(map);
	L.easyButton({
		id: 'funBtn',
		states: [{
			stateName: 'funBtn',
			icon: 'far fa-play-circle',
			onClick: () =>{
				$('#easyButton').modal({
					backdrop: false,
					show: true,
					keyboard: false
				});
			}
		}],
		position: 'topright'
	}).addTo(map);
	let cln = L.easyButton({
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
	}).addTo(map);
	$('#funBtn').one('click', () =>{
		if ($(window).width() <= 575) {
			$('#summer-list-tab').removeClass('active');
			$('.icon_system').addClass('active');
		}
		let textL = [
			{tooltip: 'Подметание территорий 1 класса с усовершенствованным покрытием', value: 27},
			{tooltip: 'Подметание территорий 1 класса с неусовершенствованным покрытием', value: 28},
			{tooltip: 'Мойка территории 1 класса с усовершенствованным покрытием', value: 29},
			{tooltip: 'Очистка газонов от опавших листьев', value: 30},
			{tooltip: 'Погрузка и разгрузка веток, листьев, мусора от прополки', value: 31},
			{tooltip: 'Кошение газонов', value: 32},
			{tooltip: 'Механическая уборка комбинированными машинами', value: 33},
			{tooltip: 'Поливка территории 1 класса', value: 34}
		];
		let listArrSummer = ['b1s', 'b2s', 'b3s', 'b4s', 'b5s', 'b6s', 'b7s', 'b8s'];
		let summerList = $('div.summerList');
		$.each(listArrSummer, (i)=> {
			let aList = document.createElement('a');
			setAttr(aList, {
				"id": "list-" + listArrSummer[i],
				"class": "list-group-item-value list-group-item-action",
				"value": textL[i].value,
				"data-toggle": "list",
				"href": "#list-" + listArrSummer[i],
				"role": "tab",
				"aria-controls": listArrSummer[i]
			});
			$(aList).text(textL[i].tooltip);
			summerList.append(aList);
		});
	});
	$('.winter').one({
		click: () =>{
			let textL = [
				{tooltip: 'Вывоз снега ВС', value: 26},
				{tooltip: 'Механизированная уборка комбинированными машинами МУКМ', value: 25},
				{tooltip: 'Посыпка пескосоляной смесью ППС', value: 24},
				{tooltip: 'Зимняя уборка газонов от мусора ЗУГМ', value: 23},
				{tooltip: 'Очистка от мусора урн железобетонных с вкладышем и без вкладыша ОМУ', value: 22},
				{tooltip: 'Очистка территории 1 класса с усовершенствованным покрытием ОТ-У', value: 21},
				{tooltip: 'СС по территории 1 класса с неусовершенствованным покрытием СС-Н', value: 20},
				{
					tooltip: 'ПСС без предварительной обработки территории 1 класса с неусовершенствованным покрытием ПС-Н',
					value: 19
				},
				{tooltip: 'СС по территории 1 класса с усовершенствованным покрытием СС-У', value: 18},
				{
					tooltip: 'ПСС без предварительной обработки территории 1 класса с усовершенствованным покрытием ПС-У',
					value: 17
				}
			];
			let listArrWinter = ['b1w', 'b2w', 'b3w', 'b4w', 'b5w', 'b6w', 'b7w', 'b8w', 'b9w', 'b10w'];
			let winterList = $('div.winterList');
			$.each(listArrWinter, (i)=> {
				let aList = document.createElement('a');
				setAttr(aList, {
					"id": "list-" + listArrWinter[i],
					"class": "list-group-item-value list-group-item-action",
					"value": textL[i].value,
					"data-toggle": "list",
					"href": "#list-" + listArrWinter[i],
					"role": "tab",
					"aria-controls": listArrWinter[i]
				});
				$(aList).text(textL[i].tooltip);
				winterList.append(aList);
			});
		}
	});
	$('.summer, .winter').on({
		mousedown: (e)=> {
			let listItem = $('.list-group-item');
			if(listItem.hasClass('active')){
				listItem.removeClass('active');
			}
		}
	});
	$(".no").on('click', () =>{
		$('#easyButton').modal('hide');
	});
	$(".clean").on('click', () =>{
		Cookies.remove('value');
		let listItem = $('.list-group-item');
		if(listItem.hasClass('active')){
			listItem.removeClass('active');
		}
		$this.selectValue = -1;
		let layers = $this.layers;
		for (let k in layers) {
			map.removeLayer(layers[k]);
		}
		console.log('man', Cookies.get());

	});
	$(document).on('click', '.list-group-item-value', (e)=> {
		$this.selectValue = e.target.attributes[2].value;
	});
	$('.yes').on({
		click: () =>{
			if(!($this.selectValue === -1)){
				Cookies.set('value', $this.selectValue, {expires: 1});
				$('#easyButton').modal('hide');
				Polygon();
			}
			console.log('manyes', Cookies.get());

		}
	});
}