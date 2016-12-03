#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select round(checkouts/days,2) as average, etype from(
		select count(distinct trunc(et.transactiondate)) as days, count(et.transactionid) as checkouts,
		e.equipmenttype as etype
		from equipmenttransaction et, equipment e
		where transactiontype='O'
		and et.equipmentid=e.equipmentid
		group by e.equipmenttype)";

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

