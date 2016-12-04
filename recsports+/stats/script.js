$(document).ready(function() {
  $.post("../isLoggedIn.php", {id: 0},
    function(data){
		if(data == -1){
		  window.location.href = "http://cise.ufl.edu/~jnassar/recsports+/";
		}
    });
});

function logout() {
  $.post("../logout.php",
    function(data){
      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+";
  });
  return true;
}

function convertMonth(month) {
	if(month == 1)
	  return "JAN";
	else if(month == 2)
	  return "FEB";
	else if(month == 3)
	  return "MAR";
	else if(month == 4)
	  return "APR";
	else if(month == 5)
	  return "MAY";
	else if(month == 6)
	  return "JUN";
	else if(month == 7)
	  return "JUL";
	else if(month == 8)
	  return "AUG";
	else if(month == 9)
	  return "SEP";
	else if(month == 10)
	  return "OCT";
	else if(month == 11)
	  return "NOV";
	else if(month == 12)
	  return "DEC";
}

function getCheckinsPerHour(data, hour) {
  for(var i=0; i<data.length; i++) {
    if(data[i]["HOUR"] == hour){
      return parseInt(data[i]["COUNT"]);
    }
  }
  return 0;
}


function displayFacilities() {
	document.getElementById("data-div-1").style.display = "block";
	document.getElementById("data-div-2").style.display = "none";
	document.getElementById("data-div-3").style.display = "none";
	document.getElementById("data-div-4").style.display = "none";
	document.getElementById("dropdown-div").style.display = "none";
	document.getElementById("dropdown-div-2").style.display = "none";
	document.getElementById("dropdown-div-3").style.display = "none";
	document.getElementById("dropdown-div-4").style.display = "none";
	document.getElementById("record-div").style.display = "none";
	document.getElementById("roster-div").style.display = "none";
	document.getElementById("data-div-1").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	$.post("./getFacilityData.php",
	  function(data){
	    data = JSON.parse(data);
	    htmlString = "<h3>Check-Ins per Facility per Month</h3>";
	    htmlString += "<table border='1'>";
	    htmlString += "<tr style='font-weight:bold'><td>Facility</td><td>Month</td><td>Checkins</td></tr>";
	    for(var i=0; i<data.length; i++){
	      var facility = data[i]["FACILITYNAME"];
	      var month = convertMonth(data[i]["MONTH"]);
	      var checkins = data[i]["COUNT"];
	      htmlString += "<tr><td>  "+facility+"  </td>";
	      htmlString += "<td>  "+month+"  </td>";
	      htmlString += "<td>  "+checkins+"  </td></tr>";
	    }
	    htmlString += "</table>";
	    document.getElementById("data-div-1").innerHTML = htmlString;
	  });
	
	
	$.post("./getHoursData.php",
	  function(data){
	    data = JSON.parse(data);
          var chart = new CanvasJS.Chart("data-div-2",{
	    animationEnabled: true,
	    title: {text: "Check-Ins per Hour"},
	    axisY:{
	      title: "Check-Ins"
	    },
	    axisX:{
	      title: "Hour"
	    },
	    data: [
	    {
	      type: "column",
	      indexLabel: "{y}",
	      dataPoints: [
	        {x: 7, y: getCheckinsPerHour(data, "07")},
	        {x: 8, y: getCheckinsPerHour(data, "08")},
	        {x: 9, y: getCheckinsPerHour(data, "09")},
	        {x: 10, y: getCheckinsPerHour(data, "10")},
	        {x: 11, y: getCheckinsPerHour(data, "11")},
	        {x: 12, y: getCheckinsPerHour(data, "12")},
	        {x: 13, y: getCheckinsPerHour(data, "13")},
	        {x: 14, y: getCheckinsPerHour(data, "14")},
	        {x: 15, y: getCheckinsPerHour(data, "15")},
	        {x: 16, y: getCheckinsPerHour(data, "16")},
	        {x: 17, y: getCheckinsPerHour(data, "17")},
	        {x: 18, y: getCheckinsPerHour(data, "18")},
	        {x: 19, y: getCheckinsPerHour(data, "19")},
	        {x: 20, y: getCheckinsPerHour(data, "20")},
	        {x: 21, y: getCheckinsPerHour(data, "21")}
	      ]
	    }
	    ]
	  });
	  document.getElementById("data-div-2").style.display = "block";
	  chart.render();
	  });

        return true;
}

