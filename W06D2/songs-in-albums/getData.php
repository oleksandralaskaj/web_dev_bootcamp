<?php
require_once "helper.php";
start_session();

$id = $_GET['id'] ?? null;

$form_title = $id ? "EDIT SONG #{$id}" : "INSERT A NEW SONG";
$url = $id ? "saveData.php?id={$id}" : "saveData.php";
$button_text = $id ? "save changes" : "insert new song";

$song = $id ? find($id, 'Song') : new Song();

?>
<h1><?= $form_title ?></h1>
<form action="<?= $url ?>" method="post">
    TITLE:
    <br>
    <input type="text" name="title" value="<?= $song->title ?>">
    <br>
    ARTIST:
    <br>
    <input type="text" name="artist" value="<?= $song->artist ?>">
    <br>
    ALBUM:
    <br>
    <input type="text" name="album" value="<?= $song->album ?>">
    <br>
    YEAR:
    <br>
    <input type="number" name="year" value="<?= $song->year ?>">
    <br>
    LENGTH:
    <br>
    <input type="number" name="length" value="<?= $song->length ?>">
    <br>
    <br>
    <button type="submit"><?= $button_text ?>

</form>
