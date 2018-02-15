'use strict';

export default function szp() {
	let szp = "";
	szp += '<div class="row"><div class="col-12 caption"><span class="name">Сменное задание № ' + item['ID'] + '</span><hr></div>' +
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
		'<button type="button" class="btn btn-secondary btn-success" value="Подтвердить">Подтвердить</button>' +
		'<button type="button" class="btn btn-secondary btn-danger" value="Откланить">Откланить</button>' +
		// '<button type="button" class="btn btn-secondary" value="3">Right</button>' +
		'</div></div></div>';
}