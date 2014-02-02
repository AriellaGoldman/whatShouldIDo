function load_qs(q_id, elt_id, offset) 
{
	var url_name = "/q?" + elt_id + "limit=10;offset";
	$.ajax([
		url: url_name,
		success: function(result){
			$("#elt_id").html(result);
		}
	]);
}