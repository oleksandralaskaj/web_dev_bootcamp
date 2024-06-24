<?php $students = [
    '1234'=> "Mike",
    '4567'=> "Sike",
    '7890'=> "Rike",
    ] ?>

  <?php  foreach($students as $student) : ?>
       <li>{$student}</li>
<?php endforeach?>


<!--Thare can be siple html outside php tag-->
<p>First hello form html</p>
<!--the most basic wat of including php-->
<?php
echo "Second hello form php";
?>
<!--usage of php inside thml tag-->
<p><?= "Third hello form php inside html" ?></p>
<!--shortest -->
<?php //= "loll" ?>
<!--declaration of variable looks the sname way as its usage-->
<?php
$my_variable = 'Fifth hello from variable';
echo $my_variable
?>
<!--how to declate function-->
<br>
<br>
<?php
$a = "/ top level variable";
echo $a; // Works fine
function foo($pram_a)
{
    $input = $pram_a . ', called form insede of the function';
    echo $input;
    $b = "/ variable inside of a function";
    echo $b; // Works fine
}

echo foo($a)
?>
<br>
<br>
<?php
function myTest()
{
    $result = 1 + 2;
    return "result of function is Foo" . $result;
}

echo myTest()
?>
<br><br>
<!--difining constats, available than everywere-->
<?php
const TEST_NUMBER1 = 28;
define('TEST_NUMBER2', 34);
echo "constatnt TEST_NUMBER1 is " . TEST_NUMBER1 . " and " . " constant TEST_NUMBER2 is " . TEST_NUMBER2
?>
<br><br>
<!--using established variables outside core php tag-->
<?php
$first_name = "Bruce";
$surname = "Wayne"
?>
First name: <?= $first_name ?> <br>
Surname: <?= $surname ?>
<br><br>
<?php
$year = 1996;
$height = 170;
?>
My birth year: <?= $year ?> <br>
My height: <?= $height ?>
<br><br>
<!--setting constatnt and printing it-->
<?php
const SERVER_SOFTWARE = 'Apache';
const MY_OS = "iOS";
echo 'This server is running on ' . SERVER_SOFTWARE . ".";
echo 'My operating system is ' . MY_OS . ".";
?>
<br>
<br>
/////////////////////////////////////////////////////////////////
<br>
<!--printing output by calling a function-->
<?php
$superstar = "global superstar Emma";
function print_hello()
{
    echo "Hello form function. ";
}

function greet($whom = "world")
{
    echo "Hello " . $whom . ". ";
}

function prepareText($name)
{
    global $superstar;
    $another_name = $superstar;
    return $name . " and " . $another_name;
}

function greeting($name)
{
    echo "Hello " . prepareText($name) . ". ";
}

function sayHelloCallback($prparetextcallback, $name)
{
    return "Hello from function with call back, that returned: " . $prparetextcallback($name);
}

?>
<p><?= print_hello() ?></p>
<p>Hello from function with parameter, this time we say: <?= greet("Carla"); ?></p>
<p>Hello from function with parameter, which we didn't pass, so this time we say: <?= greet(); ?></p>
<p>Hello from function which calls another function (with reference of dlobal value) from itself, so now we
    say: <?= greeting("Loren"); ?></p>
<p><?= sayHelloCallback("prepareText", "Lisa"); ?></p>
<br>
/////////////////////////////////////////////////////////////////
<br>
<!--arrays creation -->
<?php
$arr1 = [
    0,
    1,
    2,
    3
];
$arr2 = [
    "zero" => 0,
    "one" => 1,
    "two" => 2,
    "three" => 3
];
echo "/ position n. 2 in array without keys: " . $arr1[2];
echo "/ item in array with key 'two': " . $arr2["two"]
?>
<br>
<br>
<!--working with arrays-->
<?php
$arr2['four'] = 'four';
$arr2[] = 'five';
echo "/ Here is display of array content using for each loop: ";
foreach ($arr1 as $element) {
    echo $element;
}

echo " / Newly added value to the array under key 'four': " . $arr2['four'] . ". After thet we added item 'five' withou key, so now it lives on key [0]. The whole array looks like: ";
var_dump($arr2);
?>
<!--array_key_exists for check if elemnat existst, if we need it allso not to be null, we will use isset-->
<br>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
function element($tag = "a", $inner_text = "default text in case you forget to put some", $class_name = "")
{
    return "<{$tag} class = '{$class_name}'> {$inner_text}</{$tag}>";
}

