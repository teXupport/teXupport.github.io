$(function() {
	var regex = '/<!--[\s\S]*?-->/g';
	
	var html = $('body').html();
	$('body').html(html.replace(/<!--[\s\S]*?-->/g, ""));
});