@extends('layouts.main', [
    'current_page' => 'author.create'
])
@section('content')

    <form action="{{route('admin.author.save')}}" method="post">
        @csrf
        Slug: <br><input type="text" name="slug"><br>
        Name: <br><input type="text" name="name"><br>
        Bio: <br><textarea name="bio"></textarea><br>
        <button type="submit">Add new author</button>
    </form>

@endsection
