<?php
require_once "Dice.php";
require_once "DB.php";
require_once "DB_functions.php";

DB::connect('localhost', 'exercise', 'root', '');

$last_roll_dices_objects = [];

$dices_count = $_POST['dices'] ?? null;
$sides_count = $_POST['sides'] ?? null;

for ($i = 1; $i <= $dices_count; $i++) {
    $dice_object = null;
    switch ($sides_count) {
        case 4:
            $dice_object = new Dice4();
            break;
        case 6:
            $dice_object = new Dice6();
            break;
        case 10:
            $dice_object = new Dice10();
            break;
        case 20:
            $dice_object = new Dice20();
    }
    $last_roll_dices_objects[] = $dice_object;

    DB::insert('INSERT INTO dice_rolls (sides, result) VALUES( ?, ?)', [$dice_object->sides, $dice_object->result]);
}
function count_avarage_value_of_dice_type($type): float
{
    $array_x_sides_rolls_objects = select('SELECT result FROM dice_rolls WHERE sides = ?', [$type]);
    $array_x_sides_rolls_results = array_map(function ($obj) {
        return $obj->result;
    }, $array_x_sides_rolls_objects);

    return round(array_sum($array_x_sides_rolls_results) / count($array_x_sides_rolls_results), 5);
}
?>
<div>
    <p>Avarage result of 4 sided dice roll: <?= count_avarage_value_of_dice_type(4) ?></p>
    <p>Avarage result of 6 sided dice roll: <?= count_avarage_value_of_dice_type(6) ?></p>
    <p>Avarage result of 10 sided dice roll: <?= count_avarage_value_of_dice_type(10) ?></p>
    <p>Avarage result of 20 sided dice roll: <?= count_avarage_value_of_dice_type(20) ?></p>
</div>
<div>Last roll:
    <?php foreach ($last_roll_dices_objects as $dice) {
        echo $dice;
    } ?>
</div>
<form action="index.php" method="post">
    <label for="dices">Number of dices: </label>
    <input type="text" name="dices" id="dices">
    <label for="sides">Number of dice sides: </label>
    <select type="text" name="sides" id="sides">
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="10">10</option>
        <option value="20">20</option>
    </select>
    <button type="submit">Roll the dice</button>
</form>
