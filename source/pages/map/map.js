'use strict';

import './map.sass';
import 'jquery-ui/ui/widgets/progressbar';
import nsScrl from '../../components/function/scroll.js';
import rsM from '../../components/function/resize.js';
import drawMap, {map} from '../../components/function/drawMap.js';

let resizeTimer;

// function pageloadEvery(t) {
// 	setTimeout('location.reload(true)', t);
// }

rsM();
drawMap();

$(window).resize(() => {
	map._onResize.call(map);
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(rsM(), 100);
	$('#performed').css('max-height', '');
	$('#done').css('max-height', '');
	nsScrl();
});

$("#progressbar").progressbar({
	value: false
});