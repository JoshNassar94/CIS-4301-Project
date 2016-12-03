#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select distinct trunc(et.transactiondate) as transactiondate, e.equipmenttype as equipmenttype,
		et.transactiontype as transactiontype
		from equipmenttransaction et, equipment e,
		(select personid from ufaffiliate where ufid=$ufid) q1
		where et.equipmentid=e.equipmentid
		and et.personid=q1.personid";
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

