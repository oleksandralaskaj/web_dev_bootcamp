<?php ?>

Edit movie "{{$movie->name}}"
<br><br>
<form action="{{route('movie.save'}}" method="post">
    @csrf
    @method('put')
    id: {{$movie->id}}
    <br>
    Name: <br>
    <input type="text" value="{{$movie->name}}"><br>
    Year: <br>
    <input type="text" value="{{$movie->year}}"><br>
    Rating: <br>
    <input type="text" value="{{$movie->name}}"><br>
    <br>
    <button type="submit">Submit changes</button>
</form>

