<?php
require_once "DBBlackbox.php";
require_once "Order.php";

$order = find($_GET['id'], 'Order');

$order->name = $_POST['name'] ?? $order->name;
$order->phone = $_POST['phone_number'] ?? $order->phone;
$order->adress = $_POST['adress'] ?? $order->adress;
$order->email = $_POST['email'] ?? $order->email;

$order->description = $_POST['description'] ?? null;
$order->quantity = $_POST['quantity'] ?? null;
$order->order_notes = $_POST['order_notes'] ?? null;

update($_GET['id'], $order);

echo "order with id " . $_GET['id'] . " has been updated";