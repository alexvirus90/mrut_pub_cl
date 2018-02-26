'use strict';
import {Cookies, $this} from '../easyButton/easyButton'
import getColor from '../polygon/GetColorPull'
import {jobArrP} from "../polygon/job"
import {map} from "../function/drawMap"

let id_rm = [];

export default function Polygon() {
	let url = 'http://admmrut.adc.spb.ru/srv/api.php?action=getZoneFun&pid=' + Cookies.get('pid') + "&fid=" + Cookies.get('value');

	$.getJSON(url)
		.done((d) => {
			let style = {
				color: 'red',
				weight: 1,
				opacity: 0.7,
				fillColor: 'white',
				fillOpacity: 0.4
			};
			id_rm = [];
			let polygon = L.geoJSON(d, {style: style});
			$this.layers = polygon._layers;
			$this.polygon = polygon;
			for (let k in $this.layers) {
				let did = $this.layers[k].feature.properties.id;
				id_rm.push(did);
				$this.layers[k].on({
					mouseover: function (e) {
						let layer = e.target;
						layer.setStyle({
							weight: 5,
							color: '#666',
							dashArray: '',
							fillOpacity: 0.7
						});
						if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
							layer.bringToFront();
						}
					},
					mouseout: function (e) {
						let layer = e.target;
						layer.setStyle({
							weight: 1,
							color: 'red',
							dashArray: '',
							fillOpacity: 0.4
						});
					},
					click: function (e) {
						map.fitBounds(e.target.getBounds());
					}
				}, this);
				$this.layers[k].addTo(map); // Add it to the map
			}
			Cookies.set('color', id_rm.join(),{expires: 1});
			map.fitBounds(polygon.getBounds());
			getColor();
			/*polygon.on({
				click: (e) => {
					let poly = e.sourceTarget.feature.properties.name;
					let poly1 = e.sourceTarget.feature.properties.id;
					id_rm = jobArrP.filter((item) => {
						console.log('item', item);
						console.log(poly1, '|', poly);
						return item.Name_RM_RouteTaskHeader === 17832;
						console.log('poly', typeof poly);
						console.log('item', typeof item.Name_RM_RouteTaskHeader);
					});
					console.log('id_rm', id_rm);
				}
			});
			*/
		});
}
export {id_rm};