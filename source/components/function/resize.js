'use strict';

export default function rsM() {
	scroll(0, 0);
	let header 					= $(".header:visible");
	let content 				= $(".content:visible");
	let tab							=	$('.tabs:visible');
	let viewport_height = $(window).height();
	let content_height 	= viewport_height - header.outerHeight() - tab.outerHeight();
	// content_height -= (content.outerHeight() - content.height());
	// content.height(content_height);
	$("#map_canvas").height(content_height);
	$("#map_canvas_M").height(content_height);
	$(".sidebar-left").height(content_height);
}