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
//$title = 'Inline PHP practice';
//$vehicles = [
//    'Bicycle' => 50,
//    'Car' => 150,
//    'Train' => 110
//];
//$messages = [
//    'Preparing to do some stuff...',
//    'Doing amazing stuff...',
//    'Stuff is done.'
//];
//
//?>
<!--<!doctype html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--    <meta charset="UTF-8">-->
<!--    <meta name="viewport"-->
<!--          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
<!--    <meta http-equiv="X-UA-Compatible" content="ie=edge">-->
<!--    <title>--><?php //= $title ?><!--</title>-->
<!--</head>-->
<!--<body>-->
<!--<h1>--><?php //= $title ?><!--</h1>-->
<!--<table>-->
<!--    <tr>-->
<!--        <th>Means of transport</th>-->
<!--        <th>Max. speed (km/h)</th>-->
<!--    <tr>-->
<!--        --><?php
//        foreach ($vehicles as $veh_name => $veh_speed) echo "<tr>
//        <td>$veh_name</td>
//        <td>$veh_speed</td>
//    </tr>"
//        ?>
<!--</table>-->
<?php //if ($messages) : ?>
<!--    <ul class="messages" style="padding: 1em; border: 1px solid black; margin: 1em;">-->
<!--        --><?php //foreach ($messages as $message) : ?>
<!--            <li>--><?php //= $message ?><!--</li>-->
<!--        --><?php //endforeach; ?>
<!--    </ul>-->
<?php //endif; ?>
<!--</body>-->
<!--</html>-->


<?php
$my_name = "Lisa";
$height = 1.8;
var_dump($height, $my_name);

///////////////////
function headline($text)
{
    echo "<h1>$text</h1>";
}

headline('My website');

?>
<br>
<?php

$inches = 12;
function inchesToCentimeters($in)
{
    return ($in * 2.54);
}

echo inchesToCentimeters($inches);
?>
<br>
<?php
$celsius = 100;
function celsiusToFahrenheit($c)
{
    return (9 / 5) * $c + 32;
}

$F = celsiusToFahrenheit($celsius);

echo $F;
?>
<br>
<?php
$temperature = 36.5;
function isHealthy($temp, $unit)
{
    if ($unit === "f") {
        $temp = ($temp - 32) / 1.8;
    };
    return $temp <= 37;
}

echo isHealthy($temperature, "c");
?>
<br>
<?php
$number = 42;
function evenOrOdd($n)
{
    return $n % 2 ? "odd" : "even";
}

echo evenOrOdd($number);
?>
<br>
<?php
$weekday = 'Monday';
function sayWeekday($day)
{
    return "Today is {$day}.";
}

echo sayWeekday($weekday);
?>
<br>
<?php
$year_of_birth = 1996;
function sayBirthday($y)
{
    $this_year = date('Y');
    $age = (int)$this_year - $y;
    return "I was born in {$y} so this year I am celebrating my {$age}. birthday.";
}

echo sayBirthday($year_of_birth);
?>
<br>
<?php

$assessHeight = 140;
function how_tall($h)
{
    switch ($h) {
        case $h >= 180:
            return "tall";
        case $h >= 160:
            return "average";
        case  $h < 160:
            return "small";
        default:
            return "you're ok";
    }
}

echo how_tall($assessHeight);
?>
<br>
<?php
function getLanguageUsage($lang)
{
    $lang = strtolower($lang);
    switch ($lang) {
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';
        case 'javascript':
            return 'clientside';
        default:
            return 'i don\'t know';
    }
}

?>
<p><?=
    getLanguageUsage("rubY") ?></p>
<p><?=
    getLanguageUsage("PHP") ?></p>
<p><?=
    getLanguageUsage("JavaScript") ?></p>
<p><?=
    getLanguageUsage("Python") ?></p>
<p><?=
    getLanguageUsage("Kotlin") ?></p>
<br>
<?php
$time_served = 0;
while ($time_served < 10) {
    echo "The prisoner has served {$time_served} years. ";
    $time_served++;
}
echo "<br>";
$time_served2 = 0;
do {
    echo "The prisoner has served {$time_served2} years. ";
    $time_served2++;
} while ($time_served2 < 10);
echo "<br>";
$time_served3 = 0;
for ($i = 10; $i >= $time_served3; $i--) {

    echo "The prisoner has {$i} more years to serve. ";
    if ($i > 5) {
        continue;
    }
    echo "Going to a parole hearing...";
    if ($i === 2) {
        echo "Paroled!";
        break;
    }
}
?>
<br>
<?php
$array = [];
for ($i = 1; $i <= 100; $i++) {
    $array[] = $i;
}

$string = "i am a simple string";

// Create a variable $arrayDouble containing the double of each value of $array
$arrayDouble = [];
for ($i = 0; $i < (count($array)); $i++) {
    $arrayDouble[] = 2 * $array[$i];
};
print_r($arrayDouble);

// Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array
$arrayEven = [];
$arrayOdd = [];
foreach ($array as $number) {
    $number % 2 ? $arrayOdd[] = $number : $arrayEven[] = $number;
}
print_r($arrayEven);
print_r($arrayOdd);

// Create a variable $arrayProduct containing the product of each numbers of $array
$arrayProduct = array_product($array);
print_r($arrayProduct);

// Create a variable $stringUpper containing the $string value in uppercase
$stringUpper =  strtoupper($string);
    print_r($stringUpper);

// Create a variable $stringFirstUp containing the $string value with the first character in uppercase
$stringFirstUp = ucfirst($string);
    print_r($stringFirstUp);

?>
