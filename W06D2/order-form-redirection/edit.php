<?php
require_once "Order.php";
require_once "bootstrap.php";

$session = Session::instance();

$id = $_GET['id'];
$order = find($id, 'Order');

$message = session()->get("message") ?? null;
?>

    <p><?= $message ?></p>
    <form action="update.php?id=<?= $id ?>" method="post">
        <h2>CUSTOMER INFORMATION</h2>
        Name of user: <br>
        <input type="text" name="name" value="<?= $order->name ?>">
        <br>Phone number: <br>
        <input type="text" name="phone" value="<?= $order->phone ?>">
        <br>Email adress: <br>
        <input type="text" name="email" value="<?= $order->email ?>">
        <br> Adress: <br>
        <input type="text" name="adress" value="<?= $order->adress ?>">

        <h2>ORDER INFORMATION</h2>
        Description: <br>
        <input type="text" name="description" value="<?= $order->description ?>">
        <br>Quantity: <br>
        <input type="number" name="quantity" value="<?= $order->quantity ?>">
        <br>Order notes: <br>
        <input type="text" name="order_notes" value="<?= $order->order_notes ?>">
        <br>
        <button type="submit">Save changes</button>
    </form>


<?php





