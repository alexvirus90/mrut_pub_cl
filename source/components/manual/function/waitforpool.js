import '../../libs/MovingMarker';
import AddMarker from './addMarker';
import {url, dataInfo, $this, jobArrP} from '../../function/variable';
import {popup} from './popup'
import GetTemplatePopup from './getTempPopup'

export default function waitforpool(id) {

	let receive = url + 'receive&connection=' + id;
	$.post(receive)
		.done((e)=> {
			try {
				let data = JSON.parse(e);
				if($.isPlainObject(data)){
					let obj = data.root;
					for(let k in obj){
						if(typeof obj[k] !== 'object' ) continue;
						if(obj[k].header.type === 33) continue;
						if(obj[k].header.type === 34) continue;
						if(obj[k].header.type === 0){
							let item = dataInfo.get(obj[k].header.id);

							try{
								item.LAT = (obj[k].lat === 0)?item.LAT:obj[k].lat;
								item.LNG = (obj[k].lon === 0)?item.LNG:obj[k].lon;
								item.time = obj[k].time;
								item.dab_level = obj[k].dab_level;
								item.speed = obj[k].speed;}
							catch (e){}
							if (!item.marker) {
								AddMarker(item);
							}	else {
								/*for(let k in jobArrP){
									// console.log('d', jobArrP[k]);
									let obj1 = {};
									let popup = "";
									let speed = (item.speed === null) ? 0 : item.speed;

									if(item.NAME === jobArrP[k].NickName) {

										obj1 = {
											NAME: item.NAME,
											speed: speed,
											akName: item.akName,
											KBDH_EmployeeName: jobArrP[k].KBDH_EmployeeName,
											Name: jobArrP[k].Name/!*+ ' № '+ jobArrP[k].ID + ' (' + jobArrP[k].Name_RM_RouteTaskHeader + ')'*!/,
											// func: ,
											time: item.time,
											VID: item.VID,
											dab_level: item.dab_level
										};
										popup = GetTemplatePopup(obj1);
										item.marker._popup.setContent(popup);
									}	else {

										obj1 = {
											NAME: item.NAME,
											speed: speed,
											akName: item.akName,
											KBDH_EmployeeName:'-',
											Name:'-',
											// func: ,
											time: item.time,
											VID: item.VID,
											dab_level: item.dab_level
										};
										popup = GetTemplatePopup(obj1);
										item.marker._popup.setContent(popup);
									}
								}*/
								item.marker.setLatLng([obj[k].lat, obj[k].lon]).update();
							}
							dataInfo.update(item);
						}
					}
				}
			}
			catch (e){}
			setTimeout(waitforpool(id), 500);
		});

}