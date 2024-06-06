<?php
require_once "bootstrap.php";

$id = $_GET['id'] ?? null;
$data = $_POST;
var_dump($data["name"]);
var_dump($id);

$query_insert = "
    INSERT INTO `continents` (`name`) VALUES (?)";

$query_update = "
    UPDATE `continents`
    SET `name` = ?
    WHERE `id` = ?";

if ($id) {
    DB::update($query_update, [$data["name"], $id]);
    session()->flash('success_message', "Successfully updated continent with id {$id}");
} else {
    DB::insert($query_insert, [$data["name"]]);
    $id = DB::getPdo()->lastInsertId();
    session()->flash('success_message', "Continent {$data["name"]} was inserted under id {$id}");
}


header('Location: /W06D4/countries/edit.php?id=' . $id);
