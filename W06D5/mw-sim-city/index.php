<?php

require_once "DB.php";
require_once "DB_functions.php";

require_once "Country.php";

session_start();
$message= $_SESSION['message'];
session_destroy();

$success = DB::connect('localhost', 'world', 'root', '');

// replace this fix array by countries retrieved from the world database
$countries = DB::select("SELECT id, name FROM countries LIMIT 10 OFFSET 50", [], 'Country');
?>

<body>
    <h1>SimCity 4000</h1>
    <p><?= $message?></p>
    <form action="build_city.php" method="post">
        <label for="name">City name: </label><input type="text" name="name" id="name"><br>
        <label for="country_id">Country: </label><select name="country_id" id="country_id">
        <?php foreach ($countries as $country) : ?>
            <option value="<?= $country->id ?>"><?= $country->name ?></option>
        <?php endforeach; ?>
        </select><br>
        <label for="district">District: </label><input type="text" name="district" id="district"><br>
        <label for="population">Population: </label><input type="text" name="population" id="population"><br>
        <button>BUILD!</button>
    </form>
</body>

