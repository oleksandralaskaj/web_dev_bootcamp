<?php
//using static as class to start session
//require_once "Session.php";
//$session = Session::instance();

//using superglobal to start session
//$_SESSION['start'] = date('H:i:s');

//use helper function file to start session
//require_once "helper.php";
//$session = session();

//usisng dependencies included in bootstrap file
require_once "bootstrap.php";
$session = session();
var_dump($session);

?>


    <form action="insert.php" method="post">
        <h2>CUSTOMER INFORMATION</h2>
        Name of user: <br>
        <input type="text" name="name">
        <br>Phone number: <br>
        <input type="text" name="phone">
        <br>Email adress: <br>
        <input type="text" name="email">
        <br> Adress: <br>
        <input type="text" name="adress">

        <h2>ORDER INFORMATION</h2>
        Description: <br>
        <input type="text" name="description">
        <br>Quantity: <br>
        <input type="number" name="quantity">
        <br>Order notes: <br>
        <input type="text" name="order_notes">
        <br>
        <button type="submit">Submit order</button>
    </form>
<?php