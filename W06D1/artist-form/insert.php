<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$artist = new Artist();
$data = $_POST;


$artist->first_name = $data['first_name'] ?? $artist->first_name;
$artist->last_name = $data['last_name'] ?? $artist->last_name;
$artist->year_of_birth = $data['year_of_birth'] ?? $artist->year_of_birth;
$artist->genre = $data['genre'] ?? $artist->genre;

$new_item_id = insert($artist);

echo "New artist {$artist->first_name} {$artist->last_name} was inserted into database." . "<br> <a href='home.php'>Home</a> <br> <a href='create.php'>Create another artist</a>";
