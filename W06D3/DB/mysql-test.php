<?php
require_once "DB.php";
require_once "DB_functions.php";
require_once "Country.php";

$success = connect('localhost', 'world', 'root', '');

$results = select('SELECT * FROM `countries` WHERE `population` > 20000000', [], 'Country');
var_dump($results);