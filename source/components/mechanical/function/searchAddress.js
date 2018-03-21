import 'jquery-ui/ui/widgets/autocomplete';
import {map_M} from './drawMapM';

let mrkSearch;

export default function srchAddr() {
	$('#search_query').autocomplete({
		appendTo: '.col-middle',
		source: (request, response) => {
			$.ajax({
				url: "https://nominatim.openstreetmap.org",
				cache: true,
				method: "GET",
				data: {
					q: 'Санкт-Петербург, ' + request.term,
					format: 'json',
					limit: 10,
				},
			})
				.done((data) => {
					response($.map(data, (item) => {
						return {
							value: item.display_name.split(',', 6),
							latitude: item.lat,
							longitude: item.lon
						}
					}));
					$('#progressbar').hide();
				})
				.fail(() => {});
		},
		select: (event, point) => {
			let lat = point.item.latitude,
					lon = point.item.longitude;
			mrkSearch = {lat, lon};
			map_M.setView(mrkSearch, 18);
			let mIcon = L.icon({iconUrl: 'images/marker_30.png', iconSize: [30, 30], iconAnchor: [15, 15]});
			let dot = L.marker(mrkSearch, { icon: mIcon }).addTo(map_M);
			$('.closed').click(() => {
				if (dot !== undefined) {
					map_M.removeLayer(dot);
					map_M.setZoom(10);
				}
			});
		},
		search: () => {
			$('#progressbar').show();
		}
	});
}