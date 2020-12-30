<?php

$bdd = new PDO('mysql:host=db5001403518.hosting-data.io;dbname=dbs1185947', 'dbu549200', 'Inazumaps4@');

$heure = date("H:i");

$req = $bdd->query("INSERT INTO vues(heure) values('$heure')");

?>