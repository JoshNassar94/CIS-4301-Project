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
	document.getElementById("data-div").innerHTML = "<center><img src='img/loading.gif' width='10%'></center>";
	$.post("./getFacilityData.php",
	  function(data){
	    data = JSON.parse(data);
          var chart = new CanvasJS.Chart("data-div",{
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
