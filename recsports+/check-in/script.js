$(document).ready(function() {
  $.post("../isLoggedIn.php", {id: 0},
    function(data){
      console.log("Logged in as: "+data);
	if(data == -1){
	  console.log("Not logged in");
	  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
	}
    });
});

function checkin() {
	var ufid = $("#ufid").val();
	var password1 = $("#password").val();
	var elem = document.getElementById("loc");
	var loc = elem.options[elem.selectedIndex].innerHTML;
	$.post("./checkin.php", {ufid: ufid, password: password1, loc: loc},
	  function(data){
	    console.log(data);
	    if(data == 1){
	      alert("Checked in!");
	      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/employee-main";
	    }
	    else if(data == 2){
	      alert("Please select a location");
	    }
	    else if(data == 0){
	      alert("Incorrect UFID or password!");
	    }
	});
	return true;
}
