function load_qs(elt_id, offset) {
	var url_name = "/q?limit=10&offset=" + offset;
	$.ajax({
		url: url_name,
		success: function(result) {
			$("#" + elt_id).html(result);
		}
	});
}

function load_comments(q_id) {
	var url_name = "/q/$question.id";
	$.ajax({
		url: url_name,
		success: function(result) {
			$("#" + q_id).html(result);
		}
	})
}

function post_question(opt1, opt2) {
	var url_name = "/q?opt1=" + opt1 + "&opt2=" + opt2;
	$.ajax({
		type: "POST",
		url: url_name,
	});
}