import 'jquery-ui/ui/widgets/autocomplete';
import {data} from './waitforpoolM';
import {carsArray} from './info';
import {map_M} from './drawMapM';

export default function srchCar() {
	$('#search_query').autocomplete({
		appendTo: '.col-middle',
		source: (request, response) => {
			let re = $.ui.autocomplete.escapeRegex(request.term);
			let matcher = new RegExp(re, "ig");
			response($.grep(($.map(carsArray, (v, i) => {
				return {
					label: [v.nc + " " + "(" + v.bn + ", " + v.mn + ", " + v.vgn + ", " + v.acn + ")"],
					value: [v.nc + " " + "(" + v.bn + ", " + v.mn + ", " + v.vgn + ", " + v.acn + ")"],
					did: v.did
				};
			})), (item) => {
				return matcher.test(item.value);
			}));
			$('#progressbar').hide();
		},
		select: (event, point) => {
			map_M.setView(data._data[point.item.did].mO._latlng, 18);
			data._data[point.item.did].mO.openPopup(data._data[point.item.did].mO._latlng);
		},
		search: () => {
			$('#progressbar').show();
		}
	});
}