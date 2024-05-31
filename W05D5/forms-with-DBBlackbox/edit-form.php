<?php
require_once "DBBlackbox.php";
var_dump($_GET);
$record_id = $_GET['id'] ?? null;
echo $record_id;
$exiting_record = find($record_id);
if (!isset($exiting_record)) : ?>
    <h2>Error</h2>
    <h3>Record not found in the database</h3>
<?php else : ?>
    <form action="handle-edit.php" method="post">
        <!-- extra hidden input to identify which record to update -->
        <input type="hidden" name="id" value=<?= $exiting_record['id'] ?>>
        Title: <input type="text" name="title" value=<?= $exiting_record['title'] ?>><br>
        Year: <input type="number" name="year" value=<?= $exiting_record['year'] ?>><br>
        <button type="submit">Update</button>
    </form>
<?php endif; ?>
