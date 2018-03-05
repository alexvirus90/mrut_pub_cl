'use strict';
import {job, api, $this, Cookies, jobArrP} from '../function/variable';

let szp = "",
		szd = "";
let $confirm_request, $decline_request;

export default function Job() {
	let url = api + "get_app_list&pid=" + Cookies.get('pid');
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
							'<div class="col-7 col_2"><span class="status">' + item['Name_State'] + '</span></div>' +'<div class="btn-group-wrap">' +
							'<div class="btn-group btn-group-sm" role="group">' +
							'<button type="button" class="btn btn-success confirm" value=' + job._data[k].ID + '>Подтвердить</button>' +
							'</div></div></div>';
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
						'<button type="button" class="btn btn-danger decline" value=' + job._data[k].ID + '>Отклонить</button>' +
							'</div></div></div>';
					}
				}
			}
			$('#performed').html(szp);
			$('#done').html(szd);
		})
		.fail((jqXHR, textStatus, errorThrown) => {
			// modEr(jqXHR, textStatus, errorThrown);
		});
}
setInterval(()=>{
	job.clear();
	Job();
}, 2000);
$(document).on('click', '.confirm', function (e) {
	e.preventDefault();
	job.clear();

	let url = api + 'confirm&pid=' + Cookies.get('pid') + "&sid=" + e.target.value + "&st=2";
	$confirm_request = $.ajax(url);
	$(".performed").remove();
	$(".done").remove();
	Job();
});
$(document).on('click', '.decline', function (e) {
	e.preventDefault();
	job.clear();

	let url = api + 'confirm&pid=' + Cookies.get('pid') + "&sid=" + e.target.value + "&st=3";
	$decline_request = $.ajax(url);

	$(".performed").remove();
	$(".done").remove();
	Job();
});