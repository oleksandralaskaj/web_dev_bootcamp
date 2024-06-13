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
@if($movie_request->id)
    <h1>Edit request</h1>
    <form action="{{route('movie-requests.store', $movie_request->id)}}" method="post">
        @else
            <h1>New request</h1>
            <form action="{{route('movie-requests.store')}}" method="post">
                @endif
                @csrf

                <br>
                <label for="full-name">Full name</label>
                <br>
                <input type="text" name="full_name" id="full-name"
                       value="{{old("full_name", $movie_request -> full_name)}}">
                <br>
                <label for="email">Email</label>
                <br>
                <input type="text" name="email" id="email" value="{{old("email", $movie_request -> email)}}">
                <br>
                <label for="movie-id">Movie id</label>
                <br>
                <input type="text" name="movie_id" id="movie-id"
                       value="{{old("movie_id", $movie_request -> movie_id)}}">
                <br>
                <label for="movie-name">Movie title</label>
                <br>
                <input type="text" name="name" id="movie-name" value="{{old("name", $movie_request -> name)}}">
                <br>
                <label for="year">Year</label>
                <br>
                <input type="text" name="year" id="year" value="{{old("year", $movie_request -> year)}}">
                <br>
                <label for="movie-type-id">Type id</label>
                <br>
                <select name="movie_type_id" id="movie-type-id">
                    @foreach($movie_types as $option)
                        <option
                            value="{{$option->id}}" {{old('movie_type_id', $movie_request -> movie_type_id == $option->id? "select": "")}}
                        >{{$option->name}}</option>
                    @endforeach
                </select>
                <br> <br>
                @if($movie_request->id)
                    <button type="submit">Submit changes</button>
                @else
                    <button type="submit">Create new request</button>
                @endif
            </form>

