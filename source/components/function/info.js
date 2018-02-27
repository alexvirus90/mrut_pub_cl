'use strict';
import 'leaflet-extra-markers'
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import Connect from './connect';
import {dataInfo, api, Cookies, $this} from './variable';
import AddMarker from './addMarker';

export default function Info() {

	let url = api + 'getinfo&pid=' + Cookies.get('pid');
	$.get(url)
		.done((data1) => {
			let data = JSON.parse(data1);
			dataInfo.clear();
			try {
				dataInfo.add(data);}
			catch (e){}
			dataInfo.forEach((obj,gid)=>{
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
