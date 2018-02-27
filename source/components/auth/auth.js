'use strict';
import 'bootstrap'
import './auth.sass'
import './maxLength';
import './clear';
import md5 from 'md5'
import rsM from './resize';
import Job, {jobArrP} from "../polygon/job";
import Info from "../function/info";
import {map} from "../function/drawMap"
import {api, Cookies, $this, dataInfo} from "../function/variable"
import {mrkOn, mrkOff, mrkA} from '../function/addMarker';

let pass = $('#Password');
let usr = $('#Username');
let rdio = $('#checkboxID');
let logout = $('.logout');

$(document).on('click', '.logout', () => {
	//Удаление layers
	let layers = $this.layers;
	for (let k in layers) {
		map.removeLayer(layers[k]);
	}
	try{
		mrkOn.clearLayers();
		mrkOff.clearLayers();
		mrkA.clearLayers();
		crcl.clearLayers();}
	catch (e){}
	$( "#dp1, #dp2" ).datepicker( "destroy" );
	$this.job.clear();
	dataInfo.clear();
	$(".performed").remove();
	$(".done").remove();
	let listItem = $('.list-group-item');
	$this.selectValue = -1;
	Cookies.remove('pid', 'value', 'color');
	$('#auth').modal({
		keyboard: false,
		backdrop: 'static',
		show: true
	});
	logout.css('display', 'none');
	if(listItem.hasClass('active')){
		listItem.removeClass('active');
	}
});
$(() => {
	rsM();
	Job();
	Info();
	if ((Cookies.get('pid') === null || Cookies.get('pid') === '' || Cookies.get('pid') === undefined || Cookies.get('pid') === 'undefined')) {
		logout.css('display', 'none');
		$('#auth').modal({
			keyboard: false,
			backdrop: 'static',
			show: true
		});
	}
});
$(window).resize(() => {
	rsM();
});
pass.keypress((e) => {
	if (e.which === 13) {
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
$('#save').on('click', () => {
	logout.css('display', 'block');
	if ((usr.val() === '') || (pass.val() === '')) {
		$('#errorModal').modal('show');
		$('#auth').modal('hide');
		$('#errorModal .modal-body').html('<p class="errorText">\n' +
			'\t\t\t\t\t* Поля, \'имя пользователя\' и/или \'пароль\' не доджны быть пустыми!\n' +
			'\t\t\t\t</p>');
	}
	let md = md5(pass.val());
	let usrr = usr.val();
	let mdd = api + "doLogin&uName=" + usrr + "&uPass=" + md;
	let jqxhr = $.get(mdd)
		.done((data) => {
			let access = JSON.parse(data);
			if (!(access.success === false || access.success === '')) {
				Cookies.set('pid', access.pid, {expires: 1});
				$('#auth').modal('hide');
				Job();
				Info();
			}
		})
		.fail((e) => {
		})
		.always(() => {
		});
});
$('#repeat').on('click', () => {
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
rdio.click(() => {
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
$('#show_password').hover(() => {
		pass.attr('type', 'text');
		$('#show_password .fa').removeClass('fa-eye').addClass('fa-eye-slash');
	}, () => {
		pass.attr('type', 'password');
		$('#show_password .fa').removeClass('fa-eye-slash').addClass('fa-eye');
	}
);
