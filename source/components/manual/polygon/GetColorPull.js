'use strict';

import {api, Cookies, $this} from '../../function/variable'

export default function getColor() {

	let url = api + 'getColor&pid=' + Cookies.get('pid') + "&fid=" + Cookies.get('value') + "&lmzid=" + Cookies.get('color');

	$.get(url)
		.done((d)=>{
		let data = JSON.parse(d);
			let features = $this.layers;
			for (let k in features) {
				for (let j in data) {
					if(parseInt(data[j].idrm) === features[k].feature.properties.id ){
						features[k].setStyle({ fillColor: data[j].color })
					}
				}
			}
			setTimeout(getColor(), 3000);
		})
		.fail()
}