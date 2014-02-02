function pagination(page_elt,q_id) {
	var page_number = 0;
  var url_name = "/q/" + q_id + "?limit=10";
  
  $.ajax({
    url: url_name,
    success: function(result) {
      $("#" + page_elt).html(result);
      $("#" + page_elt + " li").each(function(idx,elem) {
        elem.innerHTML = (10*page_number + idx + 1) + ". " + elem.innerHTML;
      });
    } 
  });

	this.loadnext = function() {
		var url_name = "/q/" + q_id + "?limit=10&offset=" + (10*(page_number + 1));
		$.ajax({
			url: url_name,
			success: function(result) {
        page_number++;
				$("#" + page_elt).html(result);
        $("#" + page_elt + " li").each(function(idx,elem) {
          elem.innerHTML = (10*page_number + idx + 1) + ". " + elem.innerHTML;
        });
			} 
		});
    
	}

	this.loadprev = function() {
    if(page_number < 1)
      return;
    
		var url_name = "/q/" + q_id + "/q?limit=10&offset=" + (10*(page_number - 1));
		$.ajax({
			url: url_name,
			success: function(result) {
        page_number--;
				$("#" + page_elt).html(result);
        $("#" + page_elt + " li").each(function(idx,elem) {
          elem.innerHTML = (10*page_number + idx + 1) + ". " + elem.innerHTML;
        });
			} 
		});
	}
}
