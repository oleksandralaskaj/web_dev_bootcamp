<?php
require_once "DB.php";
require_once "DB_functions.php";
require_once "Celebrity.php";

DB::connect('localhost', 'celebrities', 'root', '');

$query = "SELECT * FROM `celebrities` LIMIT 5";
$celebrities = DB::select($query, [], 'Celebrity');

$data = $celebrities[1];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
