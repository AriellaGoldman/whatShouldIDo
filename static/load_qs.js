function load_qs(elt_id, offset) {
	var url_name = "/q?limit=10&offset=" + offset;
	$.ajax({
		url: url_name,
		success: function(result) {
			$("#" + elt_id).html(result);
		}
	});
}
