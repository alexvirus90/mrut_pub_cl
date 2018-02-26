import {map} from './drawMap';

export default function legend() {
	let lgnd 	 = L.control({position: 'bottomright'});		//the location of the legend
	lgnd.onAdd = () => {
		let div = L.DomUtil.create('div', 'info legend');
		let labels = [];
		labels.push('<div style="background: #007DFF; width: 15px; height: 15px; display: inline-block"></div> C/З Назначено');
		labels.push('<div style="background: #2E8B57; width: 15px; height: 15px; display: inline-block"></div> C/З Подтверждено');
		labels.push('<div style="background: #CDA434; width: 15px; height: 15px; display: inline-block"></div> C/З Завершено');
		labels.push('<div style="background: #FFD800; width: 15px; height: 15px; display: inline-block"></div> C/З Выполняется');
		labels.push('<div style="background: #FF0000; width: 15px; height: 15px; display: inline-block"></div> C/З Не выполняется');
		labels.push('<div style="background: #54FF9F; width: 15px; height: 15px; display: inline-block"></div> C/З Не подтверждено');
		labels.push('<div style="background: #ffffff; width: 15px; height: 15px; display: inline-block"></div> C/З Не назначено');
		div.innerHTML = labels.join('<br>');
		return div;
	};
	lgnd.addTo(map);
}