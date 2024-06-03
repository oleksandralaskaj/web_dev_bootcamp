<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$artist = new Artist();
$data = $_GET;

$artist->first_name = $data['first_name'] ?? null;
$artist->last_name = $data['last_name'] ?? null;
$artist->year_of_birth = $data['year_of_birth'] ?? null;
$artist->genre = $data['genre'] ?? null;

$new_item_id = insert($artist);

echo "New artist {$artist->first_name} {$artist->last_name} was inserted into database.";
