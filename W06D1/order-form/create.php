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