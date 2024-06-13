<?php ?>
@if(session()->has("success_message"))
    <p> {{session()->get("success_message")}}</p>
@endif

<table>
    <thead>
    <th>id</th>
    <th>Title</th>
    <th>Year</th>
    <th>Rating</th>
    <th>Edit Buttons</th>
    </thead>
    <tbody>
    @foreach($movies_list as $movie)
        <tr>
            <td>{{$movie->id}}</td>
            <td>{{$movie->name}}</td>
            <td>{{$movie->year}}</td>
            <td>{{$movie->rating}}</td>
            <td><a href="{{route('movie.edit', $movie->id)}}">
                    <button>Edit</button>
                </a></td>
        </tr>
    @endforeach
    </tbody>
</table>

