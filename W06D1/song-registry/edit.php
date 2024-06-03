<?php
require_once "DBBlackbox.php";
require_once "Song.php";

$id = $_GET["id"];
$song = find($id, 'Song')
?>

<form action="update.php?id=<?= $id ?>" method="post">

    Name:<br>
    <input type="text" name="name" value="<?= htmlspecialchars((string)$song->name) ?>"><br>
    <br>

    Author:<br>
    <input type="text" name="author" value="<?= htmlspecialchars((string)$song->author) ?>"><br>
    <br>

    Length:<br>
    <input type="number" name="length" value="<?= htmlspecialchars((string)$song->length) ?>"> seconds<br>
    <br>

    Album:<br>
    <input type="text" name="album" value="<?= htmlspecialchars((string)$song->album) ?>"><br>
    <br>

    <button type="submit">Save</button>

</form>
