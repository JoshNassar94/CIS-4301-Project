#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select facility.facility as facilityname, 
		extract(month from checkin.checkindate) as month,
		count(checkin.personid)as count 
		from checkin, guest, facility 
		where guest.personid = checkin.personid 
		and checkin.facilityid = facility.facilityid 
		group by facility.facility, 
		extract(month from checkin.checkindate)
		order by facility.facility, month asc";

$statement = oci_parse($connection, $query);
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}

$info =(json_encode($rows));
echo($info);
oci_free_statement($statement);
oci_close($connection);
?>

