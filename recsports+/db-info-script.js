$(document).ready(function() {
  $.post("../db-info.php", {id: 0},
    function(data){
 		console.log(data);
 		document.getElementById("results-div").innerHTML = "<center><img src='img/loading.gif' width='30%'></center>";
	}
    });
});
