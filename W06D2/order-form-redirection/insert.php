<?php
require_once "Order.php";
require_once "bootstrap.php";


$session = Session::instance();

$order = new Order();
$order->name = $_POST['name'] ?? null;
$order->phone = $_POST['phone'] ?? null;
$order->adress = $_POST['adress'] ?? null;
$order->email = $_POST['email'] ?? null;
$order->description = $_POST['description'] ?? null;
$order->quantity = $_POST['quantity'] ?? null;
$order->order_notes = $_POST['order_notes'] ?? null;

$id = insert($order);

session()->put("message", "Order with id {$id} was inserted.");
header('Location: /W06D2/order-form-redirection/edit.php?id='.$id);
exit();
