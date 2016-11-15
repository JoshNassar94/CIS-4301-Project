#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                          $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_POST['ufid'];
$password = $_POST['password1'];

$statement = oci_parse($connection, "SELECT affiliation FROM UfAffiliate where ufid='$ufid' and passwordhash='$password'");
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}

if(count($rows) > 0){
  session_start();
  $_SESSION['userID'] = $ufid;
  $_SESSION['password'] = $password;
  if($rows[0]['AFFILIATION'] == 'E'){
    echo 2;
  }
  else{
    echo 1;
  }
}
else{
  echo 0;
}

//Save this in here for reference, don't need it now
//$locations =(json_encode($rows));
oci_free_statement($statement);
oci_close($connection);
?>
