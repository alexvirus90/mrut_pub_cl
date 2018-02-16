'use strict';
import options from '../function/variable';
import {id_rm, polygon} from './polygon';

let job = new vis.DataSet(options);
let jobArrP = [];
let szp = "",
		szd = "";

export default function Job() {

	$.ajax({
		url: "http://admmrut.adc.spb.ru/srv/api.php?action=get_app_list",
		dataType: 'json'
	})
		.done((data1) => {
			let data = JSON.parse(data1);
			job.add(data);
			for (let k in job._data) {
				if (typeof job._data[k] === 'object') {
					let item = job._data[k];
					jobArrP.push(item);
					if (job._data[k]['Name_State'] !== 'Выполнено') {
						szp += '<div class="row"><div class="col-12 caption"><span class="name">Сменное задание № ' + item['ID'] + '</span><hr></div>' +
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
							'<div class="btn-group-wrap">' +
							'<div class="btn-group btn-group-sm" role="group">' +
							'<button type="button" class="btn btn-success" value="Подтвердить">Подтвердить</button>' +
							'<button type="button" class="btn btn-danger" value="Отклонить">Отклонить</button>' +
							'</div></div></div>';
						$('.job').html(szp);
					} else {
						szd += '<div class="row"><div class="col-12 caption"><span class="name">Сменное задание № ' + item['ID'] + '</span><hr></div>' +
							'<div class="col-5 col_1"><span>Дата начала С/З: </span></div>' +
							'<div class="col-7 col_2"><span class="date">' + item['DateCreate'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Маршрутное задание: </span></div>' +
							'<div class="col-7 col_2"><span class="area">' + item['Name_RM_RouteTaskHeader'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Сотрудник: </span></div>' +
							'<div class="col-7 col_2"><span class="man">' + item['KBDH_EmployeeName'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Номер устройства: </span></div>' +
							'<div class="col-7 col_2"><span class="no">' + item['NickName'] + '</span></div>' +
							'<div class="col-5 col_1"><span>Статус: </span></div>' +
							'<div class="col-7 col_2"><span class="status">' + item['Name_State'] + '</span></div></div>';
						$('#done').html(szd);
					}
					$(".btn-group-wrap button").on('click', function () {
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
						}
					});
					$(".yes").on('click', function () {

					});
					$(".no").on('click', function () {
						$('#window').modal('hide')
					});
				}
			}
		})
		.fail((jqXHR, textStatus, errorThrown) => {
			// modEr(jqXHR, textStatus, errorThrown);
		});
}

export {jobArrP}