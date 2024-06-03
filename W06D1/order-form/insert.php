<?php
require_once "DBBlackbox.php";
require_once "Order.php";

$order = new Order();
$order->name = $_POST['name'] ?? null;
$order->phone = $_POST['phone_number'] ?? null;
$order->adress = $_POST['adress'] ?? null;
$order->email = $_POST['email'] ?? null;
$order->description = $_POST['description'] ?? null;
$order->quantity = $_POST['quantity'] ?? null;
$order->order_notes = $_POST['order_notes'] ?? null;

$id = insert($order);
echo "new inserted order " . $id;