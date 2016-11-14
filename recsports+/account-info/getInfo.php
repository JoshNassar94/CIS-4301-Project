#!/usr/local/bin/php
<?php
session_start();

if (!isset($_SESSION['userID'])){
      echo(-1);
}
else if(empty($_SESSION['userID'])){
  echo(-1);
}
else{
  $connection = oci_connect($username = 'jnassar',
                          $password = 'Theitis94',
  $connection_string = '//oracle.cise.ufl.edu/orcl');
  $ufid= $_SESSION['userID'];

  $query = "Select p.firstname, p.lastname, u.email, u.phonenumber, u.passwordhash 
	  	from ufaffiliate u 
		join person p on u.personid=p.personid 
		where ufid=$ufid";

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
}
?>
