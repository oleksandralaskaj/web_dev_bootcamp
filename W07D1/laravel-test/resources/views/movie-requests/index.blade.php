<h1>Movie requests list</h1>

<table>
    <thead>
    <th>#</th>
    <th>Full name</th>
    <th>Email</th>
    <th>Movie name</th>
    <th>Movie type</th>
    <th>Movie year</th>
    </thead>
    <tbody>
    @foreach($movie_request as $request)
        <tr>
            <td>{{$request->id}}</td>
            <td>{{$request->full_name}}</td>
            <td>{{$request->email}}</td>
            <td>{{$request->name}}</td>
            <td>{{$request->movieType->name}}</td>
            <td>{{$request->year}}</td>
        </tr>
    @endforeach
    </tbody>
</table>
