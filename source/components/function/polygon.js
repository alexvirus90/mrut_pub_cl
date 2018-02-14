import {map} from './drawMap';
import options from './variable';

let job = new vis.DataSet(options);
let jobArrP = [];
let szp = "",
		szd = "";

let latlngs = [{
	"type": "Feature",
	"properties": {
		id: 9163
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[30.353679,60.013327],[30.359623,60.009788],[30.364279,60.011804],[30.358529,60.015268],[30.353679,60.013327]
			]
		]
	}
},{
	"type": "Feature",
	"properties": {
		id: 9166
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[60.010970, 30.324669],[60.011091, 30.326744],[60.013120, 30.343318],[60.010656, 30.346966],[60.003929, 30.328871],[60.003846, 30.327516],[60.010970, 30.324669]
			]
		]
	}
},{
	"type": "Feature",
	"properties": {
		id: 9169
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[60.007782, 30.339989],[60.003792, 30.341491],[60.004779, 30.350074],[60.006474, 30.354623],[60.010571, 30.347199],[60.007782, 30.339989]
			]
		]
	}
}];
let polygon = L.geoJSON(latlngs, {

});

polygon.on({
	click: (e) => {
		if ($(".aside").hasClass("in")) {
			$('.aside').asidebar('close')
		} else {
			$('.aside').asidebar('open')
		}
	}
});

$.ajax({
	url: "job.json",
	dataType: 'json'
})
.done((data) => {
	job.add(data.row);
	for (let k in job._data) {
		if (typeof job._data[k] === 'object') {
			let item = job._data[k];
			jobArrP.push(item);
			if(job._data[k]['Name_State'] !== 'Выполнено') {
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
					'<div class="col-7 col_2"><span class="status">' + item['Name_State'] + '</span></div></div>';
				$('.job').html(szp);
			} else {
				szd += '<div class="row"><div class="col-12 caption"><span class="name">Сменное задание № '+ item['ID'] + '</span><hr></div>' +
					'<div class="col-5 col_1"><span>Дата начала С/З: </span></div>' +
					'<div class="col-7 col_2"><span class="date">' + item['DateCreate'] + '</span></div>' +
					'<div class="col-5 col_1"><span>Маршрутное задание: </span></div>' +
					'<div class="col-7 col_2"><span class="area">' + item['Name_RM_RouteTaskHeader'] + '</span></div>' +
					'<div class="col-5 col_1"><span>Сотрудник: </span></div>' +
					'<div class="col-7 col_2"><span class="man">' + item['KBDH_EmployeeName'] + '</span></div>' +
					'<div class="col-5 col_1"><span>Номер устройства: </span></div>' +
					'<div class="col-7 col_2"><span class="no">' + item['NickName'] + '</span></div>' +
					'<div class="col-5 col_1"><span>Статус: </span></div>' +
					'<div class="col-7 col_2"><span class="status">'+ item['Name_State'] +'</span></div></div>';

				$('#done').html(szd);
			}
			$(".caption span").on('click', function () {
				for(let k in latlngs){
					if (typeof latlngs[k] === 'object') {
						let poly = latlngs[k];
					}
				}
			});
		}
	}
})
.fail((jqXHR, textStatus, errorThrown) => {
	// modEr(jqXHR, textStatus, errorThrown);
});

export {polygon, jobArrP};