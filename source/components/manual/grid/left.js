import './left.sass'

export default function LeftGrid(obj) {

	$('.sidebar-left-wrapper__tree').treeview({
		dataUrl: {
			url: './tree.json',
			method: 'GET',
			dataType: 'json',
			cache: false,
		},
		showCheckbox: true,
		color: '#428bca',
		showTags: true,
		tagsClass: "badge badge-pill badge-secondary float-right"
	});

/*	window.onload = function() {
		let leftMenu  = document.querySelector('.sidebar-left'),
			menuWidgets = document.querySelector('.sidebar-left__widgets'),
			toggleMenu  = document.querySelector('.toggle_menu'),
			leftUser    = document.querySelector('.sidebar-left__user');


	};*/
}
