<?php
require_once 'Song.php';
require_once "DBBlackbox.php";

function start_session()
{
    return $_SESSION['start'] = date('H:i:s');
}
