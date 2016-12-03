#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select distinct c.name as classname
		from class c, classroster cr
		where c.classid=cr.classid
		and cr.ufaffiliate=$ufid
		order by c.name asc";

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
