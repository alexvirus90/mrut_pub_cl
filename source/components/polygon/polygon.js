'use strict';

let id_rm = [];
let polygon;

// let url = 'http://admmrut.adc.spb.ru/srv/api.php?action=getZoneFun&pid=' + Cookies.get('pid') + '&fi
// let url = 'http://admmrut.adc.spb.ru/srv/api.php?action=getZoneFun&pid=1&fid=17';
	let url1 = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								30.27591288,
								59.96343204
							],
							[
								30.275739,
								59.963391
							],
							[
								30.27523608,
								59.963139
							],
							[
								30.27521304,
								59.96309004
							],
							[
								30.27509496,
								59.96303397
							],
							[
								30.27506004,
								59.96305296
							],
							[
								30.27441204,
								59.96275299
							],
							[
								30.27463992,
								59.96254797
							],
							[
								30.27506184,
								59.96261196
							],
							[
								30.27633912,
								59.96315097
							],
							[
								30.27591288,
								59.96343204
							]
						]
					]
				},
				"properties": {
					"id": 54349,
					"name": "МЗ по МК 3190А ПС-У"
				}
			}
		]
	};
// $.getJSON( url, {dataType: "json"})
// 	.done((d)=>{
// 		polygon = L.geoJSON( d, {});
// 		console.log('polygon',polygon );
// 		/*polygon.on({
// 			click: (e) => {
// 				let poly = e.sourceTarget.feature.properties.id;
// 				id_rm = jobArrP.filter(function (item) {
// 					return item.ID_RM_RouteTaskHeader === poly;
// 				});
// 				if ($(".aside").hasClass("in")) {
// 					$('.aside').asidebar('close')
// 				} else {
// 					$('.aside').asidebar('open')
// 				}
//
// 			}
// 		});*/
// 	});
	 polygon = L.geoJSON(url1, {});
	console.log('polygon', polygon);

	/*polygon.on({
		click: (e) => {
			let poly = e.sourceTarget.feature.properties.id;
			id_rm = jobArrP.filter(function (item) {
				return item.ID_RM_RouteTaskHeader === poly;
			});
			if ($(".aside").hasClass("in")) {
				$('.aside').asidebar('close')
			} else {
				$('.aside').asidebar('open')
			}

		}
	});*/
export {polygon, id_rm};
