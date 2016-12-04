$(document).ready(function() {
  $.post("./db-info.php",
    function(data){
      data = JSON.parse(data);
      var htmlString = "<h1>Tuples per table</h1>";
      htmlString += "<p>Activity: "+data[0]["ACTIVITYCOUNT"]+"</p>";
      htmlString += "<p>Checkin: "+data[0]["CHECKINCOUNT"]+"</p>";
      htmlString += "<p>Class: "+data[0]["CLASSCOUNT"]+"</p>";
      htmlString += "<p>ClassRoster: "+data[0]["CLASSROSTERCOUNT"]+"</p>";
      htmlString += "<p>Equipment: "+data[0]["EQUIPMENTCOUNT"]+"</p>";
      htmlString += "<p>EquipmentTransaction: "+data[0]["EQUIPMENTTRANSACTIONCOUNT"]+"</p>";
      htmlString += "<p>Facility: "+data[0]["FACILITYCOUNT"]+"</p>";
      htmlString += "<p>Guest: "+data[0]["GUESTCOUNT"]+"</p>";
      htmlString += "<p>IntramuralGame: "+data[0]["INTRAMURALGAMECOUNT"]+"</p>";
      htmlString += "<p>IntramuralTeam: "+data[0]["INTRAMURALTEAMCOUNT"]+"</p>";
      htmlString += "<p>Person: "+data[0]["PERSONCOUNT"]+"</p>";
      htmlString += "<p>UfAffiliate: "+data[0]["UFAFFILIATECOUNT"]+"</p>";
      document.getElementById("data").innerHTML = htmlString;
    });
});

