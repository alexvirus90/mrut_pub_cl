'use strict';

import 'bootstrap'
import './auth.sass'
import Cookies from 'js-cookie';
import rsM from './resize';
import './maxLength';
import './clear';

let pass = $('#Password');
let usr = $('#Username');
let rdio = $('#checkboxID');

$(function () {
	let height = $(window).height();
	let transform = (height - 298) / 2.5;
	$('body .modal.show#auth .modal-dialog').css('transform', 'translate(0,' + transform + 'px)');
	$('body .modal.show#errorModal .modal-dialog').css('transform', 'translate(0,' + transform + 'px)');
	// $('#auth').modal({
	// 	keyboard: false,
	// 	backdrop: 'static',
	// 	show: true
	// });
});
// $(document).ready(function () {
// 	rsM();
// 	$('#auth').modal({
// 		keyboard: false,
// 		backdrop: 'static',
// 		show: true
// 	});
// });
$(window).resize(()=>{
	rsM();
});
pass.keypress(function(e) {
	if(e.which === 13) {
		$('#save').click();
	}
});
usr.maxlength({
	max: 30,
});
pass.maxlength({
	max: 20,
});
$('#errorModal').modal({
	keyboard: false,
	show: false,
	backdrop: 'static',
});
$('#save').on('click', function () {
	/*	cookies		*/
	Cookies.set('Username', usr.val(), { expires: 1 });
	Cookies.set('Password', pass.val(), { expires: 1 });
	if((usr.val() === '') || (pass.val() === '')){
		$('#errorModal').modal('show');
		$('#auth').modal('hide');
		$('#errorModal .modal-body').html('<p class="errorText">\n' +
			'\t\t\t\t\t* Поля, \'имя пользователя\' и/или \'пароль\' не доджны быть пустыми!\n' +
			'\t\t\t\t</p>');
	}
});
$('#repeat').on('click', function () {
	$('#errorModal').modal('hide');
	$('#auth').modal('show');
});
$(".clear").addClear({
	top: 9,
	right: 10,
});
$('.input-group a').attr("tabIndex", '-1');
if (localStorage.chkbx && localStorage.chkbx !== '') {
	rdio.attr('checked', 'checked');
	usr.val(localStorage.usrname);
	pass.val(localStorage.pass);
} else {
	rdio.removeAttr('checked');
	usr.val('');
	pass.val('');
}
rdio.click(function() {
	if (rdio.is(':checked')) {
		localStorage.usrname = usr.val();
		localStorage.pass = pass.val();
		localStorage.chkbx = rdio.val();
	} else {
		localStorage.usrname = '';
		localStorage.pass = '';
		localStorage.chkbx = '';
	}
});
$('#show_password').hover(function() {
		pass.attr('type', 'text');
		$('#show_password .fa').removeClass('fa-eye').addClass('fa-eye-slash');
	}, function () {
		pass.attr('type', 'password');
		$('#show_password .fa').removeClass('fa-eye-slash').addClass('fa-eye');
	}
);
