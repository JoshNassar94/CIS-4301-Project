$(document).ready(function() {
  $.post("../isLoggedIn.php", {id: 0},
    function(data){
	if(data == -1){
	  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
	}
    });
});

function clickButton() {
	var elem = document.getElementById("transaction");
	var transactionType = elem.options[elem.selectedIndex].innerHTML;
	if(transactionType == "Check-In"){
	  checkin();
	}
	else{
	  checkout();
	}
}

function checkin() {
	var ufid = $("#ufid").val();
	var equipID = $("#eqid").val();
	var elem = document.getElementById("condition");
	var quality = (elem.options[elem.selectedIndex].innerHTML);
	if(quality == "Select Transaction")
	  quality = "";
	else
	  quality = quality.charAt(0);
	
	$.post("./checkin.php", {ufid: ufid, equipID: equipID, quality: quality},
	  function(data){
	    if(data == 1){
	      alert("Checked in!");
	      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/employee-main";
	    }
	    else if(data == 2){
	      alert("Please fill out all fields!");
	    }
	    else if(data == 0){
	      alert("Incorrect UFID or password!");
	    }
	    else if(data == 3){
	      alert("That equipment has not been checked out!");
	    }
	});
	return true;
}

function checkout(){
	var ufid = $("#ufid").val();
	var equipID = $("#eqid").val();
	var elem = document.getElementById("condition");
	var quality = (elem.options[elem.selectedIndex].innerHTML);
	if(quality == "Select Transaction")
	  quality = "";
	else
	  quality = quality.charAt(0);
	$.post("./checkout.php", {ufid: ufid, equipID: equipID, quality: quality},
	  function(data){
	    if(data == 1){
	      alert("Checked out!");
	      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/employee-main";
	    }
	    else if(data == 2){
	      alert("Please fill out all fields!");
	    }
	    else if(data == 0){
	      alert("Incorrect UFID or password!");
	    }
	    else if(data == 3){
	      alert("That equipment is already checked out!");
	    }
	});
	return true;
}

