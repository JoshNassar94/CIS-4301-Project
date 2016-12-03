#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select distinct sporttype
		from intramuralteam it, intramuralteamroster itr
		where itr.ufaffiliate=$ufid
		and itr.teamid=it.teamid
		order by sporttype asc";

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


