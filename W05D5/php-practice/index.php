<?php
//// is the current user administrator?
//$user_is_admin = false;
//?>
<!---->
<!--<ul class="menu">-->
<!--    <li><a href="#">Home</a></li>-->
<!--    <li><a href="#">Eshop</a></li>-->
<!--    <li><a href="#">Contact</a></li>-->
<!--    --><?php // if ($user_is_admin) :?>
<!--    <li><a href="#">Link just for administrators</a></li>-->
<!--    <li><a href="#">Another link just for administrators</a></li>-->
<!--    --><?php //endif;?>
<!--</ul>-->

<?php
$title = 'Inline PHP practice';
$vehicles = [
    'Bicycle' => 50,
    'Car' => 150,
    'Train' => 110
];
$messages = [
    'Preparing to do some stuff...',
    'Doing amazing stuff...',
    'Stuff is done.'
];

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $title ?></title>
</head>
<body>
<h1><?= $title ?></h1>
<table>
    <tr>
        <th>Means of transport</th>
        <th>Max. speed (km/h)</th>
    <tr>
        <?php
        foreach ($vehicles as $veh_name => $veh_speed) echo "<tr>
        <td>$veh_name</td>
        <td>$veh_speed</td>
    </tr>"
        ?>
</table>
<?php if ($messages) : ?>
    <ul class="messages" style="padding: 1em; border: 1px solid black; margin: 1em;">
        <?php foreach ($messages as $message) : ?>
            <li><?= $message ?></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>
</body>
</html>


