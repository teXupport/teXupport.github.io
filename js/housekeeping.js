$(function() {
	var html = $('#page-top').html();
	html = html.replace(/<!--[\s\S]*?-->/g, "");
	$('#page-top').html(html);
});