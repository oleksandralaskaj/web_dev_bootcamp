<?php
require_once "Musician.php";
require_once "Album.php";
require_once "Song.php";

$evanescense = new Musician("Evanescence", 1995, 'Rock', "https://www.evanescence.com/wp-content/uploads/2022/08/Evanescence_2_14083_Color-crop.jpg");


$sweet_sacrifice = new Song("Sweet Sacrifice", 2008, 185);
$call_me_when_your_sober = new Song("Call me when you're sober", 2008, 215);
$weight_of_the_world = new Song("Weight of the World", 2008, 217);
$lithium = new Song("Lithium", 2008, 224);

$the_open_doors = new Album ("The Opene Doors", "Evanescence", 2008);
$the_open_doors->addTrack($sweet_sacrifice);
$the_open_doors->addTrack($call_me_when_your_sober);
$the_open_doors->addTrack($weight_of_the_world);
$the_open_doors->addTrack($lithium);
$the_open_doors->calculateNumberOfTracts();
echo $the_open_doors->calculateLength();

$evanescense->addNewAlbum($the_open_doors);



include 'view.php';