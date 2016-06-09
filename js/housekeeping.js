$(function() {
	COMMENTS = new RegExp('/<!--[\s\S]*?-->/g');
	
	html = $(body).html();
	$(body).html(html.replace(COMMENTS));
});