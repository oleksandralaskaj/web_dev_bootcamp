<?php ?>

@if(session()->has("success_message"))
    <p> {{session()->get("success_message")}}</p>
@endif
@if ($errors->any())
    <ul>
        @foreach($errors->all() as $error)
            <li>{{$error}}</li>
        @endforeach
    </ul>
@endif
<form action="{{route('movie-requests.store')}}" method="post"> Insert new request:
    @csrf

    <br>
    <label for="full-name">Full name</label>
    <br>
    <input type="text" name="full_name" id="full-name">
    <br>
    <label for="email">Email</label>
    <br>
    <input type="text" name="email" id="email">
    <br>
    <label for="movie-id">Movie id</label>
    <br>
    <input type="text" name="movie_id" id="movie-id">
    <br>
    <label for="movie-name">Movie title</label>
    <br>
    <input type="text" name="name" id="movie-name">
    <br>
    <label for="year">Year</label>
    <br>
    <input type="text" name="year" id="year">
    <br>
    <label for="movie-type-id">Type id</label>
    <br>
    <select name="movie_type_id" id="movie-type-id">
        @foreach($movie_types as $option)
            <option value="{{$option->id}}">{{$option->name}}</option>
        @endforeach
    </select>
    <br> <br>
    <button type="submit">Create new request</button>
</form>

