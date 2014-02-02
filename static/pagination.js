function pagination(page_elt) {
	var page_number = 0;

	this.loadnext = function() {
		var url_name = "/q?limit=10&offset=" + (page_number + 1);
		$.ajax({
			url: url_name,
			success: function(result) {
				$("#" + page_elt).html(result);
			} 
		});
    
    page_number++;
	}

	this.loadprev = function() {
    if(page_number < 1)
      return;
    
		var url_name = "/q?limit=10&offset=" + (page_number - 1);
		$.ajax({
			url: url_name,
			success: function(result) {
				$("#" + page_elt).html(result);
			} 
		});
  
    page_number--;
	}
}











}
