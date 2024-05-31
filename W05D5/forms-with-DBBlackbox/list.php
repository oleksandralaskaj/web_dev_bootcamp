<?php
require_once "DBBlackbox.php";

$current_record = select();
var_dump($current_record);
?>

<ul>Existing records:
    <?php foreach ($current_record as $film)  : ?>
        <li><?= $film["title"]; ?> <a href = "edit-form.php?id=<?= $film["id"]; ?>">Edit</a></li>
    <?php endforeach ?>
</ul>
<a href = "create-form.php" >Create new record</a>