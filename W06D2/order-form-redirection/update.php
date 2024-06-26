<?php
require_once "Order.php";
require_once "bootstrap.php";

$session =session();
$session->flashRequest();
$validation_errors = [];
//all validations
if (empty($_POST['name'])) {
    $validation_errors[] = 'Please insert valid name.';
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $validation_errors[] = 'Please insert valid email adress.';
}

//redirect if there are nay errors
if(!empty( $validation_errors)){
    $_SESSION['validation_massages'] = $validation_errors;
    header('Location: /W06D2/order-form-redirection/edit.php?id=' . $_GET['id']);
    die();
}

$id = $_GET['id'];
$order = find($id, 'Order');

$order->name = $_POST['name'] ?? $order->name;
$order->phone = $_POST['phone_number'] ?? $order->phone;
$order->email = $_POST['email'] ?? $order->email;
$order->adress = $_POST['adress'] ?? $order->adress;

$order->description = $_POST['description'] ?? null;
$order->quantity = $_POST['quantity'] ?? null;
$order->order_notes = $_POST['order_notes'] ?? null;

update($id, $order);

//$_SESSION['message'] = 'Order with id ' . $id . ' was updated.';
session()->flash("message", "Order with id {$id} was updated.");

header('Location: /W06D2/order-form-redirection/edit.php?id=' . $id);
exit();