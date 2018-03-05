'use strict';

import '../sass/popup.css'
import Date from "../tracker/tracker"
import {map} from "../function/drawMap"
import {jobArrP, api, $this, Cookies, dataInfo} from "../function/variable"
import GetTemplatePopup from './getTempPopup'

let popup = "";

export default function Popup(obj){
	let jobWebInfo = api + "RM_JobWebInfo_Get&pid=" + Cookies.get('pid') + '&vid=' + obj.VID;
	let employeeWebInfo = api + "GetEmployeeWebInfo&pid=" + Cookies.get('pid') + '&vid=' + obj.VID;

	$.ajax(employeeWebInfo)
		.done((e)=>{
			console.log('employeeWebInfo', eval(e));
		});

	$.ajax(jobWebInfo)
		.done((e)=>{
			console.log('jobWebInfo', e);
		});

	$(document).on('click', '.hint', (e)=> {
		map.closePopup();
	});
	for(let k in jobArrP) {
		if (typeof jobArrP[k] === 'object') {
			let obj1 = {};
			// console.log('obj', obj);
			// if (obj.NAME === "ТР9887") console.log(obj, '|', jobArrP[k]);
			let speed = (obj.speed === null) ? 0 : obj.speed;
			if (obj.NAME === jobArrP[k].NickName /*&& jobArrP[k].Name !== ''*/) {
				obj1 = {
					NAME: obj.NAME,
					speed: speed,
					akName: obj.akName,
					KBDH_EmployeeName: jobArrP[k].KBDH_EmployeeName,
					Name: jobArrP[k].Name/*+ ' № '+ jobArrP[k].ID + ' (' + jobArrP[k].Name_RM_RouteTaskHeader + ')'*/,
					// func: ,
					time: obj.time,
					VID: obj.VID,
					dab_level: '-'
				};
				popup = GetTemplatePopup(obj1);
			} else {
				obj1 = {
					NAME: obj.NAME,
					speed: speed,
					akName: obj.akName,
					KBDH_EmployeeName: '-',
					Name: '-',
					// func: ,
					time: obj.time,
					VID: obj.VID,
					dab_level: '-'
				};
				popup = GetTemplatePopup(obj1);
			}
		}
	}
}
$(document).on('click', '.route-from', (e)=> {
	$('#tracker').modal({
		keyboard: false,
		show: true,
		backdrop: 'static',
	});
	Date(e.target.attributes[2].value);
});
export {popup}