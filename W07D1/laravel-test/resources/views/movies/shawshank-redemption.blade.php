<?php
?>

<h1>The Shawshank Redemption</h1>
<ul>
    @foreach ($film as $key=>$value)
    <li>{{$key}}: {{$value}}</li>
    @endforeach
</ul>
