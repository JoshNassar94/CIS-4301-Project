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
$query = "select p.firstname as first, p.lastname as last, u.ufid as ufid
		from ufaffiliate u, intramuralteamroster itr, intramuralteam it, person p
		where it.teamid=itr.teamid
		and itr.ufaffiliate=u.ufid
		and it.name='$teamName'
		and p.personid = u.personid
		and it.sporttype='$sportType'
		order by p.firstname asc";
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

