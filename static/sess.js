
      
      function showRegister() {
        $("#popup").load("/s/register").show();
      }
      
      function showLogin() {
        $("#popup").load("/s/login").show();
      }

      function showLogout() {
        $.post("/s/logout");
      }
      
      function doLogin() {
        var arr = [];
        $("#popup :input").each(function(idx,elem) {
          if(elem.getAttribute('type') != 'button')
            arr.push(elem.id + "=" + elem.value);
        });
        alert(arr.join('&'));
        $.post('/s/register?' + arr.join('&'));
      }
      
      function doRegister() {
        var arr = [];
        $("#popup :input").each(function(idx,elem) {
          if(elem.getAttribute('type') != 'button')
            arr.push(elem.id + "=" + elem.value);
        });
        alert(arr.join('&'));
      }
      
      function doErrorMessage() {
		var arr = [];
		$.ajax({
			statusCode: {
				403: function() {
				$("#error").html("Error: Mismatched Passwords");
				}
			}
			statusCode: {
				401: function() {
					$("#error").html("Error: Username/Password is incorrect");
				}
			}
		});
	  }
		$("#error").html("Error: Invalid Input");
	  }	
