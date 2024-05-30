<?php

$tasks = [
    'Understand PHP\'s role',
    'Learn PHP',
    'Get a PHP job',
    'Profit!'
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server-side rendered document</title>
</head>
<body>

<h1>The tasks to do at <?= date('G:i') ?></h1>

<ol>
    <?php foreach ($tasks as $task) : ?>
        <li>
            <?= $task ?>
        </li>
    <?php endforeach; ?>
</ol>

</body>
</html>