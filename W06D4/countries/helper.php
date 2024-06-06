<?php
require_once "bootstrap.php";

function session()
{
    return Session::instance();
}
function old($key, $default = null)
{
    return session()->old($key, $default);
}

DB::connect("localhost", 'world', 'root', '');

$session = session();