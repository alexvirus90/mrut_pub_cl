'use strict';

import './map.sass';
import 'jquery-ui/ui/widgets/progressbar';
import nsScrl from '../../components/function/scroll.js';
import rsM from '../../components/function/resize.js';
// import LeftGrid from '../../components/manual/grid/left'
import drawMap, {map} from '../../components/manual/function/drawMap.js';
import drawMapM, {map_M} from '../../components/mechanical/function/drawMapM.js';
import Info from '../../components/mechanical/function/info.js';

let resizeTimer;

rsM();
drawMap();

$(window).resize(() => {
	rsM();
	try {
		map._onResize.call(map);
		map_M._onResize.call(map_M);}
	catch (e){}
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(rsM(), 100);
	$('#performed').css('max-height', '');
	$('#done').css('max-height', '');
	nsScrl();
});
$(document).ready((e)=> {
	if($('.manual a').hasClass('active')){
		$('.text-header').text('Ручная уборка');
	}
	if($('.mechanical a').hasClass('active')){
		$('.text-header').text('Механизированная уборка');
	}
});
$('.tabs a').mousedown((e)=> {
	switch (e.target.innerHTML){
		case "Ручная уборка":
			$('.mechanical a').removeClass('active show');
			$('#mechanical').removeClass('active show');
			$('.text-header').text('Ручная уборка');
			break;
		case "Механизированная уборка":
			$('.manual a').removeClass('active show');
			$('#manual').removeClass('active show');
			$('.text-header').text('Механизированная уборка');
			break;
	}
});
$(document).one('click', '#nav-manual-tab', ()=> {
	// map.remove();
	// drawMap();
	rsM();
});
$(document).one('click', '#nav-mechanical-tab', ()=> {
	drawMapM();
	Info();
	rsM();
});
$("#progressbar, #progressbar_M").progressbar({
	value: false
});
