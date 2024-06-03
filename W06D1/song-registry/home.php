<?php
require_once "DBBlackbox.php";
require_once "Song.php";

$songs= select(null, null, true);

?>

<?php foreach ($songs as $song) : ?>
<p>
    <?= $song->id?>) <?= $song->name?> by <?= $song->author?> (<?= $song->length?>s long) from album "<?= $song->author?>";
</p>
    <a href="./edit.php?id=<?= $song->id?>"> <input type="button" value="Edit this entry"> </a>
<?php endforeach;?>