function convert_weight($amout, $unit)
{
    if ($unit === "lb") {
        return $amout * 0.45359237;
    } else if ($unit === "kg" || $unit === "") {
        return $amout * 2.20462262;
    } else {
        return "Ugh, brother ugh. What's that?";
    }
}

?>
<p>Thanks to that function we can now display any html element includig its inner text and add a class to it. So now we
    get: <?= element('p', 'what what?', 'class="foo"') ?> paragraph element with class "foo" and inner text.</p>
<p>So now we've got function that recalculate weigth between kilos and pounds.</p>
<p> 20lb = <?= convert_weight(20, "lb") ?>kg</p>
<p> 20kg = <?= convert_weight(20, "kg") ?>lb</p>
<p> if we don't provide function with adequate input we get: <?= convert_weight(20, "lol") ?></p>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$cars_i_want = [];
$cars_i_want[] = "Aston Martin";
$cars_i_want[] = "Bugatti";
$cars_i_want[] = "Ferrari";
$cars_i_want[] = "Lamborghini";
$cars_i_want[] = "Maserati";
$cars_i_want[] = "Mercedes";
$cars_i_want[] = "Porsche";
$cars_i_want[] = "Skoda";
$cars_i_want[4] = "Smart";
var_dump($cars_i_want);
?>
<br>
For myself I would buy <?= $cars_i_want[1] ?>.
<br>
For my spouse I would buy <?= $cars_i_want[3] ?>.
<br>
Each of my kids will get a <?= $cars_i_want[4] ?>.<br>
<ul>All cars, that are on the list:
    <?php foreach ($cars_i_want as $car) echo "<li>{$car}</li>"; ?>
</ul>
<?php
function printCarsWithValues($arr)
{
    foreach ($arr as $model => $value) echo "The price of {$model} is {$value} CZK.<br>";
}

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];
printCarsWithValues($car_prices);
?>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$students[0] = "Thomas";
$students[1] = "Kathy";
$students[2] = "Martin";
$students[3] = "Bernard";
echo "Let's welcome very student!";
function welcome_every_student($arr)
{
    foreach ($arr as $item => $name) echo "<p>Say hello to {$name}</p>";
}

welcome_every_student($students)
?>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$divisible_by_seven = [];
for ($i = 0; $i <= 100; $i++) {
    if ($i % 7 === 0) {
        $divisible_by_seven[] = $i;
    }
}
echo "Numbers form 1 to 100, that are divisible by 7 are: ";
foreach ($divisible_by_seven as $index => $number) {
    if ($index !== (count($divisible_by_seven) - 1)) {
        echo $number . ", ";
    } else {
        echo "and " . $number;
    }
}
?>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$cast_crew = [];
$cast_crew["cast"] = [];
$cast_crew["cast"][] = 'John David Washington';
$cast_crew["cast"][] = 'Robert Pattinson';
$cast_crew["cast"][] = 'Elizabeth Debicki';
$cast_crew['director'] = [];
$cast_crew["director"][] = 'Christopher Nolan';

function print_cast($arr)
{
    foreach ($arr as $contributors) {
        foreach ($contributors as $member) {
            echo "<li>$member</li>";
        }
    }
}

$people = [
    [
        'name' => 'John David Washington',
        'job' => 'actor'
    ],
    [
        'name' => 'Robert Pattinson',
        'job' => 'actor'
    ],
    [
        'name' => 'Christopher Nolan',
        'job' => 'director'
    ],
    [
        'name' => 'Steven Spielberg',
        'job' => 'director'
    ],
    [
        'name' => 'Michael Caine',
        'job' => 'actor'
    ]
];
?>
<ul>Cast crew members: <?= print_cast($cast_crew) ?></ul>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$people = [
    [
        'name' => 'John David Washington',
        'job' => 'actor'
    ],
    [
        'name' => 'Robert Pattinson',
        'job' => 'actor'
    ],
    [
        'name' => 'Christopher Nolan',
        'job' => 'director'
    ],
    [
        'name' => 'Steven Spielberg',
        'job' => 'director'
    ],
    [
        'name' => 'Michael Caine',
        'job' => 'actor'
    ]
];
$cast_crew2 = [
    "actors" => [],
    "directors" => []
];
foreach ($people as $person) {
    if ($person["job"] === "actor") {
        $cast_crew2["actors"][] = $person["name"];
    } else {
        $cast_crew2["directors"][] = $person["name"];
    }
}
function print_actors()
{
    global $cast_crew2;
    foreach ($cast_crew2["actors"] as $actor) echo "<li>{$actor}</li>";
}

