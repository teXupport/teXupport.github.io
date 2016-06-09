$(function() {
	// remove HTML comments inside containers
	$.each($('.container'), function(i, x) {
		var html = $(x).html();
		html = html.replace(/<!--[\s\S]*?-->/g, "");
		$(x).html(html);
	});
});