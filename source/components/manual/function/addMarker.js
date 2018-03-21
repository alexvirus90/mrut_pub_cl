'use strict';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import Popup, {popup} from './popup'
import {mrkOn, mrkOff, mrkA, dataInfo, jobArrP} from '../../function/variable'
import GetTemplatePopup from './getTempPopup'

export default function AddMarker(obj) {

	Popup(obj);
	let _ExtraMarkers = "";
	let time = moment(obj.time).diff(moment(), 'minutes');
	let greenMarker = L.ExtraMarkers.icon({
		icon: 'fa-male',
		markerColor: 'green',
		shape: 'square',
		prefix: 'fa'
	});
	let greyMarker = L.ExtraMarkers.icon({
		icon: 'fa-male',
		markerColor: 'black',
		shape: 'square',
		prefix: 'fa'
	});
	let tractor = L.ExtraMarkers.icon({
		innerHTML: '<img src="./images/tractor.svg">',
		markerColor: 'green',
		shape: 'square',
	});
	/*for (let k in jobArrP) {

		// console.log('d', jobArrP[k]);
		let obj1 = {};
		let popup = "";
		let speed = (obj.speed === null) ? 0 : obj.speed;
		if (obj.NAME === jobArrP[k].NickName) {
			obj1 = {
				NAME: obj.NAME,
				speed: speed,
				akName: obj.akName,
				KBDH_EmployeeName: jobArrP[k].KBDH_EmployeeName,
				Name: jobArrP[k].Name/!*+ ' № '+ jobArrP[k].ID + ' (' + jobArrP[k].Name_RM_RouteTaskHeader + ')'*!/,
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
				KBDH_EmployeeName:'-',
				Name:'-',
				time: obj.time,
				VID: obj.VID,
				dab_level: '-'
			};
			popup = GetTemplatePopup(obj1);
		}
		if (obj.NAME.includes("БМ")) {
			_ExtraMarkers = L.marker([obj.LAT, obj.LNG], {icon: tractor}).bindPopup(popup, {
				className: 'obj-info selectable mobile-obj-info extended', minWidth: 264
			});
			mrkA.addLayer(_ExtraMarkers);
		}
		if (time >= -15) {
			_ExtraMarkers = L.marker([obj.LAT, obj.LNG], {icon: greenMarker}).bindPopup(popup, {
				className: 'obj-info' +
				' selectable mobile-obj-info extended', minWidth: 264
			});
			mrkOn.addLayer(_ExtraMarkers);
			if (obj.NAME === 'ТР9877') console.log('1', popup);
		} else {
			_ExtraMarkers = L.marker([obj.LAT, obj.LNG], {icon: greyMarker}).bindPopup(popup, {
				className: 'obj-info' +
				' selectable mobile-obj-info extended', minWidth: 264
			});
			mrkOff.addLayer(_ExtraMarkers);
		}
	}*/
	if (obj.NAME.includes("БМ")) {
		_ExtraMarkers = L.marker([obj.LAT, obj.LNG], {icon: tractor}).bindPopup(popup, {
			className: 'obj-info selectable mobile-obj-info extended', minWidth: 264
		});
		mrkA.addLayer(_ExtraMarkers);
	}

	if(time >= -15) {
		_ExtraMarkers = L.marker([obj.LAT,obj.LNG], {icon: greenMarker}).bindPopup(popup, { className: 'obj-info' +
		' selectable mobile-obj-info extended', minWidth: 264});
		mrkOn.addLayer(_ExtraMarkers);
	} else {
		_ExtraMarkers = L.marker([obj.LAT,obj.LNG], {icon: greyMarker}).bindPopup(popup, { className: 'obj-info' +
		' selectable mobile-obj-info extended', minWidth: 264});
		mrkOff.addLayer(_ExtraMarkers);
	}
	obj.marker = _ExtraMarkers;
	dataInfo.update(obj);
}