'use strict';

let popup_tmp = "";

export default function GetTemplatePopup(obj) {
	popup_tmp = "<div class='header1 clearfix'><div class='actions'>" +
		"<a class='hint hint-top svg-icon svg-icon-circle-remove icon-close' href='javascript:;' data-hint='Закрыть'></a></div>" +
		"</div><div class='contents'><div data-key='summary'" +
		" class='content" +
		" active'>" +
		"<div class='row-fluid'><div class='features span8'><ul>" +
		"<li data-prop='licenseNumber'>Идентификатор трекера: <strong class='licenseNumber'>"+ obj.NAME +"</strong></li>" +
		"<li data-prop='address' class=''>Мун. округ: " +
		"<strong data-geoid='0' class='address'>"+ obj.akName +"</strong></li>" +
		"<li data-prop='address' class=''>Сотрудник: " +
		"<strong data-geoid='0' class='address'>"+  obj.KBDH_EmployeeName  +"</strong></li>" +
		"<li data-prop='alt'>Сменное задание: <strong><span class='alt'>"+ obj.Name +"</span></strong></li>" +
		"<li data-prop='address' class=''>Функция уборки: " +
		"<strong data-geoid='0' class='address'>"+ obj.func +"</strong></li>" +
		"<li data-prop='speed'>Скорость передвижения: <strong><span class='speed'>"+ obj.speed +"</span>" +
		" км/ч</strong></li></ul>" +
		"<ul class='indicators connections'><li class='indicator isGsmOnline' data-state='0'>" +
		"<svg class='svg-icon green '><use xlink:href='#smb-connection'>" +
		"<svg viewBox='0 0 32 32' id='smb-connection' width='100%' height='100%'><path d='M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 6.877 4.339 12.739 10.428 15.002L10 32h12l-.428-.998C27.661 28.739 32 22.877 32 16zm-16.788 3.838a2 2 0 1 1 1.576.001L16 18l-.788 1.838zm1.609.077a4 4 0 1 0-1.641-.002l-2.332 5.441A8.002 8.002 0 0 1 8 17.999c0-4.418 3.582-8.375 8-8.375s8 3.957 8 8.375a8.003 8.003 0 0 1-4.848 7.355l-2.331-5.439zm4.693 10.951l-2.31-5.39C23.155 24.14 26 20.403 26 16c0-5.523-4.477-10-10-10S6 10.477 6 16c0 4.402 2.845 8.14 6.796 9.476l-2.31 5.39C5.499 28.726 2.005 23.771 2.005 18 2.005 10.271 8.271 3.63 16 3.63S29.995 10.271 29.995 18c0 5.771-3.494 10.726-8.481 12.866z'></path></svg>" +
		"</use></svg>Время передачи сигнала: <strong class='lastGSMConnectionTime nobr'> "+ obj.time +"</strong></li>" +
		"<li class='indicator isGpsOnline' data-state='0'>" +
		"<svg class='svg-icon green'>" +
		"<use xlink:href='#smb-satellite'>" +
		"<svg viewBox='0 0 33 32' id='smb-satellite' width='100%' height='100%'>" +
		"<path d='M0 20.863L11.137 32s2.659-6.311-1.083-10.053C6.353 18.246 0 20.863 0 20.863zm29.875.885l-5.656 5.656.707.707 5.656-5.656-.707-.707zm2.828 1.414l-6.363-6.365a2.003 2.003 0 0 0-2.828 0l-.558.558-1.56-1.56 2.797-2.797c.781-.781.693-2.136-.088-2.917l-3.447-3.447a2 2 0 0 0-2.828 0l-2.543 2.454-1.34-1.34.091-.09a2 2 0 0 0 0-2.829L7.672-1.536a2 2 0 0 0-2.829 0L.601 2.707a2 2 0 0 0 0 2.829L6.965 11.9a2 2 0 0 0 2.829 0l1.391-1.391 1.378 1.39-2.559 2.559c-.781.781-.486 5.128-.486 5.128l1.723 1.723s4.346.295 5.127-.486l2.214-2.213 1.56 1.56-.874.874a2 2 0 0 0 0 2.828l6.365 6.363a2 2 0 0 0 2.828 0l4.242-4.242a2.003 2.003 0 0 0 0-2.831zM1.308 3.414L5.551-.829a.999.999 0 0 1 1.414 0L1.308 4.828a.999.999 0 0 1 0-1.414zm.707 2.121L7.672-.122l.707.707-5.657 5.657-.707-.707zm1.414 1.414l5.657-5.657.707.708-5.656 5.656-.708-.707zm1.415 1.415L10.5 2.707l.708.707-5.657 5.657-.707-.707zm1.414 1.414l5.657-5.657.707.707-5.657 5.657-.707-.707zm2.828 1.414a.999.999 0 0 1-1.414 0l5.657-5.657a.999.999 0 0 1 0 1.414l-4.243 4.243zm2.822 5.306l-.53-.531 7.31-7.31.531.53-7.311 7.311zm8.067 5.25l4.244-4.244a1.003 1.003 0 0 1 1.414 0l-5.658 5.658a.999.999 0 0 1 0-1.414zm12.021 3.535l-4.242 4.242a.999.999 0 0 1-1.414 0l-4.243-4.243 5.656-5.656-.707-.707-5.658 5.656-.707-.707 5.658-5.658 5.656 5.658a1 1 0 0 1 .001 1.415zm-.707-2.121l-5.656 5.656.707.707 5.656-5.656-.707-.707zm-2.828-2.828l-5.656 5.656.707.707 5.656-5.656-.707-.707z'>" +
		"</path></svg>" +
		"</use>" +
		"</svg>" +
		"Координаты: <strong class='lastGPSConnectionTime nobr'>"+ obj.time +"</strong></li>" +
		"<li class='indicator power' data-state='1'><svg class='svg-icon green'><use xlink:href='#smb-plug'>" +
		"<svg viewBox='0 0 32 32' id='smb-plug' width='100%' height='100%'>" +
		"<path d='M8.105 5.097a.796.796 0 0 0-1.154.029C2.158 10.401 4.765 21.81 5.039 22.938L.232 27.744a.8.8 0 0 0 0 1.128l2.896 2.895a.798.798 0 0 0 1.129 0l4.803-4.803c2.34.6 5.266.959 7.848.959 3.104 0 7.35-.5 9.965-2.873a.796.796 0 0 0 .03-1.154L8.105 5.097zM15.046 9.847a.795.795 0 0 0 1.128 0l5.956-5.955a2.21 2.21 0 0 0 .654-1.58c0-.596-.232-1.156-.654-1.578S21.15.08 20.552.08s-1.156.232-1.578.654l-5.958 5.955a.796.796 0 0 0 0 1.129l2.03 2.029zM31.348 9.95a2.217 2.217 0 0 0-1.58-.654c-.596 0-1.156.232-1.578.654l-5.957 5.956c-.148.149-.234.353-.234.563s.086.414.234.564l2.029 2.027a.793.793 0 0 0 1.128 0l5.957-5.955a2.23 2.23 0 0 0 .001-3.155z'></path></svg>" +
		"</use></svg>Уровень заряда: <strong>"+ obj.dab_level +"%</strong></li></ul></div><!--/features-->" +
		"</div><!--/row-fluid-->" +
		"<div class='cent'>" +
		"<span class='rev'>V-0.000.1</span></div>" +
		"</div><!--/content operate-->" +
		"</div><div class='extra-actions'><a class='unwatch' href='javascript:;'></a>" +
		"<a href='javascript:;' class='route-from' value="+ obj.VID +" style='float: right'>Построить маршрут</a>" +
		"</div>";
	return popup_tmp;
}