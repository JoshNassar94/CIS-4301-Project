$(document).ready(function() {
  $.post("../isLoggedIn.php", {id: 0},
    function(data){
      console.log("Logged in as: "+data);
	if(data == -1){
	  console.log("Not logged in");
	  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
	}
    });
    
  document.getElementById("favorite-classes-div").innerHTML = "<center><img src='img/loading.gif' width='30%'></center>";
  document.getElementById("results-div").innerHTML = "<center><img src='img/loading.gif' width='30%'></center>";

  $.post("getResults.php",
    function(data){
    	var htmlString = "";
	data = (JSON.parse(data));
	for(var i=0; i < data.length; i++){
	  var team1Name = data[i]["TEAMNAME"];
	  var team2Name = data[i]["OPPONENTNAME"];
	  var team1Score = 0;
	  if(data[i]["TEAMNAME"] === data[i]["TEAM1NAME"]){
	  	team1Score = data[i]["TEAM1SCORE"];
	      team2Score = data[i]["TEAM2SCORE"];
	  }
	  else{
	  	team1Score = data[i]["TEAM2SCORE"];
	      team2Score = data[i]["TEAM1SCORE"];
	  }
	  var sportType = data[i]["SPORT"];
	  var win = 0;
	  if(parseInt(team1Score) > parseInt(team2Score))
	  	win = 1;
	  if(win > 0)
	    htmlString += "<h3>"+sportType+" - W</h3>";
	  else
	    htmlString += "<h3>"+sportType+" - L</h3>";
	  htmlString += "<p>"+team1Name+": "+team1Score+"</p>";
	  htmlString += "<p>"+team2Name+": "+team2Score+"</p>";
	  htmlString += "<br>";
	}
	document.getElementById("results-div").innerHTML = htmlString;

    });

  $.post("getClasses.php",
    function(data){
    	var htmlString = "";
	data = (JSON.parse(data));
	for(var i=0; i < data.length; i++){
	  htmlString += "<h3>"+data[i]["CNAME"]+"</h3>";
	  htmlString += "<p>Attended "+data[i]["COUNT"]+" times</p>";
	  htmlString += "<br>";
	}
	document.getElementById("favorite-classes-div").innerHTML = htmlString;
    });
});

function logout() {
  $.post("../logout.php",
    function(data){
      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+";
  });
  return true;
}

