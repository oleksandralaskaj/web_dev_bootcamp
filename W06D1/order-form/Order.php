<?php

class Order
{
    //////// user details
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $adress = null;
    public ?string $email = null;
    /////// order details


    public ?int $id = null;
    public ?string $description = null;
    public ?int $quantity = null;
    public ?float $price = null;
    public ?float $tota_price = null;
    public ?string $order_notes = null;

    public function __construct()
    {

    }
}