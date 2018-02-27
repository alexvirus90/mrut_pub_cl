'use strict';

import waitforpool from './waitforpool'
import {url, $this, Cookies} from './variable';

export default function Connect() {

	let connect = url + 'connect&principal=' + Cookies.get('pid');

	$.post(connect)
		.done((e)=>{
			let data = JSON.parse(e);
			waitforpool(data.root[0].connection);
		})
		.fail(()=>{})
}