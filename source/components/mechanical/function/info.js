'use strict';
import 'leaflet-extra-markers'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import {dataInfoM, $this, carsArray, global} from '../../function/variable';
import waitforpoolM from './waitforpoolM'


export default function Info() {
	$.ajax({
		url: "info.json",
		dataType: 'json'
	})
		.done((data) => {
			dataInfoM.add(data.result);
			for (let k in dataInfoM._data) {
				if (typeof dataInfoM._data[k] === 'object') {
					global.data[dataInfoM._data[k]['did']] = dataInfoM._data[k];
					carsArray.push(dataInfoM._data[k]);
				}
			}
			waitforpoolM();
		})
		.fail((jqXHR, textStatus, errorThrown) => {
			// modEr(jqXHR, textStatus, errorThrown);
		});
}

export {carsArray, dataInfoM, global};
