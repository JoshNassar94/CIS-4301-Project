#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select count(c.checkinid) as count, f.facility as facilityName, 
	extract(month from c.checkindate) as month 
	from checkin c, facility f 
      	where f.facilityid=c.facilityid 
      	group by f.facility, extract(month from c.checkindate)
      	order by f.facility, extract(month from c.checkindate) asc";
$query= "select count(c.checkinid) as count, f.facility as facilityName, 
		extract(month from c.checkindate) as month 
		from checkin c, facility f,
		(select personid from ufaffiliate where ufid=$ufid) q1
		where f.facilityid=c.facilityid 
		and c.personid=q1.personid
		group by f.facility, extract(month from c.checkindate)
		order by f.facility, extract(month from c.checkindate) asc";

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
