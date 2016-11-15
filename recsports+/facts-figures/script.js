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


function displayFacilities() {
	console.log("Display facilities");
	document.getElementById("data-div").innerHTML = "<h1>Facilities stuff</h1>";
  	return true;
}

function displayIntramurals() {
	console.log("Display intramurals");
	document.getElementById("data-div").innerHTML = "<h1>Intramurals stuff</h1>";
  	return true;
}

function displayClasses() {
	console.log("Display classes");
	document.getElementById("data-div").innerHTML = "<h1>Classes stuff</h1>";
  	return true;
}

function displayEquipment() {
	console.log("Display equipment");
	document.getElementById("data-div").innerHTML = "<h1>Equipment stuff</h1>";
 	return true;
}