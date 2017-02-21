$(document).ready(function () {
	setupScrollButton();
	animateHeader();
});

function setupScrollButton() {
	$('#indicate-more').click(function () {
		$('html, body').animate({
			scrollTop: $("#card-section").offset().top
		}, 2000);
	});
}

function animateHeader() {
	$('#page-header').textillate({ in: { effect: 'flipInX' }, callback: animateSubheader1 });
}

function animateSubheader1() {
	$('#subheader-1').textillate({ in: { effect: 'flipInX' }, callback: animateSubheader2 });
}

function animateSubheader2() {
	//$('#subheader-2').textillate({ in: { effect: 'flipInX' }, callback: animateSubheader3 });
}

function animateSubheader3() {
	$('#subheader-3').textillate({ in: { effect: 'flipInX' }, callback: animateIndicateMore });
}

function animateIndicateMore() {
	$('#indicate-more').css('visibility', 'visible');
}