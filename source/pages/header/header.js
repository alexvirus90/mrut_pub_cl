'use strict';

// import 'bootstrap';
import './header.sass';
import '../../components/libs/aside';
import setAttr from '../../components/function/add.js';
import switdh from '../../components/mechanical/function/switch.js'
import clear from '../../components/function/clear.js'
import nsScrl from '../../components/function/scroll.js';

let input = document.createElement('input');
$('#search_clear').append(input);
$('#search').append("<a href='#' class='closed'><i class='fa fa-times'></i></a>");

setAttr(input, {"type": "text", "id": "search_query", "class": "address clearable", "placeholder": "Поиск по адресу"});

switdh();
clear();

$('.information').click(() => {
	$('#infoModal').modal('show');
});
$('.col-left').click(() => {
	let sidebar = $('.sidebar-left');
	if (sidebar.css('display') === 'block'){
		sidebar.hide('slow');
	} else {
		sidebar.show('slow');
	}

/*	if ($(window).width() <= 575){
		$('#system-tab').removeClass('active');
		$('.icon_system').addClass('active');
	}*/
});
$('.col-right').click(() => {
	nsScrl();
	if ($(".aside").hasClass("in")) {
		$('.aside').asidebar('close')
	} else {
		$('.aside').asidebar('open')
	}
});

