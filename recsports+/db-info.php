#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select * from
		(select count(*) as activitycount from activity) q1,
		(select count(*) as checkincount from checkin) q2,
		(select count(*) as classcount from class) q3,
		(select count(*) as classrostercount from classroster) q4,
		(select count(*) as equipmentcount from equipment) q5,
		(select count(*) as equipmenttransactioncount from equipmenttransaction) q6,
		(select count(*) as facilitycount from facility) q7,
		(select count(*) as guestcount from guest) q8,
		(select count(*) as intramuralgamecount from intramuralgame) q9,
		(select count(*) as intramuralteamcount from intramuralteam) q10,
		(select count(*) as personcount from person) q12,
		(select count(*) as ufaffiliatecount from ufaffiliate) q13";

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
