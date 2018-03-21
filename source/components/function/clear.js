export default function clear() {
	$('#search_query').on('input',() => {
		if($('#search_query').val() !== '') {
			$('.closed').show();
			$('.button-switch').hide();
		}
	});
	$('.closed').click(() => {
		$('.button-switch').show();
		$('.closed').hide();
		$('#search_query').val('');
	});
}