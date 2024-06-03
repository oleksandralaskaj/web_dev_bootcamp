<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$artist = new Artist();
?>

<h1>CREATE NEW ARTIST</h1>
<form action="insert.php" method="post">
    <label for="first_name">Name:</label>
    <br>
    <input type="text" id="first_name" name="first_name">
    <br>
    <label for="last_name">Surname:</label>
    <br>
    <input type="text" id="last_name" name="last_name">
    <br>
    <label for="year_of_birth">Was born:</label>
    <br>
    <input type="text" id="year_of_birth" name="year_of_birth">
    <br>
    <label for="genre">Genre:</label>
    <br>
    <input type="text" id="genre" name="genre">
    <br>
    <br>
    <input type="submit" value="Create new artist">
</form>

