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
	echo($_SESSION['userID']);
}
?>

