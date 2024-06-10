<?php
?>

<ol>50 Top rated films:
    @foreach ($films as $film)
    <li> {{$film->name}}</li>
    @endforeach
</ol>
