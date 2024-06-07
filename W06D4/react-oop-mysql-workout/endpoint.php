<?php
require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Game.php';

DB::connect("localhost", 'games','root', '');

$params_of_request = $_GET;
$query = "SELECT * FROM games ";
!isset($params_of_request["orderby"])?: $query .= "ORDER BY {$params_of_request["orderby"]} ";
!isset($params_of_request["mode"])?: $query .= $params_of_request["mode"];

$result = DB::select($query, [], 'Game');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);