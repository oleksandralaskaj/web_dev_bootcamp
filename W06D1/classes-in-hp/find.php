<?php
require "DBBlackbox.php";
require "./Audio-track.php";

$track = find(1, 'AudioTrack');
var_dump($track);