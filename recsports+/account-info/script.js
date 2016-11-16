$(document).ready(function() {
  document.getElementById("info-div").innerHTML = "<img src='img/loading.gif' width='40%' style='padding-left: 10rem'>";
  $.post("getInfo.php", {id: 0},
    function(data){
	if(data == -1){
	  console.log("Not logged in");
	  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
	}
	else{
	  data = (JSON.parse(data))[0];
	  var htmlString = "";
	  htmlString += "<h3 class='labels'><b>First Name: </b>"+data['FIRSTNAME']+"</h3>";
	  htmlString += "<h3 class='labels'><b>Last Name: </b>"+data['LASTNAME']+"</h3>";
	  htmlString += "<h3 class='labels'><b>Email: </b>"+data['EMAIL']+"</h3>";
	  htmlString += "<h3 class='labels'><b>Phone Number: </b>"+data['PHONENUMBER']+"</h3>";
	  htmlString += "<h3 class='labels'><b>Password: </b>"+data['PASSWORDHASH']+"</h3>";
	  document.getElementById("info-div").innerHTML = htmlString;
	}
    });

    
});


function update(form) {
	var currPass = $("#currPW").val();
	var newEmail = $("#newEmail").val();
	var newPhone = $("#newPhone").val();
	var newPass = $("#newPW").val();
	$.post("updateInfo.php", {currPW: currPass, email: newEmail, phone: newPhone, newPW: newPass},
		function(data) {
			if(data == -1){
			  alert("Incorrect password!");
			  return false;
			}
			else{
			  console.log(data);
			  alert("Updated info!");
			  location.reload();
			}
	});
  return true;
}


function logout() {
  $.post("../logout.php",
    function(data){
      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+";
  });
  return true;
}

