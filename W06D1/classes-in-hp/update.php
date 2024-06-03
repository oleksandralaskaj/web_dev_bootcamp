<?php
require "DBBlackbox.php";
require "./Audio-track.php";

$track = find(1);
echo $track;
$track->title = "new title";
update(1, $track);