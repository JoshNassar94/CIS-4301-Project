#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_POST['ufid'];
$password = $_POST['password'];
$location = $_POST['loc'];
if($location == '')
  echo(3);

$query = "select checkinid from (select checkinid from checkin order by checkinid desc)
		where rownum <= 1";
$statement = oci_parse($connection, $query); 
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}
$checkinid = (int)($rows[0]['CHECKINID']) + 1;

$query = "select personid from ufaffiliate where ufid=$ufid and passwordhash='$password'";
$statement = oci_parse($connection, $query); 
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}

if(count($rows) > 0){
  $personid = $rows[0]['PERSONID'];
  
  $query = "select facilityid from facility where facility='$location'";
  $statement = oci_parse($connection, $query); 
  oci_execute($statement);
  $rows = array();
  while($r = oci_fetch_assoc($statement)) {
    $rows[] = $r;
  }
  if(count($rows) > 0){
    $facilityid = $rows[0]['FACILITYID'];

    $query = "insert into checkin
    		(checkinid, personid, checkindate, facilityid)
		values
		($checkinid, $personid, CURRENT_TIMESTAMP, $facilityid)";
    $statement = oci_parse($connection, $query); 
    oci_execute($statement);
    echo(1);
  }
  else{
    echo(2);
  }

}
else{
  echo(0);
}
oci_free_statement($statement);
oci_close($connection);
?>


