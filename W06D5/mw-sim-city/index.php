<?php

require_once "DB.php";
require_once "DB_functions.php";

require_once "Country.php";

$success = DB::connect('localhost', 'world', 'root', '');

// replace this fix array by countries retrieved from the world database
$countries = [
    [
        'id' => 5,
        'name' => 'Albania',
    ],
    [
        'id' => 23,
        'name' => 'Bulgaria',
    ],
    [
        'id' => 138,
        'name' => 'Macedonia',
    ],
    [
        'id' => 216,
        'name' => 'Turkey',
    ],
];

?>

<body>
    <h1>SimCity 4000</h1>

    <form action="build_city.php" method="post">
        <label for="name">City name: </label><input type="text" name="name" id="name"><br>
        <label for="country_id">Country: </label><select name="country_id" id="country_id">
        <?php foreach ($countries as $country) : ?>
            <option value="<?= $country["id"] ?>"><?= $country["name"] ?></option>
        <?php endforeach; ?>
        </select><br>
        <label for="district">District: </label><input type="text" name="district" id="district"><br>
        <label for="population">Population: </label><input type="text" name="population" id="population"><br>
        <button>BUILD!</button>
    </form>
</body>

