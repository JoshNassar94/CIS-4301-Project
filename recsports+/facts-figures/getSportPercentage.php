#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');

$query = "select count1sport/(select count(ufid) from ufaffiliate) sport1percentage, 
		count2sport/(select count(ufid) from ufaffiliate) sport2percentage 
		from (select * 
		
		from (select count(ufaffiliate) count1sport  
		from  (select ufaffiliate, count(sporttype) 
		from intramuralteamroster, intramuralteam 
		where intramuralteamroster.teamid = intramuralteam.teamid 
		group by ufaffiliate 
		having count(sporttype) = 1)) onesport, 

		(select count(ufaffiliate) count2sport  
		from  (select ufaffiliate, count(sporttype) 
		from intramuralteamroster, intramuralteam 
		where intramuralteamroster.teamid = intramuralteam.teamid 
		group by ufaffiliate 
		having count(sporttype) = 2)) twosport)";

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
