#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];
$sport= strtolower($_POST['sport']); 
$sportType = ucwords($sport);
$team = strtolower($_POST['team']); 
$teamName = ucwords($team);
$query="select distinct it.wins as wins, it.losses as losses
	from intramuralteamroster itr, intramuralteam it
	where it.teamid=itr.teamid
	and it.name='$teamName'
	and it.sporttype='$sportType'";

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


