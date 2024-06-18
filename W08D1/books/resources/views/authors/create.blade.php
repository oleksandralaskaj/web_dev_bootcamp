@extends('layouts.main', [
    'current_page' => 'authors.create'
])
@section('content')
    <h1>Add new author</h1>
    <form action="{{route('admin.authors.store')}}" method="post">
        @csrf
        Slug: <br><input type="text" name="slug"><br>
        Name: <br><input type="text" name="name"><br>
        Bio: <br><textarea name="bio"></textarea><br>
        <button type="submit">Add new author</button>
    </form>

@endsection
