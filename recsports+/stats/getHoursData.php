#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select count(c.checkinid) as count, to_char(c.checkindate, 'hh24') as hour 
		from checkin c, facility f,
		(select personid from ufaffiliate where ufid=$ufid) q1
		where f.facilityid=c.facilityid 
		and c.personid=q1.personid
		group by to_char(c.checkindate, 'hh24')
		order by to_char(c.checkindate, 'hh24') asc";

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
