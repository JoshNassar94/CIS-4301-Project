#!/usr/local/bin/php
#put this file in your public_html folder
#look at the following sites for how to do this
#cise.ufl.edu/content/web-information
#cise.ufl.edu/help/web/php
#cise.ufl.edu/help/web/creating
#don't forget the htcaccess file
#don't forget to make this file readable
<?php
$query=$_POST['query'];
#params: username, password, db name
#replace with your own oracle username and password
$conn = oci_connect('jnassar', 'Theitis94', 'oracle.cise.ufl.edu/orcl');

if(!$conn){
   $e = oci_error();
   trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, $query);
$r = oci_execute($stid);
oci_free_statement($stid);
oci_close($conn);
?>

