function subscribeModal() {
	$('.subscribe-mmodal').addClass('is-active');
	$(".subscribe-mmodal-close, #subscribe-mmodal").on('click', function() {
		$('.subscribe-mmodal').removeClass('is-active');
	});
}

subscribeModal();