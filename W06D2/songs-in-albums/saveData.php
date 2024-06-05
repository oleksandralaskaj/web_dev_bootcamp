<?php
require_once "helper.php";
start_session();

$id = $_GET['id'] ?? null;
$data = $_POST;
$song = $id ? find($id, 'Song') : new Song();

$song->title = $_POST["title"] ?? $song->title;
$song->artist = $_POST["artist"] ?? $song->artist;
$song->album = $_POST["album"] ?? $song->album;
$song->year = $_POST["year"] ?? $song->year;
$song->length = $_POST["length"] ?? $song->length;

!$id ? $id = insert($song) : update($id, $song);

header('Location: getData.php?id=' . $id);