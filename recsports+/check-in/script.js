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