function displayIntramurals() {
	document.getElementById("data-div-1").style.display = "block";
	document.getElementById("data-div-1").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	document.getElementById("data-div-2").style.display = "none";
	document.getElementById("data-div-3").style.display = "none";
	document.getElementById("data-div-4").style.display = "none";
	document.getElementById("dropdown-div-2").style.display = "none";
	document.getElementById("dropdown-div-3").style.display = "none";
	document.getElementById("dropdown-div-4").style.display = "none";
	document.getElementById("roster-div").style.display = "none";
	document.getElementById("record-div").style.display = "none";
	var htmlString = "";
	$.post("./getSportTypes.php",
	  function(data){
	    data = JSON.parse(data);
            htmlString += "<option value=' ' selected='selected'>Select Sport</option>";
	    for(var i=0; i < data.length; i++){
	      var sport = data[i]["SPORTTYPE"];
              htmlString += "<option value="+sport+">"+sport+"</option>";
	    }
	    document.getElementById("dropdown-options").innerHTML = htmlString;
	    document.getElementById("data-div-1").style.display = "none";
	    document.getElementById("dropdown-div").style.display = "block";
        });
  	return true;
}

function displayStandings() {
	document.getElementById("record-div").style.display = "block";
	document.getElementById("record-div").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	var elem = document.getElementById("dropdown-options");
	var sportType = elem.options[elem.selectedIndex].innerHTML;
	var htmlString = "<h2>League Standings</h2>";
	$.post("./getStandings.php", {sport: sportType},
	  function(data){
	    data = JSON.parse(data);
	    var myTeam = data[0]["MYTEAM"];
	    for(var i=0; i < data.length; i++){
	      var teamName = data[i]["NAME"];
	      var wins = data[i]["WINS"];
	      var losses = data[i]["LOSSES"];
	      if(teamName == myTeam)
	        htmlString += "<p style='font-weight:bold'>"+teamName+"&nbsp;&nbsp;&nbsp;&nbsp;"+wins+"-"+losses+"</p>";
	      else
	        htmlString += "<p>"+teamName+"&nbsp;&nbsp;&nbsp;&nbsp;"+wins+"-"+losses+"</p>";

	    }
	    document.getElementById("record-div").innerHTML = htmlString;
	    document.getElementById("record-div").style.display = "block";
	    document.getElementById("data-div-4").style.display = "none";
	});
	return true;
}

function displayPlayers(){
	document.getElementById("roster-div").style.display = "none";
	document.getElementById("record-div").style.display = "block";
	document.getElementById("record-div").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	var elem = document.getElementById("dropdown-options-2");
	var teamName = elem.options[elem.selectedIndex].innerHTML;
	var elem = document.getElementById("dropdown-options");
	var sportType = elem.options[elem.selectedIndex].innerHTML;
	var recordString = "<h2>Record</h2>";
	var rosterString = "<h2>Roster</h2>";
	$.post("./getRecord.php", {team: teamName, sport: sportType},
	  function(data){
	  data = JSON.parse(data);
	  for(var i=0; i<data.length; i++){
	    var wins = data[i]["WINS"];
	    var losses = data[i]["LOSSES"];
	    recordString += "<p>"+wins+"-"+losses+"</p>";
	  }
	  document.getElementById("record-div").innerHTML = recordString;
	});
	$.post("./getPlayers.php", {team: teamName, sport: sportType},
	  function(data){
	  data = JSON.parse(data);
	  for(var i=0; i<data.length; i++){
	    var first = data[i]["FIRST"];
	    var last = data[i]["LAST"];
	    var ufid = data[i]["UFID"];
	    rosterString += "<p>"+first+" "+last+" - "+ufid+"</p>";
	  }
	document.getElementById("roster-div").style.display = "block";
	  document.getElementById("roster-div").innerHTML = rosterString;
	});
	return true;
}

function displayClasses() {
	document.getElementById("data-div-1").style.display = "block";
	document.getElementById("data-div-1").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	document.getElementById("data-div-2").style.display = "none";
	document.getElementById("data-div-3").style.display = "none";
	document.getElementById("data-div-4").style.display = "none";
	document.getElementById("dropdown-div").style.display = "none";
	document.getElementById("dropdown-div-2").style.display = "none";
	document.getElementById("roster-div").style.display = "none";
	var htmlString = "";
	$.post("./getClasses.php",
	  function(data){
	    data = JSON.parse(data);
            htmlString += "<option value=' ' selected='selected'>Select Class</option>";
	    for(var i=0; i < data.length; i++){
	      var className = data[i]["CLASSNAME"];
              htmlString += "<option value="+className+">"+className+"</option>";
	    }
	    document.getElementById("dropdown-options-3").innerHTML = htmlString;
	    document.getElementById("data-div-1").style.display = "none";
	    document.getElementById("dropdown-div-3").style.display = "block";
        });
  	return true;
}

