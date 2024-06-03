<?php
require "DBBlackbox.php";
require "./Audio-track.php";

$track1 = new AudioTrack();

$track1->author = "author 1 name ";
$track1->title = "title of track 1";

$track2 = new AudioTrack();
$track2->author = "author 2 name ";
$track2->title = "title of track 2";

$id1 = insert($track1);
$id2 = insert($track2);
echo "A new track has been inserted with id " . $id1;
echo "A new track has been inserted with id " . $id2;