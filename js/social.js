$(function() {
	$('.social-no-link').removeAttr('target');
	$('.social-no-link').click(function() {
		alert("No page exists on "+$(this).val()+".");
	});
});