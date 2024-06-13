<?php ?>

@if ($errors->any())
    <ul>
        @foreach($errors->all() as $error)
            <li>{{$error}}</li>
        @endforeach
    </ul>
@endif

Edit movie "{{$movie->name}}"
<br><br>
<form action="{{route('movie.save',  $movie->id)}}" method="post">
    @csrf
    id: {{$movie->id}}
    <br>
    Name: <br>
    <input type="text" value="{{$movie->name}}" name="name"><br>
    Year: <br>
    <input type="text" value="{{$movie->year}}" name ='year'><br>
    Rating: <br>
    <input type="text" value="{{$movie->rating}}" name="rating"><br>
    <br>
    <button type="submit">Submit changes</button>
</form>

