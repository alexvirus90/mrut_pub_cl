'use strict';

import {priznak, api, Cookies} from '../function/variable';

let group1, group2, group3, group4, group5, group6, group7;

export default function Update(b1, b2, b3, b4, b5, b6, b7) {

	let url = api + "getalarm&pid=" + Cookies.get('pid');
	$.ajax(url)
		.done((e)=>{
			let data = JSON.parse(e);
			priznak.clear();
			priznak.add(data);
			group1 = priznak.get({
				filter: (item) => {
					return( item.Priznak === 12 );
				}
			});
			group2 = priznak.get({
				filter: (item) => {
					return( item.Priznak === 1 );
				}
			});
			group3 = priznak.get({
				filter: (item) => {
					return( item.Priznak === 2 );
				}
			});
			group4 = priznak.get({
				filter: (item) => {
					return( item.Priznak === 3 );
				}
			});
			group5 = priznak.get({

			});
			group6 = priznak.get({

			});
			group7 = priznak.get({
				filter: (item) => {
					return( item.Priznak === 11 );
				}
			});
			b1.update(group1.length);
			b2.update(group2.length);
			b3.update(group3.length);
			b4.update(group4.length);
			b5.update(group5.length);
			b6.update(group6.length);
			b7.update(group7.length);
			setInterval(Update(b1, b2, b3, b4, b5, b6, b7), 10000);
		});
}
export {group1, group2, group3, group4, group5, group6, group7}