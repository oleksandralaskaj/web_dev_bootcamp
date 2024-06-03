<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$id = $_GET['id'];
$artist = find($id, 'Artist');

?>

<h1>EDIT ARTIST <?= $artist->first_name ?> <?= $artist->last_name ?></h1>
<form action="update.php?id= <?= $id ?>" method="post">
    <label for="first_name">Name:</label>
    <br>
    <input type="text" id="first_name" name="first_name" value="<?= $artist->first_name ?>">
    <br>
    <label for="last_name">Surname:</label>
    <br>
    <input type="text" id="last_name" name="last_name" value="<?= $artist->last_name ?>">
    <br>
    <label for="year_of_birth">Was born:</label>
    <br>
    <input type="text" id="year_of_birth" name="year_of_birth" value="<?= $artist->year_of_birth ?>">
    <br>
    <label for="genre">Genre:</label>
    <br>
    <input type="text" id="genre" name="genre" value="<?= $artist->genre ?>">
    <br>
    <br>
    <input type="submit" value="Submit changes">
</form>

