'use strict';

// import 'leaflet.locatecontrol';
import 'leaflet.fullscreen';
import easyButton from '../easyButton/easyButton'
import legend from './legend';
import {mrkOn, mrkOff, mrkA} from '../../function/variable';

let map, spbCntr;

export default function drawMap() {

	let cloudUrl = 'https://{s}.tile.cloudmad.com/8ee2a50541944fb9bcedded5165f09d9/{styleId}/256/{z}/{x}/{y}.png';
	let day 		 = new L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		detectRetina: true,
		minZoom: 9
	});
	let night = new L.TileLayer(cloudUrl, {styleId: 999});
	spbCntr 	= new L.LatLng(59.930967, 30.302636);
	map 	 		= new L.Map('map_canvas', { center: spbCntr, zoom: 10, layers: [day, mrkOn]});
	map.setMaxBounds([[59.430967, 29.302636], [60.430967, 31.302636]]);
	L.control.fullscreen({ position: 'topleft'}).addTo(map);			//fullscreen button
	// let lc 		 = L.control.locate().addTo(map);
	legend();

	let baseMaps = {
		"Карта СПб": day,
		// "Карта СПб(ночь)": night
	};
	let overlayMaps = {
		"Ручная уборка": mrkOn,
		"Ручная уборка (не на связи)": mrkOff,
		"Механизированная уборка": mrkA,
		// "Трекера": markerTrakers
	};
	let layersControl = new L.Control.Layers(baseMaps, overlayMaps);
	map.addControl(layersControl);

	easyButton();
	// zoom();
	// move();
	// legendslide();
}
export {map};
