<?php

require_once "DB.php";
require_once "DB_functions.php";

require_once "City.php";

$success = DB::connect('localhost', 'world', 'root', '');

// the data about the city being built is in $_POST
$city_data = $_POST;

// modify the class City so it can be used with the DB library
$city = new City;

// make sure the $city has the property it needs to have

$city->insert();