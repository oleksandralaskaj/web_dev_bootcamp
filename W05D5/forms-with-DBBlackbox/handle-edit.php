<?php
require_once "DBBlackbox.php";
// the request should contain exactly what we need, so we can use it directly
$data = $_POST;

$id_to_update = $_POST['id'];
update($id_to_update, $data);

echo "The movie ".$data['id']." was successfully updated.<br>";
echo "<a href='list.php'>Home</a>";


