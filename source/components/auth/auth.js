'use strict';

import 'bootstrap'
import md5 from 'md5'
import './auth.sass'
import Cookies from 'js-cookie';
import rsM from './resize';
import './maxLength';
import './clear';
import Job from "../polygon/job";
import Polygon from "../polygon/polygon";

let pass = $('#Password');
let usr = $('#Username');
let rdio = $('#checkboxID');
let logout = $('.logout');

logout.on('click', function () {
	Cookies.remove('pid');
	$('#auth').modal({
		keyboard: false,
		backdrop: 'static',
		show: true
	});
	logout.css('display', 'none');
});
$(function () {
	rsM();
	if((Cookies.get('pid') === null || Cookies.get('pid') === '' || Cookies.get('pid') === undefined || Cookies.get('pid') === 'undefined')){
		logout.css('display', 'none');
		$('#auth').modal({
			keyboard: false,
			backdrop: 'static',
			show: true
		});
	}
});
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
	logout.css('display', 'block');
	if((usr.val() === '') || (pass.val() === '')){
		$('#errorModal').modal('show');
		$('#auth').modal('hide');
		$('#errorModal .modal-body').html('<p class="errorText">\n' +
			'\t\t\t\t\t* Поля, \'имя пользователя\' и/или \'пароль\' не доджны быть пустыми!\n' +
			'\t\t\t\t</p>');
	}
	let md = md5(pass.val());
	let usrr = usr.val();
	let mdd = "http://admmrut.adc.spb.ru/srv/api.php?action=doLogin&uName="+ usrr +"&uPass=" + md;
	let jqxhr = $.get(mdd)
		.done((data) => {
			let access = JSON.parse(data);
			if(!(access.success === false || access.success === '')){
				Cookies.set('pid', access.pid, { expires: 1 });
				Job();
				// Polygon();
				$('#auth').modal('hide');
			}
		})
		.fail((e) => {

		})
		.always(() => {
		});
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

export {Cookies};