function displayTeams() {
	document.getElementById("data-div-4").style.display = "block";
	document.getElementById("data-div-4").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	var elem = document.getElementById("dropdown-options");
	var sportType = elem.options[elem.selectedIndex].innerHTML;
	var htmlString = "";
	$.post("./getTeams.php", {sport: sportType},
	  function(data){
	    data = JSON.parse(data);
            htmlString += "<option value=' ' selected='selected'>Select Team</option>";
	    for(var i=0; i < data.length; i++){
	      var teamName = data[i]["NAME"];
              htmlString += "<option value="+teamName+">"+teamName+"</option>";
	    }
	    document.getElementById("dropdown-options-2").innerHTML = htmlString;
	    document.getElementById("dropdown-div-2").style.display = "block";
	    document.getElementById("data-div-4").style.display = "none";
	});
	return true;
}

function displayClassDates(){
	document.getElementById("data-div-5").style.display = "block";
	document.getElementById("data-div-5").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	var elem = document.getElementById("dropdown-options-3");
	var className = elem.options[elem.selectedIndex].innerHTML;
	var htmlString = "";
	$.post("./getClassDates.php", {className: className},
	  function(data){
	    data = JSON.parse(data);
            htmlString += "<option value=' ' selected='selected'>Select Date</option>";
	    for(var i=0; i < data.length; i++){
	      var classDate = data[i]["ACTIVITYDATE"];
              htmlString += "<option value="+classDate+">"+classDate+"</option>";
	    }
	    document.getElementById("dropdown-options-4").innerHTML = htmlString;
	    document.getElementById("dropdown-div-4").style.display = "block";
	    document.getElementById("data-div-5").style.display = "none";
	});
	return true;
}
function displayClassRoster(){
	document.getElementById("record-div").style.display = "block";
	document.getElementById("record-div").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	var elem = document.getElementById("dropdown-options-3");
	var className = elem.options[elem.selectedIndex].innerHTML;
	var elem = document.getElementById("dropdown-options-4");
	var classDate = elem.options[elem.selectedIndex].innerHTML;
	var rosterString = "<h2>Roster</h2>";
	$.post("./getClassRoster.php", {className: className, classDate: classDate},
	  function(data){
	  data = JSON.parse(data);
	  for(var i=0; i<data.length; i++){
	    var first = data[i]["FIRST"];
	    var last = data[i]["LAST"];
	    var ufid = data[i]["UFID"];
	    rosterString += "<p>"+first+" "+last+" - "+ufid+"</p>";
	  }
	document.getElementById("record-div").style.display = "block";
	document.getElementById("record-div").innerHTML = rosterString;
	});
	return true;
}


function displayEquipment() {
	document.getElementById("data-div-1").style.display = "block";
	document.getElementById("data-div-1").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	document.getElementById("data-div-2").style.display = "none";
	document.getElementById("data-div-3").style.display = "none";
	document.getElementById("data-div-4").style.display = "none";
	document.getElementById("dropdown-div-2").style.display = "none";
	document.getElementById("dropdown-div-3").style.display = "none";
	document.getElementById("dropdown-div-4").style.display = "none";
	document.getElementById("roster-div").style.display = "none";
	document.getElementById("record-div").style.display = "none";
	var htmlString2 = "<h3>Equipment Checkouts & Returns</h3>";
	htmlString2 += "<table border='1'>";
	$.post("./getEquipmentTransactions.php",
	  function(data){
	    data = JSON.parse(data);
	    for(var i=0; i<data.length; i++){
              var date = data[i]["TRANSACTIONDATE"];
	      var equip = data[i]["EQUIPMENTTYPE"];
	      var trans = data[i]["TRANSACTIONTYPE"];
	      htmlString2 += "<tr><td>"+date+"</td>";
	      htmlString2 += "<td>"+equip+"</td>";
	      if(trans == 'I')
	        trans = "Returned";
	      else
	        trans = "Checkout";
	      htmlString2 += "<td>"+trans+"</td></tr>";
	    }
	    document.getElementById("data-div-1").innerHTML = htmlString2;
	    document.getElementById("data-div-1").style.display = "block";
        });
 	return true;
}

