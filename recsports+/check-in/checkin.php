#!/usr/local/bin/php
<?php
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$ufid= $_POST['ufid'];
$equipID = $_POST['equipID'];
$quality = $_POST['quality'];
if($ufid == '' || $equipID == '' || $quality == ''){
  echo(2);
  return;
}

$query = "select transactionid from (select transactionid from equipmenttransaction 
		order by transactionid desc)
		where rownum <= 1";
$statement = oci_parse($connection, $query); 
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}
$transactionid = (int)($rows[0]['TRANSACTIONID']) + 1;

$query = "select personid from ufaffiliate where ufid=$ufid";
$statement = oci_parse($connection, $query); 
oci_execute($statement);
$rows = array();
while($r = oci_fetch_assoc($statement)) {
  $rows[] = $r;
}

if(count($rows) > 0){
  $personid = $rows[0]['PERSONID'];
  
  $query = "insert into equipmenttransaction values
  		($transactionid, $equipID, $personid, CURRENT_TIMESTAMP, 'O')";
  $statement = oci_parse($connection, $query); 
  oci_execute($statement);

  $query = "update equipment set equipmentcondition='$quality',
  		equipmentstatus='O'
		where equipmentid=$equipID";
  echo($query);
  $statement = oci_parse($connection, $query); 
  oci_execute($statement);
  echo(1);
}
else{
  echo(0);
}

oci_free_statement($statement);
oci_close($connection);
?>
