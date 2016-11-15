#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select * from(
		select g.sporttype as sport, a.activitydate as gamedate, t.name as teamname, 
		t2.name as opponentname, g.team1score as team1score, g.team2score as team2score, 
		t3.name as team1name 
		from intramuralgame g, intramuralteamroster r, activity a, intramuralteam t, 
		intramuralteam t2, intramuralteam t3 
		where r.ufaffiliate=$ufid 
		and (r.teamid=g.team1id or r.teamid=team2id) 
		and a.activityid=g.activityid 
		and t.teamid=r.teamid 
		and t2.teamid <> r.teamid 
		and (t2.teamid=g.team1id or t2.teamid=g.team2id) 
		and t3.teamid=g.team1id 
		order by a.activitydate desc)
		where rownum <= 5";

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
