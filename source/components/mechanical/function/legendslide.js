export default function legendslide() {
	let legend = $(".legendM");
	//Legend  touchstart touchend
	legend.on('mouseover touchstart',(e) => {
		if (e.type !== "touchstart"){
			legend.removeClass('legendHideM');
			e.stopPropagation();
		} else {
			let hasCl = legend.hasClass('legendHideM');
			if (hasCl) {
				legend.removeClass('legendHideM');
				e.stopPropagation();
			} else {
				legend.addClass('legendHideM');
				e.stopPropagation();
			}
		}
	});
	legend.on('mouseout touchstart', (e) => {
		if (e.type === "touchstart"){
			$('#map_canvas_M').on('touchstart', (e) => {
				legend.addClass('legendHideM');
				e.stopPropagation();
			});
		} else {
			legend.addClass('legendHideM');
			e.stopPropagation();
		}
	});
}