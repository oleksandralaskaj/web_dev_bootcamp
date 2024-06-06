<?php
require_once "bootstrap.php";

$id = $_GET['id'] ?? null;
$data = DB::select('
    SELECT *
    FROM `continents` WHERE id=?',
    [$id], 'Continent');
$continent = $id ? $data[0] : new Continent();

$button_text = $id ? "Submit changes" : "Add new continent";
$h1 = $id ? "Edit continent {$continent->name}" : "Add new continent";
$url = "store.php" . ($id ? "?id={$id}" : "");

?>
<p><?=$success_messaage = session()->get('success_message')?></p>
<h1><?= $h1?></h1>
<form action="<?= $url ?>" method="post">
    <label for="name">Name:</label>
    <input id="name" type="text" name='name' value="<?= $continent->name; ?>">
    <button type="submit"><?= $button_text ?></button>
</form>
<a href="list.php">Go to list</a>
