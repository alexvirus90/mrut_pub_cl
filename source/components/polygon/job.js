'use strict';
import options from '../function/variable';
import {Cookies} from '../auth/auth';
import {$this} from '../easyButton/easyButton'

let job = new vis.DataSet(options);
let jobArrP = [];
let szp = "",
		szd = "";
export default function Job() {
	let url = "http://admmrut.adc.spb.ru/srv/api.php?action=get_app_list&pid=" + Cookies.get('pid');
	$.ajax({
		url: url,
		dataType: 'json'
	})
		.done((data1) => {
			let data = JSON.parse(data1);
			job.add(data);
			$this.job = job;
			szp = '';
			szd = '';
			for (let k in job._data) {
				if (typeof job._data[k] === 'object') {
					let item = job._data[k];
					jobArrP.push(item);
					if (job._data[k]['ID_State'] !== 2) { //'Подтверждено'
						szp += '<div class="row performed"><div class="col-12 caption"><span class="name">Сменное задание № ' + item['ID'] + '</span><hr></div>' +
							'<div class="col-5 col_1"><span>Дата начала С/З: </span></div>' +
							'<div class="col-7 col_2"><span class="date">' + item['DateCreate'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Маршрутное задание: </span></div>' +
							'<div class="col-7 col_2"><span class="area">' + item['Name_RM_RouteTaskHeader'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Сотрудник: </span></div>' +
							'<div class="col-7 col_2"><span class="man">' + ((item['KBDH_EmployeeName'] === null) ? '' : item['KBDH_EmployeeName'] ) + '</span></div>' +
							'<div class="col-5 col_1"><span>Номер устройства: </span></div>' +
							'<div class="col-7 col_2"><span class="no">' + ((item['NickName'] === null) ? '' : item['NickName']) + '</span></div>' +
							'<div class="col-5 col_1"><span>Статус: </span></div>' +
							'<div class="col-7 col_2"><span class="status">' + item['Name_State'] + '</span></div>' +
							'</div>';
					} else {
						szd += '<div class="row done"><div class="col-12 caption"><span class="name">Сменное задание № ' + item['ID'] + '</span><hr></div>' +
							'<div class="col-5 col_1"><span>Дата начала С/З: </span></div>' +
							'<div class="col-7 col_2"><span class="date">' + item['DateCreate'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Маршрутное задание: </span></div>' +
							'<div class="col-7 col_2"><span class="area">' + item['Name_RM_RouteTaskHeader'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Сотрудник: </span></div>' +
							'<div class="col-7 col_2"><span class="man">' + item['KBDH_EmployeeName'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Номер устройства: </span></div>' +
							'<div class="col-7 col_2"><span class="no">' + item['NickName'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Статус: </span></div>' +
							'<div class="col-7 col_2"><span class="status">' + item['Name_State'] + '</span></div>' +
							'<div class="btn-group-wrap">' +
							'<div class="btn-group btn-group-sm" role="group">' +
							// '<button type="button" class="btn btn-success" value="Подтвердить">Подтвердить</button>' +
							'<button type="button" class="btn btn-danger" value=' + job._data[k].ID + '>Отклонить</button>' +
							'</div></div></div>';
					}
				}
			}
			$(document).on('click', '.btn-danger', function (e) {
				let url = 'http://admmrut.adc.spb.ru/srv/api.php?action=confirm&pid=' + Cookies.get('pid') + "&sid=" + e.target.value + "&st=3";
				$.get(url)
					.done((d)=>{});
				$(".performed").remove();
				$(".done").remove();
				job.clear();
				Job();
			});
			/*
				let v = $(this).val();
				switch (v) {
				case 'Подтвердить':
					$('.text').html('Вы уверены, что хотите <b>Подтвердить</b>?');
					$('#window').modal({
						backdrop: false,
						show: true,
						keyboard: false
					});
					break;
				case 'Отклонить':
					$('.text').html('Вы уверены, что хотите <b>Отклонить</b>?');
					$('#window').modal({
						backdrop: false,
						show: true,
						keyboard: false
					});
					break;
			$(".no").on('click', () => {
				$('#window').modal('hide')
			});*/
			$('#performed').html(szp);
			$('#done').html(szd);
		})
		.fail((jqXHR, textStatus, errorThrown) => {
			// modEr(jqXHR, textStatus, errorThrown);
		});
}
export {jobArrP, job}