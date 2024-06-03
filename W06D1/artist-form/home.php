<?php
require_once "DBBlackbox.php";
require_once "Artist.php";

$all_artists = select(null, null, true);
?>

<?php foreach ($all_artists as $artist) : ?>
    <p><?= $artist->first_name ?> <?= $artist->last_name ?> born <?= $artist->year_of_birth ?> working in genre
        of <?= $artist->genre ?></p>
    <a href="edit.php?id=<?= $artist->id ?>"><button>Edit artist</button></a>
<?php endforeach; ?>
