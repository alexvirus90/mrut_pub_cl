'use strict';
import 'leaflet-extra-markers'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import Connect from './connect';
import options from './variable';
import AddMarker from './addMarker';
import {Cookies, $this} from '../easyButton/easyButton'
import {map} from "../function/drawMap"

let dataInf = new vis.DataSet(options);

export default function Info() {

	let url = 'http://admmrut.adc.spb.ru/srv/api.php?action=getinfo&pid=' + Cookies.get('pid');
	$.get(url)
		.done((data1) => {
			let data = JSON.parse(data1);
			dataInf.clear();
			try {
				dataInf.add(data);}
			catch (e){}
			dataInf.forEach((obj,gid)=>{
				if(obj.time !== null){
					AddMarker(obj);
				}
			});
			Connect();
		})
		.fail((jqXHR, textStatus, errorThrown) => {
			// modEr(jqXHR, textStatus, errorThrown);
		});
}
export {dataInf};
