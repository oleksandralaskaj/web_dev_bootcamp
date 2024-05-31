<?php
require_once "DBBlackbox.php";
$data = $_POST;
$id = insert($data);
echo "The movie ".$data['title']." was successfully saved into DB with ID ".$id."<br>";
echo "<a href='list.php'>Home</a>";
