#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select sporttype, count(*)/(select count(*) 
		from IntramuralTeamRoster inner join
		UfAffiliate on IntramuralTeamRoster.UfAffiliate  = UfAffiliate.ufid) Percentage 
		from (select * from IntramuralTeamRoster inner join UfAffiliate on 
		IntramuralTeamRoster.UfAffiliate  = UfAffiliate.ufid) x join IntramuralTeam 
		on IntramuralTeam.TeamID = x.TeamID 
		group by sporttype";

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

