'use strict';

export default function rsM() {
	let height = $(window).height();
	let transform = (height - 298) / 2.5;
	$('body .modal.show#auth .modal-dialog').css('transform', 'translate(0,' + transform + 'px)');
	$('body .modal.show#errorModal .modal-dialog').css('transform', 'translate(0,' + transform + 'px)');
}