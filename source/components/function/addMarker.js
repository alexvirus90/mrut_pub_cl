'use strict';

import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import Popup, {popup} from './popup'
import {mrkOn, mrkOff, mrkA, dataInfo} from './variable'


export default function AddMarker(obj) {
	Popup(obj);
	let _ExtraMarkers = "";
	let time = moment(obj.time).diff(moment(),'minutes');

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

export {mrkOn, mrkOff, mrkA};