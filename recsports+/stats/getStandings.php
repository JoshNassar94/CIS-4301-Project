#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];
$sport = strtolower($_POST['sport']); 
$sportType = ucwords($sport);
$query = "select distinct name, wins, losses, wins/losses as ratio, myTeam
		from intramuralteam,
		(select name as myTeam 
		from intramuralteam it, intramuralteamroster itr
		where it.teamid=itr.teamid
		and itr.ufaffiliate=$ufid
		and sporttype='$sportType')
		where sporttype='$sportType'
		order by ratio desc"; 
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
