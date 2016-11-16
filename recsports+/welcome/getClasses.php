#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];

$query = "select * from(
		select c.name as cname, count(c.name) as count 
		from class c, classroster cr, ufaffiliate u 
		where u.ufid=$ufid 
		and cr.ufaffiliate=u.ufid 
		and cr.classid=c.classid 
		group by c.name
		order by count(c.name) desc)
		where rownum <= 6";

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

