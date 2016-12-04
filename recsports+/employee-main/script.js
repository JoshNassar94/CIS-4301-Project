$(document).ready(function() {
  $.post("../isLoggedIn.php", {id: 0},
    function(data){
		if(data == -1){
		  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
		}
    });
});