function print_directors()
{
    global $cast_crew2;
    foreach ($cast_crew2["directors"] as $director) echo "<li>{$director}</li>";
}

?>
<ul>Actors: <?= print_actors() ?></ul>
<ul>Directors: <?= print_directors() ?></ul>
<br>
/////////////////////////////////////////////////////////////////
<br>
<?php
$default_values = [
    'title' => null,
    'year' => null,
    'rating' => null,
    'duration' => null,
];
$movie = [
    'title' => "Tenet",
    'year' => 2020,
    'rating' => 7.5,
    'duration' => 150,
];
$movie = array_merge($default_values, $movie);
$movies = [
    [
        'title' => 'Dunkerk',
        'year' => 2017,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Tenet',
        'year' => 2020,
        'pg' => 13
    ],
    [
        'title' => 'Interstellar',
        'year' => 2014,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Inception',
        'year' => 2010,
        'pg' => 13,
        'favourite' => true
    ],
    [
        'title' => 'The Prestige',
        'year' => 2006,
        'pg' => 13
    ],
    [
        'title' => 'Batman begins',
        'year' => 2005,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight',
        'year' => 2008,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight Rises',
        'year' => 2012,
        'pg' => 12,
        'favourite' => false
    ],
];
$favorit_movies = [];
foreach ($movies as $movie) {
    if (isset($movie['favourite'])) {
        $favorit_movies[] = $movie["title"];
    }
}
$movies2 = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight',
    '12 angry men',
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];
function list_all_movies()
{
    global $movies2;
    foreach ($movies2 as $movie) echo "<li>$movie;</li>";
}

sort($movies2);

$movie_names = [
    'tt0468569' => 'Dark Knight',
    'tt0050083' => '12 angry men',
    'tt0108052' => 'Schindler\'s list',
    'tt0110912' => 'Pulp fiction',
    'tt0167260' => 'Lord of the Rings: Return of the King',
    'tt0111161' => 'The Shawshank redemption',
    'tt0071562' => 'The Godfather II',
    'tt0060196' => 'The good, the bad and the ugly',
    'tt0137523' => 'Fight club',
    'tt0068646' => 'The Godfather',
];
$movie_ratings = [
    'tt0111161' => 9.2,
    'tt0068646' => 9.2,
    'tt0071562' => 9.0,
    'tt0468569' => 8.9,
    'tt0050083' => 8.9,
    'tt0108052' => 8.9,
    'tt0110912' => 8.9,
    'tt0167260' => 8.9,
    'tt0060196' => 8.9,
    'tt0137523' => 8.8
];
function list_movies_names_and_ratings()
{
    global $movie_ratings;
    global $movie_names;
    foreach ($movie_names as $movie_code => $movie_name) {
        echo "<li>Movie '{$movie_name}' has a rating of {$movie_ratings[$movie_code]};</li>";
    };
}

$sorted_by_rating = $movie_ratings;
asort($sorted_by_rating);

function dipslay_soreted_movies_by_rating(&$ratings, &$names)
{
    foreach ($ratings as $movie_id => $movie_rating) echo "<li>'$names[$movie_id]' has a rating of $movie_rating </li>";
}

$movies_with_id = [];
foreach ($movie_names as $movie_id => $movie_name) {
    $movies_with_id[$movie_id] = ["name" => $movie_name, "rating" => $movie_ratings[$movie_id]];
}

$sorted_movies_with_id = $movies_with_id;
uasort($sorted_movies_with_id, function($a, $b) {
    if ($a['rating'] > $b['rating']) {
        return -1;
    }
    if ($a['rating'] == $b['rating']) {
        if ($a['name'] < $b['name']) {
            return -1;
        }
        if ($a['name'] == $b['name']) {
            return 0;
        }
        if ($a['name'] > $b['name']) {
            return 1;
        }
    }
    if ($a['rating'] < $b['rating']) {
        return 1;
    }
});
var_dump($sorted_movies_with_id);
?>
<ol>All the films: <?= list_all_movies(); ?> </ol>
<ul>Movie names with ratings: <?= list_movies_names_and_ratings() ?></ul>
<ol>Moviesn sorted by ratings: <?= dipslay_soreted_movies_by_rating($sorted_by_rating, $movie_names) ?></ol>
<br>
/////////////////////////////////////////////////////////////////
<br>