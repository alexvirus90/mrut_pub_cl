'use strict';

import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-ru';
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min';
import './tracker.sass'
import {api, crcl, Cookies} from '../function/variable';
import {map} from "../function/drawMap"
import rsM from '../function/resize'

let pointList = [];

export default function Date(vid) {
	console.log('vid', vid);

	try{
		crcl.clearLayers();}
	catch (e){}

	$(() => {
		$("#dp1, #dp2").datepicker();
		$('#tp1, #tp2').datetimepicker({
			format: 'LT',
			locale: 'ru'
		});
	});
	$(document).on('click', '.create', ()=> {

		$( "#dp1, #dp2" ).datepicker( "destroy" );
		$( "#tp1, #tp2" ).datetimepicker( "destroy" );
		pointList = [];

		try{
			crcl.clearLayers();}
		catch (e){}

		let dp1 = $('#dp1').val();
		let tp1 = $('#tp1').data().date;
		let dp2 = $('#dp2').val();
		let tp2 = $('#tp2').data().date;

		let ar = dp1.split('.');
		let ar2 = dp2.split('.');

		let df = ar[2] +"-"+ar[1]+"-"+ar[0] + ' ' +tp1 + ":00";
		let dt = ar2[2] +"-"+ar2[1]+"-"+ar2[0] + ' ' +tp2 + ":00";

		let url = api + "gettrack&pid=" + Cookies.get('pid') + '&vid=' + vid + '&df=' + df + '&dt=' + dt;
		$('#loading').modal({
			keyboard: false,
			show: true,
			backdrop: 'static',
		});
		$.get(url)
			.done((e)=>{
				let data = JSON.parse(e);
				for(let k in data){
					let popup =
						"<div class='popup'>" +
						"<div class='action'>" +
						"<span> Дата начала: " + data[k].TimeUnit + "<br>" +
						"<span> Дата окончания: " + data[k].TimeUnitEnd +
						"</div>" +
						"</div>";
					if ((parseInt(data[k].UnionOfPoints) > 1) || (parseInt(data[k].dif) > 5)) {
						let latlng = L.latLng(data[k].Lat, data[k].Lon);
						let crcl1 = L.circle(latlng, 20)
							.bindPopup(popup);
						crcl.addLayer(crcl1);
					}
					if (parseInt(data[k].UnionOfPoints) == 1) {
						let latlng = L.latLng(data[k].Lat, data[k].Lon);
						let crcl2 = L.circle(latlng, 5)
							.bindPopup(popup);
						crcl.addLayer(crcl2);
					}
					let latlng = L.latLng(data[k].Lat, data[k].Lon);
					pointList.push(latlng);
				}
				let polyline = L.polyline(pointList, {color: 'red'});
				crcl.addLayer(polyline);
				crcl.addTo(map);
				map.closePopup();
				try{
					map.fitBounds(pointList);}
				catch (e){
					$('#errorCreate').modal({
						show: true
					});
				}
				$('#clean').css('display', 'block');
				$('#loading').modal('hide');
			});
		$('#tracker').modal('hide');
	});
	$(document).on('click', '.cancel',  ()=> {
		$('#tracker').modal('hide');
	});
}
$(document).on('click', '.exit', ()=>{
	$('#errorCreate').modal('hide');
});
export {crcl}