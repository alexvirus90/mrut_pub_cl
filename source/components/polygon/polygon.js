'use strict';
import job from './job';

let latlngs = [{
	"type": "Feature",
	"properties": {
		id: 9163
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[30.353679, 60.013327], [30.359623, 60.009788], [30.364279, 60.011804], [30.358529, 60.015268], [30.353679, 60.013327]
			]
		]
	}
}, {
	"type": "Feature",
	"properties": {
		id: 9166
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[60.010970, 30.324669], [60.011091, 30.326744], [60.013120, 30.343318], [60.010656, 30.346966], [60.003929, 30.328871], [60.003846, 30.327516], [60.010970, 30.324669]
			]
		]
	}
}, {
	"type": "Feature",
	"properties": {
		id: 9169
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[
				[60.007782, 30.339989], [60.003792, 30.341491], [60.004779, 30.350074], [60.006474, 30.354623], [60.010571, 30.347199], [60.007782, 30.339989]
			]
		]
	}
}];
console.log('latlngs', latlngs);
let polygon = L.geoJSON(latlngs, {});
polygon.on({
	click: (e) => {
		if ($(".aside").hasClass("in")) {
			$('.aside').asidebar('close')
		} else {
			$('.aside').asidebar('open')
		}
	}
});
job();

export {polygon};