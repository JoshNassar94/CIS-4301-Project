#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];
$class = strtolower($_POST['className']); 
$className = ucwords($class);
$class = strtoupper($_POST['classDate']); 
$classDate = ucwords($class);
$query = "select p.firstname as first, p.lastname as last, u.ufid as ufid
		from ufaffiliate u, classroster cr, class c,  person p, activity a
		where cr.classid=c.classid
		and c.activityid=a.activityid
		and cr.ufaffiliate=u.ufid
		and c.name='$className'
		and p.personid = u.personid
		and a.activitydate like '$classDate'
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

