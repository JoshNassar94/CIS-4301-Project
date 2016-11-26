#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_SESSION['userID'];
$class = strtolower($_POST['className']); 
$className = ucwords($class);

$query ="select a.activitydate as activitydate
		from activity a, class c
		where c.name='$className'
		and c.activityid=a.activityid
		order by a.activitydate desc";

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

