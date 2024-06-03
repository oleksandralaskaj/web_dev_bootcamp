<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$id = $_GET['id'];
$data = $_POST;
$artist = find($id, 'Artist');

$artist->first_name = $data['first_name'] ?? $artist->first_name;
$artist->last_name = $data['last_name'] ?? $artist->last_name;
$artist->year_of_birth = $data['year_of_birth'] ?? $artist->year_of_birth;
$artist->genre = $data['genre'] ?? $artist->genre;

$new_item_id = update($id, $artist);

echo "Artist {$artist->first_name} {$artist->last_name} ({$artist->year_of_birth}, {$artist->genre})  was updated.";