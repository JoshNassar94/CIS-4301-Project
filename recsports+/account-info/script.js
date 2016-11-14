$(document).ready(function() {
  $.post("getInfo.php", {id: 0},
    function(data){
	if(data == -1){
	  console.log("Not logged in");
	  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
	}
	else{
	  data = (JSON.parse(data))[0];
	  document.getElementById("first").innerHTML = "First Name: " + data['FIRSTNAME'];
	  document.getElementById("last").innerHTML = "Last Name: " + data['LASTNAME'];
	  document.getElementById("email").innerHTML = "Email: " + data['EMAIL'];
	  document.getElementById("phone").innerHTML = "Phone Number: " + data['PHONENUMBER'];
	  document.getElementById("password").innerHTML = "Password: " + data['PASSWORDHASH'];

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

