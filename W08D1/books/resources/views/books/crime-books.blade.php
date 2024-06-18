@extends('layouts.main', [
    'current_page' => 'crime'
])
@section('content')
    <h1>Crime books</h1>
    <div class ="books-list">
    @foreach($books as $book)
        <div class="book">
            <img src="{{$book->image}}" alt="cover">
            <p>"{{$book->title}}" by {{$book->authors->pluck('name')->join(', ')}}</p>
        </div>
    @endforeach
@endsection
