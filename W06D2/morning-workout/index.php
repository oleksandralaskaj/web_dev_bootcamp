<?php
require_once "Computer.php";

$my_computer = new Computer();
$my_computer->is_portable = true;
$my_computer->status = "on";
$my_computer->model = "MacBook Air 13";
$my_computer->operating_system = "iOS Sonoma 14.5";

?>

<h1>My computer</h1>
<table>
    <tr>
        <th>Model:</th>
        <td><?= $my_computer->model ?></td>
    </tr>
    <tr>
        <th>OS:</th>
        <td><?= $my_computer->operating_system ?></td>
    </tr>
    <tr>
        <th>Portable:</th>
        <?php if ($my_computer->is_portable) : ?>
            <td> yes</td>
        <?php else: ?>
            <td> no</td>
        <?php endif ?>
    </tr>
    <tr>
        <th>Status:</th>
        <td>switched <?= $my_computer->status ?></td>
    </tr>
</table>