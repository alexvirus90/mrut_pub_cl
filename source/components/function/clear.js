export default function clear() {
	$('#search_query').on('input',() => {
		if($('#search_query').val() !== '') {
			$('.closed').show();
		}
	});
	$('.closed').click(() => {
		$('.closed').hide();
		$('#search_query').val('');
	});
}