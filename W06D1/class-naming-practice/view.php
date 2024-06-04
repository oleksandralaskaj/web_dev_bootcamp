<?php

require_once "Musician.php";
require_once "Song.php";
global $evanescense;
$tracks = $evanescense->getProperty("albums")[0]->tracks;
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Musician</title>
</head>
<body>
<h3><?= $evanescense->getProperty("name") ?> (<?= $evanescense->getProperty("year_became_known") ?>)</h3>
<ul>Songs:
    <?php foreach ($tracks as $song) : ?>
        <li><?= $song->title; ?> (<?= $song->year_of_release; ?>)</li>
    <?php endforeach; ?>
</ul>
</body>
</html>