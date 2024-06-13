<h1>Movie requests list</h1>
@if(session()->has("success_message"))
    <p> {{session()->get("success_message")}}</p>
@endif
<table>
    <thead>
    <th>#</th>
    <th>Full name</th>
    <th>Email</th>
    <th>Movie name</th>
    <th>Movie type</th>
    <th>Movie year</th>
    <th>Edit link</th>
    </thead>
    <tbody>
    @foreach($movie_requests as $request)
        <tr>
            <td>{{$request->id}}</td>
            <td>{{$request->full_name}}</td>
            <td>{{$request->email}}</td>
            <td>{{$request->name}}</td>
            <td>{{$request->movieType->name}}</td>
            <td>{{$request->year}}</td>
            <td><a href="{{route('movies-requests.edit', $request->id)}}">Edit</a></td>
        </tr>
    @endforeach
    </tbody>
</table>
