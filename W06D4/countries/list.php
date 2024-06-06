<?php
require_once "bootstrap.php";

$continents = DB::select('
    SELECT *
    FROM `continents`', [], 'Continent');

?>

<ol>Continents:
    <?php foreach ($continents as $continent): ?>
        <li><?= $continent->name ?> <a href="edit.php?id=<?= $continent->id ?>">
                <button>Edit</button>
            </a></li>
    <?php endforeach; ?>
</ol>

<a href="edit.php">Create a new continent</a>