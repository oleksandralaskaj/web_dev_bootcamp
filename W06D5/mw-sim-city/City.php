<?php

require_once "DB.php";
require_once "DB_functions.php";
$success = DB::connect('localhost', 'world', 'root', '');

class City
{
    public static function  insert($data)
    {
        $query = "INSERT INTO sim_cities (name, country_id, district, population) VALUES (?, ?, ?, ?)";
        DB::insert($query, [$data['name'], $data['country_id'], $data['district'], $data['population']]);
    }
}