<?php
require_once "DBBlackbox.php";
require_once "Song.php";

$song = new Song();

$song->name = $_POST['name'] ?? $song->name;
$song->author = $_POST['author'] ?? $song->author;
$song->length = $_POST['length'] ?? $song->length;
$song->album = $_POST['album'] ?? $song->album;

$id = insert($song);

echo "A new song {$song->name} by {$song->author} was inserted with id ". $id;
