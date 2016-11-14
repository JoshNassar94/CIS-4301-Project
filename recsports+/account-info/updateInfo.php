#!/usr/local/bin/php
<?php
session_start();
$connection = oci_connect($username = 'jnassar',
                        $password = 'Theitis94',
$connection_string = '//oracle.cise.ufl.edu/orcl');
$currPW = $_POST['currPW'];
$newEmail = $_POST['email'];
$newPhone = $_POST['phone'];
$newPW = $_POST['newPW'];
$ufid= $_SESSION['userID'];
$password = $_SESSION['password'];

$query = "update ufaffiliate set";
if($currPW != $password){
  echo(-1);
}
else{
  $count = 0;

  if(strlen($newEmail) > 0){
    $query .= " email='$newEmail'";
    $count += 1;
  }
  
  if(strlen($newPhone) > 0){
    if($count > 0)
      $query .= ",";

    $query .= " phonenumber='$newPhone'";
    $count += 1;
  }

  if(strlen($newPW) > 0){
    if($count > 0)
      $query .= ",";
    $query .= " passwordhash='$newPW'";
    $count += 1;
  }

  $query .= " where ufid=$ufid";
  $_SESSION['password'] = $newPW;
  if($count > 0){
    $statement = oci_parse($connection, $query);
    oci_execute($statement);
  }
}
oci_free_statement($statement);
oci_close($connection);
?>

