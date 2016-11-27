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

function logout() {
  $.post("../logout.php",
    function(data){
      window.location.href = "http://cise.ufl.edu/~jnassar/recsports+";
  });
  return true;
}


function displayFacilities() {
	document.getElementById("data-div-1").style.display = "block";
	document.getElementById("data-div-2").style.display = "block";
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
          var chart = new CanvasJS.Chart("data-div-1",{
	    animationEnabled: true,
	    title: {text: "Check-Ins per Facility by Month"},
	    axisY:{
	      maximum: 1100,
	      minimum: 900,
	      title: "Check-Ins"
	    },
	    axisX:{
	      title: "Month"
	    },
	    height: 400,
	    data: [
	    {
	      type: "line",
	      name: data[0]["FACILITYNAME"],
	      showInLegend: true,
	      dataPoints: [
	        {x: 1, y: parseInt(data[0]["COUNT"])},
	        {x: 2, y: parseInt(data[1]["COUNT"])},
	        {x: 3, y: parseInt(data[2]["COUNT"])},
	        {x: 4, y: parseInt(data[3]["COUNT"])},
	        {x: 5, y: parseInt(data[4]["COUNT"])},
	        {x: 6, y: parseInt(data[5]["COUNT"])},
	        {x: 7, y: parseInt(data[6]["COUNT"])},
	        {x: 8, y: parseInt(data[7]["COUNT"])},
	        {x: 9, y: parseInt(data[8]["COUNT"])},
	        {x: 10, y: parseInt(data[9]["COUNT"])},
	        {x: 11, y: parseInt(data[10]["COUNT"])},
	        {x: 12, y: parseInt(data[11]["COUNT"])}
	      ]
	    },
	    {
	      type: "line",
	      name: data[12]["FACILITYNAME"],
	      showInLegend: true,
	      dataPoints: [
	        {x: 1, y: parseInt(data[12]["COUNT"])},
	        {x: 2, y: parseInt(data[13]["COUNT"])},
	        {x: 3, y: parseInt(data[14]["COUNT"])},
	        {x: 4, y: parseInt(data[15]["COUNT"])},
	        {x: 5, y: parseInt(data[16]["COUNT"])},
	        {x: 6, y: parseInt(data[17]["COUNT"])},
	        {x: 7, y: parseInt(data[18]["COUNT"])},
	        {x: 8, y: parseInt(data[19]["COUNT"])},
	        {x: 9, y: parseInt(data[20]["COUNT"])},
	        {x: 10, y: parseInt(data[21]["COUNT"])},
	        {x: 11, y: parseInt(data[22]["COUNT"])},
	        {x: 12, y: parseInt(data[23]["COUNT"])}
	      ]
	    },
	    {
	      type: "line",
	      name: data[24]["FACILITYNAME"],
	      showInLegend: true,
	      dataPoints: [
	        {x: 1, y: parseInt(data[24]["COUNT"])},
	        {x: 2, y: parseInt(data[25]["COUNT"])},
	        {x: 3, y: parseInt(data[26]["COUNT"])},
	        {x: 4, y: parseInt(data[27]["COUNT"])},
	        {x: 5, y: parseInt(data[28]["COUNT"])},
	        {x: 6, y: parseInt(data[29]["COUNT"])},
	        {x: 7, y: parseInt(data[30]["COUNT"])},
	        {x: 8, y: parseInt(data[31]["COUNT"])},
	        {x: 9, y: parseInt(data[32]["COUNT"])},
	        {x: 10, y: parseInt(data[33]["COUNT"])},
	        {x: 11, y: parseInt(data[34]["COUNT"])},
	        {x: 12, y: parseInt(data[35]["COUNT"])}
	      ]
	    },
	    {
	      type: "line",
	      name: data[36]["FACILITYNAME"],
	      showInLegend: true,
	      dataPoints: [
	        {x: 1, y: parseInt(data[36]["COUNT"])},
	        {x: 2, y: parseInt(data[37]["COUNT"])},
	        {x: 3, y: parseInt(data[38]["COUNT"])},
	        {x: 4, y: parseInt(data[39]["COUNT"])},
	        {x: 5, y: parseInt(data[40]["COUNT"])},
	        {x: 6, y: parseInt(data[41]["COUNT"])},
	        {x: 7, y: parseInt(data[42]["COUNT"])},
	        {x: 8, y: parseInt(data[43]["COUNT"])},
	        {x: 9, y: parseInt(data[44]["COUNT"])},
	        {x: 10, y: parseInt(data[45]["COUNT"])},
	        {x: 11, y: parseInt(data[46]["COUNT"])},
	        {x: 12, y: parseInt(data[47]["COUNT"])}
	      ]
	    },
	    {
	      type: "line",
	      name: data[48]["FACILITYNAME"],
	      showInLegend: true,
	      dataPoints: [
	        {x: 1, y: parseInt(data[48]["COUNT"])},
	        {x: 2, y: parseInt(data[49]["COUNT"])},
	        {x: 3, y: parseInt(data[50]["COUNT"])},
	        {x: 4, y: parseInt(data[51]["COUNT"])},
	        {x: 5, y: parseInt(data[52]["COUNT"])},
	        {x: 6, y: parseInt(data[53]["COUNT"])},
	        {x: 7, y: parseInt(data[54]["COUNT"])},
	        {x: 8, y: parseInt(data[55]["COUNT"])},
	        {x: 9, y: parseInt(data[56]["COUNT"])},
	        {x: 10, y: parseInt(data[57]["COUNT"])},
	        {x: 11, y: parseInt(data[58]["COUNT"])},
	        {x: 12, y: parseInt(data[59]["COUNT"])}
	      ]
	    }
	    ]
	  });
	  chart.render();
	  });


	$.post("./getHoursData.php",
	  function(data){
	    data = JSON.parse(data);
          var chart = new CanvasJS.Chart("data-div-2",{
	    animationEnabled: true,
	    title: {text: "Check-Ins per Hour"},
	    axisY:{
	      maximum: 2500,
	      minimum: 3500,
	      title: "Check-Ins"
	    },
	    axisX:{
	      title: "Hour"
	    },
	    height: 400,
	    data: [
	    {
	      type: "column",
	      indexLabel: "{y}",
	      name: data[0]["HOUR"],
	      dataPoints: [
	        {x: 7, y: parseInt(data[0]["COUNT"])},
	        {x: 8, y: parseInt(data[1]["COUNT"])},
	        {x: 9, y: parseInt(data[2]["COUNT"])},
	        {x: 10, y: parseInt(data[3]["COUNT"])},
	        {x: 11, y: parseInt(data[4]["COUNT"])},
	        {x: 12, y: parseInt(data[5]["COUNT"])},
	        {x: 13, y: parseInt(data[6]["COUNT"])},
	        {x: 14, y: parseInt(data[7]["COUNT"])},
	        {x: 15, y: parseInt(data[8]["COUNT"])},
	        {x: 16, y: parseInt(data[9]["COUNT"])},
	        {x: 17, y: parseInt(data[10]["COUNT"])},
	        {x: 18, y: parseInt(data[11]["COUNT"])},
	        {x: 19, y: parseInt(data[12]["COUNT"])},
	        {x: 20, y: parseInt(data[13]["COUNT"])},
	        {x: 21, y: parseInt(data[14]["COUNT"])}
	      ]
	    }
	    ]
	  });
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
	      console.log(teamName+"    "+myTeam);
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

